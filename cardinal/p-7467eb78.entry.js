import{r as e,c as t,h as o}from"./p-87f0c668.js";import"./p-45edd0b3.js";import"./p-c06cc5e4.js";import"./p-5120ebde.js";import{C as r}from"./p-92873cc3.js";import{T as i}from"./p-0fb49658.js";import{T as s}from"./p-454c45f1.js";var n=function(e,t,o,r){var i,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(n=(s<3?i(n):s>3?i(t,o,n):i(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};const p=class{constructor(o){e(this,o),this.needRoutesEvt=t(this,"needRoutes",7),this.getHistoryType=t(this,"getHistoryType",7),this.getCustomLandingPage=t(this,"getCustomLandingPage",7),this.routesItems=[],this.notFoundRoute=null,this.landingPage=""}componentWillLoad(){let e=Promise.resolve();return e.then(()=>new Promise(e=>{this.needRoutesEvt.emit((t,o)=>{t&&console.log(t),this.routesItems=o,e()})})),e.then(()=>new Promise(e=>{this.getHistoryType.emit((t,o)=>{t&&console.log(t),this.historyType=o,e()})})),e.then(()=>new Promise(e=>{this.getCustomLandingPage.emit((t,o)=>{t&&console.log(t),o&&(this.landingPage=o),e()})})),e}renderItems(e){let t=[];return"object"==typeof e&&(t=e.map(e=>("404"==e.name&&(this.notFoundRoute=e.path),e.children?"event"===e.children.type?o("stencil-route",{url:`${e.path}/:${e.propName}`,exact:!0,component:e.component}):this.renderItems(e.children.items):o("stencil-route",{url:e.path,component:e.component,componentProps:e.componentProps})))),t}render(){let e=this.renderItems(this.routesItems);if(0===e.length)return o("psk-ui-loader",{shouldBeRendered:!0});this.notFoundRoute||(this.notFoundRoute=this.routesItems[0].path);let t=new URL(window.basePath).pathname;window.$$&&$$.SSAPP_CONTEXT&&$$.SSAPP_CONTEXT.BASE_URL&&$$.SSAPP_CONTEXT.SEED&&(t=t.replace(new URL($$.SSAPP_CONTEXT.BASE_URL).pathname,""));let r=[t];t.length>1&&t.endsWith("/")&&(t=t.substring(0,t.length-1),r.push(t));let i=r.map(e=>o("stencil-route",{url:e,exact:!0,component:"psk-route-redirect",componentProps:{url:this.routesItems[0].path}}));return o("div",{class:"app_container"},o("stencil-router",{historyType:"query"===this.historyType?"browser":this.historyType},o("stencil-route-switch",{scrollTopOffset:0},"query"===this.historyType?[o("stencil-route",{component:"query-pages-router",componentProps:{pages:this.routesItems}}),this.landingPage?o("stencil-router-redirect",{url:this.landingPage}):null]:[i,e,this.landingPage?o("stencil-router-redirect",{url:this.landingPage}):o("stencil-route",{component:"psk-page-not-found",componentProps:{urlDestination:this.notFoundRoute}})]),this.landingPage?o("stencil-router-redirect",{url:this.landingPage}):null))}};n([r(),s({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:!1,propertyType:"Array of MenuItem types(MenuItem[])"})],p.prototype,"routesItems",void 0),n([s({description:"This is the history type that will be passed along to the stencil-router",isMandatory:!1,propertyType:"string",defaultValue:"browser"})],p.prototype,"historyType",void 0),n([i({eventName:"needRoutes",controllerInteraction:{required:!0},description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],p.prototype,"needRoutesEvt",void 0),n([i({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type "})],p.prototype,"getHistoryType",void 0),n([i({eventName:"hasCustomLandingPage",controllerInteraction:{required:!0},description:"Check if a custom landing page is requested"})],p.prototype,"getCustomLandingPage",void 0);export{p as psk_app_router}