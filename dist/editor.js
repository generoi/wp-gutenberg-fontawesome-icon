!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=window.wp.element,o=window.wp.i18n,a=window.wp.components,c=window.wp.richText,i=window.wp.blockEditor;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"genero/fontawesome-icon",title:"FontAwesome Icon",tagName:"i",className:null,attributes:{className:"class"},edit:function(e){var t=e.value,n=e.onChange,o=e.isObjectActive,l=e.activeObjectAttributes,s=e.contentRef;return(0,r.useEffect)((function(){var e,t,n=s.current.ownerDocument.defaultView.getSelection();if(null!==(e=n.anchorNode)&&void 0!==e&&null!==(t=e.classList)&&void 0!==t&&t.contains("fa")){var r=document.createRange();r.selectNode(n.anchorNode),n.removeAllRanges(),n.addRange(r)}})),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(i.RichTextToolbarButton,{icon:(0,r.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},(0,r.createElement)(a.Path,{d:"M444.373 359.424c0 7.168-6.144 10.24-13.312 13.312-28.672 12.288-59.392 23.552-92.16 23.552-46.08 0-67.584-28.672-122.88-28.672-39.936 0-81.92 14.336-115.712 29.696-2.048 1.024-4.096 1.024-6.144 2.048v77.824c0 21.405-16.122 34.816-33.792 34.816-19.456 0-34.816-15.36-34.816-34.816V102.4C12.245 92.16 3.029 75.776 3.029 57.344 3.029 25.6 28.629 0 60.373 0s57.344 25.6 57.344 57.344c0 18.432-8.192 34.816-22.528 45.056v31.744c4.124-1.374 58.768-28.672 114.688-28.672 65.27 0 97.676 27.648 126.976 27.648 38.912 0 81.92-27.648 92.16-27.648 8.192 0 15.36 6.144 15.36 13.312v240.64z"})),title:"Insert Icon",onClick:function(){var e=(0,c.create)({html:'<i class="fa fa-flag"></i> '});n((0,c.insert)(t,e))},isActive:o}),o&&(0,r.createElement)(f,{value:t,onChange:n,activeObjectAttributes:l,isObjectActive:o,contentRef:s}))}};function f(e){var t=e.value,i=e.onChange,l=e.activeObjectAttributes,f=e.contentRef,m=l.className,b=n((0,r.useState)(m),2),v=b[0],p=b[1],w=(0,c.useAnchorRef)({ref:f,value:t,settings:u});return(0,r.createElement)(a.Popover,{position:"bottom center",focusOnMount:!1,anchorRef:w,className:"block-editor-format-toolbar__image-popover"},(0,r.createElement)("form",{className:"block-editor-format-toolbar__image-container-content",onSubmit:function(e){var n=t.replacements.slice();n[t.start]={type:u.name,attributes:s(s({},l),{},{className:v})},i(s(s({},t),{},{replacements:n})),e.preventDefault()}},(0,r.createElement)(a.TextControl,{className:"block-editor-format-toolbar__image-container-value",label:(0,o.__)("Class names"),value:v,onChange:function(e){return p(e)}}),(0,r.createElement)(a.Button,{icon:(0,r.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,r.createElement)(a.Path,{d:"M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"})),label:(0,o.__)("Apply"),type:"submit"})))}(0,c.registerFormatType)(u.name,u)}();