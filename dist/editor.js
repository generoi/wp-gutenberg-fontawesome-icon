!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=7)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.richText},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(9),o=r(10),c=r(11),a=r(13);e.exports=function(e,t){return n(e)||o(e,t)||c(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blockEditor},function(e,t,r){e.exports=r(8)},function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),c=r(5),a=r.n(c),i=r(0),l=r(3),u=r(1),s=r(2),f=r(6);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"genero/fontawesome-icon",title:"FontAwesome Icon",tagName:"i",className:null,attributes:{className:"class"},edit:function(e){var t=e.value,r=e.onChange,n=e.isObjectActive,o=e.activeObjectAttributes;return Object(i.useEffect)((function(){var e,t,r=window.getSelection();if(null!==(e=r.anchorNode)&&void 0!==e&&null!==(t=e.classList)&&void 0!==t&&t.contains("fa")){var n=document.createRange();n.selectNode(r.anchorNode),r.removeAllRanges(),r.addRange(n)}})),Object(i.createElement)(i.Fragment,null,Object(i.createElement)(f.RichTextToolbarButton,{icon:Object(i.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},Object(i.createElement)(u.Path,{d:"M444.373 359.424c0 7.168-6.144 10.24-13.312 13.312-28.672 12.288-59.392 23.552-92.16 23.552-46.08 0-67.584-28.672-122.88-28.672-39.936 0-81.92 14.336-115.712 29.696-2.048 1.024-4.096 1.024-6.144 2.048v77.824c0 21.405-16.122 34.816-33.792 34.816-19.456 0-34.816-15.36-34.816-34.816V102.4C12.245 92.16 3.029 75.776 3.029 57.344 3.029 25.6 28.629 0 60.373 0s57.344 25.6 57.344 57.344c0 18.432-8.192 34.816-22.528 45.056v31.744c4.124-1.374 58.768-28.672 114.688-28.672 65.27 0 97.676 27.648 126.976 27.648 38.912 0 81.92-27.648 92.16-27.648 8.192 0 15.36 6.144 15.36 13.312v240.64z"})),title:"Insert Icon",onClick:function(){var e=Object(s.create)({html:'<i class="fa fa-flag"></i> '});r(Object(s.insert)(t,e))},isActive:n}),n&&Object(i.createElement)(d,{value:t,onChange:r,activeObjectAttributes:o,isObjectActive:n}))}};function d(e){var t=e.value,r=e.onChange,n=e.isObjectActive,o=e.activeObjectAttributes,c=o.className,s=Object(i.useState)(c),f=a()(s,2),p=f[0],d=f[1],v=Object(i.useMemo)((function(){var e=window.getSelection();return e.rangeCount?e.getRangeAt(0):null}),[n]);return Object(i.createElement)(u.Popover,{position:"bottom center",focusOnMount:!1,anchorRef:v,className:"block-editor-format-toolbar__image-popover"},Object(i.createElement)("form",{className:"block-editor-format-toolbar__image-container-content",onSubmit:function(e){var n=t.replacements.slice();n[t.start]={type:m.name,attributes:b(b({},o),{},{className:p})},r(b(b({},t),{},{replacements:n})),e.preventDefault()}},Object(i.createElement)(u.TextControl,{className:"block-editor-format-toolbar__image-container-value",label:Object(l.__)("Class names"),value:p,onChange:function(e){return d(e)}}),Object(i.createElement)(u.Button,{icon:Object(i.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(i.createElement)(u.Path,{d:"M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"})),label:Object(l.__)("Apply"),type:"submit"})))}Object(s.registerFormatType)(m.name,m)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(12);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}]);