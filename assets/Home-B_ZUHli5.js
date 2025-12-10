import{S as e,T as t,a as n,b as r,t as i}from"./index-ablB7EkJ.js";var a=t(e());
/*!
* Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2025 Fonticons, Inc.
*/
function o(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e){if(Array.isArray(e))return e}function c(e){if(Array.isArray(e))return o(e)}function l(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,te(r.key),r)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function f(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=re(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function p(e,t,n){return(t=te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function h(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function g(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?v(Object(n),!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function b(e,t){return s(e)||h(e,t)||re(e,t)||g()}function x(e){return c(e)||m(e)||re(e)||_()}function ee(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function te(e){var t=ee(e,`string`);return typeof t==`symbol`?t:t+``}function ne(e){"@babel/helpers - typeof";return ne=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ne(e)}function re(e,t){if(e){if(typeof e==`string`)return o(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}var ie=function(){},ae={},oe={},se=null,ce={mark:ie,measure:ie};try{typeof window<`u`&&(ae=window),typeof document<`u`&&(oe=document),typeof MutationObserver<`u`&&(se=MutationObserver),typeof performance<`u`&&(ce=performance)}catch{}var le=(ae.navigator||{}).userAgent,ue=le===void 0?``:le,S=ae,C=oe,de=se,fe=ce;S.document;var w=!!C.documentElement&&!!C.head&&typeof C.addEventListener==`function`&&typeof C.createElement==`function`,pe=~ue.indexOf(`MSIE`)||~ue.indexOf(`Trident/`),me,he=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ge=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,_e={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},ve={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ye=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],T=`classic`,E=`duotone`,be=`sharp`,xe=`sharp-duotone`,Se=`chisel`,Ce=`etch`,we=`jelly`,Te=`jelly-duo`,Ee=`jelly-fill`,De=`notdog`,Oe=`notdog-duo`,ke=`slab`,Ae=`slab-press`,je=`thumbprint`,Me=`utility`,Ne=`utility-duo`,Pe=`utility-fill`,Fe=`whiteboard`,Ie=`Classic`,Le=`Duotone`,Re=`Sharp`,ze=`Sharp Duotone`,Be=`Chisel`,Ve=`Etch`,He=`Jelly`,Ue=`Jelly Duo`,We=`Jelly Fill`,Ge=`Notdog`,Ke=`Notdog Duo`,qe=`Slab`,Je=`Slab Press`,Ye=`Thumbprint`,Xe=`Utility`,Ze=`Utility Duo`,Qe=`Utility Fill`,$e=`Whiteboard`,et=[T,E,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe];me={},p(p(p(p(p(p(p(p(p(p(me,T,Ie),E,Le),be,Re),xe,ze),Se,Be),Ce,Ve),we,He),Te,Ue),Ee,We),De,Ge),p(p(p(p(p(p(p(p(me,Oe,Ke),ke,qe),Ae,Je),je,Ye),Me,Xe),Ne,Ze),Pe,Qe),Fe,$e);var tt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},nt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},rt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),it={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},at=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ot={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},st=[`kit`];p(p({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ct={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},lt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ut={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},dt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},ft,pt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},mt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];ft={},p(p(p(p(p(p(p(p(p(p(ft,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),`notdog`,`Notdog`),p(p(p(p(p(p(p(p(ft,`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),p(p({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ht={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},gt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},_t={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},vt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(mt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),yt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],bt=[1,2,3,4,5,6,7,8,9,10],xt=bt.concat([11,12,13,14,15,16,17,18,19,20]),St=[].concat(x(Object.keys(gt)),yt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY],bt.map(function(e){return`${e}x`}),xt.map(function(e){return`w-${e}`})),Ct={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},D=`___FONT_AWESOME___`,wt=16,Tt=`fa`,Et=`svg-inline--fa`,O=`data-fa-i2svg`,Dt=`data-fa-pseudo-element`,Ot=`data-fa-pseudo-element-pending`,kt=`data-prefix`,At=`data-icon`,jt=`fontawesome-i2svg`,Mt=`async`,Nt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Pt=[`::before`,`::after`,`:before`,`:after`],Ft=function(){try{return!0}catch{return!1}}();function It(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[T]}})}var Lt=y({},_e);Lt[T]=y(y(y(y({},{"fa-duotone":`duotone`}),_e[T]),ot.kit),ot[`kit-duotone`]);var Rt=It(Lt),zt=y({},it);zt[T]=y(y(y(y({},{duotone:`fad`}),zt[T]),dt.kit),dt[`kit-duotone`]);var Bt=It(zt),Vt=y({},_t);Vt[T]=y(y({},Vt[T]),ut.kit);var Ht=It(Vt),Ut=y({},ht);Ut[T]=y(y({},Ut[T]),ct.kit),It(Ut);var Wt=he,Gt=`fa-layers-text`,Kt=ge,qt=y({},tt);It(qt);var Jt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Yt=ve,Xt=[].concat(x(st),x(St)),Zt=S.FontAwesomeConfig||{};function Qt(e){var t=C.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function $t(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}C&&typeof C.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=b(e,2),n=t[0],r=t[1],i=$t(Qt(n));i!=null&&(Zt[r]=i)});var en={styleDefault:`solid`,familyDefault:T,cssPrefix:Tt,replacementClass:Et,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zt.familyPrefix&&(Zt.cssPrefix=Zt.familyPrefix);var k=y(y({},en),Zt);k.autoReplaceSvg||(k.observeMutations=!1);var A={};Object.keys(en).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(t){k[e]=t,j.forEach(function(e){return e(A)})},get:function(){return k[e]}})}),Object.defineProperty(A,`familyPrefix`,{enumerable:!0,set:function(e){k.cssPrefix=e,j.forEach(function(e){return e(A)})},get:function(){return k.cssPrefix}}),S.FontAwesomeConfig=A;var j=[];function tn(e){return j.push(e),function(){j.splice(j.indexOf(e),1)}}var M=wt,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nn(e){if(!(!e||!w)){var t=C.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=C.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return C.head.insertBefore(t,r),e}}var rn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function an(){for(var e=12,t=``;e-- >0;)t+=rn[Math.random()*62|0];return t}function P(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function on(e){return e.classList?P(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function sn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function cn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${sn(e[n])}" `},``).trim()}function ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function un(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function dn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:`translate(${n/2} 256)`},a=`translate(${t.x*32}, ${t.y*32}) `,o=`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `,s=`rotate(${t.rotate} 0 0)`,c={transform:`${a} ${o} ${s}`},l={transform:`translate(${r/2*-1} -256)`};return{outer:i,inner:c,path:l}}function fn(e){var t=e.transform,n=e.width,r=n===void 0?wt:n,i=e.height,a=i===void 0?wt:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&pe?c+=`translate(${t.x/M-r/2}em, ${t.y/M-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/M}em), calc(-50% + ${t.y/M}em)) `:c+=`translate(${t.x/M}em, ${t.y/M}em) `,c+=`scale(${t.size/M*(t.flipX?-1:1)}, ${t.size/M*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var pn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function mn(){var e=Tt,t=Et,n=A.cssPrefix,r=A.replacementClass,i=pn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var hn=!1;function gn(){A.autoAddCss&&!hn&&(nn(mn()),hn=!0)}var _n={mixout:function(){return{dom:{css:mn,insertCss:gn}}},hooks:function(){return{beforeDOMElementCreation:function(){gn()},beforeI2svg:function(){gn()}}}},F=S||{};F[D]||(F[D]={}),F[D].styles||(F[D].styles={}),F[D].hooks||(F[D].hooks={}),F[D].shims||(F[D].shims=[]);var I=F[D],vn=[],yn=function(){C.removeEventListener(`DOMContentLoaded`,yn),bn=1,vn.map(function(e){return e()})},bn=!1;w&&(bn=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),bn||C.addEventListener(`DOMContentLoaded`,yn));function xn(e){w&&(bn?setTimeout(e,0):vn.push(e))}function L(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?sn(e):`<${t} ${cn(r)}>${a.map(L).join(``)}</${t}>`}function Sn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Cn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},wn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Cn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Tn(e){return x(e).length===1?e.codePointAt(0).toString(16):null}function En(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=En(t);typeof I.hooks.addPack==`function`&&!r?I.hooks.addPack(e,En(t)):I.styles[e]=y(y({},I.styles[e]||{}),i),e===`fas`&&Dn(`fa`,t)}var R=I.styles,On=I.shims,kn=Object.keys(Ht),An=kn.reduce(function(e,t){return e[t]=Object.keys(Ht[t]),e},{}),jn=null,Mn={},Nn={},Pn={},Fn={},In={};function Ln(e){return~Xt.indexOf(e)}function Rn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Ln(i)?i:null}var zn=function(){var e=function(e){return wn(R,function(t,n,r){return t[r]=wn(n,e,{}),t},{})};Mn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Nn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),In=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in R||A.autoFetchSvg,n=wn(On,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Pn=n.names,Fn=n.unicodes,jn=Kn(A.styleDefault,{family:A.familyDefault})};tn(function(e){jn=Kn(e.styleDefault,{family:A.familyDefault})}),zn();function Bn(e,t){return(Mn[e]||{})[t]}function Vn(e,t){return(Nn[e]||{})[t]}function z(e,t){return(In[e]||{})[t]}function Hn(e){return Pn[e]||{prefix:null,iconName:null}}function Un(e){var t=Fn[e],n=Bn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function B(){return jn}var Wn=function(){return{prefix:null,iconName:null,rest:[]}};function Gn(e){var t=T,n=kn.reduce(function(e,t){return e[t]=`${A.cssPrefix}-${t}`,e},{});return et.forEach(function(r){(e.includes(n[r])||e.some(function(e){return An[r].includes(e)}))&&(t=r)}),t}function Kn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?T:t,r=Rt[n][e];if(n===E&&!e)return`fad`;var i=Bt[n][e]||Bt[n][r],a=e in I.styles?e:null;return i||a||null}function qn(e){var t=[],n=null;return e.forEach(function(e){var r=Rn(A.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Jn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Yn=vt.concat(at);function Xn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Jn(e.filter(function(e){return Yn.includes(e)})),a=Jn(e.filter(function(e){return!Yn.includes(e)})),o=i.filter(function(e){return r=e,!ye.includes(e)}),s=b(o,1)[0],c=s===void 0?null:s,l=Gn(i),u=y(y({},qn(a)),{},{prefix:Kn(c,{family:l})});return y(y(y({},u),er({values:e,family:l,styles:R,config:A,canonical:u,givenPrefix:r})),Zn(n,r,u))}function Zn(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Hn(i):{},o=z(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!R.far&&R.fas&&!A.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Qn=et.filter(function(e){return e!==T||e!==E}),$n=Object.keys(_t).filter(function(e){return e!==T}).map(function(e){return Object.keys(_t[e])}).flat();function er(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===E,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Qn.includes(n)&&(Object.keys(s).find(function(e){return $n.includes(e)})||l.autoFetchSvg)&&(r.prefix=rt.get(n).defaultShortPrefixId,r.iconName=z(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=B()||`fas`),r}var tr=function(){function e(){l(this,e),this.definitions={}}return d(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=y(y({},e.definitions[n]||{}),t[n]),Dn(n,t[n]);var r=Ht[T][n];r&&Dn(r,t[n]),zn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),nr=[],V={},H={},rr=Object.keys(H);function ir(e,t){var n=t.mixoutsTo;return nr=e,V={},Object.keys(H).forEach(function(e){rr.indexOf(e)===-1&&delete H[e]}),nr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ne(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){V[e]||(V[e]=[]),V[e].push(r[e])})}e.provides&&e.provides(H)}),n}function ar(e,t){var n=[...arguments].slice(2);return(V[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function U(e){var t=[...arguments].slice(1);(V[e]||[]).forEach(function(e){e.apply(null,t)})}function W(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return H[e]?H[e].apply(null,t):void 0}function or(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||B();if(t)return t=z(n,t)||t,Sn(sr.definitions,n,t)||Sn(I.styles,n,t)}var sr=new tr,G={noAuto:function(){A.autoReplaceSvg=!1,A.observeMutations=!1,U(`noAuto`)},config:A,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return w?(U(`beforeI2svg`,e),W(`pseudoElements2svg`,e),W(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,xn(function(){cr({autoReplaceSvgRoot:t}),U(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ne(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Kn(e[0]);return{prefix:n,iconName:z(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${A.cssPrefix}-`)>-1||e.match(Wt))){var r=Xn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||B(),iconName:z(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=B();return{prefix:i,iconName:z(i,e)||e}}}},library:sr,findIconDefinition:or,toHtml:L},cr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?C:e;(Object.keys(I.styles).length>0||A.autoFetchSvg)&&w&&A.autoReplaceSvg&&G.dom.i2svg({node:t})};function lr(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return L(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(w){var t=C.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function ur(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(un(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};i.style=ln(y(y({},a),{},{"transform-origin":`${l.x+o.x/16}em ${l.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function dr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${A.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:y(y({},i),{},{id:o}),children:r}]}]}function fr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function pr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[A.replacementClass,a?`${A.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:y(y({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!fr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[O]=``);var _=y(y({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:y({},l.styles)}),v=r.found&&n.found?W(`generateAbstractMask`,_)||{children:[],attributes:{}}:W(`generateAbstractIcon`,_)||{children:[],attributes:{}},b=v.children,x=v.attributes;return _.children=b,_.attributes=x,s?dr(_):ur(_)}function mr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=y(y({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[O]=``);var l=y({},a.styles);un(i)&&(l.transform=fn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=ln(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function hr(e){var t=e.content,n=e.extra,r=y(y({},n.attributes),{},{class:n.classes.join(` `)}),i=ln(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var gr=I.styles;function _r(e){var t=e[0],n=e[1],r=e.slice(4),i=b(r,1)[0],a=null;return a=Array.isArray(i)?{tag:`g`,attributes:{class:`${A.cssPrefix}-${Yt.GROUP}`},children:[{tag:`path`,attributes:{class:`${A.cssPrefix}-${Yt.SECONDARY}`,fill:`currentColor`,d:i[0]}},{tag:`path`,attributes:{class:`${A.cssPrefix}-${Yt.PRIMARY}`,fill:`currentColor`,d:i[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:i}},{found:!0,width:t,height:n,icon:a}}var vr={found:!1,width:512,height:512};function yr(e,t){!Ft&&!A.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function br(e,t){var n=t;return t===`fa`&&A.styleDefault!==null&&(t=B()),new Promise(function(r,i){if(n===`fa`){var a=Hn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&gr[t]&&gr[t][e]){var o=gr[t][e];return r(_r(o))}yr(e,t),r(y(y({},vr),{},{icon:A.showMissingIcons&&e&&W(`missingIconAbstract`)||{}}))})}var xr=function(){},Sr=A.measurePerformance&&fe&&fe.mark&&fe.measure?fe:{mark:xr,measure:xr},K=`FA "7.1.0"`,Cr=function(e){return Sr.mark(`${K} ${e} begins`),function(){return wr(e)}},wr=function(e){Sr.mark(`${K} ${e} ends`),Sr.measure(`${K} ${e}`,`${K} ${e} begins`,`${K} ${e} ends`)},Tr={begin:Cr,end:wr},Er=function(){};function Dr(e){return typeof(e.getAttribute?e.getAttribute(O):null)==`string`}function Or(e){var t=e.getAttribute?e.getAttribute(kt):null,n=e.getAttribute?e.getAttribute(At):null;return t&&n}function kr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function Ar(){return A.autoReplaceSvg===!0?Fr.replace:Fr[A.autoReplaceSvg]||Fr.replace}function jr(e){return C.createElementNS(`http://www.w3.org/2000/svg`,e)}function Mr(e){return C.createElement(e)}function Nr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?jr:Mr:t;if(typeof e==`string`)return C.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Nr(e,{ceFn:n}))}),r}function Pr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Fr={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Nr(e),t)}),t.getAttribute(O)===null&&A.keepOriginalSource){var n=C.createComment(Pr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~on(t).indexOf(A.replacementClass))return Fr.replace(e);var r=RegExp(`${A.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===A.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return L(e)}).join(`
`);t.setAttribute(O,``),t.innerHTML=a}};function Ir(e){e()}function Lr(e,t){var n=typeof t==`function`?t:Er;if(e.length===0)n();else{var r=Ir;A.mutateApproach===Mt&&(r=S.requestAnimationFrame||Ir),r(function(){var t=Ar(),r=Tr.begin(`mutate`);e.map(t),r(),n()})}}var Rr=!1;function zr(){Rr=!0}function Br(){Rr=!1}var Vr=null;function Hr(e){if(de&&A.observeMutations){var t=e.treeCallback,n=t===void 0?Er:t,r=e.nodeCallback,i=r===void 0?Er:r,a=e.pseudoElementsCallback,o=a===void 0?Er:a,s=e.observeMutationsRoot,c=s===void 0?C:s;Vr=new de(function(e){if(!Rr){var t=B();P(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Dr(e.addedNodes[0])&&(A.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&A.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Dr(e.target)&&~Jt.indexOf(e.attributeName))if(e.attributeName===`class`&&Or(e.target)){var r=Xn(on(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(kt,a||t),s&&e.target.setAttribute(At,s)}else kr(e.target)&&i(e.target)})}}),w&&Vr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ur(){Vr&&Vr.disconnect()}function Wr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Gr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Xn(on(e));return i.prefix||=B(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Vn(i.prefix,e.innerText)||Bn(i.prefix,Tn(e.innerText))),!i.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Kr(e){return P(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function qr(){return{iconName:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Gr(e),r=n.iconName,i=n.prefix,a=n.rest,o=Kr(e),s=ar(`parseNodeAttributes`,{},e),c=t.styleParser?Wr(e):[];return y({iconName:r,prefix:i,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:o}},s)}var Yr=I.styles;function Xr(e){var t=A.autoReplaceSvg===`nest`?Jr(e,{styleParser:!1}):Jr(e);return~t.extra.classes.indexOf(Gt)?W(`generateLayersText`,e,t):W(`generateSvgReplacementMutation`,e,t)}function Zr(){return[].concat(x(at),x(vt))}function Qr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!w)return Promise.resolve();var n=C.documentElement.classList,r=function(e){return n.add(`${jt}-${e}`)},i=function(e){return n.remove(`${jt}-${e}`)},a=A.autoFetchSvg?Zr():ye.concat(Object.keys(Yr));a.includes(`fa`)||a.push(`fa`);var o=[`.${Gt}:not([${O}])`].concat(a.map(function(e){return`.${e}:not([${O}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=P(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Tr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Xr(t);n&&e.push(n)}catch(e){Ft||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Lr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function $r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xr(e).then(function(e){e&&Lr([e],t)})}function ei(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:or(t||{}),i=n.mask;return i&&=(i||{}).icon?i:or(i||{}),e(r,y(y({},n),{},{mask:i}))}}var ti=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?N:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return lr(y({type:`icon`},e),function(){return U(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),pr({icons:{main:_r(v),mask:s?_r(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:y(y({},N),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ni={mixout:function(){return{icon:ei(ti)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Qr,e.nodeCallback=$r,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?C:t,r=e.callback;return Qr(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([br(n,r),o.iconName?br(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=b(o,2),u=l[0],d=l[1];t([e,pr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=ln(a);o.length>0&&(n.style=o);var s;return un(i)&&(s=W(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},ri={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return lr({type:`layer`},function(){U(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${A.cssPrefix}-layers`].concat(x(r)).join(` `)},children:n}]})}}}},ii={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return lr({type:`counter`,content:e},function(){return U(`beforeDOMElementCreation`,{content:e,params:t}),hr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${A.cssPrefix}-layers-counter`].concat(x(a))}})})}}}},ai={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?N:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return lr({type:`text`,content:e},function(){return U(`beforeDOMElementCreation`,{content:e,params:t}),mr({content:e,transform:y(y({},N),r),extra:{attributes:s,styles:l,classes:[`${A.cssPrefix}-layers-text`].concat(x(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(pe){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,mr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},oi=RegExp(`"`,`ug`),si=[1105920,1112319],ci=y(y(y(y({},{FontAwesome:{normal:`fas`,400:`fas`}}),nt),Ct),lt),li=Object.keys(ci).reduce(function(e,t){return e[t.toLowerCase()]=ci[t],e},{}),ui=Object.keys(li).reduce(function(e,t){var n=li[t];return e[t]=n[900]||x(Object.entries(n))[0][1],e},{});function di(e){var t=e.replace(oi,``);return Tn(x(t)[0]||``)}function fi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(oi,``),r=n.codePointAt(0),i=r>=si[0]&&r<=si[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function pi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(li[n]||{})[i]||ui[n]}function mi(e,t){var n=`${Ot}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=P(e.children).filter(function(e){return e.getAttribute(Dt)===t})[0],o=S.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Kt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=pi(s,l),p=di(d),m=c[0].startsWith(`FontAwesome`),h=fi(o),g=Bn(f,p),_=g;if(m){var v=Un(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(kt)!==f||a.getAttribute(At)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var b=qr(),x=b.extra;x.attributes[Dt]=t,br(g,f).then(function(i){var a=pr(y(y({},b),{},{icons:{main:i,mask:Wn()},prefix:f,iconName:_,extra:x,watchable:!0})),o=C.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return L(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function hi(e){return Promise.all([mi(e,`::before`),mi(e,`::after`)])}function gi(e){return e.parentNode!==document.head&&!~Nt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var _i=function(e){return!!e&&Pt.some(function(t){return e.includes(t)})},vi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=f(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(_i(a)){var o=Pt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(w){var n;if(t)n=e;else if(A.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=f(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=f(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=vi(l.selectorText),d=f(u),p;try{for(d.s();!(p=d.n()).done;){var m=p.value;r.add(m)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){A.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var h=Array.from(r).join(`, `);try{n=e.querySelectorAll(h)}catch{}}return new Promise(function(e,t){var r=P(n).filter(gi).map(hi),i=Tr.begin(`searchPseudoElements`);zr(),Promise.all(r).then(function(){i(),Br(),e()}).catch(function(){i(),Br(),t()})})}}var bi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=yi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?C:t;A.searchPseudoElements&&yi(n)}}},xi=!1,Si={mixout:function(){return{dom:{unwatch:function(){zr(),xi=!0}}}},hooks:function(){return{bootstrap:function(){Hr(ar(`mutationObserverCallbacks`,{}))},noAuto:function(){Ur()},watch:function(e){var t=e.observeMutationsRoot;xi?Br():Hr(ar(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ci=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},wi={mixout:function(){return{parse:{transform:function(e){return Ci(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ci(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={transform:`translate(${r/2} 256)`},o=`translate(${n.x*32}, ${n.y*32}) `,s=`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `,c=`rotate(${n.rotate} 0 0)`,l={transform:`${o} ${s} ${c}`},u={transform:`translate(${i/2*-1} -256)`},d={outer:a,inner:l,path:u};return{tag:`g`,attributes:y({},d.outer),children:[{tag:`g`,attributes:y({},d.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:y(y({},t.icon.attributes),d.path)}]}]}}}},Ti={x:0,y:0,width:`100%`,height:`100%`};function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Di(e){return e.tag===`g`?e.children:[e]}ir([_n,ni,ri,ii,ai,bi,Si,wi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Xn(n.split(` `).map(function(e){return e.trim()})):Wn();return r.prefix||=B(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=dn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:y(y({},Ti),{},{fill:`white`})},p=c.children?{children:c.children.map(Ei)}:{},m={tag:`g`,attributes:y({},d.inner),children:[Ei(y({tag:c.tag,attributes:y(y({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:y({},d.outer),children:[m]},g=`mask-${a||an()}`,_=`clip-${a||an()}`,v={tag:`mask`,attributes:y(y({},Ti),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Di(u)},v]};return t.push(b,{tag:`rect`,attributes:y({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ti)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;S.matchMedia&&(t=S.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:y(y({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=y(y({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:y(y({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:y(y({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:y(y({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:y(y({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:y(y({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:y(y({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:y(y({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:G}),G.noAuto;var q=G.config;G.library,G.dom;var Oi=G.parse;G.findIconDefinition,G.toHtml;var ki=G.icon;G.layer,G.text,G.counter;var J=t(n());function Ai(e){return e-=0,e===e}function ji(e){return Ai(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function Mi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Y=new Map,Ni=1e3;function Pi(e){if(Y.has(e))return Y.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=ji(n);t[e.startsWith(`webkit`)?Mi(e):e]=r}}}n=a+1}if(Y.size===Ni){let e=Y.keys().next().value;e&&Y.delete(e)}return Y.set(e,t),t}function Fi(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>Fi(e,t)),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Pi(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[ji(e)]=t}let{style:o,"aria-label":s,...c}=n;return o&&(a.style=a.style?{...a.style,...o}:o),s&&(a[`aria-label`]=s,a[`aria-hidden`]=`false`),e(t.tag,{...c,...a},...r)}var Ii=Fi.bind(null,a.createElement),Li=(e,t)=>{let n=(0,a.useId)();return e||(t?n:void 0)},Ri=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var zi=`searchPseudoElementsFullScan`in q?`7.0.0`:`6.0.0`,Bi=Number.parseInt(zi)>=7,X=`fa`,Z={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},Vi={left:`fa-pull-left`,right:`fa-pull-right`},Hi={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Ui={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Q={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Wi={default:`fa-layers`};function Gi(e){let t=q.cssPrefix||q.familyPrefix||X;return t===X?e:e.replace(RegExp(`(?<=^|\\s)${X}-`,`g`),`${t}-`)}function Ki(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Z.beat),n&&x.push(Z.fade),r&&x.push(Z.beatFade),i&&x.push(Z.bounce),a&&x.push(Z.shake),o&&x.push(Z.spin),c&&x.push(Z.spinReverse),s&&x.push(Z.spinPulse),l&&x.push(Z.pulse),u&&x.push(Q.fixedWidth),d&&x.push(Q.inverse),f&&x.push(Q.border),p===!0&&x.push(Q.flip),(p===`horizontal`||p===`both`)&&x.push(Q.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(Q.flipVertical),m!=null&&x.push(Ui[m]),h!=null&&h!==0&&x.push(Hi[h]),g!=null&&x.push(Vi[g]),_&&x.push(Q.swapOpacity),Bi?(v&&x.push(Q.rotateBy),y&&x.push(Q.widthAuto),(q.cssPrefix||q.familyPrefix||X)===X?x:x.map(Gi)):x}var qi=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function Ji(e){if(e)return qi(e)?e:Oi.icon(e)}function Yi(e){return Object.keys(e)}var Xi=new Ri(`FontAwesomeIcon`),Zi={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Qi=new Set(Object.keys(Zi)),$=a.forwardRef((e,t)=>{let n={...Zi,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Li(c,!!i),d=Li(s,!!o),f=Ji(r);if(!f)return Xi.error(`Icon lookup is undefined`,r),null;let p=Ki(n),m=typeof l==`string`?Oi.transform(l):l,h=Ji(i),g=ki(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Xi.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Yi(n))Qi.has(e)||(v[e]=n[e]);return Ii(_[0],v)});$.displayName=`FontAwesomeIcon`,`${Wi.default}${Q.fixedWidth}`;var $i={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},ea={prefix:`fas`,iconName:`wallet`,icon:[512,512,[],`f555`,`M64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L72 128c-13.3 0-24-10.7-24-24S58.7 80 72 80l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L64 32zM416 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z`]},ta={prefix:`fas`,iconName:`headset`,icon:[448,512,[],`f590`,`M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z`]},na={prefix:`fas`,iconName:`user-shield`,icon:[576,512,[],`f505`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l251.5 0C261 469.4 240 414.5 240 356.4l0-31.1c0-7.3 1-14.5 2.9-21.3l-48.6 0zm251 184.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z`]},ra={prefix:`fas`,iconName:`chart-line`,icon:[512,512,[`line-chart`],`f201`,`M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z`]},ia={prefix:`fas`,iconName:`comments`,icon:[576,512,[128490,61670],`f086`,`M384 144c0 97.2-86 176-192 176-26.7 0-52.1-5-75.2-14L35.2 349.2c-9.3 4.9-20.7 3.2-28.2-4.2s-9.2-18.9-4.2-28.2l35.6-67.2C14.3 220.2 0 183.6 0 144 0 46.8 86-32 192-32S384 46.8 384 144zm0 368c-94.1 0-172.4-62.1-188.8-144 120-1.5 224.3-86.9 235.8-202.7 83.3 19.2 145 88.3 145 170.7 0 39.6-14.3 76.2-38.4 105.6l35.6 67.2c4.9 9.3 3.2 20.7-4.2 28.2s-18.9 9.2-28.2 4.2L459.2 498c-23.1 9-48.5 14-75.2 14z`]},aa={prefix:`fas`,iconName:`phone`,icon:[512,512,[128222,128379],`f095`,`M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z`]},oa={prefix:`fas`,iconName:`star`,icon:[576,512,[11088,61446],`f005`,`M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z`]},sa={prefix:`fas`,iconName:`location-dot`,icon:[384,512,[`map-marker-alt`],`f3c5`,`M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z`]},ca={prefix:`fas`,iconName:`hand-holding-dollar`,icon:[576,512,[`hand-holding-usd`],`f4c0`,`M288-16c-13.3 0-24 10.7-24 24l0 12-1.8 0c-36.6 0-66.2 29.7-66.2 66.2 0 33.4 24.9 61.6 58 65.7l61 7.6c5.1 .6 9 5 9 10.2 0 5.7-4.6 10.2-10.2 10.2L240 180c-15.5 0-28 12.5-28 28s12.5 28 28 28l24 0 0 12c0 13.3 10.7 24 24 24s24-10.7 24-24l0-12 1.8 0c36.6 0 66.2-29.7 66.2-66.2 0-33.4-24.9-61.6-58-65.7l-61-7.6c-5.1-.6-9-5-9-10.2 0-5.7 4.6-10.2 10.2-10.2L328 76c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0 0-12c0-13.3-10.7-24-24-24zM109.3 341.5L66.7 384 32 384c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l320.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416 280 416c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-152.2 0c-33.9 0-66.5 13.5-90.5 37.5z`]},la={prefix:`fab`,iconName:`facebook-f`,icon:[320,512,[],`f39e`,`M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z`]},ua={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},da={prefix:`fab`,iconName:`linkedin-in`,icon:[448,512,[],`f0e1`,`M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z`]},fa={prefix:`fab`,iconName:`twitter`,icon:[512,512,[],`f099`,`M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z`]},pa=()=>{let e=r(),{t}=i();return(0,J.jsx)(`section`,{id:`home`,className:`hero`,children:(0,J.jsxs)(`div`,{className:`heroContent`,children:[(0,J.jsx)(`h1`,{children:t(`home.title`)}),(0,J.jsx)(`p`,{children:t(`home.subtitle`)}),(0,J.jsx)(`button`,{className:`ctaButton`,onClick:()=>{e(`/signin`)},children:t(`home.tryNow`)})]})})},ma=()=>{let e=(0,a.useRef)([]),{t}=i();(0,a.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`revealed`)})},{threshold:.1});return e.current.forEach(e=>{e&&t.observe(e)}),()=>{e.current.forEach(e=>{e&&t.unobserve(e)})}},[]);let n=[{icon:ea,title:t(`home.services`),description:t(`home.servicesDescription`)},{icon:ca,title:t(`home.howItWorks`),description:t(`home.howItWorksDescription`)},{icon:ia,title:t(`home.testimonials`),description:t(`home.testimonialsDescription`)},{icon:ra,title:t(`home.services`),description:t(`home.servicesDescription`)},{icon:na,title:t(`home.howItWorks`),description:t(`home.howItWorksDescription`)},{icon:ta,title:t(`home.testimonials`),description:t(`home.testimonialsDescription`)}];return(0,J.jsx)(`section`,{id:`services`,className:`services`,children:(0,J.jsxs)(`div`,{className:`container`,children:[(0,J.jsxs)(`div`,{className:`sectionTitle`,children:[(0,J.jsx)(`h2`,{children:t(`home.services`)}),(0,J.jsx)(`p`,{children:t(`home.servicesDescription`)})]}),(0,J.jsx)(`div`,{className:`servicesGrid`,children:n.map((t,n)=>(0,J.jsxs)(`div`,{className:`serviceCard`,ref:t=>e.current[n]=t,children:[(0,J.jsx)(`div`,{className:`serviceIcon`,children:(0,J.jsx)($,{icon:t.icon})}),(0,J.jsx)(`h3`,{children:t.title}),(0,J.jsx)(`p`,{children:t.description})]},n))})]})})},ha=()=>{let e=(0,a.useRef)([]),{t}=i();(0,a.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`revealed`)})},{threshold:.1});return e.current.forEach(e=>{e&&t.observe(e)}),()=>{e.current.forEach(e=>{e&&t.unobserve(e)})}},[]);let n=[{title:t(`home.howItWorks`),description:t(`home.howItWorksDescription`)},{title:t(`home.services`),description:t(`home.servicesDescription`)},{title:t(`home.testimonials`),description:t(`home.testimonialsDescription`)},{title:t(`home.howItWorks`),description:t(`home.howItWorksDescription`)}];return(0,J.jsx)(`section`,{id:`how-it-works`,className:`howItWorks`,children:(0,J.jsxs)(`div`,{className:`container`,children:[(0,J.jsxs)(`div`,{className:`sectionTitle`,children:[(0,J.jsx)(`h2`,{children:t(`home.howItWorks`)}),(0,J.jsx)(`p`,{children:t(`home.howItWorksDescription`)})]}),(0,J.jsx)(`div`,{className:`stepsContainer`,children:n.map((t,n)=>(0,J.jsxs)(`div`,{className:`step`,ref:t=>e.current[n]=t,children:[(0,J.jsx)(`div`,{className:`stepNumber`,children:n+1}),(0,J.jsx)(`h3`,{children:t.title}),(0,J.jsx)(`p`,{children:t.description})]},n))})]})})},ga=()=>{let e=(0,a.useRef)([]),{t}=i();return(0,a.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`revealed`)})},{threshold:.1});return e.current.forEach(e=>{e&&t.observe(e)}),()=>{e.current.forEach(e=>{e&&t.unobserve(e)})}},[]),(0,J.jsx)(`section`,{id:`testimonials`,className:`testimonials`,children:(0,J.jsxs)(`div`,{className:`container`,children:[(0,J.jsxs)(`div`,{className:`sectionTitle`,children:[(0,J.jsx)(`h2`,{children:t(`home.testimonials`)}),(0,J.jsx)(`p`,{children:t(`home.testimonialsDescription`)})]}),(0,J.jsx)(`div`,{className:`testimonialsContainer`,children:[{name:`Sarah Johnson`,role:`Small Business Owner`,avatar:`https://picsum.photos/seed/person1/100/100.jpg`,content:`Money Box has completely transformed how I manage my finances. The interface is intuitive, and the cashout process is incredibly fast. I couldn't be happier with this platform!`},{name:`Michael Chen`,role:`Freelance Developer`,avatar:`https://picsum.photos/seed/person2/100/100.jpg`,content:`I've tried several financial platforms, but Money Box stands out with its security features and excellent customer support. It's become an essential tool for my daily transactions.`},{name:`Emily Rodriguez`,role:`Digital Marketer`,avatar:`https://picsum.photos/seed/person3/100/100.jpg`,content:`The community feature is what sets Money Box apart. I love being able to connect with others, share insights, and get advice. It's more than just a financial platform; it's a community.`}].map((t,n)=>(0,J.jsxs)(`div`,{className:`testimonial`,ref:t=>e.current[n]=t,children:[(0,J.jsx)(`div`,{className:`testimonialContent`,children:(0,J.jsx)(`p`,{children:t.content})}),(0,J.jsxs)(`div`,{className:`testimonialAuthor`,children:[(0,J.jsx)(`img`,{src:t.avatar,alt:t.name,className:`authorAvatar`}),(0,J.jsxs)(`div`,{className:`authorInfo`,children:[(0,J.jsx)(`h4`,{children:t.name}),(0,J.jsx)(`p`,{children:t.role})]})]}),(0,J.jsx)(`div`,{className:`testimonialRating`,children:[...[,,,,,]].map((e,t)=>(0,J.jsx)($,{icon:oa},t))})]},n))})]})})},_a=()=>{let{t:e}=i();return(0,J.jsx)(`footer`,{id:`contact`,className:`footer`,children:(0,J.jsxs)(`div`,{className:`container`,children:[(0,J.jsxs)(`div`,{className:`footerContent`,children:[(0,J.jsxs)(`div`,{className:`footerSection`,children:[(0,J.jsx)(`h3`,{children:`About Money Box`}),(0,J.jsx)(`p`,{children:`Money Box is a modern financial platform designed to make managing your money simple, secure, and efficient. Join thousands of users who trust us with their financial needs.`}),(0,J.jsxs)(`div`,{className:`socialLinks`,children:[(0,J.jsx)(`a`,{href:`#`,children:(0,J.jsx)($,{icon:la})}),(0,J.jsx)(`a`,{href:`#`,children:(0,J.jsx)($,{icon:fa})}),(0,J.jsx)(`a`,{href:`#`,children:(0,J.jsx)($,{icon:ua})}),(0,J.jsx)(`a`,{href:`#`,children:(0,J.jsx)($,{icon:da})})]})]}),(0,J.jsxs)(`div`,{className:`footerSection`,children:[(0,J.jsx)(`h3`,{children:`Quick Links`}),(0,J.jsxs)(`ul`,{className:`footerLinks`,children:[(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#home`,children:e(`navigation.home`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#services`,children:e(`home.services`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#how-it-works`,children:e(`home.howItWorks`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#testimonials`,children:e(`home.testimonials`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#`,children:e(`policies.title`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#`,children:e(`admin.userManagement`)})})]})]}),(0,J.jsxs)(`div`,{className:`footerSection`,children:[(0,J.jsx)(`h3`,{children:e(`home.services`)}),(0,J.jsxs)(`ul`,{className:`footerLinks`,children:[(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#`,children:e(`home.services`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#`,children:e(`home.howItWorks`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#`,children:e(`home.testimonials`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#`,children:e(`home.services`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#`,children:e(`home.howItWorks`)})}),(0,J.jsx)(`li`,{children:(0,J.jsx)(`a`,{href:`#`,children:e(`home.testimonials`)})})]})]}),(0,J.jsxs)(`div`,{className:`footerSection`,children:[(0,J.jsx)(`h3`,{children:e(`admin.contact`)}),(0,J.jsxs)(`ul`,{className:`footerLinks`,children:[(0,J.jsxs)(`li`,{children:[(0,J.jsx)($,{icon:sa}),` rwanda kirihe mahama V13 - C15`]}),(0,J.jsxs)(`li`,{children:[(0,J.jsx)($,{icon:aa}),` +250795774877`]}),(0,J.jsxs)(`li`,{children:[(0,J.jsx)($,{icon:$i}),` omaryagoub77@gmail.com`]})]})]})]}),(0,J.jsx)(`div`,{className:`copyright`,children:(0,J.jsx)(`p`,{children:`© 2023 Money Box. All rights reserved.`})})]})})},va=()=>(0,J.jsxs)(`div`,{className:`home`,children:[(0,J.jsx)(pa,{}),(0,J.jsx)(ma,{}),(0,J.jsx)(ha,{}),(0,J.jsx)(ga,{}),(0,J.jsx)(_a,{})]});export{va as default};