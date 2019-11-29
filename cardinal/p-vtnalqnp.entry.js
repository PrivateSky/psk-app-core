import{r as e,h as t}from"./p-a1b3783e.js";import{T as s}from"./p-9b98810e.js";import"./p-83ac245a.js";import{C as o}from"./p-02bd97ff.js";var i=function(e,t,s,o){var i,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(r=(a<3?i(r):a>3?i(t,s,r):i(t,s))||r);return a>3&&r&&Object.defineProperty(t,s,r),r};const a=class{constructor(t){e(this,t),this.opened=!1}render(){return[t("div",{id:"backdrop",onClick:e=>{e.preventDefault(),this.opened=!this.opened}}),t("div",{class:"container"},t("ul",{class:"items"},this.menuItems.map(e=>{t("li",{onClick:()=>{this.opened=!this.opened},class:"nav-item"},e)})),t("div",{class:"toggleFloatingMenu"},t("a",{href:"#",class:"plus",onClick:e=>{e.preventDefault(),this.opened=!this.opened}},t("span",{class:"fa fa-plus"}))))]}};i([o(),s({description:"This property represents the elements that should be rendered in a Floating Menu.",isMandatory:!0,propertyType:"Array of MenuItem(MenuItem[])"})],a.prototype,"menuItems",void 0),i([s({description:"This property shows the state of the backdrop on the Floating Menu and the Floating Menu itself.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"opened",void 0);export{a as psk_floating_menu};