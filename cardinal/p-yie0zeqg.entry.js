import{r as e,h as o}from"./p-9835b40a.js";import{T as s}from"./p-79c4de9f.js";import{C as t}from"./p-ec895615.js";import{B as r}from"./p-0ece18f5.js";var i=function(e,o,s,t){var r,i=arguments.length,a=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,s,t);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(i<3?r(a):i>3?r(o,s,a):r(o,s))||a);return i>3&&a&&Object.defineProperty(o,s,a),a};const a=class{constructor(o){e(this,o),this.disableColor=!1,this.color="rgba(0, 0, 255, 1)"}render(){return this.icon&&o("span",{style:{color:this.color},class:`icon fa fa-${this.icon} ${this.disableColor?"disable-color":""}`})}};i([t(),r(),s({isMandatory:!0,propertyType:"string",description:["This property is mandatory and it is the icon defined in font-awesome Cascading Style Sheet .","We choose to use these icons because they are popular and quite expressive and very easy to use.(Example: user,"]})],a.prototype,"icon",void 0),i([s({isMandatory:!1,propertyType:"boolean",description:["This property is used for disabling the color of the icon. The default color is grey..","If this property is not given, false is assumed"],defaultValue:"false"})],a.prototype,"disableColor",void 0),i([s({isMandatory:!1,propertyType:"string",description:["This property gives the color of the icon. ","If this property is not given, blue color (rgba(0, 0, 255, 1)) is assumed"],defaultValue:"rgba(0, 0, 255, 1)"})],a.prototype,"color",void 0);export{a as psk_icon};