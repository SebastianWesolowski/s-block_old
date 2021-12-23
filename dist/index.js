"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=require("react/jsx-runtime"),t=function(){return t=Object.assign||function(o){for(var t,r=1,e=arguments.length;r<e;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o},t.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */exports.SButton=function(r){var e=r.primary,n=void 0!==e&&e,a=r.size,i=void 0===a?"medium":a,u=r.backgroundColor,l=r.label,b=function(o,t){var r={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(r[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(e=Object.getOwnPropertySymbols(o);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(o,e[n])&&(r[e[n]]=o[e[n]])}return r}(r,["primary","size","backgroundColor","label"]),c=n?"storybook-button--primary":"storybook-button--secondary";return o.jsx("button",t({type:"button",className:["storybook-button","storybook-button--".concat(i),c].join(" "),style:{backgroundColor:u}},b,{children:l}),void 0)};
