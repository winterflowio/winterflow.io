document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();const o=this.getAttribute("href");if(!o)return;if(o==="#")window.scrollTo({top:0,behavior:"smooth"});else{const r=document.querySelector(o);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}const l=document.querySelector(".js-mobile-menu");l&&!l.classList.contains("hidden")&&c(!1)})});const e={mobileMenuButton:document.querySelector(".js-mobile-menu-open"),closeMenuButton:document.querySelector(".js-mobile-menu-close"),mobileMenu:document.querySelector(".js-mobile-menu"),backdrop:document.querySelector(".js-mobile-menu-backdrop"),modal:document.querySelector(".js-waitlist-modal"),modalBackdrop:document.querySelector(".js-waitlist-modal-backdrop"),modalClose:document.querySelector(".js-waitlist-modal-close"),waitlistButtons:document.querySelectorAll(".js-waitlist-button"),waitlistForm:document.querySelector(".js-waitlist-form"),selectedAppDisplay:document.querySelector(".js-selected-app"),appInput:document.querySelector(".js-app-input"),planInput:document.querySelector(".js-plan-input"),teamModal:document.querySelector(".js-team-waitlist-modal"),teamModalBackdrop:document.querySelector(".js-team-waitlist-modal-backdrop"),teamModalClose:document.querySelector(".js-team-waitlist-modal-close"),teamWaitlistButtons:document.querySelectorAll(".js-team-waitlist-button"),teamWaitlistForm:document.querySelector(".js-team-waitlist-form"),teamPlanInput:document.querySelector(".js-team-plan-input"),managedServersModal:document.querySelector(".js-managed-servers-modal"),managedServersModalBackdrop:document.querySelector(".js-managed-servers-modal-backdrop"),managedServersModalClose:document.querySelector(".js-managed-servers-modal-close"),managedServersButtons:document.querySelectorAll(".js-managed-servers-button"),managedServersForm:document.querySelector(".js-managed-servers-form"),requestAppModal:document.querySelector(".js-request-app-modal"),requestAppModalBackdrop:document.querySelector(".js-request-app-modal-backdrop"),requestAppModalClose:document.querySelector(".js-request-app-modal-close"),requestAppButtons:document.querySelectorAll(".js-request-app-button"),requestAppForm:document.querySelector(".js-request-app-form")};function c(t){e.mobileMenu&&(e.mobileMenu.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"")}e.mobileMenuButton?.addEventListener("click",()=>c(!0)),e.closeMenuButton?.addEventListener("click",()=>c(!1)),e.backdrop?.addEventListener("click",()=>c(!1)),document.querySelectorAll(".js-mobile-menu a").forEach(t=>{t.addEventListener("click",function(){c(!1)})}),c(!1);const L={small:{winterflow:14,specs:"3 shared vCPU / 4 GB RAM"},medium:{winterflow:42,specs:"4 dedicated vCPU / 16 GB RAM"}},g=document.querySelector(".js-pricing-calculator");if(g){let t=function(r){const a=L[r];a&&o&&l&&(o.textContent=`$${a.winterflow.toFixed(2)}/mo`,l.textContent=a.specs)};const s=g.querySelector(".js-server-select"),o=g.querySelector(".js-winterflow-price"),l=g.querySelector(".js-specs-display");s?.addEventListener("change",r=>{t(r.target.value)}),s&&t(s.value)}const m=document.querySelector(".js-search-input"),w=document.querySelectorAll(".js-filter-checkbox"),S=document.querySelectorAll(".js-plan-filter"),F=document.querySelectorAll(".js-catalog-item"),M=document.querySelector(".js-no-results"),A=document.querySelectorAll(".js-filter-tag");let b;function E(t){b&&clearTimeout(b),t.trim().length!==0&&(b=setTimeout(async()=>{try{await fetch("https://api.flowmitry.com/webhook/winterflow/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({search:t.trim()})})}catch(s){console.warn("Search tracking failed:",s)}},500))}function u(){if(!m)return;const t=m.value.toLowerCase(),s=Array.from(w).filter(r=>r.checked).map(r=>r.value),o=Array.from(S).filter(r=>r.checked).map(r=>r.value);let l=0;F.forEach(r=>{const a=r.querySelector(".js-item-name")?.textContent?.toLowerCase()??"",n=r.dataset.type,i=r.dataset.tags?r.dataset.tags.split(","):n?[n]:[],d=r.dataset.availableIn?r.dataset.availableIn.split(","):[],B=[a,r.dataset.keywords||"",r.dataset.alternatives||"",(r.dataset.tags||"").replace(/,/g," "),r.dataset.summary||"",r.dataset.fullDescription||"",r.dataset.license||"",r.dataset.homepageUrl||"",r.dataset.repositoryUrl||"",r.dataset.documentationUrl||""].some(p=>p.toLowerCase().includes(t)),C=s.length===0||s.some(p=>i.includes(p)),T=o.length===0||o.some(p=>d.includes(p)),k=B&&C&&T;r.classList.toggle("hidden",!k),k&&(l+=1)}),M&&M.classList.toggle("hidden",l!==0)}m&&m.addEventListener("input",()=>{u(),E(m.value)}),w.forEach(t=>{t.addEventListener("change",u)}),S.forEach(t=>{t.addEventListener("change",u)}),A.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.type;s&&(w.forEach(o=>{o.checked=o.value===s}),u())})});const x=window.location.hash.substring(1).toLowerCase();if(x){const t=document.querySelector(`.js-filter-checkbox[value="${x}"]`);t&&(t.checked=!0,u())}function f(t){!e.modal||!e.modalBackdrop||(e.modal.classList.toggle("hidden",!t),e.modalBackdrop.classList.toggle("hidden",!t),t?(document.body.style.overflow="hidden",e.waitlistForm&&e.waitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(o=>o.remove())):(document.body.style.overflow="",e.waitlistForm&&(e.waitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(o=>o.remove()),e.waitlistForm.reset()),e.appInput&&(e.appInput.value=""),e.selectedAppDisplay&&(e.selectedAppDisplay.textContent="your apps")))}e.waitlistButtons.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.appName||"your apps";e.selectedAppDisplay&&(e.selectedAppDisplay.textContent=s),e.appInput&&(e.appInput.value=s),f(!0)})}),e.modalClose?.addEventListener("click",()=>f(!1)),e.modalBackdrop?.addEventListener("click",()=>f(!1)),document.querySelectorAll(".js-install-button").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.appId;s?window.open(`https://app.winterflow.io/#/catalog/${s}`,"_blank"):console.error("App ID not found for install button")})}),e.waitlistForm&&e.waitlistForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.waitlistForm.querySelector('button[type="submit"]');if(!s)return;const o=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.waitlistForm.querySelector('input[type="email"]')?.value,r=e.appInput?.value,a=e.planInput?.value;if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/waiting-list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,app:r,plan:a})})).ok)throw new Error("Network response was not ok");e.waitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(q=>q.remove());const d=document.createElement("div");d.className="rounded-md bg-green-50 p-4 mb-6",d.innerHTML=`
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
          `,e.waitlistForm.insertBefore(d,e.waitlistForm.firstChild),setTimeout(()=>f(!1),5e3)}catch{e.waitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(n=>n.remove());const a=document.createElement("div");a.className="rounded-md bg-red-50 p-4 mb-6",a.innerHTML=`
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
          `,e.waitlistForm.insertBefore(a,e.waitlistForm.firstChild)}finally{s.disabled=!1,s.innerHTML=o}});function v(t){!e.teamModal||!e.teamModalBackdrop||(e.teamModal.classList.toggle("hidden",!t),e.teamModalBackdrop.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"",!t&&e.teamWaitlistForm&&(e.teamWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(o=>o.remove()),e.teamWaitlistForm.reset()))}e.teamWaitlistButtons.forEach(t=>{t.addEventListener("click",()=>v(!0))}),e.teamModalClose?.addEventListener("click",()=>v(!1)),e.teamModalBackdrop?.addEventListener("click",()=>v(!1)),e.teamWaitlistForm&&e.teamWaitlistForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.teamWaitlistForm.querySelector('button[type="submit"]');if(!s)return;const o=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.teamWaitlistForm.querySelector('input[type="email"]')?.value,r=e.teamWaitlistForm.querySelector('input[name="user-interview"]')?.checked;if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/team-waiting-list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,wantsInterview:r})})).ok)throw new Error("Network response was not ok");e.teamWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(d=>d.remove());const i=document.createElement("div");i.className="rounded-md bg-green-50 p-4 mb-6",i.innerHTML=`
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
          `,e.teamWaitlistForm.insertBefore(i,e.teamWaitlistForm.firstChild),setTimeout(()=>v(!1),5e3)}catch{e.teamWaitlistForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(n=>n.remove());const a=document.createElement("div");a.className="rounded-md bg-red-50 p-4 mb-6",a.innerHTML=`
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
          `,e.teamWaitlistForm.insertBefore(a,e.teamWaitlistForm.firstChild)}finally{s.disabled=!1,s.innerHTML=o}});function h(t){!e.managedServersModal||!e.managedServersModalBackdrop||(e.managedServersModal.classList.toggle("hidden",!t),e.managedServersModalBackdrop.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"",!t&&e.managedServersForm&&(e.managedServersForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(o=>o.remove()),e.managedServersForm.reset()))}e.managedServersButtons.forEach(t=>{t.addEventListener("click",()=>h(!0))}),e.managedServersModalClose?.addEventListener("click",()=>h(!1)),e.managedServersModalBackdrop?.addEventListener("click",()=>h(!1)),e.managedServersForm&&e.managedServersForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.managedServersForm.querySelector('button[type="submit"]');if(!s)return;const o=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.managedServersForm.querySelector('input[type="email"]')?.value;if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/cloud-waiting-list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l})})).ok)throw new Error("Network response was not ok");e.managedServersForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(i=>i.remove());const n=document.createElement("div");n.className="rounded-md bg-green-50 p-4 mb-6",n.innerHTML=`
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
          `,e.managedServersForm.insertBefore(n,e.managedServersForm.firstChild),setTimeout(()=>h(!1),5e3)}catch{e.managedServersForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(n=>n.remove());const a=document.createElement("div");a.className="rounded-md bg-red-50 p-4 mb-6",a.innerHTML=`
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
          `,e.managedServersForm.insertBefore(a,e.managedServersForm.firstChild)}finally{s.disabled=!1,s.innerHTML=o}});function y(t){!e.requestAppModal||!e.requestAppModalBackdrop||(e.requestAppModal.classList.toggle("hidden",!t),e.requestAppModalBackdrop.classList.toggle("hidden",!t),document.body.style.overflow=t?"hidden":"",!t&&e.requestAppForm&&(e.requestAppForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(o=>o.remove()),e.requestAppForm.reset()))}e.requestAppButtons.forEach(t=>{t.addEventListener("click",()=>y(!0))}),e.requestAppModalClose?.addEventListener("click",()=>y(!1)),e.requestAppModalBackdrop?.addEventListener("click",()=>y(!1)),e.requestAppForm&&e.requestAppForm.addEventListener("submit",async t=>{t.preventDefault();const s=e.requestAppForm.querySelector('button[type="submit"]');if(!s)return;const o=s.innerHTML;try{s.disabled=!0,s.innerHTML=`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          `;const l=e.requestAppForm.querySelector('textarea[name="text"]')?.value;if(!(await fetch("https://api.flowmitry.com/webhook/winterflow/request-app",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:l})})).ok)throw new Error("Network response was not ok");e.requestAppForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(i=>i.remove());const n=document.createElement("div");n.className="rounded-md bg-green-50 p-4 mb-6",n.innerHTML=`
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
          `,e.requestAppForm.insertBefore(n,e.requestAppForm.firstChild),setTimeout(()=>y(!1),5e3)}catch{e.requestAppForm.querySelectorAll(".rounded-md.bg-green-50, .rounded-md.bg-red-50").forEach(n=>n.remove());const a=document.createElement("div");a.className="rounded-md bg-red-50 p-4 mb-6",a.innerHTML=`
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
          `,e.requestAppForm.insertBefore(a,e.requestAppForm.firstChild)}finally{s.disabled=!1,s.innerHTML=o}})});
