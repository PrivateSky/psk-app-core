System.register(["./p-52cd94a3.system.js","./p-f934dd08.system.js","./p-39ee8722.system.js"],function(e){"use strict";var n,t,i,s;return{setters:[function(e){n=e.g},function(e){t=e.b;i=e.c},function(e){s=e.c}],execute:function(){e("T",c);function c(e){return function(c,o){var r=c.connectedCallback,a=c.render;c.connectedCallback=function(){var s=this;var c=n(s);if(c.hasAttribute(t)){if(!s.componentDefinitions){s.componentDefinitions={definedEvents:[Object.assign({},e,{eventName:String(o)})]};return r&&r.call(s)}var a=s.componentDefinitions;var f=Object.assign({},e,{eventName:String(o)});if(a&&a.hasOwnProperty(i)){var u=a[i].slice();u.push(f);a[i]=u.slice()}else{a[i]=[f]}s.componentDefinitions=Object.assign({},a)}return r&&r.call(s)};c.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[i])){return a&&a.call(e)}var n=e.componentDefinitions[i];if(n){n=n.reverse()}s("psk-send-events",{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}});