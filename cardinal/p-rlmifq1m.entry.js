import{r as t,h as e,g as s}from"./p-a1b3783e.js";import{T as r}from"./p-9b98810e.js";import{s as i,c as o}from"./p-83ac245a.js";import{C as n}from"./p-02bd97ff.js";var a=function(t,e,s,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(o<3?i(n):o>3?i(e,s,n):i(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};const c=class{constructor(e){t(this,e),this.chapters=[],this.title="",this.componentFullyLoaded=!1}receiveChapters(t){if(t.stopImmediatePropagation(),!t.detail)return;const e=Object.assign({},t.detail),s=this.chapters.findIndex(t=>e.guid===t.guid),r=[...this.chapters];if(-1===s)return r.push(Object.assign({},e)),void(this.chapters=JSON.parse(JSON.stringify(r)));r[s]=Object.assign({},e),this.chapters=JSON.parse(JSON.stringify(r))}_checkForChapterScrolling(){if(-1===window.location.href.indexOf("chapter="))return;const t=window.location.href.split("chapter=")[1];setTimeout(()=>{i(t,this.element)},50)}_sendTableOfContentChapters(){o("psk-send-toc",{bubbles:!0,composed:!0,cancelable:!0,detail:this.chapters},!0)}componentDidLoad(){this.componentFullyLoaded=!0}render(){return this._checkForChapterScrolling(),this._sendTableOfContentChapters(),e("div",null,e("nav",null,e("h3",null,this.title)),e("div",{class:"page-content"},this.componentFullyLoaded?e("slot",null):e("psk-ui-loader",{shouldBeRendered:!0})))}get element(){return s(this)}};a([n()],c.prototype,"chapters",void 0),a([r({description:"This property will be used as the title for the page.",isMandatory:!1,propertyType:"string"})],c.prototype,"title",void 0),a([r({description:"This property is the name of the table of content.",isMandatory:!1,propertyType:"string"})],c.prototype,"tocTitle",void 0);export{c as psk_page};