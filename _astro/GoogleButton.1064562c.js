import{h as f,p as b}from"./hooks.module.ee390651.js";import{a as G,T as E}from"./jwt.2bcbdb7f.js";import{S as x}from"./spinner.164b1eeb.js";import{a as h}from"./http.1ee0e3a2.js";import{o as n}from"./jsxRuntime.module.760e3403.js";import{_ as R}from"./preact.module.e54f245b.js";const _="/_astro/google.b1c95028.svg",l="googleRedirectAt",s="googleLastPage";function $(k){const[r,o]=f(!1),[c,t]=f(""),p=r?x:_;return b(()=>{const e=new URLSearchParams(window.location.search),a=e.get("code"),w=e.get("state"),u=e.get("provider");!a||!w||u!=="google"||(o(!0),h(`https://api.roadmap.sh/v1-google-callback${window.location.search}`).then(({response:i,error:S})=>{if(!i?.token){t(S?.message||"Something went wrong."),o(!1);return}let g="/";const m=localStorage.getItem(l),d=localStorage.getItem(s);if(m&&d){const I=parseInt(m,10);Date.now()-I<30*1e3&&(g=d)}localStorage.removeItem(l),localStorage.removeItem(s),G.set(E,i.token),window.location.href=g}).catch(i=>{t("Something went wrong. Please try again later."),o(!1)}))},[]),n(R,{children:[n("button",{class:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:r,onClick:()=>{o(!0),h("https://api.roadmap.sh/v1-google-login").then(({response:e,error:a})=>{if(!e?.loginUrl){t(a?.message||"Something went wrong."),o(!1);return}["/login","/signup"].includes(window.location.pathname)||(localStorage.setItem(l,Date.now().toString()),localStorage.setItem(s,window.location.pathname)),window.location.href=e.loginUrl}).catch(e=>{t("Something went wrong. Please try again later."),o(!1)})},children:[n("img",{src:p,alt:"Google",class:`h-[18px] w-[18px] ${r?"animate-spin":""}`}),"Continue with Google"]}),c&&n("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:c})]})}export{$ as GoogleButton};