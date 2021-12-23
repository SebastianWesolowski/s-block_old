import{jsx as o}from"react/jsx-runtime";
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
***************************************************************************** */var r=function(){return r=Object.assign||function(o){for(var r,t=1,n=arguments.length;t<n;t++)for(var e in r=arguments[t])Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e]);return o},r.apply(this,arguments)};var t=function(t){var n=t.primary,e=void 0!==n&&n,a=t.size,i=void 0===a?"medium":a,b=t.backgroundColor,l=t.label,c=function(o,r){var t={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&r.indexOf(n)<0&&(t[n]=o[n]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(n=Object.getOwnPropertySymbols(o);e<n.length;e++)r.indexOf(n[e])<0&&Object.prototype.propertyIsEnumerable.call(o,n[e])&&(t[n[e]]=o[n[e]])}return t}(t,["primary","size","backgroundColor","label"]),u=e?"storybook-button--primary":"storybook-button--secondary";return o("button",r({type:"button",className:["storybook-button","storybook-button--".concat(i),u].join(" "),style:{backgroundColor:b}},c,{children:l}),void 0)};export{t as SButton};
