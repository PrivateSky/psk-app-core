System.register(["./p-3369a689.system.js","./p-d7fc1715.system.js","./p-fa4e7901.system.js","./p-44df65c4.system.js","./p-61ba0e70.system.js","./p-030976a5.system.js","./p-119d5c52.system.js"],(function(e){"use strict";var t,r,n,o,s,i,c;return{setters:[function(e){t=e.r;r=e.h;n=e.g},function(){},function(){},function(e){o=e.T},function(e){s=e.C},function(e){i=e.B},function(e){c=e.P}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)if(i=e[c])s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s;return o>3&&s&&Object.defineProperty(t,r,s),s};var a=e("psk_files_chooser",function(){function e(e){t(this,e);this.label="Select files"}e.prototype.addedFile=function(e){var t=Array.from(e.target.files);if(this.eventName){e.preventDefault();e.stopImmediatePropagation();var r=new c(this.eventName,t,{bubbles:true,composed:true,cancelable:true});var n=this.htmlElement;n.dispatchEvent(r)}};e.prototype.render=function(){var e={};if(this.accept==="directory"){e={directory:true,mozdirectory:true,webkitdirectory:true};this.accept=null}return[r("button",{type:"button",class:"btn btn-secondary p-0"},r("label",{class:"pt-0 mb-0 p-2"},this.label,r("input",Object.assign({multiple:true},e,{accept:this.accept,type:"file",onChange:this.addedFile.bind(this),class:"form-control-file form-control-sm"})))),!this.eventName?r("h5",{class:"mt-4"},"No controller set for this component!"):null]};Object.defineProperty(e.prototype,"htmlElement",{get:function(){return n(this)},enumerable:true,configurable:true});return e}());l([s(),i()],a.prototype,"htmlElement",void 0);l([o({description:"This is the lable of the button",isMandatory:false,propertyType:"string",defaultValue:"Select files"})],a.prototype,"label",void 0);l([o({description:"This property tells the component which types of files can be uploaded from the user's device.",isMandatory:false,propertyType:"string",specialNote:"If this property is missing, then all types of files can be uploaded."})],a.prototype,"accept",void 0)}}}));