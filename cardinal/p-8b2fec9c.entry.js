import{r as e,c as r,h as s}from"./p-87f0c668.js";import"./p-45edd0b3.js";import{M as t}from"./p-c06cc5e4.js";import"./p-5120ebde.js";import{C as i}from"./p-92873cc3.js";const o=class{constructor(s){e(this,s),this.getAppVersion=r(this,"getAppVersion",7),this.mobileLayout=!1,this.disableSidebar=!1}componentWillLoad(){return new Promise(e=>{this.getAppVersion.emit((r,s)=>{r||(this.appVersion=s),e()})})}render(){let e=s("psk-app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:t}),r=s("div",{class:"nav-footer"},"version ",this.appVersion),i=[];return i=this.mobileLayout?[s("psk-user-profile",{"profile-renderer":"mobile-profile-renderer"}),e]:[s("psk-user-profile",null),e,r],s("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},!1===this.disableSidebar?s("aside",null,i):null,s("section",null,s("psk-app-router",null),!0===this.mobileLayout?r:null))}};!function(e,r,s,t){var i,o=arguments.length,l=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,s,t);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(l=(o<3?i(l):o>3?i(r,s,l):i(r,s))||l);o>3&&l&&Object.defineProperty(r,s,l)}([i()],o.prototype,"mobileLayout",void 0);export{o as psk_default_renderer}