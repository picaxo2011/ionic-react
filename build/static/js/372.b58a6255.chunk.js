"use strict";(self.webpackChunkionic_react=self.webpackChunkionic_react||[]).push([[372],{7372:function(t,e,o){o.r(e),o.d(e,{iosTransitionAnimation:function(){return p},shadow:function(){return s}});var a=o(4942),n=o(7762),r=o(5883),l=o(6313),c=function(t){return document.querySelector("".concat(t,".ion-cloned-element"))},s=function(t){return t.shadowRoot||t},i=function(t){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){var a=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=a?a.querySelector(o):null}return t.querySelector(o)},f=function(t,e){var o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),a=[];if(null!=o){var r=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=r&&(a=r.querySelectorAll("ion-buttons"))}else a=t.querySelectorAll("ion-buttons");var l,c=(0,n.Z)(a);try{for(c.s();!(l=c.n()).done;){var s=l.value,i=s.closest("ion-header"),f=i&&!i.classList.contains("header-collapse-condense-inactive"),d=s.querySelector("ion-back-button"),m=s.classList.contains("buttons-collapse"),p="start"===s.slot||""===s.slot;if(null!==d&&p&&(m&&f&&e||!m))return d}}catch(u){c.e(u)}finally{c.f()}return null},d=function(t,e,o,a,n,l){var i=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),f=e?"7px":"-7px",d=e?"-4px":"4px",m=e?"-4px":"4px",p=e?"right":"left",u=e?"left":"right",y=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(d,", ").concat(l.top-46,"px, 0) scale(1)")}],b=[{offset:0,opacity:1,transform:"translate3d(".concat(d,", ").concat(l.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")}],v=o?b:y,S=[{offset:0,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(m,", ").concat(l.top-46,"px, 0) scale(1)")}],g=[{offset:0,opacity:1,transform:"translate3d(".concat(m,", ").concat(l.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")}],T=o?g:S,h=(0,r.c)(),x=(0,r.c)(),q=c("ion-back-button"),X=s(q).querySelector(".button-text"),A=s(q).querySelector("ion-icon");q.text=a.text,q.mode=a.mode,q.icon=a.icon,q.color=a.color,q.disabled=a.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),x.addElement(A),h.addElement(X),h.beforeStyles({"transform-origin":"".concat(p," center")}).beforeAddWrite((function(){a.style.setProperty("display","none"),q.style.setProperty(p,i)})).afterAddWrite((function(){a.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(p)})).keyframes(v),x.beforeStyles({"transform-origin":"".concat(u," center")}).keyframes(T),t.addAnimation([h,x])},m=function(t,e,o,n,l,s){var i=e?"calc(100% - ".concat(l.right,"px)"):"".concat(l.left,"px"),f=e?"-18px":"18px",d=e?"right":"left",m=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")}],p=[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.5)")}],u=o?m:p,y=c("ion-title"),b=(0,r.c)();y.innerText=n.innerText,y.size=n.size,y.color=n.color,b.addElement(y),b.beforeStyles((0,a.Z)({"transform-origin":"".concat(d," center"),height:"46px",display:"",position:"relative"},d,i)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(u),t.addAnimation(b)},p=function(t,e){var o;try{var a="opacity",n="transform",c="0%",p="rtl"===t.ownerDocument.dir,u=p?"-99.5%":"99.5%",y=p?"33%":"-33%",b=e.enteringEl,v=e.leavingEl,S="back"===e.direction,g=b.querySelector(":scope > ion-content"),T=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),h=b.querySelectorAll(":scope > ion-header > ion-toolbar"),x=(0,r.c)(),q=(0,r.c)();if(x.addElement(b).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),v&&null!==t&&void 0!==t){var X=(0,r.c)();X.addElement(t),x.addAnimation(X)}if(g||0!==h.length||0!==T.length?(q.addElement(g),q.addElement(T)):q.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),x.addAnimation(q),S?q.beforeClearStyles([a]).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")).fromTo(a,.8,1):q.beforeClearStyles([a]).fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(c,")")),g){var A=s(g).querySelector(".transition-effect");if(A){var E=A.querySelector(".transition-cover"),C=A.querySelector(".transition-shadow"),k=(0,r.c)(),w=(0,r.c)(),P=(0,r.c)();k.addElement(A).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),w.addElement(E).beforeClearStyles([a]).fromTo(a,0,.1),P.addElement(C).beforeClearStyles([a]).fromTo(a,.03,.7),k.addAnimation([w,P]),q.addAnimation([k])}}var L=b.querySelector("ion-header.header-collapse-condense"),B=function(t,e,o,a,n){var r=f(a,o),l=i(n),c=i(a),s=f(n,o),p=null!==r&&null!==l&&!o,u=null!==c&&null!==s&&o;if(p){var y=l.getBoundingClientRect(),b=r.getBoundingClientRect();m(t,e,o,l,y,b),d(t,e,o,r,y,b)}else if(u){var v=c.getBoundingClientRect(),S=s.getBoundingClientRect();m(t,e,o,c,v,S),d(t,e,o,s,v,S)}return{forward:p,backward:u}}(x,p,S,b,v),R=B.forward,W=B.backward;if(h.forEach((function(t){var e=(0,r.c)();e.addElement(t),x.addAnimation(e);var o=(0,r.c)();o.addElement(t.querySelector("ion-title"));var n,l=(0,r.c)(),i=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),f=t.closest("ion-header"),d=null===f||void 0===f?void 0:f.classList.contains("header-collapse-condense-inactive");n=S?i.filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!d||!e})):i.filter((function(t){return!t.classList.contains("buttons-collapse")})),l.addElement(n);var m=(0,r.c)();m.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=(0,r.c)();b.addElement(s(t).querySelector(".toolbar-background"));var v=(0,r.c)(),g=t.querySelector("ion-back-button");if(g&&v.addElement(g),e.addAnimation([o,l,m,b,v]),l.fromTo(a,.01,1),m.fromTo(a,.01,1),S)d||o.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")).fromTo(a,.01,1),m.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")),v.fromTo(a,.01,1);else if(L||o.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(c,")")).fromTo(a,.01,1),m.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(c,")")),b.beforeClearStyles([a,"transform"]),(null===f||void 0===f?void 0:f.translucent)?b.fromTo("transform",p?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(a,.01,"var(--opacity)"),R||v.fromTo(a,.01,1),g&&!R){var T=(0,r.c)();T.addElement(s(g).querySelector(".button-text")).fromTo("transform",p?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(T)}})),v){var N=(0,r.c)(),z=v.querySelector(":scope > ion-content"),D=v.querySelectorAll(":scope > ion-header > ion-toolbar"),I=v.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(z||0!==D.length||0!==I.length?(N.addElement(z),N.addElement(I)):N.addElement(v.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),x.addAnimation(N),S){N.beforeClearStyles([a]).fromTo("transform","translateX(".concat(c,")"),p?"translateX(-100%)":"translateX(100%)");var O=(0,l.g)(v);x.afterAddWrite((function(){"normal"===x.getDirection()&&O.style.setProperty("display","none")}))}else N.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).fromTo(a,1,.8);if(z){var Z=s(z).querySelector(".transition-effect");if(Z){var _=Z.querySelector(".transition-cover"),j=Z.querySelector(".transition-shadow"),F=(0,r.c)(),G=(0,r.c)(),H=(0,r.c)();F.addElement(Z).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),G.addElement(_).beforeClearStyles([a]).fromTo(a,.1,0),H.addElement(j).beforeClearStyles([a]).fromTo(a,.7,.03),F.addAnimation([G,H]),N.addAnimation([F])}}D.forEach((function(t){var e=(0,r.c)();e.addElement(t);var o=(0,r.c)();o.addElement(t.querySelector("ion-title"));var l=(0,r.c)(),i=t.querySelectorAll("ion-buttons,[menuToggle]"),f=t.closest("ion-header"),d=null===f||void 0===f?void 0:f.classList.contains("header-collapse-condense-inactive"),m=Array.from(i).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!d||!e}));l.addElement(m);var u=(0,r.c)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&u.addElement(b);var v=(0,r.c)();v.addElement(s(t).querySelector(".toolbar-background"));var g=(0,r.c)(),T=t.querySelector("ion-back-button");if(T&&g.addElement(T),e.addAnimation([o,l,u,g,v]),x.addAnimation(e),g.fromTo(a,.99,0),l.fromTo(a,.99,0),u.fromTo(a,.99,0),S){if(d||o.fromTo("transform","translateX(".concat(c,")"),p?"translateX(-100%)":"translateX(100%)").fromTo(a,.99,0),u.fromTo("transform","translateX(".concat(c,")"),p?"translateX(-100%)":"translateX(100%)"),v.beforeClearStyles([a,"transform"]),(null===f||void 0===f?void 0:f.translucent)?v.fromTo("transform","translateX(0px)",p?"translateX(-100%)":"translateX(100%)"):v.fromTo(a,"var(--opacity)",0),T&&!W){var h=(0,r.c)();h.addElement(s(T).querySelector(".button-text")).fromTo("transform","translateX(".concat(c,")"),"translateX(".concat((p?-124:124)+"px",")")),e.addAnimation(h)}}else d||o.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).fromTo(a,.99,0).afterClearStyles([n,a]),u.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).afterClearStyles([n,a]),g.afterClearStyles([a]),o.afterClearStyles([a]),l.afterClearStyles([a])}))}return x}catch(J){throw J}}}}]);
//# sourceMappingURL=372.b58a6255.chunk.js.map