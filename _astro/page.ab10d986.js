let t=[],f=(o,a)=>{let n=[],l={lc:0,l:a||0,value:o,set(s){l.value!==s&&(l.value=s,l.notify())},get(){return l.lc||l.listen(()=>{})(),l.value},notify(s){let i=!t.length;for(let e=0;e<n.length;e+=2)t.push(n[e],l.value,s,n[e+1]);if(i){for(let e=0;e<t.length;e+=4){let u=!1;for(let r=e+7;r<t.length;r+=4)if(t[r]<t[e+3]){u=!0;break}u?t.push(t[e],t[e+1],t[e+2],t[e+3]):t[e](t[e+1],t[e+2])}t.length=0}},listen(s,i){return l.lc=n.push(s,i||l.l)/2,()=>{let e=n.indexOf(s);~e&&(n.splice(e,2),l.lc--,l.lc||l.off())}},subscribe(s,i){let e=l.listen(s,i);return s(l.value),e},off(){}};return l};const g=f(""),p=f(!1);export{g as p,p as s};