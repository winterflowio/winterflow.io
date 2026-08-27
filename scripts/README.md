# Site scripts

Static files served verbatim from `/scripts/…`. Astro copies `public/` into the
build output untouched, so nothing here is bundled, hashed, or type-checked.

## plausible-shim.js

The site's analytics tracker is loaded from `t.kuznetsov.dev` (see
`src/layouts/BaseLayout.astro`). Plausible's own script is gone, and with it the
class-based event tagging it used to provide. Existing markup still carries
those classes, so this shim reimplements the tagging on top of the new
tracker's `analytics.track(name, props)` API.

Load it **after** the tracking snippet — the snippet is what defines
`analytics.track`:

```html
<script defer src="https://t.kuznetsov.dev/js/script.js" data-key="ak_…" data-identity="anonymous"></script>
<script defer src="/scripts/plausible-shim.js"></script>
```

### Class syntax

Tag any element with `plausible-event-<key><separator><value>` classes. The
separator is `=` (Plausible's primary form) or `--` (its fallback for site
builders that strip `=`), and `+` stands in for a space, since class names
cannot contain one.

```html
<a class="plausible-event-name=signup_cloud" href="/register">Sign up</a>
<a class="plausible-event-name=signup plausible-event-plan=Team+Yearly" href="/register">
```

- `name` is the event name — an element without it is ignored.
- Every other key becomes a custom attribute on the event.
- Keys starting with `$` are dropped: the backend treats them as reserved and
  would discard them silently.

The tag may sit on an ancestor of what was clicked (an icon inside a button, a
span inside a link) — the shim walks up from the event target to find it.

A tagged `<form>` fires on submit; anything else fires on click (main and
middle click, so opening a link in a new tab still counts). Every event also
carries a `path` attribute with `location.pathname` unless the markup sets one
explicitly, because product events otherwise look identical from every page.

### Manual calls

`window.plausible(name, { props, callback })` is defined too, for code that
calls the tracker directly instead of tagging markup. Unlike Plausible's own
snippet there is no queue: the shim is `defer`red, so calls must happen after
the document has parsed.

### Where the events land

In the tracker's dashboard at `t.kuznetsov.dev`, as custom events named by the
`name` key, with the remaining keys as event attributes.
