import{r as t,h as i,H as s,g as r}from"./p-87f0c668.js";import"./p-45edd0b3.js";import"./p-c06cc5e4.js";import"./p-5120ebde.js";import{C as o}from"./p-92873cc3.js";import{T as e}from"./p-454c45f1.js";import{a as n}from"./p-fb325070.js";import{g as p}from"./p-7fc3158c.js";var l=function(t,i,s,r){var o,e=arguments.length,n=e<3?i:null===r?r=Object.getOwnPropertyDescriptor(i,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,s,r);else for(var p=t.length-1;p>=0;p--)(o=t[p])&&(n=(e<3?o(n):e>3?o(i,s,n):o(i,s))||n);return e>3&&n&&Object.defineProperty(i,s,n),n};const a=class{constructor(i){t(this,i),this.column=null,this.columnStart=null,this.columnEnd=null,this.row=null,this.rowStart=null,this.rowEnd=null,this.align=null,this.alignX=null,this.alignY=null}async componentWillLoad(){const t=p(":host",this.__getProperties());n(this.__host,t)}__getProperties(){const t={};return this.column&&(t["grid-column"]=this.column),this.columnStart&&(t["grid-column-start"]=this.columnStart),this.columnEnd&&(t["grid-column-end"]=this.columnEnd),this.row&&(t["grid-row"]=this.row),this.rowStart&&(t["grid-row-start"]=this.rowStart),this.rowEnd&&(t["grid-row-end"]=this.rowEnd),this.align&&(t["place-self"]=this.align),this.alignX&&(t["justify-self"]=this.alignX),this.alignY&&(t["align-self"]=this.alignY),t}render(){return i(s,null,i("slot",null))}get __host(){return r(this)}};l([o()],a.prototype,"__host",void 0),l([e({description:"",isMandatory:!1,propertyType:"string"})],a.prototype,"column",void 0),l([e({description:"",isMandatory:!1,propertyType:"string"})],a.prototype,"columnStart",void 0),l([e({description:"",isMandatory:!1,propertyType:"string"})],a.prototype,"columnEnd",void 0),l([e({description:"",isMandatory:!1,propertyType:"string"})],a.prototype,"row",void 0),l([e({description:"",isMandatory:!1,propertyType:"string"})],a.prototype,"rowStart",void 0),l([e({description:"",isMandatory:!1,propertyType:"string"})],a.prototype,"rowEnd",void 0),l([e({description:["Equivalent to <em>place-self</em>."],isMandatory:!1,propertyType:"string"})],a.prototype,"align",void 0),l([e({description:["Equivalent to <em>justify-self</em>."],isMandatory:!1,propertyType:"string"})],a.prototype,"alignX",void 0),l([e({description:["Equivalent to <em>align-self</em>."],isMandatory:!1,propertyType:"string"})],a.prototype,"alignY",void 0);export{a as psk_layout_item}