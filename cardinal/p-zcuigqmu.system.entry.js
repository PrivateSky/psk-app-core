var __extends=this&&this.__extends||function(){var e=function(t,i){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]};return e(t,i)};return function(t,i){e(t,i);function n(){this.constructor=t}t.prototype=i===null?Object.create(i):(n.prototype=i.prototype,new n)}}();System.register(["./p-51da6f80.system.js","./p-a85ba8b7.system.js","./p-77f35bd6.system.js","./p-63f9443d.system.js"],(function(e){"use strict";var t,i,n,r,o,s,a;return{setters:[function(e){t=e.r;i=e.c;n=e.h;r=e.g},function(e){o=e.T},function(e){s=e.C},function(e){a=e.T}],execute:function(){var p="WizardStepEvent";var h=function(e){__extends(t,e);function t(t,i,n){var r=e.call(this,t,n)||this;r.getEventType=function(){return p};r.data=i;return r}return t}(CustomEvent);var c=undefined&&undefined.__decorate||function(e,t,i,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)if(s=e[a])o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o;return r>3&&o&&Object.defineProperty(t,i,o),o};var d=e("psk_wizard",function(){function e(e){t(this,e);this.needWizardConfiguration=i(this,"needWizardConfiguration",7);this.changeStep=i(this,"changeStep",7);this.finishWizard=i(this,"finishWizard",7)}e.prototype.componentWillLoad=function(){var e=this;this.needWizardConfiguration.emit((function(t){e.wizardSteps=t;e.activeStep=e.wizardSteps.length>0?e.wizardSteps[0]:null}))};e.prototype.handleStepChange=function(e){var t=this;var i=new h("changeStep",{stepIndexToDisplay:e,wizardSteps:this.wizardSteps,activeStep:this.activeStep,callback:function(e,i){if(e){console.error(e);return}t.activeStep=i.activeStep;t.wizardSteps=i.wizardSteps}},{bubbles:true,composed:true,cancelable:true});this.host.dispatchEvent(i)};e.prototype.handleFinish=function(){this.finishWizard.emit({wizardSteps:this.wizardSteps,callback:function(e,t){if(e){console.error(e);return}console.log(t)}});return};e.prototype.handleStepPropertiesChange=function(e){this.activeStep["stepProperties"]=e};e.prototype.computeStepDesign=function(e,t,i){var n="";if(e===0){n+="first "}else if(e===i-1){n+="last "}if(e<t){n+="done"}else if(e===t){n+="current"}return n};e.prototype.render=function(){var e=this.activeStep.stepComponent;return[n("div",{class:"page-content"},n("div",{class:"wizard-content"},n("div",{class:"wizard-form"},n("form",{class:"form-register",action:"#",method:"post",onSubmit:function(e){e.preventDefault();e.stopImmediatePropagation()}},n("div",{id:"form-total",class:"wizard clearfix"},n("psk-stepper",{componentRender:this.componentRender,wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange.bind(this)}),n(e,Object.assign({},this.activeStep.stepProperties,{onPropertiesChange:this.handleStepPropertiesChange.bind(this),stepProperties:this.activeStep.stepProperties})),n("div",{class:"actions clearfix"},n("ul",{role:"menu","aria-label":"Pagination"},this.activeStep.stepIndex>0?n("li",null,n("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex-1)},"Previous")):null,this.activeStep.stepIndex<this.wizardSteps.length-1?n("li",null,n("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex+1)},"Next")):null,this.activeStep.stepIndex===this.wizardSteps.length-1?n("li",null,n("button",{role:"menuitem",onClick:this.handleFinish.bind(this)},"Finish")):null)))))))]};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());c([s()],d.prototype,"host",void 0);c([o({description:"This property is the string that defines the psk-stepper render",isMandatory:false,propertyType:"string"})],d.prototype,"componentRender",void 0);c([o({description:"This parameter holds the wizard configuration, the names of the steps, the components that will be displayed and if there is the case, other properties, like information for the steps.",isMandatory:false,propertyType:"array of WizardStep types (WizardStep[])",specialNote:"These information are filled in and handled by the controller of the component, not by the component itself."})],d.prototype,"wizardSteps",void 0);c([a({eventName:"needWizardConfiguration",controllerInteraction:{required:true},description:"This event is triggered when the component is loaded and if no configuration is given for the wizard.\n            In this case, the controller is responsible to send the configuration to the wizard.\n            This event comes with a single parameter, a callback function that sends the configuration to the component."})],d.prototype,"needWizardConfiguration",void 0);c([a({eventName:"changeStep",controllerInteraction:{required:true},description:"This event is triggered when the buttons Next, Previous and the step names from the left side of the component are clicked.\n            This event comes with the following parameters:\n                stepIndexToDisplay - the number of the step to be displayed,\n                wizardSteps - the list of the steps from the wizard,\n                activeStep - the step that will be displayed,\n                callback - a callback function that is called from the controller when the validation is done."})],d.prototype,"changeStep",void 0);c([a({eventName:"finishWizard",description:"This event is triggered when the buttons Finish is clicked.\n            This event comes with the following parameters:\n                wizardSteps - the list of the steps from the wizard. Maybe the information inside the wizard will be stored somewhere,\n                callback - a callback function that is called from the controller when the validation is done."})],d.prototype,"finishWizard",void 0)}}}));