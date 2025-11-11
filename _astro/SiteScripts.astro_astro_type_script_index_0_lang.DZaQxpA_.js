document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();const r=this.getAttribute("href");if(!r)return;if(r==="#")window.scrollTo({top:0,behavior:"smooth"});else{const a=document.querySelector(r);a&&a.scrollIntoView({behavior:"smooth",block:"start"})}const l=document.querySelector(".js-mobile-menu");l&&!l.classList.contains("hidden")&&d(!1)})});const e={mobileMenuButton:document.querySelector(".js-mobile-menu-open"),closeMenuButton:document.querySelector(".js-mobile-menu-close"),mobileMenu:document.querySelector(".js-mobile-menu"),backdrop:document.querySelector(".js-mobile-menu-backdrop"),modal:document.querySelector(".js-waitlist-modal"),modalBackdrop:document.querySelector(".js-waitlist-modal-backdrop"),modalClose:document.querySelector(".js-waitlist-modal-close"),waitlistButtons:document.querySelectorAll(".js-waitlist-button"),waitlistForm:document.querySelector(".js-waitlist-form"),selectedAppDisplay:document.querySelector(".js-selected-app"),appInput:document.querySelector(".js-app-input"),planInput:document.querySelector(".js-plan-input"),teamModal:document.querySelector(".js-team-waitlist-modal"),teamModalBackdrop:document.querySelector(".js-team-waitlist-modal-backdrop"),teamModalClose:document.querySelector(".js-team-waitlist-modal-close"),teamWaitlistButtons:document.querySelectorAll(".js-team-waitlist-button"),teamWaitlistForm:document.querySelector(".js-team-waitlist-form"),teamPlanInput:document.querySelector(".js-team-plan-input"),managedServersModal:document.querySelector(".js-managed-servers-modal"),managedServersModalBackdrop:document.querySelector(".js-managed-servers-modal-backdrop"),managedServersModalClose:document.querySelector(".js-managed-servers-modal-close"),managedServersButtons:document.querySelectorAll(".js-managed-servers-button"),managedServersForm:document.querySelector(".js-managed-servers-form"),requestAppModal:document.querySelector(".js-request-app-modal"),requestAppModalBackdrop:document.querySelector(".js-request-app-modal-backdrop"),requestAppModalClose:document.querySelector(".js-request-app-modal-close"),requestAppButtons:document.querySelectorAll(".js-request-app-button"),requestAppForm:document.querySelector(".js-request-app-form"),catalogWaitlistModal:document.querySelector(".js-catalog-waitlist-modal"),catalogWaitlistModalBackdrop:document.querySelector(".js-catalog-waitlist-modal-backdrop"),catalogWaitlistModalClose:document.querySelector(".js-catalog-waitlist-modal-close"),catalogWaitlistButtons:document.querySelectorAll(".js-catalog-waitlist-button"),catalogWaitlistForm:document.querySelector(".js-catalog-waitlist-form"),catalogSelectedAppDisplay:document.querySelector(".js-catalog-selected-app"),catalogAppInput:document.querySelector(".js-catalog-app-input")};function d(t){e.mobileMenu&&(e.mobileMenu.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"")}e.mobileMenuButton?.addEventListener("click",()=>d(!0)),e.closeMenuButton?.addEventListener("click",()=>d(!1)),e.backdrop?.addEventListener("click",()=>d(!1)),document.querySelectorAll(".js-mobile-menu a").forEach(t=>{t.addEventListener("click",function(){d(!1)})}),d(!1);const A={small:{winterflow:14,specs:"3 shared vCPU / 4 GB RAM"},medium:{winterflow:42,specs:"4 dedicated vCPU / 16 GB RAM"}},f=document.querySelector(".js-pricing-calculator");if(f){let t=function(a){const o=A[a];o&&r&&l&&(r.textContent=`$${o.winterflow.toFixed(2)}/mo`,l.textContent=o.specs)};const s=f.querySelector(".js-server-select"),r=f.querySelector(".js-winterflow-price"),l=f.querySelector(".js-specs-display");s?.addEventListener("change",a=>{t(a.target.value)}),s&&t(s.value)}const u=document.querySelector(".js-search-input"),M=document.querySelectorAll(".js-filter-checkbox"),q=document.querySelectorAll(".js-plan-filter"),E=document.querySelectorAll(".js-catalog-item"),k=document.querySelector(".js-no-results"),B=document.querySelectorAll(".js-filter-tag");let S;function C(t){S&&clearTimeout(S),t.trim().length!==0&&(S=setTimeout(async()=>{try{await fetch("https://api.flowmitry.com/webhook/winterflow/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({search:t.trim()})})}catch(s){console.warn("Search tracking failed:",s)}},500))}function p(){if(!u)return;const t=u.value.toLowerCase(),s=Array.from(M).filter(a=>a.checked).map(a=>a.value),r=Array.from(q).filter(a=>a.checked).map(a=>a.value);let l=0;E.forEach(a=>{const o=a.querySelector(".js-item-name")?.textContent?.toLowerCase()??"",i=a.dataset.type,n=a.dataset.tags?a.dataset.tags.split(","):i?[i]:[],c=a.dataset.availableIn?a.dataset.availableIn.split(","):[],x=[o,a.dataset.keywords||"",a.dataset.alternatives||"",(a.dataset.tags||"").replace(/,/g," "),a.dataset.summary||"",a.dataset.fullDescription||"",a.dataset.license||"",a.dataset.homepageUrl||"",a.dataset.repositoryUrl||"",a.dataset.documentationUrl||""].some(g=>g.toLowerCase().includes(t)),T=s.length===0||s.some(g=>n.includes(g)),j=r.length===0||r.some(g=>c.includes(g)),F=x&&T&&j;a.classList.toggle("hidden",!F),F&&(l+=1)}),k&&k.classList.toggle("hidden",l!==0)}u&&u.addEventListener("input",()=>{p(),C(u.value)}),M.forEach(t=>{t.addEventListener("change",p)}),q.forEach(t=>{t.addEventListener("change",p)}),B.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.type;s&&(M.forEach(r=>{r.checked=r.value===s}),p())})});const L=window.location.hash.substring(1).toLowerCase();if(L){const t=document.querySelector(`.js-filter-checkbox[value="${L}"]`);t&&(t.checked=!0,p())}function v(t){!e.modal||!e.modalBackdrop||(e.modal.classList.toggle("hidden",!t),e.modalBackdrop.classList.toggle("hidden",!t),t?(document.body.style.overflow="hidden",e.waitlistForm&&e.waitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(r=>r.remove())):(document.body.style.overflow="",e.waitlistForm&&(e.waitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(r=>r.remove()),e.waitlistForm.reset()),e.appInput&&(e.appInput.value=""),e.selectedAppDisplay&&(e.selectedAppDisplay.textContent="your apps")))}e.waitlistButtons.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.appName||"your apps";e.selectedAppDisplay&&(e.selectedAppDisplay.textContent=s),e.appInput&&(e.appInput.value=s),v(!0)})}),e.modalClose?.addEventListener("click",()=>v(!1)),e.modalBackdrop?.addEventListener("click",()=>v(!1)),e.waitlistForm&&e.waitlistForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.waitlistForm.querySelector('button[type="submit"]');if(!s)return;const r=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.waitlistForm.querySelector('input[type="email"]')?.value,a=e.appInput?.value,o=e.planInput?.value;if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/waiting-list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,app:a,plan:o})})).ok)throw new Error("Network response was not ok");e.waitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(m=>m.remove());const c=document.createElement("div");c.className="rounded-md bg-green-50 p-4 mb-6",c.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">Thank you for joining the waitlist!</p>
                <p class="mt-1 text-sm text-green-700">We'll be in touch soon with early access details.</p>
              </div>
            </div>
          `,e.waitlistForm.insertBefore(c,e.waitlistForm.firstChild),setTimeout(()=>v(!1),5e3)}catch{e.waitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(i=>i.remove());const o=document.createElement("div");o.className="rounded-md bg-red-50 p-4 mb-6",o.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">Something went wrong</p>
                <p class="mt-1 text-sm text-red-700">Please try again later or contact support if the problem persists.</p>
              </div>
            </div>
          `,e.waitlistForm.insertBefore(o,e.waitlistForm.firstChild)}finally{s.disabled=!1,s.innerHTML=r}});function h(t){!e.teamModal||!e.teamModalBackdrop||(e.teamModal.classList.toggle("hidden",!t),e.teamModalBackdrop.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"",!t&&e.teamWaitlistForm&&(e.teamWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(r=>r.remove()),e.teamWaitlistForm.reset()))}e.teamWaitlistButtons.forEach(t=>{t.addEventListener("click",()=>h(!0))}),e.teamModalClose?.addEventListener("click",()=>h(!1)),e.teamModalBackdrop?.addEventListener("click",()=>h(!1)),e.teamWaitlistForm&&e.teamWaitlistForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.teamWaitlistForm.querySelector('button[type="submit"]');if(!s)return;const r=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.teamWaitlistForm.querySelector('input[type="email"]')?.value,a=e.teamWaitlistForm.querySelector('input[name="user-interview"]')?.checked;if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/team-waiting-list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,wantsInterview:a})})).ok)throw new Error("Network response was not ok");e.teamWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(c=>c.remove());const n=document.createElement("div");n.className="rounded-md bg-green-50 p-4 mb-6",n.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">Thanks for joining the Business Plan waitlist!</p>
                <p class="mt-1 text-sm text-green-700">We'll contact you once the plan is available.</p>
              </div>
            </div>
          `,e.teamWaitlistForm.insertBefore(n,e.teamWaitlistForm.firstChild),setTimeout(()=>h(!1),5e3)}catch{e.teamWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(i=>i.remove());const o=document.createElement("div");o.className="rounded-md bg-red-50 p-4 mb-6",o.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">Something went wrong</p>
                <p class="mt-1 text-sm text-red-700">Try again later or contact support.</p>
              </div>
            </div>
          `,e.teamWaitlistForm.insertBefore(o,e.teamWaitlistForm.firstChild)}finally{s.disabled=!1,s.innerHTML=r}});function y(t){!e.managedServersModal||!e.managedServersModalBackdrop||(e.managedServersModal.classList.toggle("hidden",!t),e.managedServersModalBackdrop.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"",!t&&e.managedServersForm&&(e.managedServersForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(r=>r.remove()),e.managedServersForm.reset()))}e.managedServersButtons.forEach(t=>{t.addEventListener("click",()=>y(!0))}),e.managedServersModalClose?.addEventListener("click",()=>y(!1)),e.managedServersModalBackdrop?.addEventListener("click",()=>y(!1)),e.managedServersForm&&e.managedServersForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.managedServersForm.querySelector('button[type="submit"]');if(!s)return;const r=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.managedServersForm.querySelector('input[type="email"]')?.value;if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/cloud-waiting-list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l})})).ok)throw new Error("Network response was not ok");e.managedServersForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(n=>n.remove());const i=document.createElement("div");i.className="rounded-md bg-green-50 p-4 mb-6",i.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">Thanks for your interest!</p>
                <p class="mt-1 text-sm text-green-700">We'll reach out with managed cloud details.</p>
              </div>
            </div>
          `,e.managedServersForm.insertBefore(i,e.managedServersForm.firstChild),setTimeout(()=>y(!1),5e3)}catch{e.managedServersForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(i=>i.remove());const o=document.createElement("div");o.className="rounded-md bg-red-50 p-4 mb-6",o.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">Something went wrong</p>
                <p class="mt-1 text-sm text-red-700">Please try again later.</p>
              </div>
            </div>
          `,e.managedServersForm.insertBefore(o,e.managedServersForm.firstChild)}finally{s.disabled=!1,s.innerHTML=r}});function w(t){!e.catalogWaitlistModal||!e.catalogWaitlistModalBackdrop||(e.catalogWaitlistModal.classList.toggle("hidden",!t),e.catalogWaitlistModalBackdrop.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"",e.catalogWaitlistForm&&(e.catalogWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(r=>r.remove()),t||e.catalogWaitlistForm.reset()),t||(e.catalogAppInput&&(e.catalogAppInput.value=""),e.catalogSelectedAppDisplay&&(e.catalogSelectedAppDisplay.textContent="this app")))}e.catalogWaitlistButtons.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.appName||"this app",r=t.dataset.appSlug||"";e.catalogWaitlistForm&&e.catalogWaitlistForm.reset(),e.catalogSelectedAppDisplay&&(e.catalogSelectedAppDisplay.textContent=s),e.catalogAppInput&&(e.catalogAppInput.value=r),w(!0)})}),e.catalogWaitlistModalClose?.addEventListener("click",()=>w(!1)),e.catalogWaitlistModalBackdrop?.addEventListener("click",()=>w(!1)),e.catalogWaitlistForm&&e.catalogWaitlistForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.catalogWaitlistForm.querySelector('button[type="submit"]');if(!s)return;const r=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.catalogWaitlistForm.querySelector('input[type="email"]')?.value,a=e.catalogAppInput?.value;if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/request-app",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,app:a})})).ok)throw new Error("Network response was not ok");e.catalogWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(c=>c.remove());const n=document.createElement("div");n.className="rounded-md bg-green-50 p-4 mb-6",n.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">Thanks for your interest!</p>
                <p class="mt-1 text-sm text-green-700">We'll email you as soon as this app is ready.</p>
              </div>
            </div>
          `,e.catalogWaitlistForm.insertBefore(n,e.catalogWaitlistForm.firstChild),setTimeout(()=>w(!1),5e3)}catch{e.catalogWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(i=>i.remove());const o=document.createElement("div");o.className="rounded-md bg-red-50 p-4 mb-6",o.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">Something went wrong</p>
                <p class="mt-1 text-sm text-red-700">Please try again later.</p>
              </div>
            </div>
          `,e.catalogWaitlistForm.insertBefore(o,e.catalogWaitlistForm.firstChild)}finally{s.disabled=!1,s.innerHTML=r}});function b(t){!e.requestAppModal||!e.requestAppModalBackdrop||(e.requestAppModal.classList.toggle("hidden",!t),e.requestAppModalBackdrop.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"",!t&&e.requestAppForm&&(e.requestAppForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(r=>r.remove()),e.requestAppForm.reset()))}e.requestAppButtons.forEach(t=>{t.addEventListener("click",()=>b(!0))}),e.requestAppModalClose?.addEventListener("click",()=>b(!1)),e.requestAppModalBackdrop?.addEventListener("click",()=>b(!1)),e.requestAppForm&&e.requestAppForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.requestAppForm.querySelector('button[type="submit"]');if(!s)return;const r=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.requestAppForm.querySelector('input[type="email"]')?.value,a=e.requestAppForm.querySelector('input[name="app"]')?.value,i=e.requestAppForm.querySelector('input[name="new"]')?.value!=="false";if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/request-app",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,app:a,new:i})})).ok)throw new Error("Network response was not ok");e.requestAppForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(x=>x.remove());const m=document.createElement("div");m.className="rounded-md bg-green-50 p-4 mb-6",m.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800">Thank you for your request!</p>
                <p class="mt-1 text-sm text-green-700">We'll review your app suggestion and consider adding it to our catalog.</p>
              </div>
            </div>
          `,e.requestAppForm.insertBefore(m,e.requestAppForm.firstChild),setTimeout(()=>b(!1),5e3)}catch{e.requestAppForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(i=>i.remove());const o=document.createElement("div");o.className="rounded-md bg-red-50 p-4 mb-6",o.innerHTML=`
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">Something went wrong</p>
                <p class="mt-1 text-sm text-red-700">Please try again later or contact support if the problem persists.</p>
              </div>
            </div>
          `,e.requestAppForm.insertBefore(o,e.requestAppForm.firstChild)}finally{s.disabled=!1,s.innerHTML=r}})});
