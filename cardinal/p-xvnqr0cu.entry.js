import{r as e,c as t,h as r}from"./p-a1b3783e.js";import{T as s}from"./p-9b98810e.js";import"./p-83ac245a.js";import{C as i}from"./p-02bd97ff.js";var n=function(e,t,r,s){var i,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const a=class{constructor(r){e(this,r),this.notifyItemClicked=function(e){this.menuClicked.emit(e.target)},this.menuClicked=t(this,"menuClicked",7)}renderMenuItem(e){let t=e.path,s=[];return e.children&&e.children.forEach(e=>{s.push(this.renderMenuItem(e))}),r("abstract"===e.type?"dropdown-renderer":"query"===this.historyType?"query-page-link":"stencil-route-link",{url:t,activeClass:"active",exact:!1,somethingChanged:this.value,onClick:e=>this.notifyItemClicked(e)},r("div",{class:"wrapper_container"},r("div",{class:"item_container"},r("span",{class:`icon fa ${e.icon}`}),r("a",null,e.children?r("span",{class:"item_name"},e.name,r("span",{class:"fa fa-caret-down"})):r("span",{class:"item_name"},e.name))),e.children?r("div",{class:"children"},s):null))}render(){return this.renderMenuItem(this.value)}};n([i(),s({description:"This property is the MenuItem that will be renderer as part of the menu",isMandatory:!1,propertyType:"MenuItem"})],a.prototype,"value",void 0),n([s({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:!1,propertyType:"boolean"})],a.prototype,"active",void 0);export{a as psk_menu_item_renderer};