/******/(()=>{// webpackBootstrap
/******/var __webpack_modules__={/***/"./node_modules/@vimeo/player/dist/player.es.js":(/*!******************************************************!*\
  !*** ./node_modules/@vimeo/player/dist/player.es.js ***!
  \******************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/*! @vimeo/player v2.10.0 | (c) 2019 Vimeo | MIT License | https://github.com/vimeo/player.js */function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
     * @module lib/functions
     */ /**
     * Check to see this is a node environment.
     * @type {Boolean}
     */ /* global global */var isNode=typeof __webpack_require__.g!=='undefined'&&{}.toString.call(__webpack_require__.g)==='[object global]';/**
     * Get the name of the method for a given getter or setter.
     *
     * @param {string} prop The name of the property.
     * @param {string} type Either “get” or “set”.
     * @return {string}
     */function getMethodName(prop,type){if(prop.indexOf(type.toLowerCase())===0){return prop;}return"".concat(type.toLowerCase()).concat(prop.substr(0,1).toUpperCase()).concat(prop.substr(1));}/**
     * Check to see if the object is a DOM Element.
     *
     * @param {*} element The object to check.
     * @return {boolean}
     */function isDomElement(element){return Boolean(element&&element.nodeType===1&&'nodeName'in element&&element.ownerDocument&&element.ownerDocument.defaultView);}/**
     * Check to see whether the value is a number.
     *
     * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
     * @param {*} value The value to check.
     * @param {boolean} integer Check if the value is an integer.
     * @return {boolean}
     */function isInteger(value){// eslint-disable-next-line eqeqeq
return!isNaN(parseFloat(value))&&isFinite(value)&&Math.floor(value)==value;}/**
     * Check to see if the URL is a Vimeo url.
     *
     * @param {string} url The url string.
     * @return {boolean}
     */function isVimeoUrl(url){return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);}/**
     * Get the Vimeo URL from an element.
     * The element must have either a data-vimeo-id or data-vimeo-url attribute.
     *
     * @param {object} oEmbedParameters The oEmbed parameters.
     * @return {string}
     */function getVimeoUrl(){var oEmbedParameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var id=oEmbedParameters.id;var url=oEmbedParameters.url;var idOrUrl=id||url;if(!idOrUrl){throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');}if(isInteger(idOrUrl)){return"https://vimeo.com/".concat(idOrUrl);}if(isVimeoUrl(idOrUrl)){return idOrUrl.replace('http:','https:');}if(id){throw new TypeError("\u201C".concat(id,"\u201D is not a valid video id."));}throw new TypeError("\u201C".concat(idOrUrl,"\u201D is not a vimeo.com url."));}var arrayIndexOfSupport=typeof Array.prototype.indexOf!=='undefined';var postMessageSupport=typeof window!=='undefined'&&typeof window.postMessage!=='undefined';if(!isNode&&(!arrayIndexOfSupport||!postMessageSupport)){throw new Error('Sorry, the Vimeo Player API is not available in this browser.');}var commonjsGlobal=typeof window!=='undefined'?window:typeof __webpack_require__.g!=='undefined'?__webpack_require__.g:typeof self!=='undefined'?self:{};function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}/*!
     * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
     * https://github.com/polygonplanet/weakmap-polyfill
     * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
     * @license MIT
     */(function(self){if(self.WeakMap){return;}var hasOwnProperty=Object.prototype.hasOwnProperty;var defineProperty=function(object,name,value){if(Object.defineProperty){Object.defineProperty(object,name,{configurable:true,writable:true,value:value});}else{object[name]=value;}};self.WeakMap=function(){// ECMA-262 23.3 WeakMap Objects
function WeakMap(){if(this===void 0){throw new TypeError("Constructor WeakMap requires 'new'");}defineProperty(this,'_id',genId('_WeakMap'));// ECMA-262 23.3.1.1 WeakMap([iterable])
if(arguments.length>0){// Currently, WeakMap `iterable` argument is not supported
throw new TypeError('WeakMap iterable is not supported');}}// ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
defineProperty(WeakMap.prototype,'delete',function(key){checkInstance(this,'delete');if(!isObject(key)){return false;}var entry=key[this._id];if(entry&&entry[0]===key){delete key[this._id];return true;}return false;});// ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
defineProperty(WeakMap.prototype,'get',function(key){checkInstance(this,'get');if(!isObject(key)){return void 0;}var entry=key[this._id];if(entry&&entry[0]===key){return entry[1];}return void 0;});// ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
defineProperty(WeakMap.prototype,'has',function(key){checkInstance(this,'has');if(!isObject(key)){return false;}var entry=key[this._id];if(entry&&entry[0]===key){return true;}return false;});// ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
defineProperty(WeakMap.prototype,'set',function(key,value){checkInstance(this,'set');if(!isObject(key)){throw new TypeError('Invalid value used as weak map key');}var entry=key[this._id];if(entry&&entry[0]===key){entry[1]=value;return this;}defineProperty(key,this._id,[key,value]);return this;});function checkInstance(x,methodName){if(!isObject(x)||!hasOwnProperty.call(x,'_id')){throw new TypeError(methodName+' method called on incompatible receiver '+typeof x);}}function genId(prefix){return prefix+'_'+rand()+'.'+rand();}function rand(){return Math.random().toString().substring(2);}defineProperty(WeakMap,'_polyfill',true);return WeakMap;}();function isObject(x){return Object(x)===x;}})(typeof self!=='undefined'?self:typeof window!=='undefined'?window:typeof commonjsGlobal!=='undefined'?commonjsGlobal:commonjsGlobal);var npo_src=createCommonjsModule(function(module){/*! Native Promise Only
        v0.8.1 (c) Kyle Simpson
        MIT License: http://getify.mit-license.org
    */(function UMD(name,context,definition){// special form of UMD for polyfilling across evironments
context[name]=context[name]||definition();if(module.exports){module.exports=context[name];}})("Promise",typeof commonjsGlobal!="undefined"?commonjsGlobal:commonjsGlobal,function DEF(){var builtInProp,cycle,scheduling_queue,ToString=Object.prototype.toString,timer=typeof setImmediate!="undefined"?function timer(fn){return setImmediate(fn);}:setTimeout;// dammit, IE8.
try{Object.defineProperty({},"x",{});builtInProp=function builtInProp(obj,name,val,config){return Object.defineProperty(obj,name,{value:val,writable:true,configurable:config!==false});};}catch(err){builtInProp=function builtInProp(obj,name,val){obj[name]=val;return obj;};}// Note: using a queue instead of array for efficiency
scheduling_queue=function Queue(){var first,last,item;function Item(fn,self){this.fn=fn;this.self=self;this.next=void 0;}return{add:function add(fn,self){item=new Item(fn,self);if(last){last.next=item;}else{first=item;}last=item;item=void 0;},drain:function drain(){var f=first;first=last=cycle=void 0;while(f){f.fn.call(f.self);f=f.next;}}};}();function schedule(fn,self){scheduling_queue.add(fn,self);if(!cycle){cycle=timer(scheduling_queue.drain);}}// promise duck typing
function isThenable(o){var _then,o_type=typeof o;if(o!=null&&(o_type=="object"||o_type=="function")){_then=o.then;}return typeof _then=="function"?_then:false;}function notify(){for(var i=0;i<this.chain.length;i++){notifyIsolated(this,this.state===1?this.chain[i].success:this.chain[i].failure,this.chain[i]);}this.chain.length=0;}// NOTE: This is a separate function to isolate
// the `try..catch` so that other code can be
// optimized better
function notifyIsolated(self,cb,chain){var ret,_then;try{if(cb===false){chain.reject(self.msg);}else{if(cb===true){ret=self.msg;}else{ret=cb.call(void 0,self.msg);}if(ret===chain.promise){chain.reject(TypeError("Promise-chain cycle"));}else if(_then=isThenable(ret)){_then.call(ret,chain.resolve,chain.reject);}else{chain.resolve(ret);}}}catch(err){chain.reject(err);}}function resolve(msg){var _then,self=this;// already triggered?
if(self.triggered){return;}self.triggered=true;// unwrap
if(self.def){self=self.def;}try{if(_then=isThenable(msg)){schedule(function(){var def_wrapper=new MakeDefWrapper(self);try{_then.call(msg,function $resolve$(){resolve.apply(def_wrapper,arguments);},function $reject$(){reject.apply(def_wrapper,arguments);});}catch(err){reject.call(def_wrapper,err);}});}else{self.msg=msg;self.state=1;if(self.chain.length>0){schedule(notify,self);}}}catch(err){reject.call(new MakeDefWrapper(self),err);}}function reject(msg){var self=this;// already triggered?
if(self.triggered){return;}self.triggered=true;// unwrap
if(self.def){self=self.def;}self.msg=msg;self.state=2;if(self.chain.length>0){schedule(notify,self);}}function iteratePromises(Constructor,arr,resolver,rejecter){for(var idx=0;idx<arr.length;idx++){(function IIFE(idx){Constructor.resolve(arr[idx]).then(function $resolver$(msg){resolver(idx,msg);},rejecter);})(idx);}}function MakeDefWrapper(self){this.def=self;this.triggered=false;}function MakeDef(self){this.promise=self;this.state=0;this.triggered=false;this.chain=[];this.msg=void 0;}function Promise(executor){if(typeof executor!="function"){throw TypeError("Not a function");}if(this.__NPO__!==0){throw TypeError("Not a promise");}// instance shadowing the inherited "brand"
// to signal an already "initialized" promise
this.__NPO__=1;var def=new MakeDef(this);this["then"]=function then(success,failure){var o={success:typeof success=="function"?success:true,failure:typeof failure=="function"?failure:false};// Note: `then(..)` itself can be borrowed to be used against
// a different promise constructor for making the chained promise,
// by substituting a different `this` binding.
o.promise=new this.constructor(function extractChain(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}o.resolve=resolve;o.reject=reject;});def.chain.push(o);if(def.state!==0){schedule(notify,def);}return o.promise;};this["catch"]=function $catch$(failure){return this.then(void 0,failure);};try{executor.call(void 0,function publicResolve(msg){resolve.call(def,msg);},function publicReject(msg){reject.call(def,msg);});}catch(err){reject.call(def,err);}}var PromisePrototype=builtInProp({},"constructor",Promise,/*configurable=*/false);// Note: Android 4 cannot use `Object.defineProperty(..)` here
Promise.prototype=PromisePrototype;// built-in "brand" to signal an "uninitialized" promise
builtInProp(PromisePrototype,"__NPO__",0,/*configurable=*/false);builtInProp(Promise,"resolve",function Promise$resolve(msg){var Constructor=this;// spec mandated checks
// note: best "isPromise" check that's practical for now
if(msg&&typeof msg=="object"&&msg.__NPO__===1){return msg;}return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}resolve(msg);});});builtInProp(Promise,"reject",function Promise$reject(msg){return new this(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}reject(msg);});});builtInProp(Promise,"all",function Promise$all(arr){var Constructor=this;// spec mandated checks
if(ToString.call(arr)!="[object Array]"){return Constructor.reject(TypeError("Not an array"));}if(arr.length===0){return Constructor.resolve([]);}return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}var len=arr.length,msgs=Array(len),count=0;iteratePromises(Constructor,arr,function resolver(idx,msg){msgs[idx]=msg;if(++count===len){resolve(msgs);}},reject);});});builtInProp(Promise,"race",function Promise$race(arr){var Constructor=this;// spec mandated checks
if(ToString.call(arr)!="[object Array]"){return Constructor.reject(TypeError("Not an array"));}return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}iteratePromises(Constructor,arr,function resolver(idx,msg){resolve(msg);},reject);});});return Promise;});});/**
     * @module lib/callbacks
     */var callbackMap=new WeakMap();/**
     * Store a callback for a method or event for a player.
     *
     * @param {Player} player The player object.
     * @param {string} name The method or event name.
     * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
     *        The callback to call or an object with resolve and reject functions for a promise.
     * @return {void}
     */function storeCallback(player,name,callback){var playerCallbacks=callbackMap.get(player.element)||{};if(!(name in playerCallbacks)){playerCallbacks[name]=[];}playerCallbacks[name].push(callback);callbackMap.set(player.element,playerCallbacks);}/**
     * Get the callbacks for a player and event or method.
     *
     * @param {Player} player The player object.
     * @param {string} name The method or event name
     * @return {function[]}
     */function getCallbacks(player,name){var playerCallbacks=callbackMap.get(player.element)||{};return playerCallbacks[name]||[];}/**
     * Remove a stored callback for a method or event for a player.
     *
     * @param {Player} player The player object.
     * @param {string} name The method or event name
     * @param {function} [callback] The specific callback to remove.
     * @return {boolean} Was this the last callback?
     */function removeCallback(player,name,callback){var playerCallbacks=callbackMap.get(player.element)||{};if(!playerCallbacks[name]){return true;}// If no callback is passed, remove all callbacks for the event
if(!callback){playerCallbacks[name]=[];callbackMap.set(player.element,playerCallbacks);return true;}var index=playerCallbacks[name].indexOf(callback);if(index!==-1){playerCallbacks[name].splice(index,1);}callbackMap.set(player.element,playerCallbacks);return playerCallbacks[name]&&playerCallbacks[name].length===0;}/**
     * Return the first stored callback for a player and event or method.
     *
     * @param {Player} player The player object.
     * @param {string} name The method or event name.
     * @return {function} The callback, or false if there were none
     */function shiftCallbacks(player,name){var playerCallbacks=getCallbacks(player,name);if(playerCallbacks.length<1){return false;}var callback=playerCallbacks.shift();removeCallback(player,name,callback);return callback;}/**
     * Move callbacks associated with an element to another element.
     *
     * @param {HTMLElement} oldElement The old element.
     * @param {HTMLElement} newElement The new element.
     * @return {void}
     */function swapCallbacks(oldElement,newElement){var playerCallbacks=callbackMap.get(oldElement);callbackMap.set(newElement,playerCallbacks);callbackMap.delete(oldElement);}/**
     * @module lib/embed
     */var oEmbedParameters=['autopause','autoplay','background','byline','color','controls','dnt','height','id','loop','maxheight','maxwidth','muted','playsinline','portrait','responsive','speed','texttrack','title','transparent','url','width'];/**
     * Get the 'data-vimeo'-prefixed attributes from an element as an object.
     *
     * @param {HTMLElement} element The element.
     * @param {Object} [defaults={}] The default values to use.
     * @return {Object<string, string>}
     */function getOEmbedParameters(element){var defaults=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return oEmbedParameters.reduce(function(params,param){var value=element.getAttribute("data-vimeo-".concat(param));if(value||value===''){params[param]=value===''?1:value;}return params;},defaults);}/**
     * Create an embed from oEmbed data inside an element.
     *
     * @param {object} data The oEmbed data.
     * @param {HTMLElement} element The element to put the iframe in.
     * @return {HTMLIFrameElement} The iframe embed.
     */function createEmbed(_ref,element){var html=_ref.html;if(!element){throw new TypeError('An element must be provided');}if(element.getAttribute('data-vimeo-initialized')!==null){return element.querySelector('iframe');}var div=document.createElement('div');div.innerHTML=html;element.appendChild(div.firstChild);element.setAttribute('data-vimeo-initialized','true');return element.querySelector('iframe');}/**
     * Make an oEmbed call for the specified URL.
     *
     * @param {string} videoUrl The vimeo.com url for the video.
     * @param {Object} [params] Parameters to pass to oEmbed.
     * @param {HTMLElement} element The element.
     * @return {Promise}
     */function getOEmbedData(videoUrl){var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var element=arguments.length>2?arguments[2]:undefined;return new Promise(function(resolve,reject){if(!isVimeoUrl(videoUrl)){throw new TypeError("\u201C".concat(videoUrl,"\u201D is not a vimeo.com url."));}var url="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));for(var param in params){if(params.hasOwnProperty(param)){url+="&".concat(param,"=").concat(encodeURIComponent(params[param]));}}var xhr='XDomainRequest'in window?new XDomainRequest():new XMLHttpRequest();xhr.open('GET',url,true);xhr.onload=function(){if(xhr.status===404){reject(new Error("\u201C".concat(videoUrl,"\u201D was not found.")));return;}if(xhr.status===403){reject(new Error("\u201C".concat(videoUrl,"\u201D is not embeddable.")));return;}try{var json=JSON.parse(xhr.responseText);// Check api response for 403 on oembed
if(json.domain_status_code===403){// We still want to create the embed to give users visual feedback
createEmbed(json,element);reject(new Error("\u201C".concat(videoUrl,"\u201D is not embeddable.")));return;}resolve(json);}catch(error){reject(error);}};xhr.onerror=function(){var status=xhr.status?" (".concat(xhr.status,")"):'';reject(new Error("There was an error fetching the embed code from Vimeo".concat(status,".")));};xhr.send();});}/**
     * Initialize all embeds within a specific element
     *
     * @param {HTMLElement} [parent=document] The parent element.
     * @return {void}
     */function initializeEmbeds(){var parent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:document;var elements=[].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));var handleError=function handleError(error){if('console'in window&&console.error){console.error("There was an error creating an embed: ".concat(error));}};elements.forEach(function(element){try{// Skip any that have data-vimeo-defer
if(element.getAttribute('data-vimeo-defer')!==null){return;}var params=getOEmbedParameters(element);var url=getVimeoUrl(params);getOEmbedData(url,params,element).then(function(data){return createEmbed(data,element);}).catch(handleError);}catch(error){handleError(error);}});}/**
     * Resize embeds when messaged by the player.
     *
     * @param {HTMLElement} [parent=document] The parent element.
     * @return {void}
     */function resizeEmbeds(){var parent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:document;// Prevent execution if users include the player.js script multiple times.
if(window.VimeoPlayerResizeEmbeds_){return;}window.VimeoPlayerResizeEmbeds_=true;var onMessage=function onMessage(event){if(!isVimeoUrl(event.origin)){return;}// 'spacechange' is fired only on embeds with cards
if(!event.data||event.data.event!=='spacechange'){return;}var iframes=parent.querySelectorAll('iframe');for(var i=0;i<iframes.length;i++){if(iframes[i].contentWindow!==event.source){continue;}// Change padding-bottom of the enclosing div to accommodate
// card carousel without distorting aspect ratio
var space=iframes[i].parentElement;space.style.paddingBottom="".concat(event.data.data[0].bottom,"px");break;}};if(window.addEventListener){window.addEventListener('message',onMessage,false);}else if(window.attachEvent){window.attachEvent('onmessage',onMessage);}}/**
     * @module lib/postmessage
     */ /**
     * Parse a message received from postMessage.
     *
     * @param {*} data The data received from postMessage.
     * @return {object}
     */function parseMessageData(data){if(typeof data==='string'){try{data=JSON.parse(data);}catch(error){// If the message cannot be parsed, throw the error as a warning
console.warn(error);return{};}}return data;}/**
     * Post a message to the specified target.
     *
     * @param {Player} player The player object to use.
     * @param {string} method The API method to call.
     * @param {object} params The parameters to send to the player.
     * @return {void}
     */function postMessage(player,method,params){if(!player.element.contentWindow||!player.element.contentWindow.postMessage){return;}var message={method:method};if(params!==undefined){message.value=params;}// IE 8 and 9 do not support passing messages, so stringify them
var ieVersion=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,'$1'));if(ieVersion>=8&&ieVersion<10){message=JSON.stringify(message);}player.element.contentWindow.postMessage(message,player.origin);}/**
     * Parse the data received from a message event.
     *
     * @param {Player} player The player that received the message.
     * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
     * @return {void}
     */function processData(player,data){data=parseMessageData(data);var callbacks=[];var param;if(data.event){if(data.event==='error'){var promises=getCallbacks(player,data.data.method);promises.forEach(function(promise){var error=new Error(data.data.message);error.name=data.data.name;promise.reject(error);removeCallback(player,data.data.method,promise);});}callbacks=getCallbacks(player,"event:".concat(data.event));param=data.data;}else if(data.method){var callback=shiftCallbacks(player,data.method);if(callback){callbacks.push(callback);param=data.value;}}callbacks.forEach(function(callback){try{if(typeof callback==='function'){callback.call(player,param);return;}callback.resolve(param);}catch(e){// empty
}});}var playerMap=new WeakMap();var readyMap=new WeakMap();var Player=/*#__PURE__*/function(){/**
       * Create a Player.
       *
       * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
       *        player iframe, and id, or a jQuery object.
       * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
       * @return {Player}
       */function Player(element){var _this=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,Player);/* global jQuery */if(window.jQuery&&element instanceof jQuery){if(element.length>1&&window.console&&console.warn){console.warn('A jQuery object with multiple elements was passed, using the first element.');}element=element[0];}// Find an element by ID
if(typeof document!=='undefined'&&typeof element==='string'){element=document.getElementById(element);}// Not an element!
if(!isDomElement(element)){throw new TypeError('You must pass either a valid element or a valid id.');}var win=element.ownerDocument.defaultView;// Already initialized an embed in this div, so grab the iframe
if(element.nodeName!=='IFRAME'){var iframe=element.querySelector('iframe');if(iframe){element=iframe;}}// iframe url is not a Vimeo url
if(element.nodeName==='IFRAME'&&!isVimeoUrl(element.getAttribute('src')||'')){throw new Error('The player element passed isn’t a Vimeo embed.');}// If there is already a player object in the map, return that
if(playerMap.has(element)){return playerMap.get(element);}this.element=element;this.origin='*';var readyPromise=new npo_src(function(resolve,reject){var onMessage=function onMessage(event){if(!isVimeoUrl(event.origin)||_this.element.contentWindow!==event.source){return;}if(_this.origin==='*'){_this.origin=event.origin;}var data=parseMessageData(event.data);var isError=data&&data.event==='error';var isReadyError=isError&&data.data&&data.data.method==='ready';if(isReadyError){var error=new Error(data.data.message);error.name=data.data.name;reject(error);return;}var isReadyEvent=data&&data.event==='ready';var isPingResponse=data&&data.method==='ping';if(isReadyEvent||isPingResponse){_this.element.setAttribute('data-ready','true');resolve();return;}processData(_this,data);};if(win.addEventListener){win.addEventListener('message',onMessage,false);}else if(win.attachEvent){win.attachEvent('onmessage',onMessage);}if(_this.element.nodeName!=='IFRAME'){var params=getOEmbedParameters(element,options);var url=getVimeoUrl(params);getOEmbedData(url,params,element).then(function(data){var iframe=createEmbed(data,element);// Overwrite element with the new iframe,
// but store reference to the original element
_this.element=iframe;_this._originalElement=element;swapCallbacks(element,iframe);playerMap.set(_this.element,_this);return data;}).catch(reject);}});// Store a copy of this Player in the map
readyMap.set(this,readyPromise);playerMap.set(this.element,this);// Send a ping to the iframe so the ready promise will be resolved if
// the player is already ready.
if(this.element.nodeName==='IFRAME'){postMessage(this,'ping');}return this;}/**
       * Get a promise for a method.
       *
       * @param {string} name The API method to call.
       * @param {Object} [args={}] Arguments to send via postMessage.
       * @return {Promise}
       */_createClass(Player,[{key:"callMethod",value:function callMethod(name){var _this2=this;var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return new npo_src(function(resolve,reject){// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return _this2.ready().then(function(){storeCallback(_this2,name,{resolve:resolve,reject:reject});postMessage(_this2,name,args);}).catch(reject);});}/**
         * Get a promise for the value of a player property.
         *
         * @param {string} name The property name
         * @return {Promise}
         */},{key:"get",value:function get(name){var _this3=this;return new npo_src(function(resolve,reject){name=getMethodName(name,'get');// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return _this3.ready().then(function(){storeCallback(_this3,name,{resolve:resolve,reject:reject});postMessage(_this3,name);}).catch(reject);});}/**
         * Get a promise for setting the value of a player property.
         *
         * @param {string} name The API method to call.
         * @param {mixed} value The value to set.
         * @return {Promise}
         */},{key:"set",value:function set(name,value){var _this4=this;return new npo_src(function(resolve,reject){name=getMethodName(name,'set');if(value===undefined||value===null){throw new TypeError('There must be a value to set.');}// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return _this4.ready().then(function(){storeCallback(_this4,name,{resolve:resolve,reject:reject});postMessage(_this4,name,value);}).catch(reject);});}/**
         * Add an event listener for the specified event. Will call the
         * callback with a single parameter, `data`, that contains the data for
         * that event.
         *
         * @param {string} eventName The name of the event.
         * @param {function(*)} callback The function to call when the event fires.
         * @return {void}
         */},{key:"on",value:function on(eventName,callback){if(!eventName){throw new TypeError('You must pass an event name.');}if(!callback){throw new TypeError('You must pass a callback function.');}if(typeof callback!=='function'){throw new TypeError('The callback must be a function.');}var callbacks=getCallbacks(this,"event:".concat(eventName));if(callbacks.length===0){this.callMethod('addEventListener',eventName).catch(function(){// Ignore the error. There will be an error event fired that
// will trigger the error callback if they are listening.
});}storeCallback(this,"event:".concat(eventName),callback);}/**
         * Remove an event listener for the specified event. Will remove all
         * listeners for that event if a `callback` isn’t passed, or only that
         * specific callback if it is passed.
         *
         * @param {string} eventName The name of the event.
         * @param {function} [callback] The specific callback to remove.
         * @return {void}
         */},{key:"off",value:function off(eventName,callback){if(!eventName){throw new TypeError('You must pass an event name.');}if(callback&&typeof callback!=='function'){throw new TypeError('The callback must be a function.');}var lastCallback=removeCallback(this,"event:".concat(eventName),callback);// If there are no callbacks left, remove the listener
if(lastCallback){this.callMethod('removeEventListener',eventName).catch(function(e){// Ignore the error. There will be an error event fired that
// will trigger the error callback if they are listening.
});}}/**
         * A promise to load a new video.
         *
         * @promise LoadVideoPromise
         * @fulfill {number} The video with this id successfully loaded.
         * @reject {TypeError} The id was not a number.
         */ /**
         * Load a new video into this embed. The promise will be resolved if
         * the video is successfully loaded, or it will be rejected if it could
         * not be loaded.
         *
         * @param {number|object} options The id of the video or an object with embed options.
         * @return {LoadVideoPromise}
         */},{key:"loadVideo",value:function loadVideo(options){return this.callMethod('loadVideo',options);}/**
         * A promise to perform an action when the Player is ready.
         *
         * @todo document errors
         * @promise LoadVideoPromise
         * @fulfill {void}
         */ /**
         * Trigger a function when the player iframe has initialized. You do not
         * need to wait for `ready` to trigger to begin adding event listeners
         * or calling other methods.
         *
         * @return {ReadyPromise}
         */},{key:"ready",value:function ready(){var readyPromise=readyMap.get(this)||new npo_src(function(resolve,reject){reject(new Error('Unknown player. Probably unloaded.'));});return npo_src.resolve(readyPromise);}/**
         * A promise to add a cue point to the player.
         *
         * @promise AddCuePointPromise
         * @fulfill {string} The id of the cue point to use for removeCuePoint.
         * @reject {RangeError} the time was less than 0 or greater than the
         *         video’s duration.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */ /**
         * Add a cue point to the player.
         *
         * @param {number} time The time for the cue point.
         * @param {object} [data] Arbitrary data to be returned with the cue point.
         * @return {AddCuePointPromise}
         */},{key:"addCuePoint",value:function addCuePoint(time){var data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return this.callMethod('addCuePoint',{time:time,data:data});}/**
         * A promise to remove a cue point from the player.
         *
         * @promise AddCuePointPromise
         * @fulfill {string} The id of the cue point that was removed.
         * @reject {InvalidCuePoint} The cue point with the specified id was not
         *         found.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */ /**
         * Remove a cue point from the video.
         *
         * @param {string} id The id of the cue point to remove.
         * @return {RemoveCuePointPromise}
         */},{key:"removeCuePoint",value:function removeCuePoint(id){return this.callMethod('removeCuePoint',id);}/**
         * A representation of a text track on a video.
         *
         * @typedef {Object} VimeoTextTrack
         * @property {string} language The ISO language code.
         * @property {string} kind The kind of track it is (captions or subtitles).
         * @property {string} label The human‐readable label for the track.
         */ /**
         * A promise to enable a text track.
         *
         * @promise EnableTextTrackPromise
         * @fulfill {VimeoTextTrack} The text track that was enabled.
         * @reject {InvalidTrackLanguageError} No track was available with the
         *         specified language.
         * @reject {InvalidTrackError} No track was available with the specified
         *         language and kind.
         */ /**
         * Enable the text track with the specified language, and optionally the
         * specified kind (captions or subtitles).
         *
         * When set via the API, the track language will not change the viewer’s
         * stored preference.
         *
         * @param {string} language The two‐letter language code.
         * @param {string} [kind] The kind of track to enable (captions or subtitles).
         * @return {EnableTextTrackPromise}
         */},{key:"enableTextTrack",value:function enableTextTrack(language,kind){if(!language){throw new TypeError('You must pass a language.');}return this.callMethod('enableTextTrack',{language:language,kind:kind});}/**
         * A promise to disable the active text track.
         *
         * @promise DisableTextTrackPromise
         * @fulfill {void} The track was disabled.
         */ /**
         * Disable the currently-active text track.
         *
         * @return {DisableTextTrackPromise}
         */},{key:"disableTextTrack",value:function disableTextTrack(){return this.callMethod('disableTextTrack');}/**
         * A promise to pause the video.
         *
         * @promise PausePromise
         * @fulfill {void} The video was paused.
         */ /**
         * Pause the video if it’s playing.
         *
         * @return {PausePromise}
         */},{key:"pause",value:function pause(){return this.callMethod('pause');}/**
         * A promise to play the video.
         *
         * @promise PlayPromise
         * @fulfill {void} The video was played.
         */ /**
         * Play the video if it’s paused. **Note:** on iOS and some other
         * mobile devices, you cannot programmatically trigger play. Once the
         * viewer has tapped on the play button in the player, however, you
         * will be able to use this function.
         *
         * @return {PlayPromise}
         */},{key:"play",value:function play(){return this.callMethod('play');}/**
         * A promise to unload the video.
         *
         * @promise UnloadPromise
         * @fulfill {void} The video was unloaded.
         */ /**
         * Return the player to its initial state.
         *
         * @return {UnloadPromise}
         */},{key:"unload",value:function unload(){return this.callMethod('unload');}/**
         * Cleanup the player and remove it from the DOM
         *
         * It won't be usable and a new one should be constructed
         *  in order to do any operations.
         *
         * @return {Promise}
         */},{key:"destroy",value:function destroy(){var _this5=this;return new npo_src(function(resolve){readyMap.delete(_this5);playerMap.delete(_this5.element);if(_this5._originalElement){playerMap.delete(_this5._originalElement);_this5._originalElement.removeAttribute('data-vimeo-initialized');}if(_this5.element&&_this5.element.nodeName==='IFRAME'&&_this5.element.parentNode){_this5.element.parentNode.removeChild(_this5.element);}resolve();});}/**
         * A promise to get the autopause behavior of the video.
         *
         * @promise GetAutopausePromise
         * @fulfill {boolean} Whether autopause is turned on or off.
         * @reject {UnsupportedError} Autopause is not supported with the current
         *         player or browser.
         */ /**
         * Get the autopause behavior for this player.
         *
         * @return {GetAutopausePromise}
         */},{key:"getAutopause",value:function getAutopause(){return this.get('autopause');}/**
         * A promise to set the autopause behavior of the video.
         *
         * @promise SetAutopausePromise
         * @fulfill {boolean} Whether autopause is turned on or off.
         * @reject {UnsupportedError} Autopause is not supported with the current
         *         player or browser.
         */ /**
         * Enable or disable the autopause behavior of this player.
         *
         * By default, when another video is played in the same browser, this
         * player will automatically pause. Unless you have a specific reason
         * for doing so, we recommend that you leave autopause set to the
         * default (`true`).
         *
         * @param {boolean} autopause
         * @return {SetAutopausePromise}
         */},{key:"setAutopause",value:function setAutopause(autopause){return this.set('autopause',autopause);}/**
         * A promise to get the buffered property of the video.
         *
         * @promise GetBufferedPromise
         * @fulfill {Array} Buffered Timeranges converted to an Array.
         */ /**
         * Get the buffered property of the video.
         *
         * @return {GetBufferedPromise}
         */},{key:"getBuffered",value:function getBuffered(){return this.get('buffered');}/**
         * A promise to get the color of the player.
         *
         * @promise GetColorPromise
         * @fulfill {string} The hex color of the player.
         */ /**
         * Get the color for this player.
         *
         * @return {GetColorPromise}
         */},{key:"getColor",value:function getColor(){return this.get('color');}/**
         * A promise to set the color of the player.
         *
         * @promise SetColorPromise
         * @fulfill {string} The color was successfully set.
         * @reject {TypeError} The string was not a valid hex or rgb color.
         * @reject {ContrastError} The color was set, but the contrast is
         *         outside of the acceptable range.
         * @reject {EmbedSettingsError} The owner of the player has chosen to
         *         use a specific color.
         */ /**
         * Set the color of this player to a hex or rgb string. Setting the
         * color may fail if the owner of the video has set their embed
         * preferences to force a specific color.
         *
         * @param {string} color The hex or rgb color string to set.
         * @return {SetColorPromise}
         */},{key:"setColor",value:function setColor(color){return this.set('color',color);}/**
         * A representation of a cue point.
         *
         * @typedef {Object} VimeoCuePoint
         * @property {number} time The time of the cue point.
         * @property {object} data The data passed when adding the cue point.
         * @property {string} id The unique id for use with removeCuePoint.
         */ /**
         * A promise to get the cue points of a video.
         *
         * @promise GetCuePointsPromise
         * @fulfill {VimeoCuePoint[]} The cue points added to the video.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */ /**
         * Get an array of the cue points added to the video.
         *
         * @return {GetCuePointsPromise}
         */},{key:"getCuePoints",value:function getCuePoints(){return this.get('cuePoints');}/**
         * A promise to get the current time of the video.
         *
         * @promise GetCurrentTimePromise
         * @fulfill {number} The current time in seconds.
         */ /**
         * Get the current playback position in seconds.
         *
         * @return {GetCurrentTimePromise}
         */},{key:"getCurrentTime",value:function getCurrentTime(){return this.get('currentTime');}/**
         * A promise to set the current time of the video.
         *
         * @promise SetCurrentTimePromise
         * @fulfill {number} The actual current time that was set.
         * @reject {RangeError} the time was less than 0 or greater than the
         *         video’s duration.
         */ /**
         * Set the current playback position in seconds. If the player was
         * paused, it will remain paused. Likewise, if the player was playing,
         * it will resume playing once the video has buffered.
         *
         * You can provide an accurate time and the player will attempt to seek
         * to as close to that time as possible. The exact time will be the
         * fulfilled value of the promise.
         *
         * @param {number} currentTime
         * @return {SetCurrentTimePromise}
         */},{key:"setCurrentTime",value:function setCurrentTime(currentTime){return this.set('currentTime',currentTime);}/**
         * A promise to get the duration of the video.
         *
         * @promise GetDurationPromise
         * @fulfill {number} The duration in seconds.
         */ /**
         * Get the duration of the video in seconds. It will be rounded to the
         * nearest second before playback begins, and to the nearest thousandth
         * of a second after playback begins.
         *
         * @return {GetDurationPromise}
         */},{key:"getDuration",value:function getDuration(){return this.get('duration');}/**
         * A promise to get the ended state of the video.
         *
         * @promise GetEndedPromise
         * @fulfill {boolean} Whether or not the video has ended.
         */ /**
         * Get the ended state of the video. The video has ended if
         * `currentTime === duration`.
         *
         * @return {GetEndedPromise}
         */},{key:"getEnded",value:function getEnded(){return this.get('ended');}/**
         * A promise to get the loop state of the player.
         *
         * @promise GetLoopPromise
         * @fulfill {boolean} Whether or not the player is set to loop.
         */ /**
         * Get the loop state of the player.
         *
         * @return {GetLoopPromise}
         */},{key:"getLoop",value:function getLoop(){return this.get('loop');}/**
         * A promise to set the loop state of the player.
         *
         * @promise SetLoopPromise
         * @fulfill {boolean} The loop state that was set.
         */ /**
         * Set the loop state of the player. When set to `true`, the player
         * will start over immediately once playback ends.
         *
         * @param {boolean} loop
         * @return {SetLoopPromise}
         */},{key:"setLoop",value:function setLoop(loop){return this.set('loop',loop);}/**
         * A promise to set the muted state of the player.
         *
         * @promise SetMutedPromise
         * @fulfill {boolean} The muted state that was set.
         */ /**
         * Set the muted state of the player. When set to `true`, the player
         * volume will be muted.
         *
         * @param {boolean} muted
         * @return {SetMutedPromise}
         */},{key:"setMuted",value:function setMuted(muted){return this.set('muted',muted);}/**
         * A promise to get the muted state of the player.
         *
         * @promise GetMutedPromise
         * @fulfill {boolean} Whether or not the player is muted.
         */ /**
         * Get the muted state of the player.
         *
         * @return {GetMutedPromise}
         */},{key:"getMuted",value:function getMuted(){return this.get('muted');}/**
         * A promise to get the paused state of the player.
         *
         * @promise GetLoopPromise
         * @fulfill {boolean} Whether or not the video is paused.
         */ /**
         * Get the paused state of the player.
         *
         * @return {GetLoopPromise}
         */},{key:"getPaused",value:function getPaused(){return this.get('paused');}/**
         * A promise to get the playback rate of the player.
         *
         * @promise GetPlaybackRatePromise
         * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
         */ /**
         * Get the playback rate of the player on a scale from `0.5` to `2`.
         *
         * @return {GetPlaybackRatePromise}
         */},{key:"getPlaybackRate",value:function getPlaybackRate(){return this.get('playbackRate');}/**
         * A promise to set the playbackrate of the player.
         *
         * @promise SetPlaybackRatePromise
         * @fulfill {number} The playback rate was set.
         * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
         */ /**
         * Set the playback rate of the player on a scale from `0.5` to `2`. When set
         * via the API, the playback rate will not be synchronized to other
         * players or stored as the viewer's preference.
         *
         * @param {number} playbackRate
         * @return {SetPlaybackRatePromise}
         */},{key:"setPlaybackRate",value:function setPlaybackRate(playbackRate){return this.set('playbackRate',playbackRate);}/**
         * A promise to get the played property of the video.
         *
         * @promise GetPlayedPromise
         * @fulfill {Array} Played Timeranges converted to an Array.
         */ /**
         * Get the played property of the video.
         *
         * @return {GetPlayedPromise}
         */},{key:"getPlayed",value:function getPlayed(){return this.get('played');}/**
         * A promise to get the seekable property of the video.
         *
         * @promise GetSeekablePromise
         * @fulfill {Array} Seekable Timeranges converted to an Array.
         */ /**
         * Get the seekable property of the video.
         *
         * @return {GetSeekablePromise}
         */},{key:"getSeekable",value:function getSeekable(){return this.get('seekable');}/**
         * A promise to get the seeking property of the player.
         *
         * @promise GetSeekingPromise
         * @fulfill {boolean} Whether or not the player is currently seeking.
         */ /**
         * Get if the player is currently seeking.
         *
         * @return {GetSeekingPromise}
         */},{key:"getSeeking",value:function getSeeking(){return this.get('seeking');}/**
         * A promise to get the text tracks of a video.
         *
         * @promise GetTextTracksPromise
         * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
         */ /**
         * Get an array of the text tracks that exist for the video.
         *
         * @return {GetTextTracksPromise}
         */},{key:"getTextTracks",value:function getTextTracks(){return this.get('textTracks');}/**
         * A promise to get the embed code for the video.
         *
         * @promise GetVideoEmbedCodePromise
         * @fulfill {string} The `<iframe>` embed code for the video.
         */ /**
         * Get the `<iframe>` embed code for the video.
         *
         * @return {GetVideoEmbedCodePromise}
         */},{key:"getVideoEmbedCode",value:function getVideoEmbedCode(){return this.get('videoEmbedCode');}/**
         * A promise to get the id of the video.
         *
         * @promise GetVideoIdPromise
         * @fulfill {number} The id of the video.
         */ /**
         * Get the id of the video.
         *
         * @return {GetVideoIdPromise}
         */},{key:"getVideoId",value:function getVideoId(){return this.get('videoId');}/**
         * A promise to get the title of the video.
         *
         * @promise GetVideoTitlePromise
         * @fulfill {number} The title of the video.
         */ /**
         * Get the title of the video.
         *
         * @return {GetVideoTitlePromise}
         */},{key:"getVideoTitle",value:function getVideoTitle(){return this.get('videoTitle');}/**
         * A promise to get the native width of the video.
         *
         * @promise GetVideoWidthPromise
         * @fulfill {number} The native width of the video.
         */ /**
         * Get the native width of the currently‐playing video. The width of
         * the highest‐resolution available will be used before playback begins.
         *
         * @return {GetVideoWidthPromise}
         */},{key:"getVideoWidth",value:function getVideoWidth(){return this.get('videoWidth');}/**
         * A promise to get the native height of the video.
         *
         * @promise GetVideoHeightPromise
         * @fulfill {number} The native height of the video.
         */ /**
         * Get the native height of the currently‐playing video. The height of
         * the highest‐resolution available will be used before playback begins.
         *
         * @return {GetVideoHeightPromise}
         */},{key:"getVideoHeight",value:function getVideoHeight(){return this.get('videoHeight');}/**
         * A promise to get the vimeo.com url for the video.
         *
         * @promise GetVideoUrlPromise
         * @fulfill {number} The vimeo.com url for the video.
         * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
         */ /**
         * Get the vimeo.com url for the video.
         *
         * @return {GetVideoUrlPromise}
         */},{key:"getVideoUrl",value:function getVideoUrl(){return this.get('videoUrl');}/**
         * A promise to get the volume level of the player.
         *
         * @promise GetVolumePromise
         * @fulfill {number} The volume level of the player on a scale from 0 to 1.
         */ /**
         * Get the current volume level of the player on a scale from `0` to `1`.
         *
         * Most mobile devices do not support an independent volume from the
         * system volume. In those cases, this method will always return `1`.
         *
         * @return {GetVolumePromise}
         */},{key:"getVolume",value:function getVolume(){return this.get('volume');}/**
         * A promise to set the volume level of the player.
         *
         * @promise SetVolumePromise
         * @fulfill {number} The volume was set.
         * @reject {RangeError} The volume was less than 0 or greater than 1.
         */ /**
         * Set the volume of the player on a scale from `0` to `1`. When set
         * via the API, the volume level will not be synchronized to other
         * players or stored as the viewer’s preference.
         *
         * Most mobile devices do not support setting the volume. An error will
         * *not* be triggered in that situation.
         *
         * @param {number} volume
         * @return {SetVolumePromise}
         */},{key:"setVolume",value:function setVolume(volume){return this.set('volume',volume);}}]);return Player;}();// Setup embed only if this is not a node environment
if(!isNode){initializeEmbeds();resizeEmbeds();}/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=Player;/***/}),/***/"./src/scripts/lib/media-check.js":(/*!****************************************!*\
      !*** ./src/scripts/lib/media-check.js ***!
      \****************************************/ /***/()=>{window.mediaCheck=function(options){var mq;function mqChange(mq,options){if(mq.matches){if(typeof options.entry==="function"){options.entry();}}else if(typeof options.exit==="function"){options.exit();}};mq=window.matchMedia(options.media);mq.addListener(function(){mqChange(mq,options);});mqChange(mq,options);};/***/}),/***/"./src/scripts/lib/pubsub.js":(/*!***********************************!*\
      !*** ./src/scripts/lib/pubsub.js ***!
      \***********************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */PUB_SUB_EVENTS:()=>(/* binding */PUB_SUB_EVENTS),/* harmony export */publish:()=>(/* binding */publish),/* harmony export */subscribe:()=>(/* binding */subscribe)/* harmony export */});let subscribers={};const PUB_SUB_EVENTS={cartUpdate:'cart-update',//The cart has been updated
variantOptionsChange:'variant-options-change',//A product option was selected (but not necessarily a variant change)
variantChange:'variant-change',//The product form has a new variant selected
cartError:'cart-error'//There was an error updating the cart
};function subscribe(eventName,callback){if(subscribers[eventName]===undefined){subscribers[eventName]=[];}subscribers[eventName]=[...subscribers[eventName],callback];return function unsubscribe(){subscribers[eventName]=subscribers[eventName].filter(cb=>{return cb!==callback;});};}function publish(eventName,data){if(subscribers[eventName]){subscribers[eventName].forEach(callback=>{callback(data);});}}/***/}),/***/"./src/scripts/lib/renderSections.js":(/*!*******************************************!*\
      !*** ./src/scripts/lib/renderSections.js ***!
      \*******************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */getSectionInnerHTML:()=>(/* binding */getSectionInnerHTML),/* harmony export */renderSections:()=>(/* binding */renderSections)/* harmony export */});/**
     * Request one or more sections from the Shopify section rendering API
     * See: https://shopify.dev/docs/api/section-rendering
     * 
     * @param {Array} sections - An array of section names to request
     * @param {String} [path] - Optional path to request sections from. Defaults to the current path if not provided
     * @returns {Object} - An object containing the section names and their rendered HTML
     */async function renderSections(sections,path){const slug=path?window.Shopify.routes.root+path:window.location.pathname;const url=new URL(slug,window.location.origin);const params=new URLSearchParams({sections:sections.join(',')});url.search=params.toString();const response=await fetch(url);const data=await response.json();return data;}function getSectionInnerHTML(html,selector){return new DOMParser().parseFromString(html,'text/html').querySelector(selector).innerHTML;}/***/}),/***/"./src/scripts/modules/module-oneCart.js":(/*!***********************************************!*\
      !*** ./src/scripts/modules/module-oneCart.js ***!
      \***********************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _lib_renderSections__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./../lib/renderSections */"./src/scripts/lib/renderSections.js");/* harmony import */var _lib_pubsub__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./../lib/pubsub */"./src/scripts/lib/pubsub.js");const OneCartView=backbone__WEBPACK_IMPORTED_MODULE_0___default().View.extend({initialize:function(settings){var self=this;/*if(window.location.pathname.endsWith('cellcosmet-regimen-finder')) {
            self.initFetchHandle(window, window.fetch);
        }*/this.unsubscribe=(0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.subscribe)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.PUB_SUB_EVENTS.cartUpdate,this.handleCartUpdate.bind(this));},events:{'click .item-remove':'handleRemoveItem','change .item-quantity input':'handleQuantityChange','click .item-quantity button':'handleQuantityButtonClick'},initFetchHandle:function(ns,fetch){var self=this;ns.fetch=function(){const response=fetch.apply(this,arguments);response.then(res=>{if(`${window.location.origin}/cart/add.js`.includes(res.url)){console.log('Add To Cart Hanle');(0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.PUB_SUB_EVENTS.cartUpdate,{});}});return response;};},/**
       * Request updated cart HTML from Shopify Section Rendering API and replace the
       * current cart HTML with the new HTML
       */handleCartUpdate:async function(){const res=await(0,_lib_renderSections__WEBPACK_IMPORTED_MODULE_1__.renderSections)(['cart']);const cartItemsHTML=(0,_lib_renderSections__WEBPACK_IMPORTED_MODULE_1__.getSectionInnerHTML)(res.cart,'.cart-items');this.el.querySelector('.cart-items').innerHTML=cartItemsHTML;const totalsHTML=(0,_lib_renderSections__WEBPACK_IMPORTED_MODULE_1__.getSectionInnerHTML)(res.cart,'.cart-summary-wrapper');this.el.querySelector('.cart-summary-wrapper').innerHTML=totalsHTML;const subtotalHTML=(0,_lib_renderSections__WEBPACK_IMPORTED_MODULE_1__.getSectionInnerHTML)(res.cart,'.total');this.el.querySelector('.total').innerHTML=subtotalHTML;if(this.error){const{id,message}=this.error;this.showError(id,message);;}},/**
       * Handle click events on "remove item" buttons
       * @param {Event} e A click event
       */handleRemoveItem:async function(e){e.preventDefault();const cartItemElem=e.currentTarget.closest('.cart-item');this.updateQuantity(cartItemElem.dataset.id,0);},/**
       * Start timer to send update request and reset timer if another change event
       * occurs before the timer is up
       * @param {Event} e A change event
       */handleQuantityChange:function(e){if(this.timeout)clearTimeout(this.timeout);const onTimeout=_=>{this.updateQuantity(e.currentTarget.dataset.id,e.currentTarget.value);};this.timeout=setTimeout(onTimeout.bind(this),1000);},/**
       * Request to update cart item quantity and update relevant info
       * @param {String} id The cart item's variant ID
       * @param {Number} quantity The cart item's new quantity
       */updateQuantity:async function(id,quantity){this.setLoading(id);const res=await fetch(ORW.routes.cartChangeURL,{method:'POST',headers:{'Content-Type':'application/json',Accept:`application/json`},body:JSON.stringify({id,quantity})});(0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.PUB_SUB_EVENTS.cartUpdate,{});const cart=await res.json();if(cart.errors){this.error={id,message:cart.errors.trim()};};},/**
       * Update the quantity input value based on the button clicked and dispatch a
       * change event
       * @param {Event} e A click event
       */handleQuantityButtonClick:function(e){const input=e.currentTarget.closest('.item-quantity').querySelector('input');e.currentTarget.name==='plus'?input.stepUp():input.stepDown();input.dispatchEvent(new Event('change',{bubbles:true}));},/**
       * Hide prices and show loading spinner for a cart item and the cart subtotal
       * @param {String} id The line item ID of the cart item
       */setLoading:function(id){const subtotal=this.el.querySelector('.total-price');subtotal.querySelector('span').style.display='none';subtotal.querySelector('.spinner').style.display='block';const item=this.el.querySelector(`[data-id="${id}"]`);item.querySelector('.item-total span').style.display='none';item.querySelector('.item-total .spinner').style.display='block';},showError:function(id,message){const item=this.el.querySelector(`[data-id="${id}"]`);const error=item.querySelector('.item-error');console.log(error,message);error.textContent=message;},destroy:function(){this.unsubscribe();}});/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OneCartView;/***/}),/***/"./src/scripts/modules/module-oneContact.js":(/*!**************************************************!*\
      !*** ./src/scripts/modules/module-oneContact.js ***!
      \**************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _styles_modules_oneContact_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../../styles/modules/oneContact.scss */"./src/styles/modules/oneContact.scss");/*
        OneContact 2.0.0 Usage (Webpack)
        Yang @onerockwell
        
        OneContact.init({
            el: $('.contact-form-container'),
            submitType: 'json' || 'default',
            errorMsg: 'Oops, something wrong happened, please try again later',
            successMsg: 'Thank you and welcome to Safiyaa. You will receive an email to confirm your subscription shortly.',
            requiredMsg: 'Error: required field',
            errorEmail: 'Error: please ensure formatting is correct',
            successCallback: function(d){},
            errorCallback: function(err){}
        });
        
    */ // Import all dependencies here
// Define the Backbone View here (Optional)
let OneContactView=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(settings){console.log('init contact form');var self=this;self.$form=self.$el.find('form');self.submitType=settings.submitType||'default';self.errorMsg=settings.errorMsg||'Oops, something wrong happened, please try again later';self.successMsg=settings.successMsg||'Thank you for your interest! We will be in touch soon.';self.errorRequired=settings.requiredMsg||'Error: required field';self.errorEmail=settings.errorEmail||'Error: please ensure formatting is correct';self.onSubmit=settings.onSubmit?settings.onSubmit:false;self.successCallback=settings.successCallback?settings.successCallback:function(d){alert(d);};self.errorCallback=settings.errorCallback?settings.errorCallback:function(err){alert(err);};self.submisionCtl();},events:{'blur input.required':'validation'},submisionCtl:function(){var self=this;var events={};if(self.submitType=='custom'){events={'submit form':function(e){if(self.validation(e)){self.onSubmit(e);}else{return false;}}};}else{events={'submit form':function(e){e.preventDefault();if(self.validation(e)){if(self.submitType=='json'){self.formSubmitJSON(e);}else{self.formSubmit(e);}}else{return false;}}};}// Update and delegate adding events
underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,events);self.delegateEvents();},validation:function(e){var self=this;var passValidation=true;var $curr=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);var $requiredFields=$curr.find('input.required');var errorHandling=function($container,msg){if($container.find('.error-msg').length){$container.find('.error-msg').text(msg);}else{$container.append('<span class="error-msg">'+msg+'</span>');}};if($curr.hasClass('required')){$requiredFields=$curr;}underscore__WEBPACK_IMPORTED_MODULE_1___default().each($requiredFields,function(input){var $input=jquery__WEBPACK_IMPORTED_MODULE_0___default()(input);var $parent=$input.parent();var value=$input.val();var isEmailField=$input.attr('type')=='email'?true:false;var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;if(value==''){passValidation=false;$parent.addClass('input-error');errorHandling($parent,self.errorRequired);}else if(isEmailField){var resutl=regex.test(value);if(!resutl){passValidation=false;errorHandling($parent,self.errorEmail);}else{$parent.removeClass('input-error');}}else{$parent.removeClass('input-error');}});return passValidation;},formSubmit:function(e){var self=this;var $form=self.$form;jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({async:true,type:$form.attr('method'),url:$form.attr('action'),data:$form.serialize(),cache:false,error:function(err){self.errorCallback(err);},success:function(data){e.preventDefault();self.successCallback(data);}});},formSubmitJSON:function(e){var self=this;var $form=self.$form;jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({type:$form.attr('method'),url:$form.attr('action'),data:$form.serialize(),cache:false,dataType:'json',contentType:"application/json; charset=utf-8",error:function(err){self.errorCallback(err);},success:function(data){self.successCallback(data);}});},destroy:function(){var self=this;self.undelegateEvents();}});// Define the module here 
let OneContact={init:function(settings){return new OneContactView(settings);}};// Output the module
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OneContact;/***/}),/***/"./src/scripts/modules/module-oneCookieBanner.js":(/*!*******************************************************!*\
      !*** ./src/scripts/modules/module-oneCookieBanner.js ***!
      \*******************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../modules/module-oneDrawer */"./src/scripts/modules/module-oneDrawer.js");/* harmony import */var _styles_modules_oneCookieBanner_scss__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ../../styles/modules/oneCookieBanner.scss */"./src/styles/modules/oneCookieBanner.scss");/*
        OneCookieBanner 2.0.0 Usage (Webpack)
        yang @onerockwell
    */ // Import all dependencies here
// Define the Backbone View here (Optional)
let OneCookieBannerView=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(settings){console.log('init cookie banner');var self=this;self.$cookieBanner=self.$el;self.days=settings.cookieDays||self.$cookieBanner.data('cookiedays');self.initModal();},events:{'click .accept':'close'},initModal:function(){var self=this;self.cookieBannerDrawer=_modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_3__["default"].init({dontCloseWhenClickOutside:true,drawerElem:'#'+self.$cookieBanner.attr('id'),triggerEvent:'click',triggerElem:'.cookie-banner-trigger',closeCallback:function(e){if(ORW.subscribeModal){ORW.subscribeModal.open();}}});if(!ORW.utilities.getCookie('acceptcookieterm')){setTimeout(function(){self.open();},0);}},open:function(){var self=this;jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('cookie-not-accepted');self.cookieBannerDrawer.openDrawer();},close:function(){var self=this;ORW.utilities.setCookie('acceptcookieterm',true,self.days);jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('cookie-not-accepted');self.cookieBannerDrawer.closeDrawer();},destroy:function(){var self=this;self.undelegateEvents();}});// Define the module here 
let OneCookieBanner={init:function(settings){return new OneCookieBannerView(settings);}};// Output the module
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OneCookieBanner;/***/}),/***/"./src/scripts/modules/module-oneDrawer.js":(/*!*************************************************!*\
      !*** ./src/scripts/modules/module-oneDrawer.js ***!
      \*************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _templates_template_oneDrawerDefault_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../templates/template-oneDrawerDefault.html */"./src/scripts/templates/template-oneDrawerDefault.html");/* harmony import */var _styles_modules_oneDrawer_scss__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ../../styles/modules/oneDrawer.scss */"./src/styles/modules/oneDrawer.scss");/*
        OneDrawer 2.5.1 Usage (Webpack Update)
        Yang @onerockwell
        
        V2 Change log
        - Adding modal support
        - Adding closeOtherDrawers method when open up a new drawer
        - Adding global drawer stack for better accessibility
        - Adding dontCloseWhenClickOutside as an option
        - Adding dontShowOverlay as an option, default to false
        
        var drawerCtl = OneDrawer().init({
            drawerElem: '#drawer',          // Your drawer class or id. If left empty, will use default drawer modal
            drawerModalId: 'modal-class',// Your drawer modal special class, which allow you to style and/or targetting the particular modal
            drawerContent: [HTML],			// Assign html as drawer modal content.
            triggerEvent: 'click',          // Trigger event
            triggerElem: '.drawer-toggle',  // Your drawer trigger id 
            openCallback: function(){ alert('opened!'); }        // You can add drawer open 
            closeCallback: function(){ alert('closed!'); }        // You can add drawer close callback function here
            events: {                       // Accept events key pairs 
                'click form button' : function(e){
                    e.preventDefault();
                    var $form = $(e.currentTarget).parent('form');
                    if ($form.find('input').val()) {
                        // Note: 'this' represent the OneDrawer object not the current view, coloseDrawer() is an native member function of OneDrawer
                        this.closeDrawer(); 
                        $form.submit();
                    }
                }
            }
        });
    */let OneDrawerView=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(settings){console.log('init modal');var self=this;self.drawerOpened=false;self.drawerElem=settings.drawerElem;self.drawerContent=settings.drawerContent;self.drawerModalId=settings.drawerModalId;self.triggerEvent='click';// settings.triggerEvent; // Force using click for drawers
self.triggerElem=settings.triggerElem;self.initCallback=settings.initCallback?settings.initCallback:function(){};self.openCallback=settings.openCallback?settings.openCallback:function(){};self.closeCallback=settings.closeCallback?settings.closeCallback:function(){};self.eventsAdditional=settings.events?settings.events:{};self.dontCloseWhenClickOutside=settings.dontCloseWhenClickOutside?settings.dontCloseWhenClickOutside:false;self.dontShowOverlay=settings.dontShowOverlay?settings.dontShowOverlay:false;self.isModal=self.drawerElem?false:true;self.$body=self.$el;if(self.drawerElem){self.$drawer=jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.drawerElem);}else if(self.drawerContent){// Use default modal template
var content=self.buildTemplate({id:self.drawerModalId,body:self.drawerContent});self.$drawer=jquery__WEBPACK_IMPORTED_MODULE_0___default()(content).appendTo("body");self.drawerElem='.'+self.$drawer.attr('class').replace(' ','.');}self.events={};// Global events
if(!self.dontCloseWhenClickOutside){jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(self.triggerEvent+' keyup',function(e){console.log('drawer: click on window');if(e.type==self.triggerEvent||e.type=='keyup'&&e.keyCode==27){self.closeDrawer(true);}});}// Trigger event
var eventKey=self.triggerEvent+' '+self.triggerElem;self.events[eventKey]=function(e){e.stopPropagation();e.preventDefault();self.drawerCtl();};// Drawer event
var eventKey=self.triggerEvent+' '+self.drawerElem;self.events[eventKey]=function(e){e.stopPropagation();};var eventKey=self.triggerEvent+' '+self.drawerElem+' .drawer-close';self.events[eventKey]=function(e){e.stopPropagation();e.preventDefault();self.closeDrawer();};underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,self.eventsAdditional);self.delegateEvents();// console.log(self.events);
self.initCallback();},events:{// Using dynamic event trigger to make the module configurable
},drawerCtl:function(forceClose){var self=this;if(!self.$drawer.hasClass('opened')){self.openDrawer();}else{self.closeDrawer();}},openDrawer:function(){var self=this;self.closeOtherDrawers();if(!self.dontShowOverlay){self.$body.trigger('drawer-opt');}if(self.isModal){self.$drawer.css('z-index','1002');}self.$drawer.addClass('opened');self.openCallback();self.drawerOpened=true;},closeDrawer:function(force){var self=this;if(force){if(self.$drawer.hasClass('inner-action-engaged')){self.$drawer.trigger('terminate-inner-action');}if(self.$drawer.hasClass('opened')){console.log('Close drawer and force terminate inner action');self.$body.removeClass('show-overlay drawer-opt');if(self.isModal){self.$drawer.on('transitionend',function(){self.$drawer.off('transitionend');self.$drawer.css('z-index','-1');});}self.$drawer.removeClass('opened');self.closeCallback();}}else{if(self.$drawer.hasClass('inner-action-engaged')){self.$drawer.trigger('terminate-inner-action');}else if(self.$drawer.hasClass('opened')){console.log('Close drawer');self.$body.removeClass('show-overlay drawer-opt');if(self.isModal){self.$drawer.on('transitionend',function(){self.$drawer.off('transitionend');self.$drawer.css('z-index','-1');});}self.$drawer.removeClass('opened');self.closeCallback();}}self.drawerOpened=false;},closeOtherDrawers:function(){var self=this;underscore__WEBPACK_IMPORTED_MODULE_1___default().each(ORW.drawerStack,function(drawer){if(drawer.drawerOpened){drawer.closeDrawer(true);}});},destroy:function(){var self=this;if(self.$drawer&&self.$drawer.hasClass('drawer-modal')){self.$drawer.remove();}self.undelegateEvents();},buildTemplate:function(content,type){var self=this,typeTemplate;switch(type){case'':break;default:typeTemplate=_templates_template_oneDrawerDefault_html__WEBPACK_IMPORTED_MODULE_3__["default"];break;};return typeTemplate({content:content});}});let OneDrawer={init:function(settings){if(!ORW.drawerStack){ORW.drawerStack=[];}settings.el=jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');var newDrawer=new OneDrawerView(settings);ORW.drawerStack.push(newDrawer);return newDrawer;}};/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OneDrawer;/***/}),/***/"./src/scripts/modules/module-oneMarketing.js":(/*!****************************************************!*\
      !*** ./src/scripts/modules/module-oneMarketing.js ***!
      \****************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>(/* binding */OneMarketing)/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _lib_pubsub__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./../lib/pubsub */"./src/scripts/lib/pubsub.js");/*
        OneMarketing
        jwerner@onerockwell
        Description: This module manages custom event dataLayer sends to Google Tag Manager (GTM).  
        Data is formatted for Google Analytics 4 (GA4),
            and the events match basic / recommended GA4 eCommerce events (prefixed with "dl_"). 
            The list of events is available in this module's gaEvents() getter function.
        Event calls and snippet data to be included in other files where needed.  
            See: https://docs.google.com/document/d/1VYAs2LofhDzl8OfkL__iiYmee-Pm91RetlYxUX3AsMo/
        Tags and variables for these custom events need to be set up in GTM.  
    */class OneMarketing{constructor(){this.settings=ORW.marketingSettings||'';console.log('init marketing');/*
            settings = {
                // Used internally & externally (GTM needs access):
                promoParentClass: string, // Class name applied for view_promotion when sent via GTM
                dataAttributePromo: string, // Data attribute applied to ga4-promo-data items
                cartCurrency: string, // Currency code to send along with cart / item values
            }
                    // Used internally:
            trackPromosViaDataLayer: boolean, // If true: send view_promotion event via dataLayer
            customSearchEvent: boolean, // If true: send search event in addition to default Enhanced Measurement
            dataAttributeItem: string, // Data attribute applied to ga4-item-data items
            productPageSelector: string, // CSS parent selector of PDP snippet
            cartPageSelector: string, // CSS parent selector of cart page snippet
            signUpFormID: string // ID of sign up / register account form
        */this.trackPromosViaDataLayer=false;this.customSearchEvent=false;this.dataAttributeItem='[data-ga-item-json]';this.productPageSelector='.product-core';this.cartPageSelector='.cart-item';this.signUpFormID='create_customer';this.promoParentClass=this.settings.promoParentClass||'ga-promo-element';this.dataAttributePromo=this.settings.dataAttributePromo||'[data-ga-promo-json]';this.cartCurrency=this.settings.cartCurrency||'';}/* 
          --- GTM events / dataLayer functions ---
      */get gaEvents(){// Custom GTM trigger event names
return{add_to_cart:"dl_add_to_cart",remove_from_cart:"dl_remove_from_cart",view_cart:"dl_view_cart",begin_checkout:"dl_begin_checkout",add_shipping_info:"dl_add_shipping_info",add_payment_info:"dl_add_payment_info",view_item_list:"dl_view_item_list",view_item:"dl_view_item",view_promotion:"dl_view_promotion",select_promotion:"dl_select_promotion",add_to_wishlist:"dl_add_to_wishlist",search:"dl_search",sign_up:"dl_sign_up"};}dataLayerPush(eventString,ecommerceObject){window.dataLayer=window.dataLayer||[];window.dataLayer.push({ecommerce:null});window.dataLayer.push({event:eventString,ecommerce:ecommerceObject});}/* 
          --- Event watcher functions --- 
      */ /* --- Cart events: add & remove from cart --- */initCartWatchers(){// Click "X" to remove all quantities of item
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-items').on('click','.item-remove',e=>{this.removeFromCart(e.currentTarget);});// Click plus / minus or edit quantity number directly
let timer;jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-items').on('change','[data-cart-quantity]',e=>{clearTimeout(timer);timer=setTimeout(()=>{this.checkItemQtyChangeCart(e);},500);});}/* --- Update variant info when swatch changed --- */initVariantWatcher(productCore){(0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_1__.PUB_SUB_EVENTS.variantChange,variant=>{let newVariant=variant.id;let gaData=jquery__WEBPACK_IMPORTED_MODULE_0___default()(productCore).find(this.dataAttributeItem);gaData.data('ga-variant-id',newVariant);});}/* --- Wishlist event: add to wishlist --- */initWishlistWatcher(){// Item added to wishlist default event: update as needed to work with wishlist app
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).on('click','.add-to-wishlist',e=>{this.addToWishlist(e.target);});}/* --- Featured promotion events (using ga4-promo-data snippet): view & select --- */initPromoWatchers(){const $promos=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.dataAttributePromo);$promos.each((index,promo)=>{const ecommerceObject=this.__parseItemJSON(promo);if(ecommerceObject){const $promoParent=jquery__WEBPACK_IMPORTED_MODULE_0___default()(promo).parent();const hasClick=jquery__WEBPACK_IMPORTED_MODULE_0___default()(promo).data('ga-promo-click');if(this.trackPromosViaDataLayer){this.viewPromo(ecommerceObject);}else{// GTM element visibility selector
$promoParent.addClass(this.promoParentClass);}if(hasClick){let clickTarget=$promoParent;if(hasClick!==true){clickTarget=$promoParent.find(hasClick);};this.selectPromo(clickTarget,ecommerceObject);}}});}/* 
          --- GTM Event functions --- 
      */ /* --- Promotion events --- */viewPromo(ecommerceObject){/* 
            dataLayer object format:
            {
                promotion_id: string,
                promotion_name: string,
                items: array
            }
        */const gaEvent=this.gaEvents.view_promotion;this.dataLayerPush(gaEvent,ecommerceObject);}selectPromo(promo,ecommerceObject){/* 
            dataLayer object format:
            {
                promotion_id: string,
                promotion_name: string,
                items: array
            }
        */const gaEvent=this.gaEvents.select_promotion;jquery__WEBPACK_IMPORTED_MODULE_0___default()(promo).one('click',e=>{e.preventDefault();this.dataLayerPush(gaEvent,ecommerceObject);this.__triggerButtonOrLink(e.target);});}/* --- Product / PDP events --- */viewItem(productCore){/* 
            dataLayer object format:
            {
                currency: string,
                value: number,
                items: array
            }
        */const gaEvent=this.gaEvents.view_item;const itemData=this.__getItemDataFromJSON(productCore);if(itemData){const ecommerceObject=this.__createEcommerceObjectFromItem(itemData);this.dataLayerPush(gaEvent,ecommerceObject);}}/* --- Default wishlist event; update to work with wishlist app --- */addToWishlist(eventTarget){/* 
            dataLayer object format:
            {
                currency: string,
                value: number,
                items: array
            }
        */const gaEvent=this.gaEvents.add_to_wishlist;const $productCore=jquery__WEBPACK_IMPORTED_MODULE_0___default()(eventTarget).parents(this.productPageSelector);const itemData=this.__getItemDataFromJSON($productCore);if(itemData){const ecommerceObject=this.__createEcommerceObjectFromItem(itemData);this.dataLayerPush(gaEvent,ecommerceObject);}}/* --- PLP / Search events --- */viewItemList(collection,items){/* 
            dataLayer object format:
            {
                item_list_id: string,
                item_list_name: string,
                items: array,
                (item additional info: index)
            }
        */const gaEvent=this.gaEvents.view_item_list;const itemListID=collection.data('ga-id');const itemListName=collection.data('ga-name');let itemsArray=this.__createListItemsArray(items);const searchQuery=ORW.utilities.getUrlParam(window.location.href,'q');if(searchQuery&&this.customSearchEvent){this.search(searchQuery);}if(itemsArray.length>0){const ecommerceObject={item_list_id:itemListID,item_list_name:itemListName,items:itemsArray};this.dataLayerPush(gaEvent,ecommerceObject);}}search(query){/* 
            dataLayer object format:
            {
                search_term: string
            }
        */const gaEvent=this.gaEvents.search;const formattedQuery=query.replace('+',' ');const ecommerceObject={search_term:formattedQuery};this.dataLayerPush(gaEvent,ecommerceObject);}/* --- Account events --- */signUp(){/* 
            dataLayer object format:
            {
                method: string
            }
        */const gaEvent=this.gaEvents.sign_up;const ecommerceObject={method:'Shopify'};this.dataLayerPush(gaEvent,ecommerceObject);}accountForm(form){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).attr('id')===this.signUpFormID){this.signUp();}}/* --- Cart page non-Ajax events --- */removeFromCart(eventTarget){/* 
            dataLayer object format:
            {
                currency: string,
                value: number,
                items: array
            }
        */const gaEvent=this.gaEvents.remove_from_cart;const $clickedItem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(eventTarget).parents(this.cartPageSelector);const itemData=this.__getItemDataFromJSON($clickedItem);if(itemData){const ecommerceObject=this.__createEcommerceObjectFromItem(itemData);// Removing an item; value == negative
ecommerceObject.value=ecommerceObject.value*-1;this.dataLayerPush(gaEvent,ecommerceObject);}}async viewCart(){/* 
            dataLayer object format:
            {
                currency: string,
                value: number,
                items: array
            }
        */const gaEvent=this.gaEvents.view_cart;const cart=await this.__getCart();if(cart){const ecommerceObject=this.__createEcommerceObjectFromCart(cart);this.dataLayerPush(gaEvent,ecommerceObject);}}checkItemQtyChangeCart(event){/* 
            dataLayer object format:
            {
                currency: string,
                value: number,
                items: array
            }
        */let input=event.currentTarget;let quantity=this.__preferNumber(input.value);let originalQuantity=this.__preferNumber(input.defaultValue);let diff=quantity-originalQuantity;let parent=jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).parents(this.cartPageSelector);let itemData=this.__getItemDataFromJSON(parent);if(itemData){itemData.quantity=Math.abs(diff);const ecommerceObject=this.__createEcommerceObjectFromItem(itemData);let gaEvent;if(diff>0){// Quantity increased
gaEvent=this.gaEvents.add_to_cart;}else if(diff<0){// Quantity decreased
gaEvent=this.gaEvents.remove_from_cart;ecommerceObject.value=ecommerceObject.value*-1;}if(gaEvent){this.dataLayerPush(gaEvent,ecommerceObject);}}}checkItemQtyManualChangeCartPage(){/* 
            dataLayer object format:
            {
                currency: string,
                value: number,
                items: array
            }
        */const quantityInputs=jquery__WEBPACK_IMPORTED_MODULE_0___default()('input.js-qty__num');let itemsAdded=[];let itemsRemoved=[];let totalValueAdded=0;let totalValueRemoved=0;for(let input of quantityInputs){const item=jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).parents(this.cartPageSelector);const itemData=this.__getItemDataFromJSON(item);const itemQuantity=this.__preferNumber(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).val());if(itemData&&itemData.quantity!==itemQuantity){const qtyDiff=itemQuantity-itemData.quantity;itemData.quantity=Math.abs(qtyDiff);const valueChange=itemData.price*itemData.quantity;if(qtyDiff>0){// Items added
totalValueAdded+=valueChange;itemsAdded.push(itemData);}else{// Items removed
totalValueRemoved-=valueChange;itemsRemoved.push(itemData);}}}if(itemsAdded.length>0){const gaEvent=this.gaEvents.add_to_cart;const ecommerceObject={"currency":this.cartCurrency,"value":totalValueAdded,"items":itemsAdded};this.dataLayerPush(gaEvent,ecommerceObject);}if(itemsRemoved.length>0){const gaEvent=this.gaEvents.remove_from_cart;const ecommerceObject={"currency":this.cartCurrency,"value":totalValueRemoved,"items":itemsRemoved};this.dataLayerPush(gaEvent,ecommerceObject);}}addToCart(form){/* 
            dataLayer object format:
            {
                currency: string,
                value: number,
                items: array
            }
        */const gaEvent=this.gaEvents.add_to_cart;let quantity=1;// Default qty
let $formQtyInput=jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).find('input.qty-input');if($formQtyInput.length>0){quantity=$formQtyInput.val();}let parent=jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).parents(this.productPageSelector);let itemData=this.__getItemDataFromJSON(parent);if(itemData){itemData.quantity=this.__preferNumber(quantity);const ecommerceObject=this.__createEcommerceObjectFromItem(itemData);this.dataLayerPush(gaEvent,ecommerceObject);}}/* --- Checkout events --- */async checkoutEvents(){/* 
            dataLayer object format:
            {
                currency: string,
                value: number,
                items: array
            }
        */ // Checkout page events & associated GTM trigger
const checkoutTriggers={'contact_information':this.gaEvents.begin_checkout,'shipping_method':this.gaEvents.add_shipping_info,'payment_method':this.gaEvents.add_payment_info};if(window.Shopify&&window.Shopify.Checkout){const currentStep=window.Shopify.Checkout.step;if(currentStep){const gaEvent=checkoutTriggers[currentStep];if(gaEvent){const cart=await this.__getCart();if(cart){const ecommerceObject=this.__createEcommerceObjectFromCart(cart);ecommerceObject.coupon=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-ga-checkout-coupons]').html()||'';this.dataLayerPush(gaEvent,ecommerceObject);}}}}}/* --- Purchase event in ga4-checkout-script.liquid --- */ /* 
          --- Helper & format functions --- 
      */ /* --- Cart fetch for cart & checkout events --- */async __getCart(){let cartResponse,cartContents;try{cartResponse=await fetch('/cart.js');}catch(e){console.error(e);}if(cartResponse?.ok){cartContents=await cartResponse.json();}return cartContents;}__getItemDataFromJSON(item){// Translate parsed JSON into dataLayer-formatted item object
const jsonData=this.__getItemJSON(item);const parsedData=this.__parseItemJSON(jsonData);let formattedData;if(parsedData){const variantID=jsonData.data('ga-variant-id');if(variantID){// Product data
formattedData=this.__getProductInfo(parsedData,this.__preferNumber(variantID));}else{// Cart data
formattedData=this.__getItemInfo(parsedData);}}return formattedData;}__parseItemJSON(json){const jsonInner=jquery__WEBPACK_IMPORTED_MODULE_0___default()(json).html();let jsonParsed;try{jsonParsed=JSON.parse(jsonInner);}catch(e){return false;}return jsonParsed;}__getItemJSON(item){// Find the JSON data in the DOM
const $itemJSON=jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).find(this.dataAttributeItem);if($itemJSON.length>0){return $itemJSON;}else{return item;}}/* --- Single item event, like add to cart, view item, etc. --- */__createEcommerceObjectFromItem(item){const priceFormatted=item.price*item.quantity;const ecommerceObject={"currency":this.cartCurrency,"value":this.__preferNumber(priceFormatted)};ecommerceObject.items=[item];return ecommerceObject;}/* --- Multi-item event specific to cart, like view cart, checkout, etc. --- */__createEcommerceObjectFromCart(cart){const priceFormatted=this.__formatPrice(cart.total_price);const ecommerceObject={"currency":cart.currency||this.cartCurrency,"value":this.__preferNumber(priceFormatted)};ecommerceObject.items=this.__createCartItemsArray(cart);return ecommerceObject;}/* --- Cart item-specific: get and format line item data that will be used within items: [] array --- */__getItemInfo(item){const priceFormatted=this.__formatPrice(item.final_price);const discountFormatted=this.__formatPrice(item.line_level_total_discount);const coupons=this.__getItemCoupons(item);const gaFormattedItem={'item_id':item.sku,'item_name':item.product_title,'item_brand':item.vendor,'item_category':item.product_type,'item_variant':item.variant_title,'price':this.__preferNumber(priceFormatted),'quantity':this.__preferNumber(item.quantity),'affiliation':item.selling_plan_allocation_selling_plan_name||'','coupon':coupons,'discount':this.__preferNumber(discountFormatted)};return gaFormattedItem;}/* --- Product-specific: get and format variant data that will be used within items: [] array --- */__getProductInfo(product,variantID){let variant=product;for(const prodVariant of product.variants){if(prodVariant.id===variantID){variant=prodVariant;break;}}const priceFormatted=this.__formatPrice(variant.price);const gaFormattedProduct={'item_id':variant.sku,'item_name':product.title,'item_brand':product.vendor,'item_category':product.type,'item_variant':variant.title,'price':this.__preferNumber(priceFormatted),'quantity':1,'affiliation':'','coupon':'','discount':0};return gaFormattedProduct;}__createCartItemsArray(cart){let itemsArray=[];for(let item of cart.items){const newProduct=this.__getItemInfo(item);itemsArray.push(newProduct);};return itemsArray;}__createListItemsArray(items){let itemsArray=[];for(let item of items){if(item.classList.contains('promo')){// Exclude promo banners
continue;}const itemData=this.__getItemDataFromJSON(item);if(itemData){const index=jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).data('product-index');itemData.index=this.__zeroBasedIndex(index);itemsArray.push(itemData);}}return itemsArray;}__getItemCoupons(item){let coupons=[];const discounts=item.line_level_discount_allocations;if(discounts){for(let coupon of discounts){const couponName=coupon.discount_application.title.trim();coupons.push(couponName);}}return coupons.join(", ");}__triggerButtonOrLink(eventTarget){const targetLink=jquery__WEBPACK_IMPORTED_MODULE_0___default()(eventTarget).children().attr('href');if(targetLink){location.href=targetLink;}else{eventTarget.click();}}__zeroBasedIndex(index){const zeroedIndex=this.__preferNumber(index)-1;return zeroedIndex;}__preferNumber(input){// Standard JS, trailing zeroes will not be retained
const converted=Number(input)||input;return converted;}__formatPrice(price){// Convert Shopify's price result to decimal
let priceFormatted=price?price/100:'';if(priceFormatted===''){priceFormatted=0;}return priceFormatted;}// end helper / format functions
}/***/}),/***/"./src/scripts/modules/module-oneMobileMenu.js":(/*!*****************************************************!*\
      !*** ./src/scripts/modules/module-oneMobileMenu.js ***!
      \*****************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _styles_modules_oneMobileMenu_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../../styles/modules/oneMobileMenu.scss */"./src/styles/modules/oneMobileMenu.scss");/*
        OneMobileMenu 2.0.0 Usage (Webpack)
        yang @onerockwell
    */ // Import all dependencies here
// Define the Backbone View here (Optional)
let OneMobileMenuView=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(settings){console.log('init mobile menu');var self=this;self.$mobileNav=self.$el;self.$currentActive=false;self.openCallback=settings.openCallback?settings.openCallback:function(){console.log('open slide-in-menu callback');};self.closeCallback=settings.closeCallback?settings.closeCallback:function(){console.log('close slide-in-menu callback');};},events:{'terminate-inner-action':function(e){var self=this;if(self.$currentActive){self.$currentActive.find('.back-to a').trigger('click');}},'click [data-trigger]':function(e){// Contorls level2 slide in sub-menu
e.preventDefault();var self=this;var $trigger=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);var target=$trigger.data('trigger');var $target=self.$mobileNav.find('[data-target="'+target+'"]');if($target.length){$trigger.addClass('active');$target.addClass('active');self.$mobileNav.addClass('slide-menu-opened');self.openCallback();if($target.find('input').length){setTimeout(function(){$target.find('input').focus();},100);}self.$currentActive=$target;}},'click .back-to a':function(e){e.preventDefault();var self=this;var $backToBtn=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parent();var $target=$backToBtn.parent();var trigger=$target.data('target');var $trigger=self.$mobileNav.find('[data-trigger="'+trigger+'"]');self.$mobileNav.removeClass('slide-menu-opened');self.closeCallback();$target.removeClass('active');$trigger.removeClass('active');self.$currentActive=false;},'click .expandable > *:not(.children)':function(e){e.preventDefault();var self=this;var $trigger=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);var $parent=$trigger.parent();var $target=$trigger.siblings('.children');var $activeExp=$parent.siblings('.expandable.active');if($activeExp.length){$activeExp.find('> *:not(.children)').trigger('click');}$parent.toggleClass('active');$target.slideToggle();}},destroy:function(){var self=this;self.undelegateEvents();}});// Define the module here 
let OneMobileMenu={init:function(settings){return new OneMobileMenuView(settings);}};// Output the module
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OneMobileMenu;/***/}),/***/"./src/scripts/modules/module-onePerformance.js":(/*!******************************************************!*\
      !*** ./src/scripts/modules/module-onePerformance.js ***!
      \******************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var web_vitals__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! web-vitals */"./node_modules/web-vitals/dist/web-vitals.js");/*
        OnePerformance
        Yangli @onerockwell
    */let self;class Performance{constructor(settings){self=this;console.log(`ORW Performance Init`);/*
            settings = {
                webVitalsEnable: boolean,
                webVitalsUrl: string,
                webVitalsReportType: string 'logging' or 'report',
            }
        */this.settings=settings?settings:ORW.performance;}composePayload(metric){let pageType=false;if(ORW.template.name=='index'){pageType='HP';}else if(ORW.template.name.includes('collection')){pageType='PLP';}else if(ORW.template.name.includes('product')){pageType='PDP';}if(!pageType){return false;}return{jobType:"save",saveCode:{client_id:`${self.settings.webVitalsClientId}`,scrape_url:`${pageType}`,page_name:Shopify.theme.name},saveData:{[metric.name]:metric.value}};}toReport(metric){const data=self.composePayload(metric);if(!data){console.log(`No data report for this type of page`);return false;}const body=JSON.stringify(self.composePayload(metric));// Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
navigator.sendBeacon&&navigator.sendBeacon(`${self.settings.webVitalsUrl}`,body)||fetch(`${self.settings.webVitalsUrl}`,{body,method:'POST',keepalive:true});}toLog(metric){// console.log(metric);
const body=self.composePayload(metric);console.log(body);}measure(){if(this.settings.webVitalsReportType=='report'){this.measureAsReport();}else if(this.settings.webVitalsReportType=='logging'){this.measureAsLog();}}measureAsLog(){(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getCLS)(this.toLog);(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getFCP)(this.toLog);(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getFID)(this.toLog);(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getLCP)(this.toLog);(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getTTFB)(this.toLog);}measureAsReport(){(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getCLS)(this.toReport);(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getFCP)(this.toReport);(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getFID)(this.toReport);(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getLCP)(this.toReport);(0,web_vitals__WEBPACK_IMPORTED_MODULE_0__.getTTFB)(this.toReport);}}// Define the module here 
const OnePerformance={init:settings=>{const performance=new Performance(settings);performance.measure();}};// Output the module
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OnePerformance;/***/}),/***/"./src/scripts/modules/module-onePredictiveSearch.js":(/*!***********************************************************!*\
      !*** ./src/scripts/modules/module-onePredictiveSearch.js ***!
      \***********************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _templates_template_onePredictiveSearchResults_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../templates/template-onePredictiveSearchResults.html */"./src/scripts/templates/template-onePredictiveSearchResults.html");/*
        onePredictiveSearch 2.0.0 Usage (Webpack)
        alyssa @onerockwell
        
        Please replace 'YourModuleCallName' with your module's call name, e.g. OneModal, MyModule, HelloWorld etc.
        
    */ // Import all dependencies here
// import '../../styles/modules/yourModuleCallName.scss';
// Define the Backbone View here (Optional)
let OnePredictiveSearchView=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(settings){var self=this;console.log('init predictive search module');self.initSearchResults();self.resetInput();self.closeResults();},events:{},initSearchResults:function(){var self=this;jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SearchForm input').keyup(function(){var q=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();// console.log(q);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".predictive-search--search-template").empty();jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax('/search/suggest.json?q='+q+'&resources[limit]=3&section_id=predictive-search',{type:'GET',dataType:'json',// added data type
success:function(response){console.log(response);var productSuggestions=response.resources.results.products;var querySuggestions=response.resources.results.queries;var collectionSuggestions=response.resources.results.collections;var pageSuggestions=response.resources.results.pages;var articleSuggestions=response.resources.results.articles;var content=self.buildTemplate({response:response,productSuggestions:response.resources.results.products,querySuggestions:response.resources.results.queries,collectionSuggestions:response.resources.results.collections,pageSuggestions:response.resources.results.pages,articleSuggestions:response.resources.results.articles,searchPageResults:'#predictive-search'});self.$search=jquery__WEBPACK_IMPORTED_MODULE_0___default()('.predictive-search--search-template').append(content);}});});},resetInput:function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reset__button').on('click',function(e){e.preventDefault();// console.log($(this).parent().find('input')[0].value);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('input')[0].value='';jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('input')[0].focus();});},closeResults:function(){document.addEventListener("click",function(e){var inputForm=document.getElementById('SearchResult'),targetEl=e.target;// clicked element      
do{if(targetEl==inputForm){// This is a click inside, does nothing, just return.
return;}// Go up the DOM
targetEl=targetEl.parentNode;}while(targetEl);// This is a click outside.
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".predictive-search--search-template").empty();});},buildTemplate:function(content,type){var self=this,typeTemplate;switch(type){case'':break;default:typeTemplate=_templates_template_onePredictiveSearchResults_html__WEBPACK_IMPORTED_MODULE_3__["default"];break;};return typeTemplate({content:content});},destroy:function(){var self=this;self.undelegateEvents();}});// Define the module here 
let OnePredictiveSearch={init:function(settings){return new OnePredictiveSearchView(settings);}};// Output the module
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OnePredictiveSearch;/***/}),/***/"./src/scripts/modules/module-oneSubscribe.js":(/*!****************************************************!*\
      !*** ./src/scripts/modules/module-oneSubscribe.js ***!
      \****************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../modules/module-oneDrawer */"./src/scripts/modules/module-oneDrawer.js");/* harmony import */var _modules_module_oneContact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ../modules/module-oneContact */"./src/scripts/modules/module-oneContact.js");/* harmony import */var _styles_modules_oneSubscribe_scss__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ../../styles/modules/oneSubscribe.scss */"./src/styles/modules/oneSubscribe.scss");/*
        OneSubscribe 2.0.0 Usage (Webpack)
        Yang @onerockwell
        
        OneSubscribe.init({
            el: $('.subscribe-modal'),
            delay: 2000,
            errorMsg: 'Oops, something wrong happened, please try again later',
            successMsg: 'Thank you and welcome to Safiyaa. You will receive an email to confirm your subscription shortly.',
            requiredMsg: 'Error: required field',
            errorEmail: 'Error: please ensure formatting is correct',
            cookieEnabled: false,
            cookieDays: 1
        });
    */ // Import all dependencies here
// Define the Backbone View here (Optional)
let OneSubscribeView=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(settings){var self=this;if(!self.$el.length){return false;}self.$modal=self.$el;self.enabled=self.$modal.data('enabled');self.integrationType=settings.integrationType||self.$modal.data('type');self.errorMsg=settings.errorMsg||self.$modal.data('errormsg');self.successMsg=settings.successMsg||self.$modal.data('successmsg');self.errorRequired=settings.requiredMsg||self.$modal.data('requiredmsg');self.errorEmail=settings.errorEmail||self.$modal.data('erroremail');self.delay=settings.delay||self.$modal.data('delay');self.days=settings.cookieDays||self.$modal.data('cookiedays');self.cookieEnabled=settings.cookieEnabled||self.$modal.data('cookieenabled');self.$form=self.$modal.find('form');if(!self.enabled){console.log('init subscribe modal: Disabled');return false;}else{self.initModal();self.initForm();console.log('init subscribe modal: Enabled');}},events:{'click .close':function(e){var self=this;self.close(true);},'click .global-message a':function(e){e.preventDefault();var $curr=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);if($curr.attr('href')){window.open($curr.attr('href'));}},'click .global-message':function(e){var self=this;self.$form.parent().removeClass('submitted error success');}},initModal:function(){var self=this;self.subscribeDrawer=_modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_3__["default"].init({drawerElem:'#SubscribeModal',triggerEvent:'click',triggerElem:'.subscribe-modal-trigger'});if(theme.configs.cookieBannerEnabled&&ORW.utilities.getCookie('acceptcookieterm')){// If cookie banner enabled and accepted
setTimeout(function(){self.open();},self.delay);}else if(!theme.configs.cookieBannerEnabled){// If cookie banner disabled
setTimeout(function(){self.open();},self.delay);}},initForm:function(){var self=this;var submitType=self.integrationType=='klaviyo'?'custom':'json';_modules_module_oneContact__WEBPACK_IMPORTED_MODULE_4__["default"].init({el:self.$modal,submitType:submitType,errorMsg:self.errorMsg,successMsg:self.successMsg,requiredMsg:self.errorRequired,errorEmail:self.errorEmail,onSubmit:function(e){console.log(e);},successCallback:function(data){self.submitCallBack(true,data);},errorCallback:function(err){self.submitCallBack(false,err);}});if(self.integrationType=='klaviyo'){var formId='#'+self.$form.attr('id');KlaviyoSubscribe.attachToForms(formId,{hide_form_on_success:false,success:function($form){console.log('kv submit success!');var data={success:true,msg:self.successMsg};self.submitCallBack(true,data);},custom_success_message:true,success_message:self.successMsg,extra_properties:{$source:'Fly Out',$method_type:"Klaviyo Form",$method_id:'embed'}});KlaviyoSubscribe.injectCSS(false);self.$form.removeClass('klaviyo_styling');}},open:function(){var self=this;if(!ORW.utilities.getCookie('hidesubscriptionmodal')||!self.cookieEnabled){self.subscribeDrawer.openDrawer();}},close:function(setCookie){var self=this;self.subscribeDrawer.closeDrawer();if(setCookie&&self.cookieEnabled){ORW.utilities.setCookie('hidesubscriptionmodal',true,self.days);}},submitCallBack:function(isSuccess,data){var self=this;var errorHandling=function($form,msg,flag){var $container=$form.parent();var $globalMsg=$container.find('.global-message');msg='<span>'+msg+'</span>';if($globalMsg.length){$globalMsg.html(msg);}else{$container.append('<p class="global-message">'+msg+'</span>');$globalMsg=$container.find('.global-message');}$container.removeClass('submitted error success');if(flag=='success'){// Clear up the form
underscore__WEBPACK_IMPORTED_MODULE_1___default().each($form.find('.group input'),function(input){var $input=jquery__WEBPACK_IMPORTED_MODULE_0___default()(input);if($input.attr('type')!='checkbox'&&$input.attr('type')!='radio'){$input.val('');}else if($input.attr('type')=='checkbox'){$input.removeAttr('checked');}});$container.addClass('submitted success');}else if(flag=='error'){$container.addClass('submitted error');}};errorHandling(self.$form,'','');if(isSuccess){if(data.result=="success"||data.success){// Successed!
errorHandling(self.$form,self.successMsg,'success');var delay=self.delay>3000?self.delay:3000;setTimeout(function(){self.close(true);},delay);}else{errorHandling(self.$form,data.msg,'error');}}else{errorHandling(self.$form,self.errorMsg,'error');}},destroy:function(){var self=this;self.undelegateEvents();}});// Define the module here 
let OneSubscribe={init:function(settings){return new OneSubscribeView(settings);}};// Output the module
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OneSubscribe;/***/}),/***/"./src/scripts/modules/module-oneTabSystem.js":(/*!****************************************************!*\
      !*** ./src/scripts/modules/module-oneTabSystem.js ***!
      \****************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/*
        OneTabSystem 2.0.0 Usage (Webpack)
        Handles accordion and tab (response to accordion on small screen) together
        Yang @onerockwell
    
        Liquid/HTML:
    
        {% assign counter = 0 %}
        <div class="accordion-container tab-accordion-system">
            {%- for block in section.blocks -%} //Loop through liquid array if applicable
                <div class="system {% if counter == 0 %}active{% endif %}">
                    <div class="system-title system-title-{{ counter }}" data-target="system-{{- counter -}}">
                        //Tab title goes here
                    </div>
                    <div class="system-content" data-target="system-{{- counter -}}">
                        //Tab content goes here
                    </div>
                </div>
                {%- assign counter = counter | plus: 1 -%}
            {%- endfor -%}
        </div> 
    
        Initialization:
    
        OneTabSystem.init({
            el: //ancestor of .tab-accordion-system (jQuery object). Defaults to $('body').
        });
    */ // Import all dependencies here
// Associated style was baked into the global components stylesheet
// Define the Backbone View here (Optional)
let OneTabSystemView=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(settings){var self=this;self.accordionsAndTabs();},events:{},accordionsAndTabs:function(){var self=this;var systemUpdate=function(e){var $title=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);var $container=$title.parents('.tab-accordion-system');var $system=$title.parent('.system');var target=$title.data('target');var $targetTitle=$container.find('.system-title[data-target="'+target+'"]');var $targetContent=$container.find('.system-content[data-target="'+target+'"]');var $targetSystem=$targetTitle.parent('.system');var isTab=$container.hasClass('tab-container')?true:false;$system.siblings().removeClass('active');$system.siblings().find('.system-content').removeClass('fadeIn animated');if(isTab){$targetSystem.addClass('active');if(!self.isMobile()){$targetContent.addClass('fadeIn animated');}}else{$targetSystem.toggleClass('active');}};var events={'click .tab-accordion-system .system-title':function(e){systemUpdate(e);}};// Update and delegate adding events
underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,events);self.delegateEvents();},isMobile:function(){if(ORW.responsive=='small'){return true;}return false;},destroy:function(){var self=this;self.undelegateEvents();}});// Define the module here 
let OneTabSystem={init:function(settings){if(!settings.el){settings.el=jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');// Works on global-wise
}return new OneTabSystemView(settings);}};// Output the module
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OneTabSystem;/***/}),/***/"./src/scripts/modules/module-oneVideo.js":(/*!************************************************!*\
      !*** ./src/scripts/modules/module-oneVideo.js ***!
      \************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _vimeo_player__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @vimeo/player */"./node_modules/@vimeo/player/dist/player.es.js");/* harmony import */var _styles_modules_oneVideo_scss__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ../../styles/modules/oneVideo.scss */"./src/styles/modules/oneVideo.scss");/*
        OneVideo 2.0.0 Usage (Webpack)
        Yang @onerockwell
    */ // Import all dependencies here
// Define the Backbone View here (Optional)
let OneVideoView=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(settings){var self=this;self.$videoBoxes=self.$el;self.isResponsive=settings.isResponsive||false;self.bgVideo=settings.bgVideo||false;self.autoplay=settings.autoplay||false;self.initVideos();},events:{},initVideos:function(){var self=this;underscore__WEBPACK_IMPORTED_MODULE_1___default().each(self.$videoBoxes,function(box){var $box=jquery__WEBPACK_IMPORTED_MODULE_0___default()(box);var boxId=$box.data('video-id');var type=$box.data('video-type');var videoId=$box.data('video-id');var videoSrc=$box.data('video-src');if(type=="vimeo"){self.loadVimeoPlayer(videoId,videoSrc,$box,boxId);}else if(type=="youtube"){let ytTimeToLoad=0;const ytInterval=setInterval(()=>{// If it doesn't load in 5 seconds, just stop
if(ytTimeToLoad>5000){clearInterval(ytInterval);return;}if('YT'in window){// it's sometimes not immediately avaiable so we need to wait to ensure that loadYoutubePlayer will run if needed
clearInterval(ytInterval);self.loadYoutubePlayer(videoId,videoSrc,$box,boxId);}ytTimeToLoad+=100;},100);}else{self.loadHostPlayer(videoId,videoSrc,$box,boxId);}});},loadHostPlayer:function(video_id,video_src,$video_box,video_box_id){// Works for vimeo or self-hosted videos
var self=this,id='',$videoWrapper=$video_box;var videoRatio=$videoWrapper.data('ratio')?$videoWrapper.data('ratio'):0.6;// 0.6 is default for product video
var $playerCtl=$videoWrapper.find('.video-ctl');var responsive=function(r){var wrapperRatio=$videoWrapper.width()/$videoWrapper.height();if(wrapperRatio>=r){$videoWrapper.find('video').css({'width':'100%','height':$videoWrapper.width()/r});}else{$videoWrapper.find('video').css({'height':'100%','width':$videoWrapper.height()*r});}};if(self.autoplay){var $video=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<video preload="metadata" loop muted autoplay playsinline><source src="'+video_src+'" type="video/mp4"></video>');}else{var $video=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<video preload="metadata" loop muted playsinline><source src="'+video_src+'" type="video/mp4"></video>');}$playerCtl.text('Play');$video_box.prepend($video);var theVideo=$video[0];theVideo.muted=true;$video.on('play',function(){$video.isPlaying=true;$playerCtl.text('Pause');$playerCtl.removeClass('paused').addClass('playing');$video.isPlaying=true;$video_box.find('video').css({'visibility':'visible','opacity':'1'});// console.log('play the video!');
});$video.on('pause',function(){$video.isPlaying=false;$playerCtl.text('Play');$playerCtl.removeClass('playing').addClass('paused');$video.isPlaying=false;if(!self.autoplay&&self.bgVideo){$video_box.find('video').css({'visibility':'hidden','opacity':'0'});}// console.log('pause the video!');
});function toggleVideo(){if($video.isPlaying){theVideo.pause();$playerCtl.text('Play');$playerCtl.removeClass('playing').addClass('paused');}else{theVideo.play();$playerCtl.text('Pause');$playerCtl.removeClass('paused').addClass('playing');}}$video.on('click',function(){toggleVideo();});if($playerCtl.length){$playerCtl.text('Pause');// $playerCtl.removeClass('paused').addClass('playing');
$playerCtl.on('click',function(){toggleVideo();});}$video.on('bufferend',function(){console.log("video buffered");if(self.isResponsive){responsive(videoRatio);}console.log('init video');});if(self.isResponsive){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function(){clearTimeout(id);id=setTimeout(function(){responsive(videoRatio);},400);});}},loadYoutubePlayer:function(video_id,video_src,$video_box,video_box_id){var self=this,$videoWrapper=$video_box;var $videoPlayer=$videoWrapper.find('.video-player');var $videoControls=$videoWrapper.find('.video-ctl');var pausedClass='paused';var playingClass='playing';var videoActions=function(actionName){if(actionName=='play'){$videoWrapper.addClass(playingClass).removeClass(pausedClass);$videoControls.addClass(playingClass).removeClass(pausedClass);}else{$videoWrapper.removeClass(playingClass).addClass(pausedClass);$videoControls.removeClass(playingClass).addClass(pausedClass);}};window.YT.ready(function(){self.player=new YT.Player(video_box_id,{videoId:video_id,// YouTube Video ID
width:1440,// Player width (in px)
height:1080,// Player height (in px)
playerVars:{autoplay:0,// Auto-play the video on load
controls:1,// Show pause/play buttons in player
loop:1,// Run the video in a loop
playlist:video_id,// Needed to loop the video
showinfo:0,// Hide the video title
modestbranding:1,// Hide the Youtube Logo
fs:0,// Hide the full screen button
autohide:1,// Hide video controls when playing
rel:0},events:{onReady:function(e){console.log('YT ready');// e.target.mute();
},onStateChange:function(e){if(e.target.getPlayerState()==1){console.log('playing');videoActions('play');}else{console.log('paused');videoActions('');}}}});});$videoControls.click(function(e){console.log('click controls status:'+self.player.getPlayerState());if(self.player.getPlayerState()==1){self.player.pauseVideo();// videoActions('');
}else{self.player.playVideo();// videoActions('play');
}});},loadVimeoPlayer:function(video_id,video_src,$video_box,video_box_id){var self=this,id='',$videoWrapper=$video_box,pausedClass='paused',playingClass='playing';var $videoPlayer=$videoWrapper.find('.video-player');var $videoControls=$videoWrapper.find('.video-ctl');var videoRatio=$videoWrapper.data('ratio')?$videoWrapper.data('ratio'):0.6;// 0.6 is default for product video
var responsive=function(r){var wrapperRatio=$videoWrapper.width()/$videoWrapper.height();// console.log(wrapperRatio + '/' + r);
if(wrapperRatio>=r){$videoWrapper.find('iframe').css({'width':'100%','height':$videoWrapper.width()/r});}else{$videoWrapper.find('iframe').css({'height':'100%','width':$videoWrapper.height()*r});}};var videoActions=function(actionName){if(actionName=='play'){$videoWrapper.addClass(playingClass).removeClass(pausedClass);$videoControls.addClass(playingClass).removeClass(pausedClass);}else{$videoWrapper.removeClass(playingClass).addClass(pausedClass);$videoControls.removeClass(playingClass).addClass(pausedClass);}};// if (self.isMobile()) {
// 	var options = {
// 		// id: video_id,
// 		byline: false,
// 		portrait: false,
// 		title: false,
// 		loop: false,
// 		background: true
// 	};
// 	var vmplayer = new Player(video_box_id, options);
// } else {
var $iframe=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<iframe height="100%" width="100%" class="video-player" frameborder="0" src="'+video_src+'?title=0&amp;byline=0&amp;portrait=1&amp;autoplay=0&amp;loop=1&amp;controls=1&amp;background=0">');$videoPlayer.replaceWith($iframe);var vmplayer=new _vimeo_player__WEBPACK_IMPORTED_MODULE_3__["default"]($iframe);// console.log(vmplayer);
// }
if($videoControls.length){// if (!self.isMobile()) {
// 	$videoControls.text('Pause');
// 	$videoWrapper.addClass(pausedClass).removeClass(playingClass);
// 	$videoControls.addClass(pausedClass).removeClass(playingClass);
$videoControls.on('click',function(){if(vmplayer.isPlaying){vmplayer.pause();$videoControls.text('Play');$videoControls.removeClass(playingClass).addClass(pausedClass);$videoWrapper.removeClass(playingClass).addClass(pausedClass);}else{vmplayer.play();// vmplayer.playVideo();
$videoControls.text('Pause');// videoActions('play');
$videoControls.removeClass(pausedClass).addClass(playingClass);$videoWrapper.removeClass(pausedClass).addClass(playingClass);}});// } else {
// $videoControls.text('Play');
// $videoControls.removeClass(playingClass).addClass(pausedClass);
// $videoWrapper.removeClass(playingClass).addClass(pausedClass);
// $videoControls.on('click', function(){
// if (vmplayer.isPlaying) {
// vmplayer.pause();
// }
// vmplayer.play();
// })
// }
}vmplayer.setVolume(0);vmplayer.on('play',function(){vmplayer.isPlaying=true;// if (self.isMobile()) {
// $video_box.find('iframe').css({
// 	'opacity' : '1'
// })
// 	$videoControls.css({
// 		'z-index' : '3'
// 	});
$videoControls.text('Pause');$videoControls.removeClass(pausedClass).addClass(playingClass);$videoWrapper.removeClass(pausedClass).addClass(playingClass);// }
console.log('played vm video!');});vmplayer.on('pause',function(){vmplayer.isPlaying=false;// if (self.isMobile()) {
// 	$video_box.find('iframe').css({
// 		'opacity' : '0'
// 	});
$videoControls.text('Play');$videoControls.removeClass(playingClass).addClass(pausedClass);$videoWrapper.removeClass(playingClass).addClass(pausedClass);// }
console.log('pause vm video!');});vmplayer.on('loaded',function(){if(self.isResponsive){responsive(videoRatio);}console.log('init vm video');});if(self.isResponsive){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function(){clearTimeout(id);id=setTimeout(function(){responsive(videoRatio);},400);});}},destroy:function(){var self=this;self.undelegateEvents();},isMobile:function(){if(ORW.responsive=='small'){return true;}return false;},isDesktop:function(){if(ORW.responsive=='large'){return true;}return false;}});// Define the module here 
let OneVideo={init:function(settings){return new OneVideoView(settings);}};// Output the module
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=OneVideo;/***/}),/***/"./src/scripts/pages/page-home.js":(/*!****************************************!*\
      !*** ./src/scripts/pages/page-home.js ***!
      \****************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! when-dom-ready */"./node_modules/when-dom-ready/dist/index.es2015.js");/* harmony import */var _views_view_home__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./views/view-home */"./src/scripts/pages/views/view-home.js");(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>{new _views_view_home__WEBPACK_IMPORTED_MODULE_2__["default"]({el:jquery__WEBPACK_IMPORTED_MODULE_0___default()('#MainContent')});});/***/}),/***/"./src/scripts/pages/page-multisection.js":(/*!************************************************!*\
      !*** ./src/scripts/pages/page-multisection.js ***!
      \************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! when-dom-ready */"./node_modules/when-dom-ready/dist/index.es2015.js");/* harmony import */var _views_view_multisection__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./views/view-multisection */"./src/scripts/pages/views/view-multisection.js");/* harmony import */var _styles_pages_multisection_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../../styles/pages/multisection.scss */"./src/styles/pages/multisection.scss");(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>{new _views_view_multisection__WEBPACK_IMPORTED_MODULE_2__["default"]({el:jquery__WEBPACK_IMPORTED_MODULE_0___default()('#MainContent')});});/***/}),/***/"./src/scripts/pages/page-utility.js":(/*!*******************************************!*\
      !*** ./src/scripts/pages/page-utility.js ***!
      \*******************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! when-dom-ready */"./node_modules/when-dom-ready/dist/index.es2015.js");/* harmony import */var _views_view_utility__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./views/view-utility */"./src/scripts/pages/views/view-utility.js");/* harmony import */var _styles_pages_utility_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../../styles/pages/utility.scss */"./src/styles/pages/utility.scss");(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>{new _views_view_utility__WEBPACK_IMPORTED_MODULE_2__["default"]({el:jquery__WEBPACK_IMPORTED_MODULE_0___default()('#MainContent')});});/***/}),/***/"./src/scripts/pages/views/view-global.js":(/*!************************************************!*\
      !*** ./src/scripts/pages/views/view-global.js ***!
      \************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! vanilla-lazyload */"./node_modules/vanilla-lazyload/dist/lazyload.min.js");/* harmony import */var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var jquery_hoverintent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! jquery-hoverintent */"./node_modules/jquery-hoverintent/jquery.hoverIntent.js");/* harmony import */var jquery_hoverintent__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(jquery_hoverintent__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var scrolltofixed__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! scrolltofixed */"./node_modules/scrolltofixed/jquery-scrolltofixed.js");/* harmony import */var scrolltofixed__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(scrolltofixed__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var slick_carousel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! slick-carousel */"./node_modules/slick-carousel/slick/slick.js");/* harmony import */var slick_carousel__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_6__);/* harmony import */var _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ../../modules/module-oneDrawer */"./src/scripts/modules/module-oneDrawer.js");/* harmony import */var _modules_module_oneSubscribe__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ../../modules/module-oneSubscribe */"./src/scripts/modules/module-oneSubscribe.js");/* harmony import */var _modules_module_oneCookieBanner__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ../../modules/module-oneCookieBanner */"./src/scripts/modules/module-oneCookieBanner.js");/* harmony import */var _modules_module_oneMobileMenu__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ../../modules/module-oneMobileMenu */"./src/scripts/modules/module-oneMobileMenu.js");/* harmony import */var _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! ../../modules/module-oneMarketing */"./src/scripts/modules/module-oneMarketing.js");/* harmony import */var _modules_module_onePredictiveSearch__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(/*! ../../modules/module-onePredictiveSearch */"./src/scripts/modules/module-onePredictiveSearch.js");/* harmony import */var _modules_module_oneCart__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(/*! ../../modules/module-oneCart */"./src/scripts/modules/module-oneCart.js");/* harmony import */var _lib_pubsub__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(/*! ../../lib/pubsub */"./src/scripts/lib/pubsub.js");/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(opts){console.log('init global');// Testing $ object
// console.log($.fn.jquery);
var self=this;self.$body=self.$el;self.$header=jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.site-header');self.$footer=jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer.site-footer');self.$miniCart=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#MiniCart');self.$mobileNav=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#MobileNav');self.$searchBar=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SearchBar');self.$scrollSearchBar=jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-search-container');self.$promoBanner=self.$header.find('.promo-banner');self.$navi=self.$header.find('nav');self.$menuToggle=self.$header.find('.menu-toggle');self.$minicartMessaging=self.$miniCart.find('.messaging-wrapper.slick');self.searchInlineMode=false;// Set false to use search modal, set true to use inline search mode. 
self.miniCartAsDropdown=false;// Set false to use drawer, set true to use dropdown on Desktop (drawer on Mobile).
self.useSlideInMenuForLevel2=false;// Set false to use accordion for all nav levels on Mobile, set true to use the slide-in-menu for level 2.
self.initLazyImages();self.initPromoBanner();self.initCookieBanner();self.initFixedHeader();self.countryCheck();self.initNavi();self.initUtilities();self.initSearch();self.initPredictiveSearch();self.initMiniCart();self.initMobileMenu();self.initSubscirbe();self.initFooter();self.devTools();if(ORW.enableGTM){ORW.marketing=ORW.marketing||new _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_11__["default"]();ORW.marketing.initCartWatchers();}},events:{'drawer-opt':'bodyClassCtl','menu-opt-in':'bodyClassCtl','menu-opt-out':'bodyClassCtl'},bodyClassCtl:function(e){// Please prevent operation on more then one drawer at the same time
var self=this;var type=e.type;if(type=='drawer-opt'){self.$body.toggleClass('drawer-opt');self.$body.toggleClass('show-overlay');}else{if(type=='menu-opt-in'){self.$body.addClass('show-overlay');}else if(type=='menu-opt-out'){self.$body.removeClass('show-overlay');}}},initLazyImages:function(){window.ORW.lazyload=new(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_3___default())({threshold:0});const events={'mouseenter .product-grid-item'(e){jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).find('.product-image.alt').removeClass('hide');jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).find('.quick-buy-container').removeClass('hidden');},'mouseleave .product-grid-item'(e){jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).find('.quick-buy-container').addClass('hidden');}};underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(this.events,events);this.delegateEvents();},initPromoBanner:function(){var self=this;var cookieEnabled=self.$promoBanner.data('cookieenabled');var cookieDays=self.$promoBanner.data('days');if(self.$promoBanner.length>0){if(!ORW.utilities.getCookie('promo_banner')){self.$body.addClass('promo-banner-active');self.$promoBanner.addClass('activate');}}let promoHeadline=jquery__WEBPACK_IMPORTED_MODULE_0___default()('.promo-banner-modal-headline').html();let promoText=jquery__WEBPACK_IMPORTED_MODULE_0___default()('.promo-banner-modal-text').html();let promoModal=`<p class='promo-banner-modal-headline'>${promoHeadline}</p><p class='promo-banner-modal-text'>${promoText}</p>`;_modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__["default"].init({drawerContent:promoModal,drawerModalId:'promo-modal',triggerEvent:'click',triggerElem:'.promo-banner'});},initCookieBanner:function(){var self=this;if(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cookie-banner').length){ORW.cookieBanner=_modules_module_oneCookieBanner__WEBPACK_IMPORTED_MODULE_9__["default"].init({el:jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cookie-banner')});}},initFixedHeader:function(){var self=this;// Uncomment following code if you need better control on fixed header scrolling, by default the header always fixed by CSS 
self.$header.scrollToFixed({dontSetWidth:true});// Mobile header scroll control
var lastScrollTop=0;var mobileHeaderHeight=44;var checkScrollDirection=function(){var st=jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();if(st>lastScrollTop&&st>=mobileHeaderHeight){// downscroll code
if(st-lastScrollTop>=10){self.$header.removeClass('scroll-up').addClass('scroll-down');}}else{// upscroll code
self.$header.removeClass('scroll-down');self.$header.addClass('scroll-up');if(st<mobileHeaderHeight){self.$header.removeClass('scroll-up');}}lastScrollTop=st;};checkScrollDirection();jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function(event){checkScrollDirection();});},countryCheck:async function(){var self=this;class LocalizationForm extends HTMLElement{constructor(){super();this.elements={input:this.querySelector('input[name="language_code"], input[name="country_code"]'),button:this.querySelector('button'),panel:this.querySelector('ul')};this.elements.button.addEventListener('click',this.openSelector.bind(this));this.elements.button.addEventListener('focusout',this.closeSelector.bind(this));this.addEventListener('keyup',this.onContainerKeyUp.bind(this));this.querySelectorAll('a').forEach(item=>item.addEventListener('click',this.onItemClick.bind(this)));}hidePanel(){this.elements.button.setAttribute('aria-expanded','false');this.elements.panel.setAttribute('hidden',true);}onContainerKeyUp(event){if(event.code.toUpperCase()!=='ESCAPE')return;this.hidePanel();this.elements.button.focus();}onItemClick(event){event.preventDefault();const form=this.querySelector('form');this.elements.input.value=event.currentTarget.dataset.value;if(form)form.submit();}openSelector(){this.elements.button.focus();this.elements.panel.toggleAttribute('hidden');this.elements.button.setAttribute('aria-expanded',(this.elements.button.getAttribute('aria-expanded')==='false').toString());}closeSelector(event){const shouldClose=event.relatedTarget&&event.relatedTarget.nodeName==='BUTTON';if(event.relatedTarget===null||shouldClose){this.hidePanel();}}}customElements.define('localization-form',LocalizationForm);self.countryElem='#CountryModal';self.countryModal=_modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__["default"].init({drawerElem:self.countryElem,triggerEvent:'click',triggerElem:'.site-country',isModal:true});// Check for country code cookie and set shipping threshold accordingly
var countryRecommendationShown;if(ORW&&ORW.utilities){countryRecommendationShown=ORW.utilities.getCookie('country_recommendation_shown');}var suggestedCountries=await fetch(window.Shopify.routes.root+'browsing_context_suggestions.json'+'?country[enabled]=true').then(r=>r.json());var primaryCountryCode=suggestedCountries.suggestions[0]?.parts?.country?.handle;if(primaryCountryCode!="US"&&!countryRecommendationShown){self.countryRecommendation(primaryCountryCode);}},countryRecommendation:function(countryCode,modal){var self=this;self.currencyElem='#CountryModal';const operatedCountries=["CA"];// countries other than primary shop locale
if(operatedCountries.includes(countryCode)){self.countryModal.openDrawer();jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.currencyElem).addClass('recommend-country');ORW.utilities.setCookie('country_recommendation_shown','true');}},initNavi:function(){var self=this;self.$rawNav=self.$navi.clone();// Build mobile Nav
var $slideInMenu=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="slide-in-menu"></div>');var $clonedNavi=self.$navi.clone();underscore__WEBPACK_IMPORTED_MODULE_1___default().each($clonedNavi.find('.has-dropdown'),function(child){var $child=jquery__WEBPACK_IMPORTED_MODULE_0___default()(child);var $dropdown=$child.find('.dropdown');$dropdown.find('.lv2-image').remove();if(self.useSlideInMenuForLevel2){$dropdown.appendTo($slideInMenu);$child.find('.dropdown').remove();}else{$dropdown.appendTo($child);$child.find('.dropdown-wrapper').remove();$child.find('.nav-link').removeAttr('data-trigger');$child.addClass('expandable');}});if(self.useSlideInMenuForLevel2){$slideInMenu.appendTo($clonedNavi);}self.$mobileNav.find('.header-utilities').before($clonedNavi);// Build desktop nav
underscore__WEBPACK_IMPORTED_MODULE_1___default().each(self.$navi.find('.children.column-layout'),function(child){var currentCol=0,html='<li class="back-to">Back</li>';var $child=jquery__WEBPACK_IMPORTED_MODULE_0___default()(child);var $level2=$child.find('.level-2');var $level2Images=$child.find('.lv2-image');underscore__WEBPACK_IMPORTED_MODULE_1___default().each($level2,function(item,index){var $item=jquery__WEBPACK_IMPORTED_MODULE_0___default()(item);var isLast=index==$level2.length-1?true:false;if(currentCol==0&&currentCol!=$item.data('column')){html+='<li class="divider"><ul>';currentCol=$item.data('column');}else if(currentCol!=$item.data('column')){html+='</ul></li><li class="divider"><ul>';currentCol=$item.data('column');}html+=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').append($item.clone()).html();if(isLast){html+='</ul></li>';}});underscore__WEBPACK_IMPORTED_MODULE_1___default().each($level2Images,function(item){html+=jquery__WEBPACK_IMPORTED_MODULE_0___default()(item)[0].outerHTML;});$child.html(html);});},initUtilities:function(){var self=this;var events={};// Header hover control (Larger screen)
self.$header.hoverIntent({over:function(){if(!self.isMobile()){self.$body.trigger('menu-opt-in');}},out:function(){if(!self.isMobile()){self.$body.trigger('menu-opt-out');}},sensitivity:100});// Header dropdown hover control (Larger screen)
self.$header.hoverIntent({over:function(){if(!self.isMobile()){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');if(self.miniCartTimer){// Check if minicart close timer exists, if so kill it.
console.log('kill timer');clearTimeout(self.miniCartTimer);}}},out:function(){if(!self.isMobile()){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active');}},sensitivity:100,selector:'.has-dropdown:not(.block-search)'});// Copy extra links (if available) to Mobile menu utilities (Small screen)
var $extraLinkContainer=self.$header.find('.header-extra-links');if($extraLinkContainer.length){$extraLinkContainer=$extraLinkContainer.clone();self.$mobileNav.find('.header-utilities').prepend($extraLinkContainer.html());}// Update and delegate adding events
underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,events);self.delegateEvents();},initSearch:function(){var self=this;if(self.searchInlineMode){self.$header.hoverIntent({over:function(){var $target=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.block-content');$target.on('transitionend',function(){$target.off('transitionend');setTimeout(function(){$target.find('input').focus();},100);});jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');},out:function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active');},sensitivity:100,selector:'.block-search'});}else{self.searchCtl=_modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__["default"].init({drawerElem:'#'+self.$searchBar.attr('id'),triggerEvent:'click',triggerElem:'.block-search-mobile .search-toggle',openCallback:function(){setTimeout(function(){self.$searchBar.find('input').focus();},100);},events:{'click .search-form button':function(e){e.preventDefault();var $form=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parent('form');if($form.find('input').val()){this.closeDrawer();$form.submit();}else{// May be show error message ...
}}}});}var events={'click .block-search-mobile button':function(e){// e.preventDefault();
self.$searchBar.addClass('opened');},'click #SearchBar .drawer-close':function(e){// e.preventDefault();
self.$searchBar.removeClass('opened');},'click .block-search-scroll':function(e){jquery__WEBPACK_IMPORTED_MODULE_0___default()('.block-search-scroll .search-toggle').addClass('hide');self.$scrollSearchBar.addClass('opened');},'click .scroll-search-container .predictive-search-form .close__button':function(e){e.preventDefault();e.stopPropagation();jquery__WEBPACK_IMPORTED_MODULE_0___default()('.block-search-scroll .search-toggle').removeClass('hide');self.$scrollSearchBar.removeClass('opened');}};underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,events);self.delegateEvents();},initPredictiveSearch:function(){var self=this;if(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.predictive-search-form').length){ORW.predictiveSearchModal=_modules_module_onePredictiveSearch__WEBPACK_IMPORTED_MODULE_12__["default"].init({el:jquery__WEBPACK_IMPORTED_MODULE_0___default()('.predictive-search-form')});}},initMobileMenu:function(){var self=this;self.mobileMenuCtl=_modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__["default"].init({drawerElem:'#'+self.$mobileNav.attr('id'),triggerEvent:'click',triggerElem:'header .menu-toggle',openCallback:function(e){self.$menuToggle.find('.animated-hamburger').addClass('open');},closeCallback:function(e){self.$menuToggle.find('.animated-hamburger').removeClass('open');}});self.mobileInnerMenuCtl=_modules_module_oneMobileMenu__WEBPACK_IMPORTED_MODULE_10__["default"].init({el:self.$mobileNav,openCallback:function(e){self.$mobileNav.addClass('inner-action-engaged');self.$menuToggle.find('.animated-hamburger').addClass('inner-action-engaged');},closeCallback:function(e){self.$mobileNav.removeClass('inner-action-engaged');self.$menuToggle.find('.animated-hamburger').removeClass('inner-action-engaged');}});},initMiniCart:function(){var self=this;var miniCartDrawerInit=function(){console.log('init minicart as drawer');return _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__["default"].init({drawerElem:'#'+self.$miniCart.attr('id'),triggerEvent:'click',triggerElem:'header .block-minicart',openCallback:function(){}});};var miniCartDropdownOpen=function(){self.$body.trigger('menu-opt-in');self.$header.find('.block-minicart').addClass('active');};var miniCartDropdownClose=function(){self.$header.find('.block-minicart').removeClass('active');self.$body.trigger('menu-opt-out');};self.miniCartCtl=miniCartDrawerInit();jquery__WEBPACK_IMPORTED_MODULE_0___default()('.add-to-cart-form').off('submit');if(self.miniCartAsDropdown){// Init minicart as Dropdown on Desktop
ORW.utilities.mediaCheck(function(){if(self.miniCartCtl){console.log('minicart drawer destory');self.miniCartCtl.destroy();self.miniCartCtl=false;}},function(){if(!self.miniCartCtl){self.miniCartCtl=miniCartDrawerInit();}});}const miniCartElem=document.querySelector('#CartContainer form.cart');if(miniCartElem){new _modules_module_oneCart__WEBPACK_IMPORTED_MODULE_13__["default"]({el:miniCartElem});}self.unsubscribeMiniCart=(0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_14__.subscribe)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_14__.PUB_SUB_EVENTS.cartUpdate,async data=>{const cart=await fetch('/cart.js').then(res=>res.json());document.querySelectorAll('.minicart-count').forEach(el=>{el.innerHTML=cart.item_count;if(cart.item_count>0){el.classList.remove('hidden');}else{el.classList.add('hidden');}});if(window.location.pathname==='/cart')return;if(self.miniCartCtl.drawerOpened)return;clearTimeout(self.miniCartTimer);if(self.miniCartCtl){self.miniCartCtl.openDrawer();self.miniCartTimer=setTimeout(function(){self.miniCartCtl.closeDrawer();},3000);}else{miniCartDropdownOpen();self.miniCartTimer=setTimeout(function(){miniCartDropdownClose();},3000);}});// Slick for minicart messaging carousel
self.$minicartMessaging.slick({dots:true,infinite:false,speed:600,slidesToShow:1,arrows:false,responsive:[{breakpoint:ORW.responsiveSizes.large,settings:{}}]});},initSubscirbe:function(){var self=this;if(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.subscribe-modal').length){ORW.subscribeModal=_modules_module_oneSubscribe__WEBPACK_IMPORTED_MODULE_8__["default"].init({el:jquery__WEBPACK_IMPORTED_MODULE_0___default()('.subscribe-modal')});}},initFooter:function(){var self=this;var events={'click footer.site-footer .expandable':function(e){if(self.isMobile()){var $curr=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);var $activeSiblings=$curr.siblings('.expandable.active');if($activeSiblings.length){$activeSiblings.removeClass('active');}$curr.toggleClass('active');}}};underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,events);self.delegateEvents();},isMobile:function(){if(ORW.responsive=='small'){return true;}return false;},devTools:function(){var self=this;var $indicator=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#responsive-indicator');var $previewBar=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#preview-bar-iframe');// This should only run when a theme is being previewed.
if(Shopify.PreviewBarInjector!==undefined){if($indicator.length>0&&$previewBar.length>0&&Shopify.PreviewBarInjector.length==1){$indicator.text("Preview: "+Shopify.theme.name).removeClass("hide");var events={'click #responsive-indicator':function(e){$indicator.toggleClass('active');$previewBar.toggleClass('active');}};underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,events);self.delegateEvents();}else{$indicator.addClass("hide");}}}});/***/}),/***/"./src/scripts/pages/views/view-home.js":(/*!**********************************************!*\
      !*** ./src/scripts/pages/views/view-home.js ***!
      \**********************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var slick_carousel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! slick-carousel */"./node_modules/slick-carousel/slick/slick.js");/* harmony import */var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ../../modules/module-oneVideo */"./src/scripts/modules/module-oneVideo.js");/* harmony import */var _styles_pages_home_scss__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ../../../styles/pages/home.scss */"./src/styles/pages/home.scss");/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(opts){console.log('init home');var self=this;self.$content=self.$el;self.$body=jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');self.$moduleA=self.$content.find('.hp-module-a');self.$moduleB=self.$content.find('.hp-module-b');self.$moduleE=self.$content.find('.hp-module-e');self.$moduleI=self.$content.find('.hp-module-i');// self.$moduleD = self.$content.find('.hp-module-d');
if(self.$moduleA.length>0){self.moduleA();}if(self.$moduleB.length>0){self.moduleB();}if(self.$moduleE.length>0){self.moduleE();}if(self.$moduleI.length>0){self.moduleI();}},events:{},moduleA:function(){var self=this;var $videos=self.$moduleA.find('.video-wrapper');self.$moduleA.slick({dots:true,infinite:false,speed:600,autoplaySpeed:15000,dots:true,slidesToShow:1,arrows:true,autoplay:true,responsive:[{breakpoint:ORW.responsiveSizes.large,settings:{infinite:false}}]});jquery__WEBPACK_IMPORTED_MODULE_0___default()($videos).each(function(){_modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__["default"].init({el:this,isResponsive:false,bgVideo:true,autoplay:false});});},moduleB:function(){var self=this;var $productSlider=self.$moduleB.find('.product-slider.slick');$productSlider.slick({dots:false,infinite:true,speed:600,centerMode:true,centerPadding:'0',slidesToShow:2,arrows:false,mobileFirst:true,touchThreshold:100,swipeToSlide:true,responsive:[{breakpoint:ORW.responsiveSizes.medium,settings:{centerPadding:'0',slidesToShow:4,arrows:true}},{breakpoint:ORW.responsiveSizes.large,settings:{centerPadding:'0',slidesToShow:4,arrows:true}}]});// var $scrollableProducts = self.$moduleB.find('.scrollable');
// OneCustomScroll.init({
//     el: $scrollableProducts[0], // HTML object (required), not a jQuery object,
//     margin: 40 // Number (optional), margin off of the containers bounds.
// });
},moduleE:function(){var self=this;var $images=jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-block');var events={'mouseover .headline-link':function(e){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width()>=1025){e.preventDefault();var $curr=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);var handle=$curr.data('handle');var $selectedImage=$images.filter(function(index){return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('handle')==handle;});$images.removeClass('show');$selectedImage.addClass('show');}}};// Update and delegate adding events
underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,events);self.delegateEvents();},moduleD:function(){var self=this;var $video=self.$moduleD.find('.video-wrapper');_modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__["default"].init({el:$video,isResponsive:false,bgVideo:true,autoplay:false});},moduleI:function(){var self=this;var $video=self.$moduleI.find('.video-wrapper');jquery__WEBPACK_IMPORTED_MODULE_0___default()($video).each(function(){_modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__["default"].init({el:this,isResponsive:false,bgVideo:true,autoplay:false});});},destroy:function(){var self=this;self.undelegateEvents();},responsive:function(){var self=this;ORW.utilities.mediaCheck(function(){// Desktop actions
},function(){// Mobile actions
});},isMobile:function(){if(ORW.responsive=='small'){return true;}return false;}});/***/}),/***/"./src/scripts/pages/views/view-multisection.js":(/*!******************************************************!*\
      !*** ./src/scripts/pages/views/view-multisection.js ***!
      \******************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var slick_carousel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! slick-carousel */"./node_modules/slick-carousel/slick/slick.js");/* harmony import */var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ../../modules/module-oneVideo */"./src/scripts/modules/module-oneVideo.js");/* harmony import */var _modules_module_oneTabSystem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ../../modules/module-oneTabSystem */"./src/scripts/modules/module-oneTabSystem.js");/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(opts){console.log('init multisection page');var self=this;self.$content=self.$el;self.$body=jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');self.$moduleA=self.$content.find('.multisection-module-1');self.$moduleB=self.$content.find('.multisection-module-2');self.$moduleC=self.$content.find('.multisection-module-3');self.$moduleE=self.$content.find('.multisection-module-5');self.$moduleG=self.$content.find('.multisection-module-7');if(self.$moduleA.length>0){self.moduleA();}if(self.$moduleB.length>0){self.moduleB();}if(self.$moduleC.length>0){self.moduleC();}if(self.$moduleE.length>0){self.moduleE();}if(self.$moduleG.length>0){self.moduleG();}self.initAccordions();},events:{},moduleA:function(){var self=this;self.$imageSlides=self.$moduleA.find('.image-block.slick');self.$imageSlides.slick({dots:false,infinite:true,speed:600,slidesToShow:1,arrows:true,responsive:[{breakpoint:ORW.responsiveSizes.large,settings:{}}]});},moduleB:function(){var self=this;self.$imageSlides=self.$moduleB.find('.slider.slick');self.$imageSlides.slick({dots:false,infinite:false,speed:600,slidesToShow:2,centerMode:false,centerPadding:'0',arrows:true,responsive:[{breakpoint:ORW.responsiveSizes.large,settings:{slidesToShow:1,centerMode:true,centerPadding:'30px',infinite:true}}]});},moduleC:function(){var self=this;var $videos=self.$moduleC.find('.video-wrapper');jquery__WEBPACK_IMPORTED_MODULE_0___default()($videos).each(function(){_modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__["default"].init({el:this,isResponsive:false,bgVideo:true,autoplay:false});});},moduleE:function(){var self=this;var $videos=self.$moduleE.find('.video-wrapper');jquery__WEBPACK_IMPORTED_MODULE_0___default()($videos).each(function(){_modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__["default"].init({el:this,isResponsive:false,bgVideo:true,autoplay:false});});},moduleG:function(){var self=this;var $videos=self.$moduleG.find('.video-wrapper');jquery__WEBPACK_IMPORTED_MODULE_0___default()($videos).each(function(){_modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__["default"].init({el:this,isResponsive:false,bgVideo:true,autoplay:false});});},initAccordions:function(){var self=this;_modules_module_oneTabSystem__WEBPACK_IMPORTED_MODULE_5__["default"].init({el:jquery__WEBPACK_IMPORTED_MODULE_0___default()('.accordion-block')});},destroy:function(){var self=this;self.undelegateEvents();},responsive:function(){var self=this;ORW.utilities.mediaCheck(function(){// Desktop actions
},function(){// Mobile actions
});},isMobile:function(){if(ORW.responsive=='small'){return true;}return false;}});/***/}),/***/"./src/scripts/pages/views/view-utility.js":(/*!*************************************************!*\
      !*** ./src/scripts/pages/views/view-utility.js ***!
      \*************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js");/* harmony import */var underscore__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! backbone */"./node_modules/backbone/backbone.js");/* harmony import */var backbone__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _modules_module_oneTabSystem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../../modules/module-oneTabSystem */"./src/scripts/modules/module-oneTabSystem.js");/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({initialize:function(opts){console.log('init utility page');var self=this;self.$content=self.$el;self.$linksContainer=self.$content.find('.utility-nav .links');self.initTabSystem();self.initUtilityNav();},events:{},initTabSystem:function(){_modules_module_oneTabSystem__WEBPACK_IMPORTED_MODULE_3__["default"].init({el:jquery__WEBPACK_IMPORTED_MODULE_0___default()('.utility-content')});},initUtilityNav:function(){var self=this;var events={'click .utility-nav .select-link':function(e){self.$linksContainer.toggleClass('opened');}};underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(self.events,events);self.delegateEvents();},destroy:function(){var self=this;self.undelegateEvents();},isMobile:function(){if(ORW.responsive=='small'){return true;}return false;}});/***/}),/***/"./src/scripts/public-path.js":(/*!************************************!*\
      !*** ./src/scripts/public-path.js ***!
      \************************************/ /***/(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__.p=window.ORW.appUrl.replace(/assets\/$/,'');/***/}),/***/"./src/scripts/router.js":(/*!*******************************!*\
      !*** ./src/scripts/router.js ***!
      \*******************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! when-dom-ready */"./node_modules/when-dom-ready/dist/index.es2015.js");/* harmony import */var _pages_views_view_global__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./pages/views/view-global */"./src/scripts/pages/views/view-global.js");/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=async()=>{let $body=jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');if($body.hasClass('template-index')){await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-home */"./src/scripts/pages/page-home.js"));}if($body.hasClass('template-product')){await Promise.all(/*! import() | product */[__webpack_require__.e("vendors-node_modules_panzoom_panzoom_dist_panzoom_es_js"),__webpack_require__.e("src_scripts_modules_module-oneQuickShop_js"),__webpack_require__.e("product")]).then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-product */"./src/scripts/pages/page-product.js"));}if(($body.hasClass('template-collection')||$body.hasClass('template-search'))&&$body.data('tempsuffix')!='lookbook'){await Promise.all(/*! import() | collection */[__webpack_require__.e("vendors-node_modules_panzoom_panzoom_dist_panzoom_es_js"),__webpack_require__.e("src_scripts_modules_module-oneQuickShop_js"),__webpack_require__.e("collection")]).then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-collection */"./src/scripts/pages/page-collection.js"));}if($body.hasClass('template-giftcard')){await __webpack_require__.e(/*! import() | giftcard */"giftcard").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-giftcard */"./src/scripts/pages/page-giftcard.js"));}if($body.hasClass('template-cart')){await __webpack_require__.e(/*! import() | cart */"cart").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-cart */"./src/scripts/pages/page-cart.js"));}if($body.data('tempsuffix')=='styles'){await __webpack_require__.e(/*! import() | page.styles */"page.styles").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-styleGuide */"./src/scripts/pages/page-styleGuide.js"));}if($body.data('tempsuffix')=='about'){await __webpack_require__.e(/*! import() | page.about */"page.about").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-about */"./src/scripts/pages/page-about.js"));}if($body.data('tempsuffix').includes('utility')){__webpack_require__(/*! ./pages/page-utility */"./src/scripts/pages/page-utility.js");}if($body.hasClass('template-404')){await __webpack_require__.e(/*! import() | 404 */"404").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-404 */"./src/scripts/pages/page-404.js"));}if($body.hasClass('template-blog')){await __webpack_require__.e(/*! import() | blog */"blog").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-blog */"./src/scripts/pages/page-blog.js"));}if($body.hasClass('template-article')){await __webpack_require__.e(/*! import() | article */"article").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-article */"./src/scripts/pages/page-article.js"));}if($body.data('tempsuffix').includes('multisection')){__webpack_require__(/*! ./pages/page-multisection */"./src/scripts/pages/page-multisection.js");__webpack_require__(/*! ./pages/page-home */"./src/scripts/pages/page-home.js");}if($body.hasClass('page-account')||$body.hasClass('page-create-account')||$body.hasClass('page-reset-account')||$body.hasClass('page-addresses')){await __webpack_require__.e(/*! import() | customers */"customers").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-account */"./src/scripts/pages/page-account.js"));}if($body.hasClass('template-password')||$body.hasClass('template-page')&&$body.hasClass('template-suffix-update-password')){await __webpack_require__.e(/*! import() | password */"password").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-password */"./src/scripts/pages/page-password.js"));}if($body.data('tempsuffix')=='store-locator'){await __webpack_require__.e(/*! import() | page.store-locator */"page.store-locator").then(__webpack_require__.bind(__webpack_require__,/*! ./pages/page-storeLocator */"./src/scripts/pages/page-storeLocator.js"));}(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>{if(!$body.hasClass('template-password')){ORW.Global=new _pages_views_view_global__WEBPACK_IMPORTED_MODULE_2__["default"]({el:$body});}});};/***/}),/***/"./node_modules/backbone/backbone.js":(/*!*******************************************!*\
      !*** ./node_modules/backbone/backbone.js ***!
      \*******************************************/ /***/(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.4.0
//     (c) 2010-2019 Jeremy Ashkenas and DocumentCloud
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
(function(factory){// Establish the root object, `window` (`self`) in the browser, or `global` on the server.
// We use `self` instead of `window` for `WebWorker` support.
var root=typeof self=='object'&&self.self===self&&self||typeof __webpack_require__.g=='object'&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g;// Set up Backbone appropriately for the environment. Start with AMD.
if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(/*! underscore */"./node_modules/underscore/underscore.js"),__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js"),exports],__WEBPACK_AMD_DEFINE_RESULT__=function(_,$,exports){// Export global even in AMD case in case this script is loaded with
// others that may still expect a global Backbone.
root.Backbone=factory(root,exports,_,$);}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));// Next for Node.js or CommonJS. jQuery may not be needed as a module.
}else{var _,$;}})(function(root,Backbone,_,$){// Initial Setup
// -------------
// Save the previous value of the `Backbone` variable, so that it can be
// restored later on, if `noConflict` is used.
var previousBackbone=root.Backbone;// Create a local reference to a common array method we'll want to use later.
var slice=Array.prototype.slice;// Current version of the library. Keep in sync with `package.json`.
Backbone.VERSION='1.4.0';// For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
// the `$` variable.
Backbone.$=$;// Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
// to its previous owner. Returns a reference to this Backbone object.
Backbone.noConflict=function(){root.Backbone=previousBackbone;return this;};// Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
// will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
// set a `X-Http-Method-Override` header.
Backbone.emulateHTTP=false;// Turn on `emulateJSON` to support legacy servers that can't deal with direct
// `application/json` requests ... this will encode the body as
// `application/x-www-form-urlencoded` instead and will send the model in a
// form param named `model`.
Backbone.emulateJSON=false;// Backbone.Events
// ---------------
// A module that can be mixed in to *any object* in order to provide it with
// a custom event channel. You may bind a callback to an event with `on` or
// remove with `off`; `trigger`-ing an event fires all callbacks in
// succession.
//
//     var object = {};
//     _.extend(object, Backbone.Events);
//     object.on('expand', function(){ alert('expanded'); });
//     object.trigger('expand');
//
var Events=Backbone.Events={};// Regular expression used to split event strings.
var eventSplitter=/\s+/;// A private global variable to share between listeners and listenees.
var _listening;// Iterates over the standard `event, callback` (as well as the fancy multiple
// space-separated events `"change blur", callback` and jQuery-style event
// maps `{event: callback}`).
var eventsApi=function(iteratee,events,name,callback,opts){var i=0,names;if(name&&typeof name==='object'){// Handle event maps.
if(callback!==void 0&&'context'in opts&&opts.context===void 0)opts.context=callback;for(names=_.keys(name);i<names.length;i++){events=eventsApi(iteratee,events,names[i],name[names[i]],opts);}}else if(name&&eventSplitter.test(name)){// Handle space-separated event names by delegating them individually.
for(names=name.split(eventSplitter);i<names.length;i++){events=iteratee(events,names[i],callback,opts);}}else{// Finally, standard events.
events=iteratee(events,name,callback,opts);}return events;};// Bind an event to a `callback` function. Passing `"all"` will bind
// the callback to all events fired.
Events.on=function(name,callback,context){this._events=eventsApi(onApi,this._events||{},name,callback,{context:context,ctx:this,listening:_listening});if(_listening){var listeners=this._listeners||(this._listeners={});listeners[_listening.id]=_listening;// Allow the listening to use a counter, instead of tracking
// callbacks for library interop
_listening.interop=false;}return this;};// Inversion-of-control versions of `on`. Tell *this* object to listen to
// an event in another object... keeping track of what it's listening to
// for easier unbinding later.
Events.listenTo=function(obj,name,callback){if(!obj)return this;var id=obj._listenId||(obj._listenId=_.uniqueId('l'));var listeningTo=this._listeningTo||(this._listeningTo={});var listening=_listening=listeningTo[id];// This object is not listening to any other events on `obj` yet.
// Setup the necessary references to track the listening callbacks.
if(!listening){this._listenId||(this._listenId=_.uniqueId('l'));listening=_listening=listeningTo[id]=new Listening(this,obj);}// Bind callbacks on obj.
var error=tryCatchOn(obj,name,callback,this);_listening=void 0;if(error)throw error;// If the target obj is not Backbone.Events, track events manually.
if(listening.interop)listening.on(name,callback);return this;};// The reducing API that adds a callback to the `events` object.
var onApi=function(events,name,callback,options){if(callback){var handlers=events[name]||(events[name]=[]);var context=options.context,ctx=options.ctx,listening=options.listening;if(listening)listening.count++;handlers.push({callback:callback,context:context,ctx:context||ctx,listening:listening});}return events;};// An try-catch guarded #on function, to prevent poisoning the global
// `_listening` variable.
var tryCatchOn=function(obj,name,callback,context){try{obj.on(name,callback,context);}catch(e){return e;}};// Remove one or many callbacks. If `context` is null, removes all
// callbacks with that function. If `callback` is null, removes all
// callbacks for the event. If `name` is null, removes all bound
// callbacks for all events.
Events.off=function(name,callback,context){if(!this._events)return this;this._events=eventsApi(offApi,this._events,name,callback,{context:context,listeners:this._listeners});return this;};// Tell this object to stop listening to either specific events ... or
// to every object it's currently listening to.
Events.stopListening=function(obj,name,callback){var listeningTo=this._listeningTo;if(!listeningTo)return this;var ids=obj?[obj._listenId]:_.keys(listeningTo);for(var i=0;i<ids.length;i++){var listening=listeningTo[ids[i]];// If listening doesn't exist, this object is not currently
// listening to obj. Break out early.
if(!listening)break;listening.obj.off(name,callback,this);if(listening.interop)listening.off(name,callback);}if(_.isEmpty(listeningTo))this._listeningTo=void 0;return this;};// The reducing API that removes a callback from the `events` object.
var offApi=function(events,name,callback,options){if(!events)return;var context=options.context,listeners=options.listeners;var i=0,names;// Delete all event listeners and "drop" events.
if(!name&&!context&&!callback){for(names=_.keys(listeners);i<names.length;i++){listeners[names[i]].cleanup();}return;}names=name?[name]:_.keys(events);for(;i<names.length;i++){name=names[i];var handlers=events[name];// Bail out if there are no events stored.
if(!handlers)break;// Find any remaining events.
var remaining=[];for(var j=0;j<handlers.length;j++){var handler=handlers[j];if(callback&&callback!==handler.callback&&callback!==handler.callback._callback||context&&context!==handler.context){remaining.push(handler);}else{var listening=handler.listening;if(listening)listening.off(name,callback);}}// Replace events if there are any remaining.  Otherwise, clean up.
if(remaining.length){events[name]=remaining;}else{delete events[name];}}return events;};// Bind an event to only be triggered a single time. After the first time
// the callback is invoked, its listener will be removed. If multiple events
// are passed in using the space-separated syntax, the handler will fire
// once for each event, not once for a combination of all events.
Events.once=function(name,callback,context){// Map the event into a `{event: once}` object.
var events=eventsApi(onceMap,{},name,callback,this.off.bind(this));if(typeof name==='string'&&context==null)callback=void 0;return this.on(events,callback,context);};// Inversion-of-control versions of `once`.
Events.listenToOnce=function(obj,name,callback){// Map the event into a `{event: once}` object.
var events=eventsApi(onceMap,{},name,callback,this.stopListening.bind(this,obj));return this.listenTo(obj,events);};// Reduces the event callbacks into a map of `{event: onceWrapper}`.
// `offer` unbinds the `onceWrapper` after it has been called.
var onceMap=function(map,name,callback,offer){if(callback){var once=map[name]=_.once(function(){offer(name,once);callback.apply(this,arguments);});once._callback=callback;}return map;};// Trigger one or many events, firing all bound callbacks. Callbacks are
// passed the same arguments as `trigger` is, apart from the event name
// (unless you're listening on `"all"`, which will cause your callback to
// receive the true name of the event as the first argument).
Events.trigger=function(name){if(!this._events)return this;var length=Math.max(0,arguments.length-1);var args=Array(length);for(var i=0;i<length;i++)args[i]=arguments[i+1];eventsApi(triggerApi,this._events,name,void 0,args);return this;};// Handles triggering the appropriate event callbacks.
var triggerApi=function(objEvents,name,callback,args){if(objEvents){var events=objEvents[name];var allEvents=objEvents.all;if(events&&allEvents)allEvents=allEvents.slice();if(events)triggerEvents(events,args);if(allEvents)triggerEvents(allEvents,[name].concat(args));}return objEvents;};// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy (most internal
// Backbone events have 3 arguments).
var triggerEvents=function(events,args){var ev,i=-1,l=events.length,a1=args[0],a2=args[1],a3=args[2];switch(args.length){case 0:while(++i<l)(ev=events[i]).callback.call(ev.ctx);return;case 1:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1);return;case 2:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2);return;case 3:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2,a3);return;default:while(++i<l)(ev=events[i]).callback.apply(ev.ctx,args);return;}};// A listening class that tracks and cleans up memory bindings
// when all callbacks have been offed.
var Listening=function(listener,obj){this.id=listener._listenId;this.listener=listener;this.obj=obj;this.interop=true;this.count=0;this._events=void 0;};Listening.prototype.on=Events.on;// Offs a callback (or several).
// Uses an optimized counter if the listenee uses Backbone.Events.
// Otherwise, falls back to manual tracking to support events
// library interop.
Listening.prototype.off=function(name,callback){var cleanup;if(this.interop){this._events=eventsApi(offApi,this._events,name,callback,{context:void 0,listeners:void 0});cleanup=!this._events;}else{this.count--;cleanup=this.count===0;}if(cleanup)this.cleanup();};// Cleans up memory bindings between the listener and the listenee.
Listening.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id];};// Aliases for backwards compatibility.
Events.bind=Events.on;Events.unbind=Events.off;// Allow the `Backbone` object to serve as a global event bus, for folks who
// want global "pubsub" in a convenient place.
_.extend(Backbone,Events);// Backbone.Model
// --------------
// Backbone **Models** are the basic data object in the framework --
// frequently representing a row in a table in a database on your server.
// A discrete chunk of data and a bunch of useful, related methods for
// performing computations and transformations on that data.
// Create a new model with the specified attributes. A client id (`cid`)
// is automatically generated and assigned for you.
var Model=Backbone.Model=function(attributes,options){var attrs=attributes||{};options||(options={});this.preinitialize.apply(this,arguments);this.cid=_.uniqueId(this.cidPrefix);this.attributes={};if(options.collection)this.collection=options.collection;if(options.parse)attrs=this.parse(attrs,options)||{};var defaults=_.result(this,'defaults');attrs=_.defaults(_.extend({},defaults,attrs),defaults);this.set(attrs,options);this.changed={};this.initialize.apply(this,arguments);};// Attach all inheritable methods to the Model prototype.
_.extend(Model.prototype,Events,{// A hash of attributes whose current and previous value differ.
changed:null,// The value returned during the last failed validation.
validationError:null,// The default name for the JSON `id` attribute is `"id"`. MongoDB and
// CouchDB users may want to set this to `"_id"`.
idAttribute:'id',// The prefix is used to create the client id which is used to identify models locally.
// You may want to override this if you're experiencing name clashes with model ids.
cidPrefix:'c',// preinitialize is an empty function by default. You can override it with a function
// or object.  preinitialize will run before any instantiation logic is run in the Model.
preinitialize:function(){},// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize:function(){},// Return a copy of the model's `attributes` object.
toJSON:function(options){return _.clone(this.attributes);},// Proxy `Backbone.sync` by default -- but override this if you need
// custom syncing semantics for *this* particular model.
sync:function(){return Backbone.sync.apply(this,arguments);},// Get the value of an attribute.
get:function(attr){return this.attributes[attr];},// Get the HTML-escaped value of an attribute.
escape:function(attr){return _.escape(this.get(attr));},// Returns `true` if the attribute contains a value that is not null
// or undefined.
has:function(attr){return this.get(attr)!=null;},// Special-cased proxy to underscore's `_.matches` method.
matches:function(attrs){return!!_.iteratee(attrs,this)(this.attributes);},// Set a hash of model attributes on the object, firing `"change"`. This is
// the core primitive operation of a model, updating the data and notifying
// anyone who needs to know about the change in state. The heart of the beast.
set:function(key,val,options){if(key==null)return this;// Handle both `"key", value` and `{key: value}` -style arguments.
var attrs;if(typeof key==='object'){attrs=key;options=val;}else{(attrs={})[key]=val;}options||(options={});// Run validation.
if(!this._validate(attrs,options))return false;// Extract attributes and options.
var unset=options.unset;var silent=options.silent;var changes=[];var changing=this._changing;this._changing=true;if(!changing){this._previousAttributes=_.clone(this.attributes);this.changed={};}var current=this.attributes;var changed=this.changed;var prev=this._previousAttributes;// For each `set` attribute, update or delete the current value.
for(var attr in attrs){val=attrs[attr];if(!_.isEqual(current[attr],val))changes.push(attr);if(!_.isEqual(prev[attr],val)){changed[attr]=val;}else{delete changed[attr];}unset?delete current[attr]:current[attr]=val;}// Update the `id`.
if(this.idAttribute in attrs)this.id=this.get(this.idAttribute);// Trigger all relevant attribute changes.
if(!silent){if(changes.length)this._pending=options;for(var i=0;i<changes.length;i++){this.trigger('change:'+changes[i],this,current[changes[i]],options);}}// You might be wondering why there's a `while` loop here. Changes can
// be recursively nested within `"change"` events.
if(changing)return this;if(!silent){while(this._pending){options=this._pending;this._pending=false;this.trigger('change',this,options);}}this._pending=false;this._changing=false;return this;},// Remove an attribute from the model, firing `"change"`. `unset` is a noop
// if the attribute doesn't exist.
unset:function(attr,options){return this.set(attr,void 0,_.extend({},options,{unset:true}));},// Clear all attributes on the model, firing `"change"`.
clear:function(options){var attrs={};for(var key in this.attributes)attrs[key]=void 0;return this.set(attrs,_.extend({},options,{unset:true}));},// Determine if the model has changed since the last `"change"` event.
// If you specify an attribute name, determine if that attribute has changed.
hasChanged:function(attr){if(attr==null)return!_.isEmpty(this.changed);return _.has(this.changed,attr);},// Return an object containing all the attributes that have changed, or
// false if there are no changed attributes. Useful for determining what
// parts of a view need to be updated and/or what attributes need to be
// persisted to the server. Unset attributes will be set to undefined.
// You can also pass an attributes object to diff against the model,
// determining if there *would be* a change.
changedAttributes:function(diff){if(!diff)return this.hasChanged()?_.clone(this.changed):false;var old=this._changing?this._previousAttributes:this.attributes;var changed={};var hasChanged;for(var attr in diff){var val=diff[attr];if(_.isEqual(old[attr],val))continue;changed[attr]=val;hasChanged=true;}return hasChanged?changed:false;},// Get the previous value of an attribute, recorded at the time the last
// `"change"` event was fired.
previous:function(attr){if(attr==null||!this._previousAttributes)return null;return this._previousAttributes[attr];},// Get all of the attributes of the model at the time of the previous
// `"change"` event.
previousAttributes:function(){return _.clone(this._previousAttributes);},// Fetch the model from the server, merging the response with the model's
// local attributes. Any changed attributes will trigger a "change" event.
fetch:function(options){options=_.extend({parse:true},options);var model=this;var success=options.success;options.success=function(resp){var serverAttrs=options.parse?model.parse(resp,options):resp;if(!model.set(serverAttrs,options))return false;if(success)success.call(options.context,model,resp,options);model.trigger('sync',model,resp,options);};wrapError(this,options);return this.sync('read',this,options);},// Set a hash of model attributes, and sync the model to the server.
// If the server returns an attributes hash that differs, the model's
// state will be `set` again.
save:function(key,val,options){// Handle both `"key", value` and `{key: value}` -style arguments.
var attrs;if(key==null||typeof key==='object'){attrs=key;options=val;}else{(attrs={})[key]=val;}options=_.extend({validate:true,parse:true},options);var wait=options.wait;// If we're not waiting and attributes exist, save acts as
// `set(attr).save(null, opts)` with validation. Otherwise, check if
// the model will be valid when the attributes, if any, are set.
if(attrs&&!wait){if(!this.set(attrs,options))return false;}else if(!this._validate(attrs,options)){return false;}// After a successful server-side save, the client is (optionally)
// updated with the server-side state.
var model=this;var success=options.success;var attributes=this.attributes;options.success=function(resp){// Ensure attributes are restored during synchronous saves.
model.attributes=attributes;var serverAttrs=options.parse?model.parse(resp,options):resp;if(wait)serverAttrs=_.extend({},attrs,serverAttrs);if(serverAttrs&&!model.set(serverAttrs,options))return false;if(success)success.call(options.context,model,resp,options);model.trigger('sync',model,resp,options);};wrapError(this,options);// Set temporary attributes if `{wait: true}` to properly find new ids.
if(attrs&&wait)this.attributes=_.extend({},attributes,attrs);var method=this.isNew()?'create':options.patch?'patch':'update';if(method==='patch'&&!options.attrs)options.attrs=attrs;var xhr=this.sync(method,this,options);// Restore attributes.
this.attributes=attributes;return xhr;},// Destroy this model on the server if it was already persisted.
// Optimistically removes the model from its collection, if it has one.
// If `wait: true` is passed, waits for the server to respond before removal.
destroy:function(options){options=options?_.clone(options):{};var model=this;var success=options.success;var wait=options.wait;var destroy=function(){model.stopListening();model.trigger('destroy',model,model.collection,options);};options.success=function(resp){if(wait)destroy();if(success)success.call(options.context,model,resp,options);if(!model.isNew())model.trigger('sync',model,resp,options);};var xhr=false;if(this.isNew()){_.defer(options.success);}else{wrapError(this,options);xhr=this.sync('delete',this,options);}if(!wait)destroy();return xhr;},// Default URL for the model's representation on the server -- if you're
// using Backbone's restful methods, override this to change the endpoint
// that will be called.
url:function(){var base=_.result(this,'urlRoot')||_.result(this.collection,'url')||urlError();if(this.isNew())return base;var id=this.get(this.idAttribute);return base.replace(/[^\/]$/,'$&/')+encodeURIComponent(id);},// **parse** converts a response into the hash of attributes to be `set` on
// the model. The default implementation is just to pass the response along.
parse:function(resp,options){return resp;},// Create a new model with identical attributes to this one.
clone:function(){return new this.constructor(this.attributes);},// A model is new if it has never been saved to the server, and lacks an id.
isNew:function(){return!this.has(this.idAttribute);},// Check if the model is currently in a valid state.
isValid:function(options){return this._validate({},_.extend({},options,{validate:true}));},// Run validation against the next complete set of model attributes,
// returning `true` if all is well. Otherwise, fire an `"invalid"` event.
_validate:function(attrs,options){if(!options.validate||!this.validate)return true;attrs=_.extend({},this.attributes,attrs);var error=this.validationError=this.validate(attrs,options)||null;if(!error)return true;this.trigger('invalid',this,error,_.extend(options,{validationError:error}));return false;}});// Backbone.Collection
// -------------------
// If models tend to represent a single row of data, a Backbone Collection is
// more analogous to a table full of data ... or a small slice or page of that
// table, or a collection of rows that belong together for a particular reason
// -- all of the messages in this particular folder, all of the documents
// belonging to this particular author, and so on. Collections maintain
// indexes of their models, both in order, and for lookup by `id`.
// Create a new **Collection**, perhaps to contain a specific type of `model`.
// If a `comparator` is specified, the Collection will maintain
// its models in sort order, as they're added and removed.
var Collection=Backbone.Collection=function(models,options){options||(options={});this.preinitialize.apply(this,arguments);if(options.model)this.model=options.model;if(options.comparator!==void 0)this.comparator=options.comparator;this._reset();this.initialize.apply(this,arguments);if(models)this.reset(models,_.extend({silent:true},options));};// Default options for `Collection#set`.
var setOptions={add:true,remove:true,merge:true};var addOptions={add:true,remove:false};// Splices `insert` into `array` at index `at`.
var splice=function(array,insert,at){at=Math.min(Math.max(at,0),array.length);var tail=Array(array.length-at);var length=insert.length;var i;for(i=0;i<tail.length;i++)tail[i]=array[i+at];for(i=0;i<length;i++)array[i+at]=insert[i];for(i=0;i<tail.length;i++)array[i+length+at]=tail[i];};// Define the Collection's inheritable methods.
_.extend(Collection.prototype,Events,{// The default model for a collection is just a **Backbone.Model**.
// This should be overridden in most cases.
model:Model,// preinitialize is an empty function by default. You can override it with a function
// or object.  preinitialize will run before any instantiation logic is run in the Collection.
preinitialize:function(){},// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize:function(){},// The JSON representation of a Collection is an array of the
// models' attributes.
toJSON:function(options){return this.map(function(model){return model.toJSON(options);});},// Proxy `Backbone.sync` by default.
sync:function(){return Backbone.sync.apply(this,arguments);},// Add a model, or list of models to the set. `models` may be Backbone
// Models or raw JavaScript objects to be converted to Models, or any
// combination of the two.
add:function(models,options){return this.set(models,_.extend({merge:false},options,addOptions));},// Remove a model, or a list of models from the set.
remove:function(models,options){options=_.extend({},options);var singular=!_.isArray(models);models=singular?[models]:models.slice();var removed=this._removeModels(models,options);if(!options.silent&&removed.length){options.changes={added:[],merged:[],removed:removed};this.trigger('update',this,options);}return singular?removed[0]:removed;},// Update a collection by `set`-ing a new list of models, adding new ones,
// removing models that are no longer present, and merging models that
// already exist in the collection, as necessary. Similar to **Model#set**,
// the core operation for updating the data contained by the collection.
set:function(models,options){if(models==null)return;options=_.extend({},setOptions,options);if(options.parse&&!this._isModel(models)){models=this.parse(models,options)||[];}var singular=!_.isArray(models);models=singular?[models]:models.slice();var at=options.at;if(at!=null)at=+at;if(at>this.length)at=this.length;if(at<0)at+=this.length+1;var set=[];var toAdd=[];var toMerge=[];var toRemove=[];var modelMap={};var add=options.add;var merge=options.merge;var remove=options.remove;var sort=false;var sortable=this.comparator&&at==null&&options.sort!==false;var sortAttr=_.isString(this.comparator)?this.comparator:null;// Turn bare objects into model references, and prevent invalid models
// from being added.
var model,i;for(i=0;i<models.length;i++){model=models[i];// If a duplicate is found, prevent it from being added and
// optionally merge it into the existing model.
var existing=this.get(model);if(existing){if(merge&&model!==existing){var attrs=this._isModel(model)?model.attributes:model;if(options.parse)attrs=existing.parse(attrs,options);existing.set(attrs,options);toMerge.push(existing);if(sortable&&!sort)sort=existing.hasChanged(sortAttr);}if(!modelMap[existing.cid]){modelMap[existing.cid]=true;set.push(existing);}models[i]=existing;// If this is a new, valid model, push it to the `toAdd` list.
}else if(add){model=models[i]=this._prepareModel(model,options);if(model){toAdd.push(model);this._addReference(model,options);modelMap[model.cid]=true;set.push(model);}}}// Remove stale models.
if(remove){for(i=0;i<this.length;i++){model=this.models[i];if(!modelMap[model.cid])toRemove.push(model);}if(toRemove.length)this._removeModels(toRemove,options);}// See if sorting is needed, update `length` and splice in new models.
var orderChanged=false;var replace=!sortable&&add&&remove;if(set.length&&replace){orderChanged=this.length!==set.length||_.some(this.models,function(m,index){return m!==set[index];});this.models.length=0;splice(this.models,set,0);this.length=this.models.length;}else if(toAdd.length){if(sortable)sort=true;splice(this.models,toAdd,at==null?this.length:at);this.length=this.models.length;}// Silently sort the collection if appropriate.
if(sort)this.sort({silent:true});// Unless silenced, it's time to fire all appropriate add/sort/update events.
if(!options.silent){for(i=0;i<toAdd.length;i++){if(at!=null)options.index=at+i;model=toAdd[i];model.trigger('add',model,this,options);}if(sort||orderChanged)this.trigger('sort',this,options);if(toAdd.length||toRemove.length||toMerge.length){options.changes={added:toAdd,removed:toRemove,merged:toMerge};this.trigger('update',this,options);}}// Return the added (or merged) model (or models).
return singular?models[0]:models;},// When you have more items than you want to add or remove individually,
// you can reset the entire set with a new list of models, without firing
// any granular `add` or `remove` events. Fires `reset` when finished.
// Useful for bulk operations and optimizations.
reset:function(models,options){options=options?_.clone(options):{};for(var i=0;i<this.models.length;i++){this._removeReference(this.models[i],options);}options.previousModels=this.models;this._reset();models=this.add(models,_.extend({silent:true},options));if(!options.silent)this.trigger('reset',this,options);return models;},// Add a model to the end of the collection.
push:function(model,options){return this.add(model,_.extend({at:this.length},options));},// Remove a model from the end of the collection.
pop:function(options){var model=this.at(this.length-1);return this.remove(model,options);},// Add a model to the beginning of the collection.
unshift:function(model,options){return this.add(model,_.extend({at:0},options));},// Remove a model from the beginning of the collection.
shift:function(options){var model=this.at(0);return this.remove(model,options);},// Slice out a sub-array of models from the collection.
slice:function(){return slice.apply(this.models,arguments);},// Get a model from the set by id, cid, model object with id or cid
// properties, or an attributes object that is transformed through modelId.
get:function(obj){if(obj==null)return void 0;return this._byId[obj]||this._byId[this.modelId(this._isModel(obj)?obj.attributes:obj)]||obj.cid&&this._byId[obj.cid];},// Returns `true` if the model is in the collection.
has:function(obj){return this.get(obj)!=null;},// Get the model at the given index.
at:function(index){if(index<0)index+=this.length;return this.models[index];},// Return models with matching attributes. Useful for simple cases of
// `filter`.
where:function(attrs,first){return this[first?'find':'filter'](attrs);},// Return the first model with matching attributes. Useful for simple cases
// of `find`.
findWhere:function(attrs){return this.where(attrs,true);},// Force the collection to re-sort itself. You don't need to call this under
// normal circumstances, as the set will maintain sort order as each item
// is added.
sort:function(options){var comparator=this.comparator;if(!comparator)throw new Error('Cannot sort a set without a comparator');options||(options={});var length=comparator.length;if(_.isFunction(comparator))comparator=comparator.bind(this);// Run sort based on type of `comparator`.
if(length===1||_.isString(comparator)){this.models=this.sortBy(comparator);}else{this.models.sort(comparator);}if(!options.silent)this.trigger('sort',this,options);return this;},// Pluck an attribute from each model in the collection.
pluck:function(attr){return this.map(attr+'');},// Fetch the default set of models for this collection, resetting the
// collection when they arrive. If `reset: true` is passed, the response
// data will be passed through the `reset` method instead of `set`.
fetch:function(options){options=_.extend({parse:true},options);var success=options.success;var collection=this;options.success=function(resp){var method=options.reset?'reset':'set';collection[method](resp,options);if(success)success.call(options.context,collection,resp,options);collection.trigger('sync',collection,resp,options);};wrapError(this,options);return this.sync('read',this,options);},// Create a new instance of a model in this collection. Add the model to the
// collection immediately, unless `wait: true` is passed, in which case we
// wait for the server to agree.
create:function(model,options){options=options?_.clone(options):{};var wait=options.wait;model=this._prepareModel(model,options);if(!model)return false;if(!wait)this.add(model,options);var collection=this;var success=options.success;options.success=function(m,resp,callbackOpts){if(wait)collection.add(m,callbackOpts);if(success)success.call(callbackOpts.context,m,resp,callbackOpts);};model.save(null,options);return model;},// **parse** converts a response into a list of models to be added to the
// collection. The default implementation is just to pass it through.
parse:function(resp,options){return resp;},// Create a new collection with an identical list of models as this one.
clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator});},// Define how to uniquely identify models in the collection.
modelId:function(attrs){return attrs[this.model.prototype.idAttribute||'id'];},// Get an iterator of all models in this collection.
values:function(){return new CollectionIterator(this,ITERATOR_VALUES);},// Get an iterator of all model IDs in this collection.
keys:function(){return new CollectionIterator(this,ITERATOR_KEYS);},// Get an iterator of all [ID, model] tuples in this collection.
entries:function(){return new CollectionIterator(this,ITERATOR_KEYSVALUES);},// Private method to reset all internal state. Called when the collection
// is first initialized or reset.
_reset:function(){this.length=0;this.models=[];this._byId={};},// Prepare a hash of attributes (or other model) to be added to this
// collection.
_prepareModel:function(attrs,options){if(this._isModel(attrs)){if(!attrs.collection)attrs.collection=this;return attrs;}options=options?_.clone(options):{};options.collection=this;var model=new this.model(attrs,options);if(!model.validationError)return model;this.trigger('invalid',this,model.validationError,options);return false;},// Internal method called by both remove and set.
_removeModels:function(models,options){var removed=[];for(var i=0;i<models.length;i++){var model=this.get(models[i]);if(!model)continue;var index=this.indexOf(model);this.models.splice(index,1);this.length--;// Remove references before triggering 'remove' event to prevent an
// infinite loop. #3693
delete this._byId[model.cid];var id=this.modelId(model.attributes);if(id!=null)delete this._byId[id];if(!options.silent){options.index=index;model.trigger('remove',model,this,options);}removed.push(model);this._removeReference(model,options);}return removed;},// Method for checking whether an object should be considered a model for
// the purposes of adding to the collection.
_isModel:function(model){return model instanceof Model;},// Internal method to create a model's ties to a collection.
_addReference:function(model,options){this._byId[model.cid]=model;var id=this.modelId(model.attributes);if(id!=null)this._byId[id]=model;model.on('all',this._onModelEvent,this);},// Internal method to sever a model's ties to a collection.
_removeReference:function(model,options){delete this._byId[model.cid];var id=this.modelId(model.attributes);if(id!=null)delete this._byId[id];if(this===model.collection)delete model.collection;model.off('all',this._onModelEvent,this);},// Internal method called every time a model in the set fires an event.
// Sets need to update their indexes when models change ids. All other
// events simply proxy through. "add" and "remove" events that originate
// in other collections are ignored.
_onModelEvent:function(event,model,collection,options){if(model){if((event==='add'||event==='remove')&&collection!==this)return;if(event==='destroy')this.remove(model,options);if(event==='change'){var prevId=this.modelId(model.previousAttributes());var id=this.modelId(model.attributes);if(prevId!==id){if(prevId!=null)delete this._byId[prevId];if(id!=null)this._byId[id]=model;}}}this.trigger.apply(this,arguments);}});// Defining an @@iterator method implements JavaScript's Iterable protocol.
// In modern ES2015 browsers, this value is found at Symbol.iterator.
/* global Symbol */var $$iterator=typeof Symbol==='function'&&Symbol.iterator;if($$iterator){Collection.prototype[$$iterator]=Collection.prototype.values;}// CollectionIterator
// ------------------
// A CollectionIterator implements JavaScript's Iterator protocol, allowing the
// use of `for of` loops in modern browsers and interoperation between
// Backbone.Collection and other JavaScript functions and third-party libraries
// which can operate on Iterables.
var CollectionIterator=function(collection,kind){this._collection=collection;this._kind=kind;this._index=0;};// This "enum" defines the three possible kinds of values which can be emitted
// by a CollectionIterator that correspond to the values(), keys() and entries()
// methods on Collection, respectively.
var ITERATOR_VALUES=1;var ITERATOR_KEYS=2;var ITERATOR_KEYSVALUES=3;// All Iterators should themselves be Iterable.
if($$iterator){CollectionIterator.prototype[$$iterator]=function(){return this;};}CollectionIterator.prototype.next=function(){if(this._collection){// Only continue iterating if the iterated collection is long enough.
if(this._index<this._collection.length){var model=this._collection.at(this._index);this._index++;// Construct a value depending on what kind of values should be iterated.
var value;if(this._kind===ITERATOR_VALUES){value=model;}else{var id=this._collection.modelId(model.attributes);if(this._kind===ITERATOR_KEYS){value=id;}else{// ITERATOR_KEYSVALUES
value=[id,model];}}return{value:value,done:false};}// Once exhausted, remove the reference to the collection so future
// calls to the next method always return done.
this._collection=void 0;}return{value:void 0,done:true};};// Backbone.View
// -------------
// Backbone Views are almost more convention than they are actual code. A View
// is simply a JavaScript object that represents a logical chunk of UI in the
// DOM. This might be a single item, an entire list, a sidebar or panel, or
// even the surrounding frame which wraps your whole app. Defining a chunk of
// UI as a **View** allows you to define your DOM events declaratively, without
// having to worry about render order ... and makes it easy for the view to
// react to specific changes in the state of your models.
// Creating a Backbone.View creates its initial element outside of the DOM,
// if an existing element is not provided...
var View=Backbone.View=function(options){this.cid=_.uniqueId('view');this.preinitialize.apply(this,arguments);_.extend(this,_.pick(options,viewOptions));this._ensureElement();this.initialize.apply(this,arguments);};// Cached regex to split keys for `delegate`.
var delegateEventSplitter=/^(\S+)\s*(.*)$/;// List of view options to be set as properties.
var viewOptions=['model','collection','el','id','attributes','className','tagName','events'];// Set up all inheritable **Backbone.View** properties and methods.
_.extend(View.prototype,Events,{// The default `tagName` of a View's element is `"div"`.
tagName:'div',// jQuery delegate for element lookup, scoped to DOM elements within the
// current view. This should be preferred to global lookups where possible.
$:function(selector){return this.$el.find(selector);},// preinitialize is an empty function by default. You can override it with a function
// or object.  preinitialize will run before any instantiation logic is run in the View
preinitialize:function(){},// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize:function(){},// **render** is the core function that your view should override, in order
// to populate its element (`this.el`), with the appropriate HTML. The
// convention is for **render** to always return `this`.
render:function(){return this;},// Remove this view by taking the element out of the DOM, and removing any
// applicable Backbone.Events listeners.
remove:function(){this._removeElement();this.stopListening();return this;},// Remove this view's element from the document and all event listeners
// attached to it. Exposed for subclasses using an alternative DOM
// manipulation API.
_removeElement:function(){this.$el.remove();},// Change the view's element (`this.el` property) and re-delegate the
// view's events on the new element.
setElement:function(element){this.undelegateEvents();this._setElement(element);this.delegateEvents();return this;},// Creates the `this.el` and `this.$el` references for this view using the
// given `el`. `el` can be a CSS selector or an HTML string, a jQuery
// context or an element. Subclasses can override this to utilize an
// alternative DOM manipulation API and are only required to set the
// `this.el` property.
_setElement:function(el){this.$el=el instanceof Backbone.$?el:Backbone.$(el);this.el=this.$el[0];},// Set callbacks, where `this.events` is a hash of
//
// *{"event selector": "callback"}*
//
//     {
//       'mousedown .title':  'edit',
//       'click .button':     'save',
//       'click .open':       function(e) { ... }
//     }
//
// pairs. Callbacks will be bound to the view, with `this` set properly.
// Uses event delegation for efficiency.
// Omitting the selector binds the event to `this.el`.
delegateEvents:function(events){events||(events=_.result(this,'events'));if(!events)return this;this.undelegateEvents();for(var key in events){var method=events[key];if(!_.isFunction(method))method=this[method];if(!method)continue;var match=key.match(delegateEventSplitter);this.delegate(match[1],match[2],method.bind(this));}return this;},// Add a single event listener to the view's element (or a child element
// using `selector`). This only works for delegate-able events: not `focus`,
// `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
delegate:function(eventName,selector,listener){this.$el.on(eventName+'.delegateEvents'+this.cid,selector,listener);return this;},// Clears all callbacks previously bound to the view by `delegateEvents`.
// You usually don't need to use this, but may wish to if you have multiple
// Backbone views attached to the same DOM element.
undelegateEvents:function(){if(this.$el)this.$el.off('.delegateEvents'+this.cid);return this;},// A finer-grained `undelegateEvents` for removing a single delegated event.
// `selector` and `listener` are both optional.
undelegate:function(eventName,selector,listener){this.$el.off(eventName+'.delegateEvents'+this.cid,selector,listener);return this;},// Produces a DOM element to be assigned to your view. Exposed for
// subclasses using an alternative DOM manipulation API.
_createElement:function(tagName){return document.createElement(tagName);},// Ensure that the View has a DOM element to render into.
// If `this.el` is a string, pass it through `$()`, take the first
// matching element, and re-assign it to `el`. Otherwise, create
// an element from the `id`, `className` and `tagName` properties.
_ensureElement:function(){if(!this.el){var attrs=_.extend({},_.result(this,'attributes'));if(this.id)attrs.id=_.result(this,'id');if(this.className)attrs['class']=_.result(this,'className');this.setElement(this._createElement(_.result(this,'tagName')));this._setAttributes(attrs);}else{this.setElement(_.result(this,'el'));}},// Set attributes from a hash on this view's element.  Exposed for
// subclasses using an alternative DOM manipulation API.
_setAttributes:function(attributes){this.$el.attr(attributes);}});// Proxy Backbone class methods to Underscore functions, wrapping the model's
// `attributes` object or collection's `models` array behind the scenes.
//
// collection.filter(function(model) { return model.get('age') > 10 });
// collection.each(this.addView);
//
// `Function#apply` can be slow so we use the method's arg count, if we know it.
var addMethod=function(base,length,method,attribute){switch(length){case 1:return function(){return base[method](this[attribute]);};case 2:return function(value){return base[method](this[attribute],value);};case 3:return function(iteratee,context){return base[method](this[attribute],cb(iteratee,this),context);};case 4:return function(iteratee,defaultVal,context){return base[method](this[attribute],cb(iteratee,this),defaultVal,context);};default:return function(){var args=slice.call(arguments);args.unshift(this[attribute]);return base[method].apply(base,args);};}};var addUnderscoreMethods=function(Class,base,methods,attribute){_.each(methods,function(length,method){if(base[method])Class.prototype[method]=addMethod(base,length,method,attribute);});};// Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
var cb=function(iteratee,instance){if(_.isFunction(iteratee))return iteratee;if(_.isObject(iteratee)&&!instance._isModel(iteratee))return modelMatcher(iteratee);if(_.isString(iteratee))return function(model){return model.get(iteratee);};return iteratee;};var modelMatcher=function(attrs){var matcher=_.matches(attrs);return function(model){return matcher(model.attributes);};};// Underscore methods that we want to implement on the Collection.
// 90% of the core usefulness of Backbone Collections is actually implemented
// right here:
var collectionMethods={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};// Underscore methods that we want to implement on the Model, mapped to the
// number of arguments they take.
var modelMethods={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};// Mix in each Underscore method as a proxy to `Collection#models`.
_.each([[Collection,collectionMethods,'models'],[Model,modelMethods,'attributes']],function(config){var Base=config[0],methods=config[1],attribute=config[2];Base.mixin=function(obj){var mappings=_.reduce(_.functions(obj),function(memo,name){memo[name]=0;return memo;},{});addUnderscoreMethods(Base,obj,mappings,attribute);};addUnderscoreMethods(Base,_,methods,attribute);});// Backbone.sync
// -------------
// Override this function to change the manner in which Backbone persists
// models to the server. You will be passed the type of request, and the
// model in question. By default, makes a RESTful Ajax request
// to the model's `url()`. Some possible customizations could be:
//
// * Use `setTimeout` to batch rapid-fire updates into a single request.
// * Send up the models as XML instead of JSON.
// * Persist models via WebSockets instead of Ajax.
//
// Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
// as `POST`, with a `_method` parameter containing the true HTTP method,
// as well as all requests with the body as `application/x-www-form-urlencoded`
// instead of `application/json` with the model in a param named `model`.
// Useful when interfacing with server-side languages like **PHP** that make
// it difficult to read the body of `PUT` requests.
Backbone.sync=function(method,model,options){var type=methodMap[method];// Default options, unless specified.
_.defaults(options||(options={}),{emulateHTTP:Backbone.emulateHTTP,emulateJSON:Backbone.emulateJSON});// Default JSON-request options.
var params={type:type,dataType:'json'};// Ensure that we have a URL.
if(!options.url){params.url=_.result(model,'url')||urlError();}// Ensure that we have the appropriate request data.
if(options.data==null&&model&&(method==='create'||method==='update'||method==='patch')){params.contentType='application/json';params.data=JSON.stringify(options.attrs||model.toJSON(options));}// For older servers, emulate JSON by encoding the request into an HTML-form.
if(options.emulateJSON){params.contentType='application/x-www-form-urlencoded';params.data=params.data?{model:params.data}:{};}// For older servers, emulate HTTP by mimicking the HTTP method with `_method`
// And an `X-HTTP-Method-Override` header.
if(options.emulateHTTP&&(type==='PUT'||type==='DELETE'||type==='PATCH')){params.type='POST';if(options.emulateJSON)params.data._method=type;var beforeSend=options.beforeSend;options.beforeSend=function(xhr){xhr.setRequestHeader('X-HTTP-Method-Override',type);if(beforeSend)return beforeSend.apply(this,arguments);};}// Don't process data on a non-GET request.
if(params.type!=='GET'&&!options.emulateJSON){params.processData=false;}// Pass along `textStatus` and `errorThrown` from jQuery.
var error=options.error;options.error=function(xhr,textStatus,errorThrown){options.textStatus=textStatus;options.errorThrown=errorThrown;if(error)error.call(options.context,xhr,textStatus,errorThrown);};// Make the request, allowing the user to override any Ajax options.
var xhr=options.xhr=Backbone.ajax(_.extend(params,options));model.trigger('request',model,xhr,options);return xhr;};// Map from CRUD to HTTP for our default `Backbone.sync` implementation.
var methodMap={create:'POST',update:'PUT',patch:'PATCH',delete:'DELETE',read:'GET'};// Set the default implementation of `Backbone.ajax` to proxy through to `$`.
// Override this if you'd like to use a different library.
Backbone.ajax=function(){return Backbone.$.ajax.apply(Backbone.$,arguments);};// Backbone.Router
// ---------------
// Routers map faux-URLs to actions, and fire events when routes are
// matched. Creating a new one sets its `routes` hash, if not set statically.
var Router=Backbone.Router=function(options){options||(options={});this.preinitialize.apply(this,arguments);if(options.routes)this.routes=options.routes;this._bindRoutes();this.initialize.apply(this,arguments);};// Cached regular expressions for matching named param parts and splatted
// parts of route strings.
var optionalParam=/\((.*?)\)/g;var namedParam=/(\(\?)?:\w+/g;var splatParam=/\*\w+/g;var escapeRegExp=/[\-{}\[\]+?.,\\\^$|#\s]/g;// Set up all inheritable **Backbone.Router** properties and methods.
_.extend(Router.prototype,Events,{// preinitialize is an empty function by default. You can override it with a function
// or object.  preinitialize will run before any instantiation logic is run in the Router.
preinitialize:function(){},// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize:function(){},// Manually bind a single named route to a callback. For example:
//
//     this.route('search/:query/p:num', 'search', function(query, num) {
//       ...
//     });
//
route:function(route,name,callback){if(!_.isRegExp(route))route=this._routeToRegExp(route);if(_.isFunction(name)){callback=name;name='';}if(!callback)callback=this[name];var router=this;Backbone.history.route(route,function(fragment){var args=router._extractParameters(route,fragment);if(router.execute(callback,args,name)!==false){router.trigger.apply(router,['route:'+name].concat(args));router.trigger('route',name,args);Backbone.history.trigger('route',router,name,args);}});return this;},// Execute a route handler with the provided parameters.  This is an
// excellent place to do pre-route setup or post-route cleanup.
execute:function(callback,args,name){if(callback)callback.apply(this,args);},// Simple proxy to `Backbone.history` to save a fragment into the history.
navigate:function(fragment,options){Backbone.history.navigate(fragment,options);return this;},// Bind all defined routes to `Backbone.history`. We have to reverse the
// order of the routes here to support behavior where the most general
// routes can be defined at the bottom of the route map.
_bindRoutes:function(){if(!this.routes)return;this.routes=_.result(this,'routes');var route,routes=_.keys(this.routes);while((route=routes.pop())!=null){this.route(route,this.routes[route]);}},// Convert a route string into a regular expression, suitable for matching
// against the current location hash.
_routeToRegExp:function(route){route=route.replace(escapeRegExp,'\\$&').replace(optionalParam,'(?:$1)?').replace(namedParam,function(match,optional){return optional?match:'([^/?]+)';}).replace(splatParam,'([^?]*?)');return new RegExp('^'+route+'(?:\\?([\\s\\S]*))?$');},// Given a route, and a URL fragment that it matches, return the array of
// extracted decoded parameters. Empty or unmatched parameters will be
// treated as `null` to normalize cross-browser behavior.
_extractParameters:function(route,fragment){var params=route.exec(fragment).slice(1);return _.map(params,function(param,i){// Don't decode the search params.
if(i===params.length-1)return param||null;return param?decodeURIComponent(param):null;});}});// Backbone.History
// ----------------
// Handles cross-browser history management, based on either
// [pushState](http://diveintohtml5.info/history.html) and real URLs, or
// [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
// and URL fragments. If the browser supports neither (old IE, natch),
// falls back to polling.
var History=Backbone.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);// Ensure that `History` can be used outside of the browser.
if(typeof window!=='undefined'){this.location=window.location;this.history=window.history;}};// Cached regex for stripping a leading hash/slash and trailing space.
var routeStripper=/^[#\/]|\s+$/g;// Cached regex for stripping leading and trailing slashes.
var rootStripper=/^\/+|\/+$/g;// Cached regex for stripping urls of hash.
var pathStripper=/#.*$/;// Has the history handling already been started?
History.started=false;// Set up all inheritable **Backbone.History** properties and methods.
_.extend(History.prototype,Events,{// The default interval to poll for hash changes, if necessary, is
// twenty times a second.
interval:50,// Are we at the app root?
atRoot:function(){var path=this.location.pathname.replace(/[^\/]$/,'$&/');return path===this.root&&!this.getSearch();},// Does the pathname match the root?
matchRoot:function(){var path=this.decodeFragment(this.location.pathname);var rootPath=path.slice(0,this.root.length-1)+'/';return rootPath===this.root;},// Unicode characters in `location.pathname` are percent encoded so they're
// decoded for comparison. `%25` should not be decoded since it may be part
// of an encoded parameter.
decodeFragment:function(fragment){return decodeURI(fragment.replace(/%25/g,'%2525'));},// In IE6, the hash fragment and search params are incorrect if the
// fragment contains `?`.
getSearch:function(){var match=this.location.href.replace(/#.*/,'').match(/\?.+/);return match?match[0]:'';},// Gets the true hash value. Cannot use location.hash directly due to bug
// in Firefox where location.hash will always be decoded.
getHash:function(window){var match=(window||this).location.href.match(/#(.*)$/);return match?match[1]:'';},// Get the pathname and search params, without the root.
getPath:function(){var path=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return path.charAt(0)==='/'?path.slice(1):path;},// Get the cross-browser normalized URL fragment from the path or hash.
getFragment:function(fragment){if(fragment==null){if(this._usePushState||!this._wantsHashChange){fragment=this.getPath();}else{fragment=this.getHash();}}return fragment.replace(routeStripper,'');},// Start the hash change handling, returning `true` if the current URL matches
// an existing route, and `false` otherwise.
start:function(options){if(History.started)throw new Error('Backbone.history has already been started');History.started=true;// Figure out the initial configuration. Do we need an iframe?
// Is pushState desired ... is it available?
this.options=_.extend({root:'/'},this.options,options);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange='onhashchange'in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();// Normalize root to always include a leading and trailing slash.
this.root=('/'+this.root+'/').replace(rootStripper,'/');// Transition from hashChange to pushState or vice versa if both are
// requested.
if(this._wantsHashChange&&this._wantsPushState){// If we've started off with a route from a `pushState`-enabled
// browser, but we're currently in a browser that doesn't support it...
if(!this._hasPushState&&!this.atRoot()){var rootPath=this.root.slice(0,-1)||'/';this.location.replace(rootPath+'#'+this.getPath());// Return immediately as browser will do redirect to new url
return true;// Or if we've started out with a hash-based route, but we're currently
// in a browser where it could be `pushState`-based instead...
}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true});}}// Proxy an iframe to handle location events if the browser doesn't
// support the `hashchange` event, HTML5 history, or the user wants
// `hashChange` but not `pushState`.
if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement('iframe');this.iframe.src='javascript:0';this.iframe.style.display='none';this.iframe.tabIndex=-1;var body=document.body;// Using `appendChild` will throw on IE < 9 if the document is not ready.
var iWindow=body.insertBefore(this.iframe,body.firstChild).contentWindow;iWindow.document.open();iWindow.document.close();iWindow.location.hash='#'+this.fragment;}// Add a cross-platform `addEventListener` shim for older browsers.
var addEventListener=window.addEventListener||function(eventName,listener){return attachEvent('on'+eventName,listener);};// Depending on whether we're using pushState or hashes, and whether
// 'onhashchange' is supported, determine how we check the URL state.
if(this._usePushState){addEventListener('popstate',this.checkUrl,false);}else if(this._useHashChange&&!this.iframe){addEventListener('hashchange',this.checkUrl,false);}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval);}if(!this.options.silent)return this.loadUrl();},// Disable Backbone.history, perhaps temporarily. Not useful in a real app,
// but possibly useful for unit testing Routers.
stop:function(){// Add a cross-platform `removeEventListener` shim for older browsers.
var removeEventListener=window.removeEventListener||function(eventName,listener){return detachEvent('on'+eventName,listener);};// Remove window listeners.
if(this._usePushState){removeEventListener('popstate',this.checkUrl,false);}else if(this._useHashChange&&!this.iframe){removeEventListener('hashchange',this.checkUrl,false);}// Clean up the iframe if necessary.
if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null;}// Some environments will throw when clearing an undefined interval.
if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);History.started=false;},// Add a route to be tested when the fragment changes. Routes added later
// may override previous routes.
route:function(route,callback){this.handlers.unshift({route:route,callback:callback});},// Checks the current URL to see if it has changed, and if it has,
// calls `loadUrl`, normalizing across the hidden iframe.
checkUrl:function(e){var current=this.getFragment();// If the user pressed the back button, the iframe's hash will have
// changed and we should use that for comparison.
if(current===this.fragment&&this.iframe){current=this.getHash(this.iframe.contentWindow);}if(current===this.fragment)return false;if(this.iframe)this.navigate(current);this.loadUrl();},// Attempt to load the current URL fragment. If a route succeeds with a
// match, returns `true`. If no defined routes matches the fragment,
// returns `false`.
loadUrl:function(fragment){// If the root doesn't match, no routes can match either.
if(!this.matchRoot())return false;fragment=this.fragment=this.getFragment(fragment);return _.some(this.handlers,function(handler){if(handler.route.test(fragment)){handler.callback(fragment);return true;}});},// Save a fragment into the hash history, or replace the URL state if the
// 'replace' option is passed. You are responsible for properly URL-encoding
// the fragment in advance.
//
// The options object can contain `trigger: true` if you wish to have the
// route callback be fired (not usually desirable), or `replace: true`, if
// you wish to modify the current URL without adding an entry to the history.
navigate:function(fragment,options){if(!History.started)return false;if(!options||options===true)options={trigger:!!options};// Normalize the fragment.
fragment=this.getFragment(fragment||'');// Don't include a trailing slash on the root.
var rootPath=this.root;if(fragment===''||fragment.charAt(0)==='?'){rootPath=rootPath.slice(0,-1)||'/';}var url=rootPath+fragment;// Strip the fragment of the query and hash for matching.
fragment=fragment.replace(pathStripper,'');// Decode for matching.
var decodedFragment=this.decodeFragment(fragment);if(this.fragment===decodedFragment)return;this.fragment=decodedFragment;// If pushState is available, we use it to set the fragment as a real URL.
if(this._usePushState){this.history[options.replace?'replaceState':'pushState']({},document.title,url);// If hash changes haven't been explicitly disabled, update the hash
// fragment to store history.
}else if(this._wantsHashChange){this._updateHash(this.location,fragment,options.replace);if(this.iframe&&fragment!==this.getHash(this.iframe.contentWindow)){var iWindow=this.iframe.contentWindow;// Opening and closing the iframe tricks IE7 and earlier to push a
// history entry on hash-tag change.  When replace is true, we don't
// want this.
if(!options.replace){iWindow.document.open();iWindow.document.close();}this._updateHash(iWindow.location,fragment,options.replace);}// If you've told us that you explicitly don't want fallback hashchange-
// based history, then `navigate` becomes a page refresh.
}else{return this.location.assign(url);}if(options.trigger)return this.loadUrl(fragment);},// Update the hash location, either replacing the current entry, or adding
// a new one to the browser history.
_updateHash:function(location,fragment,replace){if(replace){var href=location.href.replace(/(javascript:|#).*$/,'');location.replace(href+'#'+fragment);}else{// Some browsers require that `hash` contains a leading #.
location.hash='#'+fragment;}}});// Create the default Backbone.history.
Backbone.history=new History();// Helpers
// -------
// Helper function to correctly set up the prototype chain for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var extend=function(protoProps,staticProps){var parent=this;var child;// The constructor function for the new subclass is either defined by you
// (the "constructor" property in your `extend` definition), or defaulted
// by us to simply call the parent constructor.
if(protoProps&&_.has(protoProps,'constructor')){child=protoProps.constructor;}else{child=function(){return parent.apply(this,arguments);};}// Add static properties to the constructor function, if supplied.
_.extend(child,parent,staticProps);// Set the prototype chain to inherit from `parent`, without calling
// `parent`'s constructor function and add the prototype properties.
child.prototype=_.create(parent.prototype,protoProps);child.prototype.constructor=child;// Set a convenience property in case the parent's prototype is needed
// later.
child.__super__=parent.prototype;return child;};// Set up inheritance for the model, collection, router, view and history.
Model.extend=Collection.extend=Router.extend=View.extend=History.extend=extend;// Throw an error when a URL is needed, and none is supplied.
var urlError=function(){throw new Error('A "url" property or function must be specified');};// Wrap an optional error callback with a fallback error event.
var wrapError=function(model,options){var error=options.error;options.error=function(resp){if(error)error.call(options.context,model,resp,options);model.trigger('error',model,resp,options);};};return Backbone;});/***/}),/***/"./src/scripts/templates/template-oneDrawerDefault.html":(/*!**************************************************************!*\
      !*** ./src/scripts/templates/template-oneDrawerDefault.html ***!
      \**************************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});// Module
var code="<div id=\"<%= content.id %>\" class=\"drawer drawer-modal\" role=\"dialog\">\r\n    <button class=\"drawer-close as-overlay\" type=\"button\"><span class=\"visually-hidden\">{{ 'general.accessibility.close_modal' | t }}</span></button>\r\n    <div class=\"drawer-content\">\r\n        <button class=\"drawer-close\" type=\"button\"><span class=\"visually-hidden\">{{ 'general.accessibility.close_modal' | t }}</span></button>\r\n        <%= content.body %>\r\n    </div>\r\n</div>";// Exports
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=code;/***/}),/***/"./src/scripts/templates/template-onePredictiveSearchResults.html":(/*!************************************************************************!*\
      !*** ./src/scripts/templates/template-onePredictiveSearchResults.html ***!
      \************************************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});// Module
var code="<% var response = content.response %>\r\n<% var productSuggestions = content.productSuggestions %>\r\n<% var collectionSuggestions = content.collectionSuggestions %>\r\n<% var pageSuggestions = content.pageSuggestions %>\r\n<% var articleSuggestions = content.articleSuggestions %>\r\n<% var querySuggestions = content.querySuggestions %>\r\n<% var searchPageResults = content.searchPageResults %>\r\n\r\n<div id=\"predictive-search-results\" role=\"listbox\">\r\n\t<div id=\"predictive-search-results-groups-wrapper\" class=\"predictive-search__results-groups-wrapper\">\r\n\r\n\t\t<% if (productSuggestions && productSuggestions.length >= 1) { %>\r\n\t\t<div class=\"predictive-search-products\">\r\n\t\t\t<h3 id=\"predictive-search-products\" class=\"predictive-search__heading\">Related Products</h3>\r\n\t\t\t<ul id=\"predictive-search-results-products-list\" class=\"predictive-search__results-list\" role=\"group\" aria-labelledby=\"predictive-search-products\">\r\n\t\t\t\t<% $(productSuggestions).each(function() { %>\r\n\t\t\t\t    <li id=\"predictive-search-option-product\" class=\"predictive-search__list-item\" role=\"option\" aria-selected=\"false\">\r\n\t\t\t\t    \t<a href=\"<%= this.url %>\" class=\"predictive-search__item link link--text\" tabindex=\"-1\">\r\n\t\t\t\t    \t\t<div class=\"predictive-search__item-content\">\r\n\t\t\t\t    \t\t\t<img class=\"predictive-search__image\" src=\"<%=this.featured_image.url %>\" alt=\"<%=this.featured_image.alt %>\" width=\"50\" height=\"50\"/>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<div class=\"predictive-search__item-content\">\r\n\t\t\t\t    \t\t\t<p class=\"predictive-search__item-heading predictive-search__item-product-result\"><%= this.title %></p>\r\n\t\t\t\t    \t\t\t<p class=\"predictive-search__item-product-result price\"><%= this.price %></p>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t<% }) %>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<% } %>\r\n\r\n\t\t<% if (collectionSuggestions && collectionSuggestions.length >= 1) { %>\r\n\t\t<div class=\"predictive-search-collections\">\r\n\t\t\t<h3 id=\"predictive-search-collections\" class=\"predictive-search__heading\">Collections</h3>\r\n\t\t\t<ul id=\"predictive-search-results-collections-list\" class=\"predictive-search__results-list\" role=\"group\" aria-labelledby=\"predictive-search-collections\">\r\n\t\t\t\t<% $(collectionSuggestions).each(function() { %>\r\n\t\t\t\t\t<li id=\"predictive-search-option-collection\" class=\"predictive-search__list-item\" role=\"option\" aria-selected=\"false\">\r\n\t\t\t\t\t\t<a href=\"<%= this.url %>\" class=\"predictive-search__item link link--text\" tabindex=\"-1\">\r\n\t\t\t\t\t\t\t<div class=\"predictive-search__item-content\">\r\n\t\t\t\t\t\t\t\t<p class=\"predictive-search__item-heading predictive-search__item-collection-result\"><%= this.title %></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t<% }) %>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<% } %>\r\n\r\n\t\t<% if (pageSuggestions && pageSuggestions.length >= 1) { %>\r\n\t\t<div class=\"predictive-search-pages\">\r\n\t\t\t<h3 id=\"predictive-search-pages\" class=\"predictive-search__heading\">Pages</h3>\r\n\t\t\t<ul id=\"predictive-search-results-pages-list\" class=\"predictive-search__results-list\" role=\"group\" aria-labelledby=\"predictive-search-pages\">\r\n\t\t\t\t<% $(pageSuggestions).each(function() { %>\r\n\t\t\t\t\t<li id=\"predictive-search-option-page\" class=\"predictive-search__list-item\" role=\"option\" aria-selected=\"false\">\r\n\t\t\t\t\t\t<a href=\"<%= this.url %>\" class=\"predictive-search__item link link--text\" tabindex=\"-1\">\r\n\t\t\t\t\t\t\t<div class=\"predictive-search__item-content\">\r\n\t\t\t\t\t\t\t\t<p class=\"predictive-search__item-heading predictive-search__item-page-result\"><%= this.title %></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t<% }) %>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<% } %>\r\n\r\n\t\t<% if (articleSuggestions && articleSuggestions.length >= 1) { %>\r\n\t\t<div class=\"predictive-search-articles\">\r\n\t\t\t<h3 id=\"predictive-search-articles\" class=\"predictive-search__heading\">Articles</h3>\r\n\t\t\t<ul id=\"predictive-search-results-articles-list\" class=\"predictive-search__results-list\" role=\"group\" aria-labelledby=\"predictive-search-articles\">\r\n\t\t\t\t<% $(articleSuggestions).each(function() { %>\r\n\t\t\t\t\t<li id=\"predictive-search-option-article\" class=\"predictive-search__list-item\" role=\"option\" aria-selected=\"false\">\r\n\t\t\t\t\t\t<a href=\"<%= this.url %>\" class=\"predictive-search__item link link--text\" tabindex=\"-1\">\r\n\t\t\t\t\t\t\t<div class=\"predictive-search__item-content\">\r\n\t\t\t\t\t\t\t\t<p class=\"predictive-search__item-heading predictive-search__item-article-result\"><%= this.title %></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t<% }) %>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<% } %>\r\n\r\n\t\t<% if (querySuggestions && querySuggestions.length >= 1) { %>\r\n\t\t<div class=\"predictive-search-queries\">\r\n\t\t\t<h3 id=\"predictive-search-queries\" class=\"predictive-search__heading\">Queries</h3>\r\n\t\t\t<ul id=\"predictive-search-results-queries-list\" class=\"predictive-search__results-list\" role=\"group\" aria-labelledby=\"predictive-search-queries\">\r\n\t\t\t\t<% $(querySuggestions).each(function() { %>\r\n\t\t\t\t\t<li id=\"predictive-search-option-query\" class=\"predictive-search__list-item\" role=\"option\" aria-selected=\"false\">\r\n\t\t\t\t\t\t<a href=\"<%= this.url %>\" class=\"predictive-search__item link link--text\" tabindex=\"-1\">\r\n\t\t\t\t\t\t\t<div class=\"predictive-search__item-content\">\r\n\t\t\t\t\t\t\t\t<p class=\"predictive-search__item-heading predictive-search__item-query-result\"><%= this.text %></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t<% }) %>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<% } %>\r\n\r\n\t</div>\r\n</div>\r\n\t\t   \r\n";// Exports
/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=code;/***/}),/***/"./node_modules/intersection-observer/intersection-observer.js":(/*!*********************************************************************!*\
      !*** ./node_modules/intersection-observer/intersection-observer.js ***!
      \*********************************************************************/ /***/()=>{/**
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
     *
     *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
     *
     */(function(){'use strict';// Exit early if we're not running in a browser.
if(typeof window!=='object'){return;}// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if('IntersectionObserver'in window&&'IntersectionObserverEntry'in window&&'intersectionRatio'in window.IntersectionObserverEntry.prototype){// Minimal polyfill for Edge 15's lack of `isIntersecting`
// See: https://github.com/w3c/IntersectionObserver/issues/211
if(!('isIntersecting'in window.IntersectionObserverEntry.prototype)){Object.defineProperty(window.IntersectionObserverEntry.prototype,'isIntersecting',{get:function(){return this.intersectionRatio>0;}});}return;}/**
     * Returns the embedding frame element, if any.
     * @param {!Document} doc
     * @return {!Element}
     */function getFrameElement(doc){try{return doc.defaultView&&doc.defaultView.frameElement||null;}catch(e){// Ignore the error.
return null;}}/**
     * A local reference to the root document.
     */var document=function(startDoc){var doc=startDoc;var frame=getFrameElement(doc);while(frame){doc=frame.ownerDocument;frame=getFrameElement(doc);}return doc;}(window.document);/**
     * An IntersectionObserver registry. This registry exists to hold a strong
     * reference to IntersectionObserver instances currently observing a target
     * element. Without this registry, instances without another reference may be
     * garbage collected.
     */var registry=[];/**
     * The signal updater for cross-origin intersection. When not null, it means
     * that the polyfill is configured to work in a cross-origin mode.
     * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
     */var crossOriginUpdater=null;/**
     * The current cross-origin intersection. Only used in the cross-origin mode.
     * @type {DOMRect|ClientRect}
     */var crossOriginRect=null;/**
     * Creates the global IntersectionObserverEntry constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
     * @param {Object} entry A dictionary of instance properties.
     * @constructor
     */function IntersectionObserverEntry(entry){this.time=entry.time;this.target=entry.target;this.rootBounds=ensureDOMRect(entry.rootBounds);this.boundingClientRect=ensureDOMRect(entry.boundingClientRect);this.intersectionRect=ensureDOMRect(entry.intersectionRect||getEmptyRect());this.isIntersecting=!!entry.intersectionRect;// Calculates the intersection ratio.
var targetRect=this.boundingClientRect;var targetArea=targetRect.width*targetRect.height;var intersectionRect=this.intersectionRect;var intersectionArea=intersectionRect.width*intersectionRect.height;// Sets intersection ratio.
if(targetArea){// Round the intersection ratio to avoid floating point math issues:
// https://github.com/w3c/IntersectionObserver/issues/324
this.intersectionRatio=Number((intersectionArea/targetArea).toFixed(4));}else{// If area is zero and is intersecting, sets to 1, otherwise to 0
this.intersectionRatio=this.isIntersecting?1:0;}}/**
     * Creates the global IntersectionObserver constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
     * @param {Function} callback The function to be invoked after intersection
     *     changes have queued. The function is not invoked if the queue has
     *     been emptied by calling the `takeRecords` method.
     * @param {Object=} opt_options Optional configuration options.
     * @constructor
     */function IntersectionObserver(callback,opt_options){var options=opt_options||{};if(typeof callback!='function'){throw new Error('callback must be a function');}if(options.root&&options.root.nodeType!=1&&options.root.nodeType!=9){throw new Error('root must be a Document or Element');}// Binds and throttles `this._checkForIntersections`.
this._checkForIntersections=throttle(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);// Private properties.
this._callback=callback;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(options.rootMargin);// Public properties.
this.thresholds=this._initThresholds(options.threshold);this.root=options.root||null;this.rootMargin=this._rootMarginValues.map(function(margin){return margin.value+margin.unit;}).join(' ');/** @private @const {!Array<!Document>} */this._monitoringDocuments=[];/** @private @const {!Array<function()>} */this._monitoringUnsubscribes=[];}/**
     * The minimum interval within which the document will be checked for
     * intersection changes.
     */IntersectionObserver.prototype.THROTTLE_TIMEOUT=100;/**
     * The frequency in which the polyfill polls for intersection changes.
     * this can be updated on a per instance basis and must be set prior to
     * calling `observe` on the first target.
     */IntersectionObserver.prototype.POLL_INTERVAL=null;/**
     * Use a mutation observer on the root element
     * to detect intersection changes.
     */IntersectionObserver.prototype.USE_MUTATION_OBSERVER=true;/**
     * Sets up the polyfill in the cross-origin mode. The result is the
     * updater function that accepts two arguments: `boundingClientRect` and
     * `intersectionRect` - just as these fields would be available to the
     * parent via `IntersectionObserverEntry`. This function should be called
     * each time the iframe receives intersection information from the parent
     * window, e.g. via messaging.
     * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
     */IntersectionObserver._setupCrossOriginUpdater=function(){if(!crossOriginUpdater){/**
         * @param {DOMRect|ClientRect} boundingClientRect
         * @param {DOMRect|ClientRect} intersectionRect
         */crossOriginUpdater=function(boundingClientRect,intersectionRect){if(!boundingClientRect||!intersectionRect){crossOriginRect=getEmptyRect();}else{crossOriginRect=convertFromParentRect(boundingClientRect,intersectionRect);}registry.forEach(function(observer){observer._checkForIntersections();});};}return crossOriginUpdater;};/**
     * Resets the cross-origin mode.
     */IntersectionObserver._resetCrossOriginUpdater=function(){crossOriginUpdater=null;crossOriginRect=null;};/**
     * Starts observing a target element for intersection changes based on
     * the thresholds values.
     * @param {Element} target The DOM element to observe.
     */IntersectionObserver.prototype.observe=function(target){var isTargetAlreadyObserved=this._observationTargets.some(function(item){return item.element==target;});if(isTargetAlreadyObserved){return;}if(!(target&&target.nodeType==1)){throw new Error('target must be an Element');}this._registerInstance();this._observationTargets.push({element:target,entry:null});this._monitorIntersections(target.ownerDocument);this._checkForIntersections();};/**
     * Stops observing a target element for intersection changes.
     * @param {Element} target The DOM element to observe.
     */IntersectionObserver.prototype.unobserve=function(target){this._observationTargets=this._observationTargets.filter(function(item){return item.element!=target;});this._unmonitorIntersections(target.ownerDocument);if(this._observationTargets.length==0){this._unregisterInstance();}};/**
     * Stops observing all target elements for intersection changes.
     */IntersectionObserver.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorAllIntersections();this._unregisterInstance();};/**
     * Returns any queue entries that have not yet been reported to the
     * callback and clears the queue. This can be used in conjunction with the
     * callback to obtain the absolute most up-to-date intersection information.
     * @return {Array} The currently queued entries.
     */IntersectionObserver.prototype.takeRecords=function(){var records=this._queuedEntries.slice();this._queuedEntries=[];return records;};/**
     * Accepts the threshold value from the user configuration object and
     * returns a sorted array of unique threshold values. If a value is not
     * between 0 and 1 and error is thrown.
     * @private
     * @param {Array|number=} opt_threshold An optional threshold value or
     *     a list of threshold values, defaulting to [0].
     * @return {Array} A sorted list of unique and valid threshold values.
     */IntersectionObserver.prototype._initThresholds=function(opt_threshold){var threshold=opt_threshold||[0];if(!Array.isArray(threshold))threshold=[threshold];return threshold.sort().filter(function(t,i,a){if(typeof t!='number'||isNaN(t)||t<0||t>1){throw new Error('threshold must be a number between 0 and 1 inclusively');}return t!==a[i-1];});};/**
     * Accepts the rootMargin value from the user configuration object
     * and returns an array of the four margin values as an object containing
     * the value and unit properties. If any of the values are not properly
     * formatted or use a unit other than px or %, and error is thrown.
     * @private
     * @param {string=} opt_rootMargin An optional rootMargin value,
     *     defaulting to '0px'.
     * @return {Array<Object>} An array of margin objects with the keys
     *     value and unit.
     */IntersectionObserver.prototype._parseRootMargin=function(opt_rootMargin){var marginString=opt_rootMargin||'0px';var margins=marginString.split(/\s+/).map(function(margin){var parts=/^(-?\d*\.?\d+)(px|%)$/.exec(margin);if(!parts){throw new Error('rootMargin must be specified in pixels or percent');}return{value:parseFloat(parts[1]),unit:parts[2]};});// Handles shorthand.
margins[1]=margins[1]||margins[0];margins[2]=margins[2]||margins[0];margins[3]=margins[3]||margins[1];return margins;};/**
     * Starts polling for intersection changes if the polling is not already
     * happening, and if the page's visibility state is visible.
     * @param {!Document} doc
     * @private
     */IntersectionObserver.prototype._monitorIntersections=function(doc){var win=doc.defaultView;if(!win){// Already destroyed.
return;}if(this._monitoringDocuments.indexOf(doc)!=-1){// Already monitoring.
return;}// Private state for monitoring.
var callback=this._checkForIntersections;var monitoringInterval=null;var domObserver=null;// If a poll interval is set, use polling instead of listening to
// resize and scroll events or DOM mutations.
if(this.POLL_INTERVAL){monitoringInterval=win.setInterval(callback,this.POLL_INTERVAL);}else{addEvent(win,'resize',callback,true);addEvent(doc,'scroll',callback,true);if(this.USE_MUTATION_OBSERVER&&'MutationObserver'in win){domObserver=new win.MutationObserver(callback);domObserver.observe(doc,{attributes:true,childList:true,characterData:true,subtree:true});}}this._monitoringDocuments.push(doc);this._monitoringUnsubscribes.push(function(){// Get the window object again. When a friendly iframe is destroyed, it
// will be null.
var win=doc.defaultView;if(win){if(monitoringInterval){win.clearInterval(monitoringInterval);}removeEvent(win,'resize',callback,true);}removeEvent(doc,'scroll',callback,true);if(domObserver){domObserver.disconnect();}});// Also monitor the parent.
var rootDoc=this.root&&(this.root.ownerDocument||this.root)||document;if(doc!=rootDoc){var frame=getFrameElement(doc);if(frame){this._monitorIntersections(frame.ownerDocument);}}};/**
     * Stops polling for intersection changes.
     * @param {!Document} doc
     * @private
     */IntersectionObserver.prototype._unmonitorIntersections=function(doc){var index=this._monitoringDocuments.indexOf(doc);if(index==-1){return;}var rootDoc=this.root&&(this.root.ownerDocument||this.root)||document;// Check if any dependent targets are still remaining.
var hasDependentTargets=this._observationTargets.some(function(item){var itemDoc=item.element.ownerDocument;// Target is in this context.
if(itemDoc==doc){return true;}// Target is nested in this context.
while(itemDoc&&itemDoc!=rootDoc){var frame=getFrameElement(itemDoc);itemDoc=frame&&frame.ownerDocument;if(itemDoc==doc){return true;}}return false;});if(hasDependentTargets){return;}// Unsubscribe.
var unsubscribe=this._monitoringUnsubscribes[index];this._monitoringDocuments.splice(index,1);this._monitoringUnsubscribes.splice(index,1);unsubscribe();// Also unmonitor the parent.
if(doc!=rootDoc){var frame=getFrameElement(doc);if(frame){this._unmonitorIntersections(frame.ownerDocument);}}};/**
     * Stops polling for intersection changes.
     * @param {!Document} doc
     * @private
     */IntersectionObserver.prototype._unmonitorAllIntersections=function(){var unsubscribes=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0;this._monitoringUnsubscribes.length=0;for(var i=0;i<unsubscribes.length;i++){unsubscribes[i]();}};/**
     * Scans each observation target for intersection changes and adds them
     * to the internal entries queue. If new entries are found, it
     * schedules the callback to be invoked.
     * @private
     */IntersectionObserver.prototype._checkForIntersections=function(){if(!this.root&&crossOriginUpdater&&!crossOriginRect){// Cross origin monitoring, but no initial data available yet.
return;}var rootIsInDom=this._rootIsInDom();var rootRect=rootIsInDom?this._getRootRect():getEmptyRect();this._observationTargets.forEach(function(item){var target=item.element;var targetRect=getBoundingClientRect(target);var rootContainsTarget=this._rootContainsTarget(target);var oldEntry=item.entry;var intersectionRect=rootIsInDom&&rootContainsTarget&&this._computeTargetAndRootIntersection(target,targetRect,rootRect);var rootBounds=null;if(!this._rootContainsTarget(target)){rootBounds=getEmptyRect();}else if(!crossOriginUpdater||this.root){rootBounds=rootRect;}var newEntry=item.entry=new IntersectionObserverEntry({time:now(),target:target,boundingClientRect:targetRect,rootBounds:rootBounds,intersectionRect:intersectionRect});if(!oldEntry){this._queuedEntries.push(newEntry);}else if(rootIsInDom&&rootContainsTarget){// If the new entry intersection ratio has crossed any of the
// thresholds, add a new entry.
if(this._hasCrossedThreshold(oldEntry,newEntry)){this._queuedEntries.push(newEntry);}}else{// If the root is not in the DOM or target is not contained within
// root but the previous entry for this target had an intersection,
// add a new record indicating removal.
if(oldEntry&&oldEntry.isIntersecting){this._queuedEntries.push(newEntry);}}},this);if(this._queuedEntries.length){this._callback(this.takeRecords(),this);}};/**
     * Accepts a target and root rect computes the intersection between then
     * following the algorithm in the spec.
     * TODO(philipwalton): at this time clip-path is not considered.
     * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
     * @param {Element} target The target DOM element
     * @param {Object} targetRect The bounding rect of the target.
     * @param {Object} rootRect The bounding rect of the root after being
     *     expanded by the rootMargin value.
     * @return {?Object} The final intersection rect object or undefined if no
     *     intersection is found.
     * @private
     */IntersectionObserver.prototype._computeTargetAndRootIntersection=function(target,targetRect,rootRect){// If the element isn't displayed, an intersection can't happen.
if(window.getComputedStyle(target).display=='none')return;var intersectionRect=targetRect;var parent=getParentNode(target);var atRoot=false;while(!atRoot&&parent){var parentRect=null;var parentComputedStyle=parent.nodeType==1?window.getComputedStyle(parent):{};// If the parent isn't displayed, an intersection can't happen.
if(parentComputedStyle.display=='none')return null;if(parent==this.root||parent.nodeType==/* DOCUMENT */9){atRoot=true;if(parent==this.root||parent==document){if(crossOriginUpdater&&!this.root){if(!crossOriginRect||crossOriginRect.width==0&&crossOriginRect.height==0){// A 0-size cross-origin intersection means no-intersection.
parent=null;parentRect=null;intersectionRect=null;}else{parentRect=crossOriginRect;}}else{parentRect=rootRect;}}else{// Check if there's a frame that can be navigated to.
var frame=getParentNode(parent);var frameRect=frame&&getBoundingClientRect(frame);var frameIntersect=frame&&this._computeTargetAndRootIntersection(frame,frameRect,rootRect);if(frameRect&&frameIntersect){parent=frame;parentRect=convertFromParentRect(frameRect,frameIntersect);}else{parent=null;intersectionRect=null;}}}else{// If the element has a non-visible overflow, and it's not the <body>
// or <html> element, update the intersection rect.
// Note: <body> and <html> cannot be clipped to a rect that's not also
// the document rect, so no need to compute a new intersection.
var doc=parent.ownerDocument;if(parent!=doc.body&&parent!=doc.documentElement&&parentComputedStyle.overflow!='visible'){parentRect=getBoundingClientRect(parent);}}// If either of the above conditionals set a new parentRect,
// calculate new intersection data.
if(parentRect){intersectionRect=computeRectIntersection(parentRect,intersectionRect);}if(!intersectionRect)break;parent=parent&&getParentNode(parent);}return intersectionRect;};/**
     * Returns the root rect after being expanded by the rootMargin value.
     * @return {ClientRect} The expanded root rect.
     * @private
     */IntersectionObserver.prototype._getRootRect=function(){var rootRect;if(this.root&&!isDoc(this.root)){rootRect=getBoundingClientRect(this.root);}else{// Use <html>/<body> instead of window since scroll bars affect size.
var doc=isDoc(this.root)?this.root:document;var html=doc.documentElement;var body=doc.body;rootRect={top:0,left:0,right:html.clientWidth||body.clientWidth,width:html.clientWidth||body.clientWidth,bottom:html.clientHeight||body.clientHeight,height:html.clientHeight||body.clientHeight};}return this._expandRectByRootMargin(rootRect);};/**
     * Accepts a rect and expands it by the rootMargin value.
     * @param {DOMRect|ClientRect} rect The rect object to expand.
     * @return {ClientRect} The expanded rect.
     * @private
     */IntersectionObserver.prototype._expandRectByRootMargin=function(rect){var margins=this._rootMarginValues.map(function(margin,i){return margin.unit=='px'?margin.value:margin.value*(i%2?rect.width:rect.height)/100;});var newRect={top:rect.top-margins[0],right:rect.right+margins[1],bottom:rect.bottom+margins[2],left:rect.left-margins[3]};newRect.width=newRect.right-newRect.left;newRect.height=newRect.bottom-newRect.top;return newRect;};/**
     * Accepts an old and new entry and returns true if at least one of the
     * threshold values has been crossed.
     * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
     *    particular target element or null if no previous entry exists.
     * @param {IntersectionObserverEntry} newEntry The current entry for a
     *    particular target element.
     * @return {boolean} Returns true if a any threshold has been crossed.
     * @private
     */IntersectionObserver.prototype._hasCrossedThreshold=function(oldEntry,newEntry){// To make comparing easier, an entry that has a ratio of 0
// but does not actually intersect is given a value of -1
var oldRatio=oldEntry&&oldEntry.isIntersecting?oldEntry.intersectionRatio||0:-1;var newRatio=newEntry.isIntersecting?newEntry.intersectionRatio||0:-1;// Ignore unchanged ratios
if(oldRatio===newRatio)return;for(var i=0;i<this.thresholds.length;i++){var threshold=this.thresholds[i];// Return true if an entry matches a threshold or if the new ratio
// and the old ratio are on the opposite sides of a threshold.
if(threshold==oldRatio||threshold==newRatio||threshold<oldRatio!==threshold<newRatio){return true;}}};/**
     * Returns whether or not the root element is an element and is in the DOM.
     * @return {boolean} True if the root element is an element and is in the DOM.
     * @private
     */IntersectionObserver.prototype._rootIsInDom=function(){return!this.root||containsDeep(document,this.root);};/**
     * Returns whether or not the target element is a child of root.
     * @param {Element} target The target element to check.
     * @return {boolean} True if the target element is a child of root.
     * @private
     */IntersectionObserver.prototype._rootContainsTarget=function(target){var rootDoc=this.root&&(this.root.ownerDocument||this.root)||document;return containsDeep(rootDoc,target)&&(!this.root||rootDoc==target.ownerDocument);};/**
     * Adds the instance to the global IntersectionObserver registry if it isn't
     * already present.
     * @private
     */IntersectionObserver.prototype._registerInstance=function(){if(registry.indexOf(this)<0){registry.push(this);}};/**
     * Removes the instance from the global IntersectionObserver registry.
     * @private
     */IntersectionObserver.prototype._unregisterInstance=function(){var index=registry.indexOf(this);if(index!=-1)registry.splice(index,1);};/**
     * Returns the result of the performance.now() method or null in browsers
     * that don't support the API.
     * @return {number} The elapsed time since the page was requested.
     */function now(){return window.performance&&performance.now&&performance.now();}/**
     * Throttles a function and delays its execution, so it's only called at most
     * once within a given time period.
     * @param {Function} fn The function to throttle.
     * @param {number} timeout The amount of time that must pass before the
     *     function can be called again.
     * @return {Function} The throttled function.
     */function throttle(fn,timeout){var timer=null;return function(){if(!timer){timer=setTimeout(function(){fn();timer=null;},timeout);}};}/**
     * Adds an event handler to a DOM node ensuring cross-browser compatibility.
     * @param {Node} node The DOM node to add the event handler to.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to add.
     * @param {boolean} opt_useCapture Optionally adds the even to the capture
     *     phase. Note: this only works in modern browsers.
     */function addEvent(node,event,fn,opt_useCapture){if(typeof node.addEventListener=='function'){node.addEventListener(event,fn,opt_useCapture||false);}else if(typeof node.attachEvent=='function'){node.attachEvent('on'+event,fn);}}/**
     * Removes a previously added event handler from a DOM node.
     * @param {Node} node The DOM node to remove the event handler from.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to remove.
     * @param {boolean} opt_useCapture If the event handler was added with this
     *     flag set to true, it should be set to true here in order to remove it.
     */function removeEvent(node,event,fn,opt_useCapture){if(typeof node.removeEventListener=='function'){node.removeEventListener(event,fn,opt_useCapture||false);}else if(typeof node.detatchEvent=='function'){node.detatchEvent('on'+event,fn);}}/**
     * Returns the intersection between two rect objects.
     * @param {Object} rect1 The first rect.
     * @param {Object} rect2 The second rect.
     * @return {?Object|?ClientRect} The intersection rect or undefined if no
     *     intersection is found.
     */function computeRectIntersection(rect1,rect2){var top=Math.max(rect1.top,rect2.top);var bottom=Math.min(rect1.bottom,rect2.bottom);var left=Math.max(rect1.left,rect2.left);var right=Math.min(rect1.right,rect2.right);var width=right-left;var height=bottom-top;return width>=0&&height>=0&&{top:top,bottom:bottom,left:left,right:right,width:width,height:height}||null;}/**
     * Shims the native getBoundingClientRect for compatibility with older IE.
     * @param {Element} el The element whose bounding rect to get.
     * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
     */function getBoundingClientRect(el){var rect;try{rect=el.getBoundingClientRect();}catch(err){// Ignore Windows 7 IE11 "Unspecified error"
// https://github.com/w3c/IntersectionObserver/pull/205
}if(!rect)return getEmptyRect();// Older IE
if(!(rect.width&&rect.height)){rect={top:rect.top,right:rect.right,bottom:rect.bottom,left:rect.left,width:rect.right-rect.left,height:rect.bottom-rect.top};}return rect;}/**
     * Returns an empty rect object. An empty rect is returned when an element
     * is not in the DOM.
     * @return {ClientRect} The empty rect.
     */function getEmptyRect(){return{top:0,bottom:0,left:0,right:0,width:0,height:0};}/**
     * Ensure that the result has all of the necessary fields of the DOMRect.
     * Specifically this ensures that `x` and `y` fields are set.
     *
     * @param {?DOMRect|?ClientRect} rect
     * @return {?DOMRect}
     */function ensureDOMRect(rect){// A `DOMRect` object has `x` and `y` fields.
if(!rect||'x'in rect){return rect;}// A IE's `ClientRect` type does not have `x` and `y`. The same is the case
// for internally calculated Rect objects. For the purposes of
// `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
// for these fields.
return{top:rect.top,y:rect.top,bottom:rect.bottom,left:rect.left,x:rect.left,right:rect.right,width:rect.width,height:rect.height};}/**
     * Inverts the intersection and bounding rect from the parent (frame) BCR to
     * the local BCR space.
     * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
     * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
     * @return {ClientRect} The local root bounding rect for the parent's children.
     */function convertFromParentRect(parentBoundingRect,parentIntersectionRect){var top=parentIntersectionRect.top-parentBoundingRect.top;var left=parentIntersectionRect.left-parentBoundingRect.left;return{top:top,left:left,height:parentIntersectionRect.height,width:parentIntersectionRect.width,bottom:top+parentIntersectionRect.height,right:left+parentIntersectionRect.width};}/**
     * Checks to see if a parent element contains a child element (including inside
     * shadow DOM).
     * @param {Node} parent The parent element.
     * @param {Node} child The child element.
     * @return {boolean} True if the parent node contains the child node.
     */function containsDeep(parent,child){var node=child;while(node){if(node==parent)return true;node=getParentNode(node);}return false;}/**
     * Gets the parent node of an element or its host element if the parent node
     * is a shadow root.
     * @param {Node} node The node whose parent to get.
     * @return {Node|null} The parent node or null if no parent exists.
     */function getParentNode(node){var parent=node.parentNode;if(node.nodeType==/* DOCUMENT */9&&node!=document){// If this node is a document node, look for the embedding frame.
return getFrameElement(node);}// If the parent has element that is assigned through shadow root slot
if(parent&&parent.assignedSlot){parent=parent.assignedSlot.parentNode;}if(parent&&parent.nodeType==11&&parent.host){// If the parent is a shadow root, return the host element.
return parent.host;}return parent;}/**
     * Returns true if `node` is a Document.
     * @param {!Node} node
     * @returns {boolean}
     */function isDoc(node){return node&&node.nodeType===9;}// Exposes the constructors globally.
window.IntersectionObserver=IntersectionObserver;window.IntersectionObserverEntry=IntersectionObserverEntry;})();/***/}),/***/"./node_modules/jquery-hoverintent/jquery.hoverIntent.js":(/*!***************************************************************!*\
      !*** ./node_modules/jquery-hoverintent/jquery.hoverIntent.js ***!
      \***************************************************************/ /***/(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
     * hoverIntent v1.10.0 // 2019.02.25 // jQuery v1.7.0+
     * http://briancherne.github.io/jquery-hoverIntent/
     *
     * You may use hoverIntent under the terms of the MIT license. Basically that
     * means you are free to use hoverIntent as long as this header is left intact.
     * Copyright 2007-2019 Brian Cherne
     */ /**
     * hoverIntent is similar to jQuery's built-in "hover" method except that
     * instead of firing the handlerIn function immediately, hoverIntent checks
     * to see if the user's mouse has slowed down (beneath the sensitivity
     * threshold) before firing the event. The handlerOut function is only
     * called after a matching handlerIn.
     *
     * // basic usage ... just like .hover()
     * .hoverIntent( handlerIn, handlerOut )
     * .hoverIntent( handlerInOut )
     *
     * // basic usage ... with event delegation!
     * .hoverIntent( handlerIn, handlerOut, selector )
     * .hoverIntent( handlerInOut, selector )
     *
     * // using a basic configuration object
     * .hoverIntent( config )
     *
     * @param  handlerIn   function OR configuration object
     * @param  handlerOut  function OR selector for delegation OR undefined
     * @param  selector    selector OR undefined
     * @author Brian Cherne <brian(at)cherne(dot)net>
     */;(function(factory){'use strict';if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js")],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(function($){'use strict';// default configuration values
var _cfg={interval:100,sensitivity:6,timeout:0};// counter used to generate an ID for each instance
var INSTANCE_COUNT=0;// current X and Y position of mouse, updated during mousemove tracking (shared across instances)
var cX,cY;// saves the current pointer position coordinates based on the given mousemove event
var track=function(ev){cX=ev.pageX;cY=ev.pageY;};// compares current and previous mouse positions
var compare=function(ev,$el,s,cfg){// compare mouse positions to see if pointer has slowed enough to trigger `over` function
if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity){$el.off(s.event,track);delete s.timeoutId;// set hoverIntent state as active for this element (permits `out` handler to trigger)
s.isActive=true;// overwrite old mouseenter event coordinates with most recent pointer position
ev.pageX=cX;ev.pageY=cY;// clear coordinate data from state object
delete s.pX;delete s.pY;return cfg.over.apply($el[0],[ev]);}else{// set previous coordinates for next comparison
s.pX=cX;s.pY=cY;// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg);},cfg.interval);}};// triggers given `out` function at configured `timeout` after a mouseleave and clears state
var delay=function(ev,$el,s,out){delete $el.data('hoverIntent')[s.id];return out.apply($el[0],[ev]);};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){// instance ID, used as a key to store and retrieve state information on an element
var instanceId=INSTANCE_COUNT++;// extend the default configuration and parse parameters
var cfg=$.extend({},_cfg);if($.isPlainObject(handlerIn)){cfg=$.extend(cfg,handlerIn);if(!$.isFunction(cfg.out)){cfg.out=cfg.over;}}else if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector});}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});}// A private function for handling mouse 'hovering'
var handleHover=function(e){// cloned event to pass to handlers (copy required for event object to be passed in IE)
var ev=$.extend({},e);// the current target of the mouse event, wrapped in a jQuery object
var $el=$(this);// read hoverIntent data from element (or initialize if not present)
var hoverIntentData=$el.data('hoverIntent');if(!hoverIntentData){$el.data('hoverIntent',hoverIntentData={});}// read per-instance state from element (or initialize if not present)
var state=hoverIntentData[instanceId];if(!state){hoverIntentData[instanceId]=state={id:instanceId};}// state properties:
// id = instance ID, used to clean up data
// timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
// isActive = plugin state, true after `over` is called just until `out` is called
// pX, pY = previously-measured pointer coordinates, updated at each polling interval
// event = string representing the namespaced event used for mouse tracking
// clear any existing timeout
if(state.timeoutId){state.timeoutId=clearTimeout(state.timeoutId);}// namespaced event used to register and unregister mousemove tracking
var mousemove=state.event='mousemove.hoverIntent.hoverIntent'+instanceId;// handle the event, based on its type
if(e.type==='mouseenter'){// do nothing if already active
if(state.isActive){return;}// set "previous" X and Y position based on initial entry point
state.pX=ev.pageX;state.pY=ev.pageY;// update "current" X and Y position based on mousemove
$el.off(mousemove,track).on(mousemove,track);// start polling interval (self-calling timeout) to compare mouse coordinates over time
state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg);},cfg.interval);}else{// "mouseleave"
// do nothing if not already active
if(!state.isActive){return;}// unbind expensive mousemove event
$el.off(mousemove,track);// if hoverIntent state is true, then call the mouseOut function after the specified delay
state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out);},cfg.timeout);}};// listen for mouseenter and mouseleave
return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover},cfg.selector);};});/***/}),/***/"./node_modules/jquery/dist/jquery.js":(/*!********************************************!*\
      !*** ./node_modules/jquery/dist/jquery.js ***!
      \********************************************/ /***/function(module,exports){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
     * jQuery JavaScript Library v3.6.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2021-03-02T17:08Z
     */(function(global,factory){"use strict";if(true&&typeof module.exports==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
})(typeof window!=="undefined"?window:this,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var arr=[];var getProto=Object.getPrototypeOf;var slice=arr.slice;var flat=arr.flat?function(array){return arr.flat.call(array);}:function(array){return arr.concat.apply([],array);};var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return typeof obj==="function"&&typeof obj.nodeType!=="number"&&typeof obj.item!=="function";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var document=window.document;var preservedScriptAttributes={type:true,src:true,nonce:true,noModule:true};function DOMEval(code,node,doc){doc=doc||document;var i,val,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
val=node[i]||node.getAttribute&&node.getAttribute(i);if(val){script.setAttribute(i,val);}}}doc.head.appendChild(script).parentNode.removeChild(script);}function toType(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}/* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var version="3.6.0",// Define a local copy of jQuery
jQuery=function(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context);};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
length:0,toArray:function(){return slice.call(this);},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(num){// Return all the elements in a clean array
if(num==null){return slice.call(this);}// Return just the one element from the set
return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(elems){// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
ret.prevObject=this;// Return the newly-formed element set
return ret;},// Execute a callback for every element in the matched set.
each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},even:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return(i+1)%2;}));},odd:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return i%2;}));},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
if(typeof target!=="object"&&!isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
if((options=arguments[i])!=null){// Extend the base object
for(name in options){copy=options[name];// Prevent Object.prototype pollution
// Prevent never-ending loop
if(name==="__proto__"||target===copy){continue;}// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){src=target[name];// Ensure proper type for the source value
if(copyIsArray&&!Array.isArray(src)){clone=[];}else if(!copyIsArray&&!jQuery.isPlainObject(src)){clone={};}else{clone=src;}copyIsArray=false;// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
return target;};jQuery.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isPlainObject:function(obj){var proto,Ctor;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function(obj){var name;for(name in obj){return false;}return true;},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(code,options,doc){DOMEval(code,{nonce:options&&options.nonce},doc);},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// results is for internal usage only
makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
// that pass the validator function
for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
map:function(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
return flat(ret);},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(_i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
     * Sizzle CSS Selector Engine v2.3.6
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2021-02-16
     */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),nonnativeSelectorCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,pushNative=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|"+"ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
identifier="(?:\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5]
// or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rdescend=new RegExp(whitespace+"|>"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rhtml=/HTML$/i,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\([^\\r\\n\\f])","g"),funescape=function(escape,nonHex){var high="0x"+escape.slice(1)-0x10000;return nonHex?// Strip the backslash prefix from a non-hex escape sequence
nonHex:// Replace a hexadecimal escape sequence with the encoded Unicode code point
// Support: IE <=11+
// For values outside the Basic Multilingual Plane (BMP), manually construct a
// surrogate pair
high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function(){setDocument();},inDisabledFieldset=addCombinator(function(elem){return elem.disabled===true&&elem.nodeName.toLowerCase()==="fieldset";},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
function(target,els){pushNative.apply(target,slice.call(els));}:// Support: IE<9
// Otherwise append directly
function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed){setDocument(context);context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
if(m=match[1]){// Document context
if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
}else{// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
if(support.qsa&&!nonnativeSelectorCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))&&(// Support: IE 8 only
// Exclude object elements
nodeType!==1||context.nodeName.toLowerCase()!=="object")){newSelector=selector;newContext=context;// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(nodeType===1&&(rdescend.test(selector)||rcombinators.test(selector))){// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;// We can use :scope instead of the ID hack if the browser
// supports it & if we're not changing the context.
if(newContext!==context||!support.scope){// Capture the context ID, setting it first if necessary
if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}}// Prefix every selector in the list
groups=tokenize(selector);i=groups.length;while(i--){groups[i]=(nid?"#"+nid:":scope")+" "+toSelector(groups[i]);}newSelector=groups.join(",");}try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){nonnativeSelectorCache(selector,true);}finally{if(nid===expando){context.removeAttribute("id");}}}}}// All others
return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */function markFunction(fn){fn[expando]=true;return fn;}/**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
el=null;}}/**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
if(diff){return diff;}// Check if b follows a
if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
// Use the isDisabled shortcut property to check for disabled fieldset ancestors
return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
/* jshint -W018 */elem.isDisabled!==!disabled&&inDisabledFieldset(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
// even exist on them, let alone have a boolean value.
}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
return false;};}/**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
support=Sizzle.support={};/**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */isXML=Sizzle.isXML=function(elem){var namespace=elem&&elem.namespaceURI,docElem=elem&&(elem.ownerDocument||elem).documentElement;// Support: IE <=8
// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
// https://bugs.jquery.com/ticket/4833
return!rhtml.test(namespace||docElem&&docElem.nodeName||"HTML");};/**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(doc==document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9 - 11+, Edge 12 - 18+
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(preferredDoc!=document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
// Safari 4 - 5 only, Opera <=11.6 - 12.x only
// IE/Edge & older browsers don't support the :scope pseudo-class.
// Support: Safari 6.0 only
// Safari 6.0 supports :scope but it's an alias of :root there.
support.scope=assert(function(el){docElem.appendChild(el).appendChild(document.createElement("div"));return typeof el.querySelectorAll!=="undefined"&&!el.querySelectorAll(":scope fieldset div").length;});/* Attributes
        ---------------------------------------------------------------------- */ // Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
        ---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
results=context.getElementsByTagName(tag);// Filter out possible comments
if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
        ---------------------------------------------------------------------- */ // QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
// Regex strategy adopted from Diego Perini
assert(function(el){var input;// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
// Boolean attributes and "value" are not treated correctly
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
input=document.createElement("input");input.setAttribute("name","");el.appendChild(input);if(!el.querySelectorAll("[name='']").length){rbuggyQSA.push("\\["+whitespace+"*name"+whitespace+"*="+whitespace+"*(?:''|\"\")");}// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}// Support: Firefox <=3.6 - 5 only
// Old Firefox doesn't throw on a badly-escaped identifier.
el.querySelectorAll("\\\f");rbuggyQSA.push("[\\r\\n\\f]");});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
// Enforce case-sensitivity of name attribute
if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: Opera 10 - 11 only
// Opera 10-11 does not throw on post-comma invalid pseudos
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
// Gecko does not error, returns false instead
matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
        ---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
        ---------------------------------------------------------------------- */ // Document order sorting
sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
compare=(a.ownerDocument||a)==(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(a==document||a.ownerDocument==preferredDoc&&contains(preferredDoc,a)){return-1;}// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(b==document||b.ownerDocument==preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
if(!aup||!bup){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
/* eslint-disable eqeqeq */return a==document?-1:b==document?1:/* eslint-enable eqeqeq */aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
/* eslint-disable eqeqeq */ap[i]==preferredDoc?-1:bp[i]==preferredDoc?1:/* eslint-enable eqeqeq */0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){setDocument(elem);if(support.matchesSelector&&documentIsHTML&&!nonnativeSelectorCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){nonnativeSelectorCache(expr,true);}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if((context.ownerDocument||context)!=document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if((elem.ownerDocument||elem)!=document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
sortInput=null;return results;};/**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
while(node=elem[i++]){// Do not traverse comment nodes
ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function(match){/* matches from matchExpr["CHILD"]
                    1 type (only|nth|...)
                    2 what (child|of-type)
                    3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                    4 xn-component of xn+y argument ([+-]?\d*n|)
                    5 sign of xn-component
                    6 x of xn-component
                    7 sign of y-component
                    8 y of y-component
                */match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";/* eslint-disable max-len */return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;/* eslint-enable max-len */};},"CHILD":function(type,what,_argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
function(elem){return!!elem.parentNode;}:function(elem,_context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(forward&&useCache){// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
if(useCache){// ...in a gzip-friendly way
node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(diff===false){// Use the same loop as above to seek `elem` from the start
while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function(pseudo,argument){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
if(fn[expando]){return fn(argument);}// But maintain support for old signatures
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
"not":markFunction(function(selector){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,_context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,_context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
"lang":markFunction(function(lang){// lang value must be a valid identifier
if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function(elem){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function(elem){// Accessing this property makes selected-by-default
// options in Safari work properly
if(elem.parentNode){// eslint-disable-next-line no-unused-expressions
elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
"empty":function(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(_matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(_matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument>length?length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
results:matcherIn;// Find primary matches
if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
if(matcher[expando]){// Find the next relative operator (if any) for proper handling
j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
outermostContext=context==document||context||outermost;}// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(!context&&elem.ownerDocument!=document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
if(bySet){// They will have gone through all possible matchers
if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i;// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched);}// Add matches to results
push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
cached.selector=selector;}return cached;};/**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(match.length===1){// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
// Sort stability
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,_name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();}var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Filtered directly for both simple and complex selectors
return jQuery.filter(qualifier,elements,not);}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector){return this;}// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery;// Handle HTML strings
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
if(isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
// Shortcut for document ready
}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn;// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
index:function(elem){// No argument, return index in parent
if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
return indexOf.call(this,// If it receives a jQuery object, the first element is used
elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,_i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,_i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,_i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){if(elem.contentDocument!=null&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
getProto(elem.contentDocument)){return elem.contentDocument;}// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
if(nodeName(elem,"template")){elem=elem.content||elem;}return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,// Last fire value for non-forgettable lists
memory,// Flag to know if list was already fired
fired,// Flag to prevent firing
locked,// Actual callback list
list=[],// Queue of execution data for repeatable lists
queue=[],// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,// Fire callbacks
fire=function(){// Enforce single-firing
locked=locked||options.once;// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
if(locked){// Keep an empty list if we have data for future add calls
if(memory){list=[];// Otherwise, this object is spent
}else{list="";}}},// Actual Callbacks object
self={// Add a callback or a collection of callbacks to the list
add:function(){if(list){// If we have memory from a past run, we should fire after adding
if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){// Inspect recursively
add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
empty:function(){if(list){list=[];}return this;},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function(){return!!locked;},// Call all callbacks with the given context and arguments
fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
fire:function(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
fired:function(){return!!fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject,noValue){var method;try{// Check for promise aspect first to privilege synchronous behavior
if(value&&isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
}else if(value&&isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
}else{// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
resolve.apply(undefined,[value].slice(noValue));}// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(value){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.apply(undefined,[value]);}}jQuery.extend({Deferred:function(func){var tuples=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},"catch":function(fn){return promise.then(null,fn);},// Keep pipe for back-compat
pipe:function/* fnDone, fnFail, fnProgress */(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(_i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
typeof returned==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
if(isFunction(then)){// Special processors (notify) just wait for resolution
if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
}else{// ...and disregard older resolution values
maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
}else{// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
if(depth+1>=maxDepth){// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};// Add list-specific methods
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
promise[tuple[1]]=list.add;// Handle state
if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
state=stateString;},// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
tuples[3-i][3].disable,// progress_callbacks.lock
tuples[0][2].lock,// progress_handlers.lock
tuples[0][3].lock);}// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
promise.promise(deferred);// Call given func if any
if(func){func.call(deferred,deferred);}// All done!
return deferred;},// Deferred helper
when:function(singleValue){var// count of uncompleted subordinates
remaining=arguments.length,// count of unprocessed arguments
i=remaining,// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=slice.call(arguments),// the primary Deferred
primary=jQuery.Deferred(),// subordinate callback factory
updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(! --remaining){primary.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1){adoptValue(singleValue,primary.done(updateFunc(i)).resolve,primary.reject,!remaining);// Use .then() to unwrap secondary thenables (cf. gh-3000)
if(primary.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return primary.then();}}// Multiple arguments are aggregated like Promise.all array elements
while(i--){adoptValue(resolveValues[i],updateFunc(i),primary.reject);}return primary.promise();}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function(wait){// Abort if there are pending holds or we're already ready
if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready);}else{// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
}else{bulk=fn;fn=function(elem,_key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};// Matches dashed string for camelizing
var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;// Used by camelCase as callback to replace()
function fcamelCase(_all,letter){return letter.toUpperCase();}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}var acceptData=function(owner){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function(owner){// Check if the owner object already has a cache
var value=owner[this.expando];// If not, create one
if(!value){value={};// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
// configurable must be true to allow the property to be
// deleted when data is removed
}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if(typeof data==="string"){cache[camelCase(data)]=value;// Handle: [ owner, { properties } ] args
}else{// Copy the properties one-by-one to the cache object
for(prop in data){cache[camelCase(prop)]=data[prop];}}return cache;},get:function(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function(owner,key,value){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(owner,key,value);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return value!==undefined?value:key;},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
if(Array.isArray(key)){// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(camelCase);}else{key=camelCase(key);// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
// The attrs elements can be null (#14894)
if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&value===undefined){// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
return;}// Set the data...
this.each(function(){// We always store the camelCased key
dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var documentElement=document.documentElement;var isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem);},composed={composed:true};// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
// Check attachment across shadow DOM boundaries when possible (gh-3504)
// Support: iOS 10.0-10.2 only
// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
// leading to errors. We need to check for `getRootNode`.
if(documentElement.getRootNode){isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem)||elem.getRootNode(composed)===elem.ownerDocument;};}var isHiddenWithinTree=function(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
elem=el||elem;// Inline style trumps all
return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
isAttached(elem)&&jQuery.css(elem,"display")==="none";};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
initialInUnit=elem.nodeType&&(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
initial=initial/2;// Trust units reported by jQuery.css
unit=unit||initialInUnit[3];// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;while(maxIterations--){// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}initialInUnit=initialInUnit/scale;}initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);// Make sure we update the tween properties later on
valueParts=valueParts||[];}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;var rscriptType=/^$|^module$|\/(?:java|ecma)script/i;(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
div.innerHTML="<option></option>";support.option=!!div.lastChild;})();// We have to close these tags to support XHTML (#13200)
var wrapMap={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;// Support: IE <=9 only
if(!support.option){wrapMap.optgroup=wrapMap.option=[1,"<select multiple='multiple'>","</select>"];}function getAll(context,tag){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,attached,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
if(toType(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
tmp.textContent="";}}}// Remove wrapper from fragment
fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}attached=isAttached(elem);// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
if(attached){setGlobalEval(tmp);}// Capture executables
if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}var rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync(elem,type){return elem===safeActiveElement()===(type==="focus");}// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement(){try{return document.activeElement;}catch(err){}}function on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
if(typeof types==="object"){// ( types-Object, selector, data )
if(typeof selector!=="string"){// ( types-Object, data )
data=data||selector;selector=undefined;}for(type in types){on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
fn=data;data=undefined;}else{// ( types, data, fn )
fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function(event){// Can use an empty set, since event contains the info
jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Only attach events to objects that accept data
if(!acceptData(elem)){return;}// Caller can pass in an object of custom data in lieu of the handler
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
if(!(events=elemData.events)){events=elemData.events=Object.create(null);}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(nativeEvent){var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),// Make a writable jQuery.Event from the native event object
event=jQuery.event.fix(nativeEvent),handlers=(dataPriv.get(this,"events")||Object.create(null))[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// If the event is namespaced, then each handler is only invoked if it is
// specially universal or its namespaces are a superset of the event's.
if(!event.rnamespace||handleObj.namespace===false||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;// Find delegate handlers
if(delegateCount&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
cur.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];// Don't conflict with Object.prototype properties (#13203)
sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});}return handlerQueue;},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(data){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var el=this||data;// Claim the first handler
if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){// dataPriv.set( el, "click", ... )
leverageNative(el,"click",returnTrue);}// Return false to allow normal processing in the caller
return false;},trigger:function(data){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var el=this||data;// Force setup before triggering a click
if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click");}// Return non-false to allow normal event-path propagation
return true;},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(event){var target=event.target;return rcheckableType.test(target.type)&&target.click&&nodeName(target,"input")&&dataPriv.get(target,"click")||nodeName(target,"a");}},beforeunload:{postDispatch:function(event){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative(el,type,expectSync){// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
if(!expectSync){if(dataPriv.get(el,type)===undefined){jQuery.event.add(el,type,returnTrue);}return;}// Register the controller as a special universal handler for all event namespaces
dataPriv.set(el,type,false);jQuery.event.add(el,type,{namespace:false,handler:function(event){var notAsync,result,saved=dataPriv.get(this,type);if(event.isTrigger&1&&this[type]){// Interrupt processing of the outer synthetic .trigger()ed event
// Saved data should be false in such cases, but might be a leftover capture object
// from an async native handler (gh-4350)
if(!saved.length){// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
saved=slice.call(arguments);dataPriv.set(this,type,saved);// Trigger the native event and capture its result
// Support: IE <=9 - 11+
// focus() and blur() are asynchronous
notAsync=expectSync(this,type);this[type]();result=dataPriv.get(this,type);if(saved!==result||notAsync){dataPriv.set(this,type,false);}else{result={};}if(saved!==result){// Cancel the outer synthetic event
event.stopImmediatePropagation();event.preventDefault();// Support: Chrome 86+
// In Chrome, if an element having a focusout handler is blurred by
// clicking outside of it, it invokes the handler synchronously. If
// that handler calls `.remove()` on the element, the data is cleared,
// leaving `result` undefined. We need to guard against this.
return result&&result.value;}// If this is an inner synthetic event for an event with a bubbling surrogate
// (focus or blur), assume that the surrogate already propagated from triggering the
// native event and prevent that from happening again here.
// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
// bubbling surrogate propagates *after* the non-bubbling base), but that seems
// less bad than duplication.
}else if((jQuery.event.special[type]||{}).delegateType){event.stopPropagation();}// If this is a native event triggered above, everything is now in order
// Fire an inner synthetic event with the original arguments
}else if(saved.length){// ...and capture the result
dataPriv.set(this,type,{value:jQuery.event.trigger(// Support: IE <=9 - 11+
// Extend with the prototype to reset the above stopImmediatePropagation()
jQuery.extend(saved[0],jQuery.Event.prototype),saved.slice(1),this)});// Abort handling of the native event
event.stopImmediatePropagation();}}});}jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
src.returnValue===false?returnTrue:returnFalse;// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
}else{this.type=src;}// Put explicitly provided properties onto the event object
if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
this.timeStamp=src&&src.timeStamp||Date.now();// Mark it as fixed
this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:true},jQuery.event.addProp);jQuery.each({focus:"focusin",blur:"focusout"},function(type,delegateType){jQuery.event.special[type]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
leverageNative(this,type,expectSync);// Return false to allow normal processing in the caller
return false;},trigger:function(){// Force setup before trigger
leverageNative(this,type);// Return non-false to allow normal event-path propagation
return true;},// Suppress native focus or blur as it's already being fired
// in leverageNative.
_default:function(){return true;},delegateType:delegateType};});// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if(typeof types==="object"){// ( types-object [, selector] )
for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)){pdataOld=dataPriv.get(src);events=pdataOld.events;if(events){dataPriv.remove(dest,"handle events");for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
args=flat(args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
if(valueIsFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){// Optional AJAX dependency, but won't run scripts if not present
if(jQuery._evalUrl&&!node.noModule){jQuery._evalUrl(node.src,{nonce:node.nonce||node.getAttribute("nonce")},doc);}}else{DOMEval(node.textContent.replace(rcleanScript,""),node,doc);}}}}}}return collection;}function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&isAttached(node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function(html){return html;},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=isAttached(elem);// Fix IE cloning issues
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
elem.textContent="";}}return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());}return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var swap=function(elem,options,callback){var ret,name,old={};// Remember the old values, and insert the new ones
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.call(elem);// Revert the old values
for(name in options){elem.style[name]=old[name];}return ret;};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){// This is a singleton, we need to execute it only once
if(!div){return;}container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
div.style.position="absolute";scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null;}function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableTrDimensionsVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
if(!div.style){return;}// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal;},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var table,tr,trChild,trStyle;if(reliableTrDimensionsVal==null){table=document.createElement("table");tr=document.createElement("tr");trChild=document.createElement("div");table.style.cssText="position:absolute;left:-11111px;border-collapse:separate";tr.style.cssText="border:1px solid";// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
tr.style.height="1px";trChild.style.height="9px";// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is display: block
// gets around this issue.
trChild.style.display="block";documentElement.appendChild(table).appendChild(tr).appendChild(trChild);trStyle=window.getComputedStyle(tr);reliableTrDimensionsVal=parseInt(trStyle.height,10)+parseInt(trStyle.borderTopWidth,10)+parseInt(trStyle.borderBottomWidth,10)===tr.offsetHeight;documentElement.removeChild(table);}return reliableTrDimensionsVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
style=elem.style;computed=computed||getStyles(elem);// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!isAttached(elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){// Remember the original values
width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=hookFn).apply(this,arguments);}};}var cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style,vendorProps={};// Return a vendor-prefixed property or undefined
function vendorPropName(name){// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName(name){var final=jQuery.cssProps[name]||vendorProps[name];if(final){return final;}if(name in emptyStyle){return name;}return vendorProps[name]=vendorPropName(name)||name;}var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"};function setPositiveNumber(_elem,value,subtract){// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;// Adjustment may not be necessary
if(box===(isBorderBox?"border":"content")){return 0;}for(;i<4;i+=2){// Both box models exclude margin
if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],true,styles);}// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
if(!isBorderBox){// Add padding
delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// For "border" or "margin", add border
if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);// But still keep track of it otherwise
}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}// If we get here with a border-box (content + padding + border), we're seeking "content" or
// "padding" or "margin"
}else{// For "content", subtract padding
if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// For "content" or "padding", subtract border
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}// Account for positive content-box scroll gutter when requested by providing computedVal
if(!isBorderBox&&computedVal>=0){// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-computedVal-delta-extra-0.5// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
// Use an explicit zero to avoid NaN (gh-3964)
))||0;}return delta;}function getWidthOrHeight(elem,dimension,extra){// Start with computed style
var styles=getStyles(elem),// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
// Fake content-box until we know it's needed to know the true value.
boxSizingNeeded=!support.boxSizingReliable()||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox,val=curCSS(elem,dimension,styles),offsetProp="offset"+dimension[0].toUpperCase()+dimension.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(rnumnonpx.test(val)){if(!extra){return val;}val="auto";}// Support: IE 9 - 11 only
// Use offsetWidth/offsetHeight for when box sizing is unreliable.
// In those cases, the computed value can be trusted to be border-box.
if((!support.boxSizingReliable()&&isBorderBox||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!support.reliableTrDimensions()&&nodeName(elem,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
val==="auto"||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline")&&// Make sure the element is visible & connected
elem.getClientRects().length){isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
valueIsBorderBox=offsetProp in elem;if(valueIsBorderBox){val=elem[offsetProp];}}// Normalize "" and auto
val=parseFloat(val)||0;// Adjust for the element's box model
return val+boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,// Provide the current computed size to request scroll gutter calculation (gh-3589)
val)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(elem,computed){if(computed){// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"gridArea":true,"gridColumn":true,"gridColumnEnd":true,"gridColumnStart":true,"gridRow":true,"gridRowEnd":true,"gridRowStart":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(elem,name,value,extra){// Don't set styles on text and comment nodes
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Gets hook for the prefixed version, then unprefixed version
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
if(value!==undefined){type=typeof value;// Convert "+=" or "-=" to relative numbers (#7345)
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
type="number";}// Make sure that null and NaN values aren't set (#7116)
if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
// "px" to a few hardcoded values.
if(type==="number"&&!isCustomProp){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{// If a hook was provided get the non-computed value from there
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Try prefixed name followed by the unprefixed name
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(_i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function(elem,value,extra){var matches,styles=getStyles(elem),// Only read styles.position if the test has a chance to fail
// to avoid forcing a reflow.
scrollboxSizeBuggy=!support.scrollboxSize()&&styles.position==="absolute",// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
boxSizingNeeded=scrollboxSizeBuggy||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra?boxModelAdjustment(elem,dimension,extra,isBorderBox,styles):0;// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
if(isBorderBox&&scrollboxSizeBuggy){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-parseFloat(styles[dimension])-boxModelAdjustment(elem,dimension,"border",false,styles)-0.5);}// Convert to pixels if value adjustment is needed
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},// Assumes a single number if not a string
parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!result||result==="auto"?0:result;},set:function(tween){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(jQuery.cssHooks[tween.prop]||tween.elem.style[finalPropName(tween.prop)]!=null)){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}jQuery.fx.tick();}}// Animations created synchronously will run synchronously
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=Date.now();}// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
propTween=false;for(prop in orig){// General show/hide setup for this element animation
if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
delete tick.elem;}),tick=function(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);// If there's more to do, yield
if(percent<1&&length){return remaining;}// If this was an empty animation, synthesize a final progress notification
if(!length){deferred.notifyWith(elem,[animation,1,0]);}// Resolve the animation and report its conclusion
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}return result;}}jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}// Attach callbacks from options
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};// Go to the end state if fx are off
if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
data.finish=true;// Empty the queue first
jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(_i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];// Run the timer and safely remove it when done (allowing for external removal)
if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=input.value!=="";// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected;// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
boolHook={set:function(elem,value,name){if(value===false){// Remove boolean attributes when set to false
jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(_i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function(elem){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}function classesToArray(value){if(Array.isArray(value)){return value;}if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}return[];}jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}classes=classesToArray(value);if(classes.length){while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}classes=classesToArray(value);if(classes.length){while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function(value,stateVal){var type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(isValidValue){// Toggle individual class names
i=0;self=jQuery(this);classNames=classesToArray(value);while(className=classNames[i++]){// Check each className given, space separated list
if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
return ret==null?"":ret;}return;}valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
stripAndCollapse(jQuery.text(elem));}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
for(;i<max;i++){option=options[i];// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
value=jQuery(option).val();// We don't need an array for one selects
if(one){return value;}// Multi-Selects return an array
values.push(value);}}return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
support.focusin="onfocusin"in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;// Don't do events on text and comment nodes
if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
handle=(dataPriv.get(cur,"events")||Object.create(null))[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
if(ontype&&isFunction(elem[type])&&!isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var doc=this.ownerDocument||this.document||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this.document||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce={guid:Date.now()};var rquery=/\?/;// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml,parserErrorElem;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){}parserErrorElem=xml&&xml.getElementsByTagName("parsererror")[0];if(!xml||parserErrorElem){jQuery.error("Invalid XML: "+(parserErrorElem?jQuery.map(parserErrorElem.childNodes,function(el){return el.textContent;}).join("\n"):data));}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){// Serialize array item.
jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){// Serialize object item.
for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
add(prefix,obj);}}// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){// If value is a function, invoke it and use its return value
var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};if(a==null){return"";}// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
return s.join("&");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(_i,elem){var val=jQuery(this).val();if(val==null){return null;}if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
         * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
         * 2) These are called:
         *    - BEFORE asking for a transport
         *    - AFTER param serialization (s.data is a string if s.processData is true)
         * 3) key is the dataType
         * 4) the catchall symbol "*" can be used
         * 5) execution will start with transport dataType and THEN continue down to "*" if needed
         */prefilters={},/* Transports bindings
         * 1) key is the dataType
         * 2) the catchall symbol "*" can be used
         * 3) selection will start with transport dataType and THEN go to "*" if needed
         */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){// For each dataType in the dataTypeExpression
while(dataType=dataTypes[i++]){// Prepend if requested
if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
finalDataType=finalDataType||firstDataType;}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
}else if(prev!=="*"&&prev!==current){// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
if(!conv){for(conv2 in converters){// If conv2 outputs current
tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
if(conv!==true){// Unless errors are allowed to bubble, catch and return them
if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(target,settings){return settings?// Building a settings object
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
ajax:function(url,options){// If url is an object, simulate pre-1.5 signature
if(typeof url==="object"){options=url;url=undefined;}// Force options to be an object
options=options||{};var transport,// URL without anti-cache param
cacheURL,// Response headers
responseHeadersString,responseHeaders,// timeout handle
timeoutTimer,// Url cleanup var
urlAnchor,// Request state (becomes false upon send and true upon completion)
completed,// To know if global events are to be dispatched
fireGlobals,// Loop variable
i,// uncached part of the url
uncached,// Create the final options object
s=jQuery.ajaxSetup({},options),// Callbacks context
callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
statusCode=s.statusCode||{},// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},// Default abort message
strAbort="canceled",// Fake xhr
jqXHR={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()+" "]=(responseHeaders[match[1].toLowerCase()+" "]||[]).concat(match[2]);}}match=responseHeaders[key.toLowerCase()+" "];}return match==null?null:match.join(", ");},// Raw string
getAllResponseHeaders:function(){return completed?responseHeadersString:null;},// Caches the header
setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
overrideMimeType:function(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
statusCode:function(map){var code;if(map){if(completed){// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
for(code in map){statusCode[code]=[statusCode[code],map[code]];}}}return this;},// Cancel the request
abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=true;}}// Convert data if not already a string
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
if(completed){return jqXHR;}// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
s.type=s.type.toUpperCase();// Determine if request has content
s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
if(!s.hasContent){// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length);// If data is available and should be processed, append data to url
if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
delete s.data;}// Add or update anti-cache param if needed
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce.guid++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
return jqXHR.abort();}// Aborting is no longer a cancellation
strAbort="abort";// Install callbacks on deferreds
completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
if(completed){return jqXHR;}// Timeout
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
if(completed){throw e;}// Propagate others as results
done(-1,e);}}// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
if(completed){return;}completed=true;// Clear timeout if it exists
if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=undefined;// Cache response headers
responseHeadersString=headers||"";// Set readyState
jqXHR.readyState=status>0?4:0;// Determine if successful
isSuccess=status>=200&&status<300||status===304;// Get response data
if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Use a noop converter for missing script but not if jsonp
if(!isSuccess&&jQuery.inArray("script",s.dataTypes)>-1&&jQuery.inArray("json",s.dataTypes)<0){s.converters["text script"]=function(){};}// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
}else if(status===304){statusText="notmodified";// If we have data, let's convert it
}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(_i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
if(isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery.ajaxPrefilter(function(s){var i;for(i in s.headers){if(i.toLowerCase()==="content-type"){s.contentType=s.headers[i]||"";}}});jQuery._evalUrl=function(url,options,doc){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:true,async:false,global:false,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(response){jQuery.globalEval(response,options,doc);}});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
if(xhr.readyState===4){// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){if(callback){errorCallback();}});}};}// Create the abort callback
callback=callback("abort");try{// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain or forced-by-attrs requests
if(s.crossDomain||s.scriptAttrs){var script,callback;return{send:function(_,complete){script=jQuery("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce.guid++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
s.dataTypes[0]="json";// Install callback
overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
jqXHR.always(function(){// If previous value didn't exist - remove it
if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
}else{window[callbackName]=overwritten;}// Save back as free
if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
return"script";}});// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
     * Load a url into a page
     */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
if(isFunction(params)){// We assume that it's the callback
callback=params;params=undefined;// Otherwise, build a param string
}else if(params&&typeof params==="object"){type="POST";}// If we have elements to modify, make the request
if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({// offset() relates an element's border box to the document origin
offset:function(options){// Preserve chaining for setter
if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var rect,win,elem=this[0];if(!elem){return;}// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
if(!elem.getClientRects().length){return{top:0,left:0};}// Get document-relative position by adding viewport scroll to viewport-relative gBCR
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(!this[0]){return;}var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if(jQuery.css(elem,"position")==="fixed"){// Assume position:fixed implies availability of getBoundingClientRect
offset=elem.getBoundingClientRect();}else{offset=this.offset();// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){// Incorporate borders into its offset, since they are outside its content origin
parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}// Subtract parent offsets and element margins
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){// Coalesce documents and windows
var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(_i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css(elem,type,extra):// Set width or height on the element
jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(_i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(_i,name){// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!isFunction(fn)){return undefined;}// Simulated bind
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(obj-parseFloat(obj));};jQuery.trim=function(text){return text==null?"":(text+"").replace(rtrim,"");};// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return jQuery;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
_jQuery=window.jQuery,// Map over the $ in case of overwrite
_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if(typeof noGlobal==="undefined"){window.jQuery=window.$=jQuery;}return jQuery;});/***/}),/***/"./node_modules/matchmedia-polyfill/matchMedia.addListener.js":(/*!********************************************************************!*\
      !*** ./node_modules/matchmedia-polyfill/matchMedia.addListener.js ***!
      \********************************************************************/ /***/()=>{/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. MIT license */(function(){// Bail out for browsers that have addListener support
if(window.matchMedia&&window.matchMedia('all').addListener){return false;}var localMatchMedia=window.matchMedia,hasMediaQueries=localMatchMedia('only all').matches,isListening=false,timeoutID=0,// setTimeout for debouncing 'handleChange'
queries=[],// Contains each 'mql' and associated 'listeners' if 'addListener' is used
handleChange=function(evt){// Debounce
clearTimeout(timeoutID);timeoutID=setTimeout(function(){for(var i=0,il=queries.length;i<il;i++){var mql=queries[i].mql,listeners=queries[i].listeners||[],matches=localMatchMedia(mql.media).matches;// Update mql.matches value and call listeners
// Fire listeners only if transitioning to or from matched state
if(matches!==mql.matches){mql.matches=matches;for(var j=0,jl=listeners.length;j<jl;j++){listeners[j].call(window,mql);}}}},30);};window.matchMedia=function(media){var mql=localMatchMedia(media),listeners=[],index=0;mql.addListener=function(listener){// Changes would not occur to css media type so return now (Affects IE <= 8)
if(!hasMediaQueries){return;}// Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
// There should only ever be 1 resize listener running for performance
if(!isListening){isListening=true;window.addEventListener('resize',handleChange,true);}// Push object only if it has not been pushed already
if(index===0){index=queries.push({mql:mql,listeners:listeners});}listeners.push(listener);};mql.removeListener=function(listener){for(var i=0,il=listeners.length;i<il;i++){if(listeners[i]===listener){listeners.splice(i,1);}}};return mql;};})();/***/}),/***/"./node_modules/matchmedia-polyfill/matchMedia.js":(/*!********************************************************!*\
      !*** ./node_modules/matchmedia-polyfill/matchMedia.js ***!
      \********************************************************/ /***/()=>{/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license */window.matchMedia||(window.matchMedia=function(){"use strict";// For browsers that support matchMedium api such as IE 9 and webkit
var styleMedia=window.styleMedia||window.media;// For those that don't support matchMedium
if(!styleMedia){var style=document.createElement('style'),script=document.getElementsByTagName('script')[0],info=null;style.type='text/css';style.id='matchmediajs-test';if(!script){document.head.appendChild(style);}else{script.parentNode.insertBefore(style,script);}// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
info='getComputedStyle'in window&&window.getComputedStyle(style,null)||style.currentStyle;styleMedia={matchMedium:function(media){var text='@media '+media+'{ #matchmediajs-test { width: 1px; } }';// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
if(style.styleSheet){style.styleSheet.cssText=text;}else{style.textContent=text;}// Test if media query is true or false
return info.width==='1px';}};}return function(media){return{matches:styleMedia.matchMedium(media||'all'),media:media||'all'};};}());/***/}),/***/"./src/styles/modules/oneContact.scss":(/*!********************************************!*\
      !*** ./src/styles/modules/oneContact.scss ***!
      \********************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/modules/oneCookieBanner.scss":(/*!*************************************************!*\
      !*** ./src/styles/modules/oneCookieBanner.scss ***!
      \*************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/modules/oneDrawer.scss":(/*!*******************************************!*\
      !*** ./src/styles/modules/oneDrawer.scss ***!
      \*******************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/modules/oneMobileMenu.scss":(/*!***********************************************!*\
      !*** ./src/styles/modules/oneMobileMenu.scss ***!
      \***********************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/modules/oneSubscribe.scss":(/*!**********************************************!*\
      !*** ./src/styles/modules/oneSubscribe.scss ***!
      \**********************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/modules/oneVideo.scss":(/*!******************************************!*\
      !*** ./src/styles/modules/oneVideo.scss ***!
      \******************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/pages/home.scss":(/*!************************************!*\
      !*** ./src/styles/pages/home.scss ***!
      \************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/pages/multisection.scss":(/*!********************************************!*\
      !*** ./src/styles/pages/multisection.scss ***!
      \********************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/pages/utility.scss":(/*!***************************************!*\
      !*** ./src/styles/pages/utility.scss ***!
      \***************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./src/styles/style.scss":(/*!*******************************!*\
      !*** ./src/styles/style.scss ***!
      \*******************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);// extracted by mini-css-extract-plugin
/***/}),/***/"./node_modules/scrolltofixed/jquery-scrolltofixed.js":(/*!************************************************************!*\
      !*** ./node_modules/scrolltofixed/jquery-scrolltofixed.js ***!
      \************************************************************/ /***/()=>{/*
     * ScrollToFixed
     * https://github.com/bigspotteddog/ScrollToFixed
     * 
     * Copyright (c) 2011 Joseph Cava-Lynch
     * MIT license
     */(function($){$.isScrollToFixed=function(el){return!!$(el).data('ScrollToFixed');};$.ScrollToFixed=function(el,options){// To avoid scope issues, use 'base' instead of 'this' to reference this
// class from internal events and functions.
var base=this;// Access to jQuery and DOM versions of element.
base.$el=$(el);base.el=el;// Add a reverse reference to the DOM object.
base.$el.data('ScrollToFixed',base);// A flag so we know if the scroll has been reset.
var isReset=false;// The element that was given to us to fix if scrolled above the top of
// the page.
var target=base.$el;var position;var originalPosition;var originalOffsetTop;var originalZIndex;// The offset top of the element when resetScroll was called. This is
// used to determine if we have scrolled past the top of the element.
var offsetTop=0;// The offset left of the element when resetScroll was called. This is
// used to move the element left or right relative to the horizontal
// scroll.
var offsetLeft=0;var originalOffsetLeft=-1;// This last offset used to move the element horizontally. This is used
// to determine if we need to move the element because we would not want
// to do that for no reason.
var lastOffsetLeft=-1;// This is the element used to fill the void left by the target element
// when it goes fixed; otherwise, everything below it moves up the page.
var spacer=null;var spacerClass;var className;// Capture the original offsets for the target element. This needs to be
// called whenever the page size changes or when the page is first
// scrolled. For some reason, calling this before the page is first
// scrolled causes the element to become fixed too late.
function resetScroll(){// Set the element to it original positioning.
target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');// Reset the last offset used to determine if the page has moved
// horizontally.
lastOffsetLeft=-1;// Capture the offset top of the target element.
offsetTop=target.offset().top;// Capture the offset left of the target element.
offsetLeft=target.offset().left;// If the offsets option is on, alter the left offset.
if(base.options.offsets){offsetLeft+=target.offset().left-target.position().left;}if(originalOffsetLeft==-1){originalOffsetLeft=offsetLeft;}position=target.css('position');// Set that this has been called at least once.
isReset=true;if(base.options.bottom!=-1){target.trigger('preFixed.ScrollToFixed');setFixed();target.trigger('fixed.ScrollToFixed');}}function getLimit(){var limit=base.options.limit;if(!limit)return 0;if(typeof limit==='function'){return limit.apply(target);}return limit;}// Returns whether the target element is fixed or not.
function isFixed(){return position==='fixed';}// Returns whether the target element is absolute or not.
function isAbsolute(){return position==='absolute';}function isUnfixed(){return!(isFixed()||isAbsolute());}// Sets the target element to fixed. Also, sets the spacer to fill the
// void left by the target element.
function setFixed(){// Only fix the target element and the spacer if we need to.
if(!isFixed()){// Set the spacer to fill the height and width of the target
// element, then display it.
spacer.css({'display':target.css('display'),'width':target.outerWidth(true),'height':target.outerHeight(true),'float':target.css('float')});// Set the target element to fixed and set its width so it does
// not fill the rest of the page horizontally. Also, set its top
// to the margin top specified in the options.
cssOptions={'z-index':base.options.zIndex,'position':'fixed','top':base.options.bottom==-1?getMarginTop():'','bottom':base.options.bottom==-1?'':base.options.bottom,'margin-left':'0px'};if(!base.options.dontSetWidth){cssOptions['width']=target.css('width');};target.css(cssOptions);target.addClass(base.options.baseClassName);if(base.options.className){target.addClass(base.options.className);}position='fixed';}}function setAbsolute(){var top=getLimit();var left=offsetLeft;if(base.options.removeOffsets){left='';top=top-offsetTop;}cssOptions={'position':'absolute','top':top,'left':left,'margin-left':'0px','bottom':''};if(!base.options.dontSetWidth){cssOptions['width']=target.css('width');};target.css(cssOptions);position='absolute';}// Sets the target element back to unfixed. Also, hides the spacer.
function setUnfixed(){// Only unfix the target element and the spacer if we need to.
if(!isUnfixed()){lastOffsetLeft=-1;// Hide the spacer now that the target element will fill the
// space.
spacer.css('display','none');// Remove the style attributes that were added to the target.
// This will reverse the target back to the its original style.
target.css({'z-index':originalZIndex,'width':'','position':originalPosition,'left':'','top':originalOffsetTop,'margin-left':''});target.removeClass('scroll-to-fixed-fixed');if(base.options.className){target.removeClass(base.options.className);}position=null;}}// Moves the target element left or right relative to the horizontal
// scroll position.
function setLeft(x){// Only if the scroll is not what it was last time we did this.
if(x!=lastOffsetLeft){// Move the target element horizontally relative to its original
// horizontal position.
target.css('left',offsetLeft-x);// Hold the last horizontal position set.
lastOffsetLeft=x;}}function getMarginTop(){var marginTop=base.options.marginTop;if(!marginTop)return 0;if(typeof marginTop==='function'){return marginTop.apply(target);}return marginTop;}// Checks to see if we need to do something based on new scroll position
// of the page.
function checkScroll(){if(!$.isScrollToFixed(target))return;var wasReset=isReset;// If resetScroll has not yet been called, call it. This only
// happens once.
if(!isReset){resetScroll();}else if(isUnfixed()){// if the offset has changed since the last scroll,
// we need to get it again.
// Capture the offset top of the target element.
offsetTop=target.offset().top;// Capture the offset left of the target element.
offsetLeft=target.offset().left;}// Grab the current horizontal scroll position.
var x=$(window).scrollLeft();// Grab the current vertical scroll position.
var y=$(window).scrollTop();// Get the limit, if there is one.
var limit=getLimit();// If the vertical scroll position, plus the optional margin, would
// put the target element at the specified limit, set the target
// element to absolute.
if(base.options.minWidth&&$(window).width()<base.options.minWidth){if(!isUnfixed()||!wasReset){postPosition();target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');}}else if(base.options.maxWidth&&$(window).width()>base.options.maxWidth){if(!isUnfixed()||!wasReset){postPosition();target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');}}else if(base.options.bottom==-1){// If the vertical scroll position, plus the optional margin, would
// put the target element at the specified limit, set the target
// element to absolute.
if(limit>0&&y>=limit-getMarginTop()){if(!isAbsolute()||!wasReset){postPosition();target.trigger('preAbsolute.ScrollToFixed');setAbsolute();target.trigger('unfixed.ScrollToFixed');}// If the vertical scroll position, plus the optional margin, would
// put the target element above the top of the page, set the target
// element to fixed.
}else if(y>=offsetTop-getMarginTop()){if(!isFixed()||!wasReset){postPosition();target.trigger('preFixed.ScrollToFixed');// Set the target element to fixed.
setFixed();// Reset the last offset left because we just went fixed.
lastOffsetLeft=-1;target.trigger('fixed.ScrollToFixed');}// If the page has been scrolled horizontally as well, move the
// target element accordingly.
setLeft(x);}else{// Set the target element to unfixed, placing it where it was
// before.
if(!isUnfixed()||!wasReset){postPosition();target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');}}}else{if(limit>0){if(y+$(window).height()-target.outerHeight(true)>=limit-(getMarginTop()||-getBottom())){if(isFixed()){postPosition();target.trigger('preUnfixed.ScrollToFixed');if(originalPosition==='absolute'){setAbsolute();}else{setUnfixed();}target.trigger('unfixed.ScrollToFixed');}}else{if(!isFixed()){postPosition();target.trigger('preFixed.ScrollToFixed');setFixed();}setLeft(x);target.trigger('fixed.ScrollToFixed');}}else{setLeft(x);}}}function getBottom(){if(!base.options.bottom)return 0;return base.options.bottom;}function postPosition(){var position=target.css('position');if(position=='absolute'){target.trigger('postAbsolute.ScrollToFixed');}else if(position=='fixed'){target.trigger('postFixed.ScrollToFixed');}else{target.trigger('postUnfixed.ScrollToFixed');}}var windowResize=function(event){// Check if the element is visible before updating it's position, which
// improves behavior with responsive designs where this element is hidden.
if(target.is(':visible')){isReset=false;checkScroll();}};var windowScroll=function(event){!!window.requestAnimationFrame?requestAnimationFrame(checkScroll):checkScroll();};// From: http://kangax.github.com/cft/#IS_POSITION_FIXED_SUPPORTED
var isPositionFixedSupported=function(){var container=document.body;if(document.createElement&&container&&container.appendChild&&container.removeChild){var el=document.createElement('div');if(!el.getBoundingClientRect)return null;el.innerHTML='x';el.style.cssText='position:fixed;top:100px;';container.appendChild(el);var originalHeight=container.style.height,originalScrollTop=container.scrollTop;container.style.height='3000px';container.scrollTop=500;var elementTop=el.getBoundingClientRect().top;container.style.height=originalHeight;var isSupported=elementTop===100;container.removeChild(el);container.scrollTop=originalScrollTop;return isSupported;}return null;};var preventDefault=function(e){e=e||window.event;if(e.preventDefault){e.preventDefault();}e.returnValue=false;};// Initializes this plugin. Captures the options passed in, turns this
// off for devices that do not support fixed position, adds the spacer,
// and binds to the window scroll and resize events.
base.init=function(){// Capture the options for this plugin.
base.options=$.extend({},$.ScrollToFixed.defaultOptions,options);originalZIndex=target.css('z-index');// Turn off this functionality for devices that do not support it.
// if (!(base.options && base.options.dontCheckForPositionFixedSupport)) {
//     var fixedSupported = isPositionFixedSupported();
//     if (!fixedSupported) return;
// }
// Put the target element on top of everything that could be below
// it. This reduces flicker when the target element is transitioning
// to fixed.
base.$el.css('z-index',base.options.zIndex);// Create a spacer element to fill the void left by the target
// element when it goes fixed.
spacer=$('<div />');position=target.css('position');originalPosition=target.css('position');originalOffsetTop=target.css('top');// Place the spacer right after the target element.
if(isUnfixed())base.$el.after(spacer);// Reset the target element offsets when the window is resized, then
// check to see if we need to fix or unfix the target element.
$(window).bind('resize.ScrollToFixed',windowResize);// When the window scrolls, check to see if we need to fix or unfix
// the target element.
$(window).bind('scroll.ScrollToFixed',windowScroll);// For touch devices, call checkScroll directlly rather than
// rAF wrapped windowScroll to animate the element
if('ontouchmove'in window){$(window).bind('touchmove.ScrollToFixed',checkScroll);}if(base.options.preFixed){target.bind('preFixed.ScrollToFixed',base.options.preFixed);}if(base.options.postFixed){target.bind('postFixed.ScrollToFixed',base.options.postFixed);}if(base.options.preUnfixed){target.bind('preUnfixed.ScrollToFixed',base.options.preUnfixed);}if(base.options.postUnfixed){target.bind('postUnfixed.ScrollToFixed',base.options.postUnfixed);}if(base.options.preAbsolute){target.bind('preAbsolute.ScrollToFixed',base.options.preAbsolute);}if(base.options.postAbsolute){target.bind('postAbsolute.ScrollToFixed',base.options.postAbsolute);}if(base.options.fixed){target.bind('fixed.ScrollToFixed',base.options.fixed);}if(base.options.unfixed){target.bind('unfixed.ScrollToFixed',base.options.unfixed);}if(base.options.spacerClass){spacer.addClass(base.options.spacerClass);}target.bind('resize.ScrollToFixed',function(){spacer.height(target.height());});target.bind('scroll.ScrollToFixed',function(){target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');checkScroll();});target.bind('detach.ScrollToFixed',function(ev){preventDefault(ev);target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');$(window).unbind('resize.ScrollToFixed',windowResize);$(window).unbind('scroll.ScrollToFixed',windowScroll);target.unbind('.ScrollToFixed');//remove spacer from dom
spacer.remove();base.$el.removeData('ScrollToFixed');});// Reset everything.
windowResize();};// Initialize the plugin.
base.init();};// Sets the option defaults.
$.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:'scroll-to-fixed-fixed'};// Returns enhanced elements that will fix to the top of the page when the
// page is scrolled.
$.fn.scrollToFixed=function(options){return this.each(function(){new $.ScrollToFixed(this,options);});};})(jQuery);/***/}),/***/"./node_modules/slick-carousel/slick/slick.js":(/*!****************************************************!*\
      !*** ./node_modules/slick-carousel/slick/slick.js ***!
      \****************************************************/ /***/(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*
         _ _      _       _
     ___| (_) ___| | __  (_)___
    / __| | |/ __| |/ /  | / __|
    \__ \ | | (__|   < _ | \__ \
    |___/_|_|\___|_|\_(_)/ |___/
                       |__/
    
     Version: 1.8.1
      Author: Ken Wheeler
     Website: http://kenwheeler.github.io
        Docs: http://kenwheeler.github.io/slick
        Repo: http://github.com/kenwheeler/slick
      Issues: http://github.com/kenwheeler/slick/issues
    
     */ /* global window, document, define, jQuery, setInterval, clearInterval */;(function(factory){'use strict';if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(/*! jquery */"./node_modules/jquery/dist/jquery.js")],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(function($){'use strict';var Slick=window.Slick||{};Slick=function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:'50px',cssEase:'ease',customPaging:function(slider,i){return $('<button type="button" />').text(i+1);},dots:false,dotsClass:'slick-dots',draggable:true,easing:'linear',edgeFriction:0.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:'ondemand',mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:'window',responsive:null,rows:1,rtl:false,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden='hidden';_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange';}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;// A simple way to check for HTML strings
// Strict HTML recognition (must start with <)
// Extracted from jQuery v1.11 source
_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);}return Slick;}();Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({'tabindex':'0'});};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==='boolean'){addBefore=index;index=null;}else if(index<0||index>=_.slideCount){return false;}_.unload();if(typeof index==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack);}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index));}else{$(markup).insertAfter(_.$slides.eq(index));}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack);}else{$(markup).appendTo(_.$slideTrack);}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index);});_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed);}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft;}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback);}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback);}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-_.currentLeft;}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]='translate('+now+'px, 0px)';_.$slideTrack.css(animProps);}else{animProps[_.animType]='translate(0px,'+now+'px)';_.$slideTrack.css(animProps);}},complete:function(){if(callback){callback.call();}}});}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)';}else{animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)';}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call();},_.options.speed);}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider);}return asNavFor;};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==='object'){asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked){target.slideHandler(index,true);}});}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase;}else{transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase;}if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed);}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer);}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&_.currentSlide+1===_.slideCount-1){_.direction=0;}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1;}}}_.slideHandler(slideTo);}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows);}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows);}if(_.options.infinite!==true){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');}}else{_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true','tabindex':'-1'});}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($('<li />').append(_.options.customPaging.call(this,_,i)));}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active');}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'');});_.$slider.addClass('slick-slider');_.$slideTrack=_.slideCount===0?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1;}$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass('draggable');}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);if(originalSlides.get(target)){row.appendChild(originalSlides.get(target));}}slide.appendChild(row);}newSlides.appendChild(slide);}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({'width':100/_.options.slidesPerRow+'%','display':'inline-block'});}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth;}else if(_.respondTo==='slider'){respondToWidth=sliderWidth;}else if(_.respondTo==='min'){respondToWidth=Math.min(windowWidth,sliderWidth);}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);triggerBreakpoint=targetBreakpoint;}}// only trigger breakpoints during an actual break. not on initialize.
if(!initial&&triggerBreakpoint!==false){_.$slider.trigger('breakpoint',[_,triggerBreakpoint]);}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;// If target is a link, prevent default action.
if($target.is('a')){event.preventDefault();}// If target is not the <li> element (ie: a child), find the <li>.
if(!$target.is('li')){$target=$target.closest('li');}unevenOffset=_.slideCount%_.options.slidesToScroll!==0;indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);}break;case'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);}break;case'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger('focus');break;default:return;}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1];}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break;}prevNavigable=navigables[n];}}return index;};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,true)).off('mouseleave.slick',$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off('keydown.slick',_.keyHandler);}}_.$slider.off('focus.slick blur.slick');if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off('keydown.slick',_.keyHandler);_.$nextArrow&&_.$nextArrow.off('keydown.slick',_.keyHandler);}}_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off('keydown.slick',_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off('click.slick',_.selectHandler);}$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,false));};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides);}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}}if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'));});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);}_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=true;if(!refresh){_.$slider.trigger('destroy',[_]);}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call();},_.options.speed);}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2});}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick','*',function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(':focus');_.autoPlay();}},0);});};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide;};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty;}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}}else if(_.options.centerMode===true){pagerQty=_.slideCount;}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll);}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}return pagerQty-1;};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=_.slideWidth*_.options.slidesToShow*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5;}else if(_.options.slidesToShow===1){coef=-2;}}verticalOffset=verticalHeight*_.options.slidesToShow*coef;}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1;verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1;}else{_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1;verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1;}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth;verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight;}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0;}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=_.slideWidth*Math.floor(_.options.slidesToShow)/2-_.slideWidth*_.slideCount/2;}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth;}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2);}if(_.options.vertical===false){targetLeft=slideIndex*_.slideWidth*-1+_.slideOffset;}else{targetLeft=slideIndex*verticalHeight*-1+verticalOffset;}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2;}}return targetLeft;};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option];};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount;}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2;}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}return indexes;};Slick.prototype.getSlick=function(){return this;};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+$(slide).outerWidth()/2>_.swipeLeft*-1){swipedSlide=slide;return false;}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed;}else{return _.options.slidesToScroll;}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate);};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();}if(creation){_.$slider.trigger('init',[_]);}if(_.options.accessibility===true){_.initADA();}if(_.options.autoplay){_.paused=false;_.autoPlay();}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return val>=0&&val<_.slideCount;});_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true','tabindex':'-1'}).find('a, input, button, select').attr({'tabindex':'-1'});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({'role':'tabpanel','id':'slick-slide'+_.instanceUid+i,'tabindex':-1});if(slideControlIndex!==-1){var ariaButtonControl='slick-slide-control'+_.instanceUid+slideControlIndex;if($('#'+ariaButtonControl).length){$(this).attr({'aria-describedby':ariaButtonControl});}}});_.$dots.attr('role','tablist').find('li').each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({'role':'presentation'});$(this).find('button').first().attr({'role':'tab','id':'slick-slide-control'+_.instanceUid+i,'aria-controls':'slick-slide'+_.instanceUid+mappedSlideIndex,'aria-label':i+1+' of '+numDotGroups,'aria-selected':null,'tabindex':'-1'});}).eq(_.currentSlide).find('button').attr({'aria-selected':'true','tabindex':'0'}).end();}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({'tabindex':'0'});}else{_.$slides.eq(i).removeAttr('tabindex');}}_.activateADA();};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on('keydown.slick',_.keyHandler);_.$nextArrow.on('keydown.slick',_.keyHandler);}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);if(_.options.accessibility===true){_.$dots.on('keydown.slick',_.keyHandler);}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,true)).on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on('keydown.slick',_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(_.setPosition);};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show();}};Slick.prototype.keyHandler=function(event){var _=this;//Dont slide if the cursor is inside the form fields and arrow keys are pressed
if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'next':'previous'}});}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'previous':'next'}});}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageSrcSet=$(this).attr('data-srcset'),imageSizes=$(this).attr('data-sizes')||_.$slider.attr('data-sizes'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');});_.$slider.trigger('lazyLoaded',[_,image,imageSource]);});};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);};imageToLoad.src=imageSource;});}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2;}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide;}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++;}}loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);if(_.options.lazyLoad==='anticipated'){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find('.slick-slide');for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++;}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange);}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange);}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange);}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive'){_.progressiveLazyLoad();}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}});};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition();};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true;};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false;};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition();}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay();}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr('tabindex',0).focus();}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}});};Slick.prototype.preventDefault=function(event){event.preventDefault();};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageSrcSet=image.attr('data-srcset');imageSizes=image.attr('data-sizes')||_.$slider.attr('data-sizes');imageToLoad=document.createElement('img');imageToLoad.onload=function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}image.attr('src',imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');if(_.options.adaptiveHeight===true){_.setPosition();}_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad();};imageToLoad.onerror=function(){if(tryCount<3){/**
                         * try to load the image 3 times,
                         * leave a slight delay so we don't get
                         * servers blocking the request.
                         */setTimeout(function(){_.progressiveLazyLoad(tryCount+1);},500);}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad();}};imageToLoad.src=imageSource;}else{_.$slider.trigger('allImagesLoaded',[_]);}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;// in non-infinite sliders, we don't want to go past the
// last visible index.
if(!_.options.infinite&&_.currentSlide>lastVisibleIndex){_.currentSlide=lastVisibleIndex;}// if less slides than to show, go to start.
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:'index',index:currentSlide}},false);}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;// loop through the breakpoints and cut out any existing
// ones with the same breakpoint number, we don't want dupes.
while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1);}l--;}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings;}}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a;});}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll;}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_]);};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition();}},50);}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==='boolean'){removeBefore=index;index=removeBefore===true?0:_.slideCount-1;}else{index=removeBefore===true?--index:index;}if(_.slideCount<1||index<0||index>_.slideCount-1){return false;}_.unload();if(removeAll===true){_.$slideTrack.children().remove();}else{_.$slideTrack.children(this.options.slide).eq(index).remove();}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position;}x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps);}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps);}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps);}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:'0px '+_.options.centerPadding});}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:_.options.centerPadding+' 0px'});}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children('.slick-slide').length));}else if(_.options.variableWidth===true){_.$slideTrack.width(5000*_.slideCount);}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true)*_.$slideTrack.children('.slick-slide').length));}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset);};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1;if(_.options.rtl===true){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}else{$(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1});};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height',targetHeight);}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){/**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple';}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive';}else if(typeof arguments[1]!=='undefined'){type='single';}}if(type==='single'){_.options[option]=value;}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val;});}else if(type==='responsive'){for(item in value){if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]];}else{l=_.options.responsive.length-1;// loop through the responsive object and splice out duplicates.
while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1);}l--;}_.options.responsive.push(value[item]);}}}if(refresh){_.unload();_.reinit();}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide));}else{_.setFade();}_.$slider.trigger('setPosition',[_]);};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical');}else{_.$slider.removeClass('slick-vertical');}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true;}}if(_.options.fade){if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3){_.options.zIndex=3;}}else{_.options.zIndex=_.defaults.zIndex;}}if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false;}if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=false;}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType='transform';_.transformType='transform';_.transitionType='transition';}_.transformsEnabled=_.options.useTransform&&_.animType!==null&&_.animType!==false;};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=_.slideCount-1-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false');}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false');}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center');}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass('slick-center');}}_.$slides.eq(index).addClass('slick-center');}else{if(index>=0&&index<=_.slideCount-_.options.slidesToShow){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false');}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false');}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}}}if(_.options.lazyLoad==='ondemand'||_.options.lazyLoad==='anticipated'){_.lazyLoad();}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false;}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1;}else{infiniteCount=_.options.slidesToShow;}for(i=_.slideCount;i>_.slideCount-infiniteCount;i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');}_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','');});}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay();}_.interrupted=toggle;};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide');var index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return;}_.slideHandler(index);};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return;}if(_.options.fade===true&&_.currentSlide===index){return;}if(sync===false){_.asNavFor(index);}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>_.slideCount-_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}if(_.options.autoplay){clearInterval(_.autoPlayTimer);}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-_.slideCount%_.options.slidesToScroll;}else{animSlide=_.slideCount+targetSlide;}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0;}else{animSlide=targetSlide-_.slideCount;}}else{animSlide=targetSlide;}_.animating=true;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide);}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}_.animateHeight();return;}if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide();}_.$slider.addClass('slick-loading');};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle);}if(swipeAngle<=45&&swipeAngle>=0){return _.options.rtl===false?'left':'right';}if(swipeAngle<=360&&swipeAngle>=315){return _.options.rtl===false?'left':'right';}if(swipeAngle>=135&&swipeAngle<=225){return _.options.rtl===false?'right':'left';}if(_.options.verticalSwiping===true){if(swipeAngle>=35&&swipeAngle<=135){return'down';}else{return'up';}}return'vertical';};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false;}_.interrupted=false;_.shouldClick=_.touchObject.swipeLength>10?false:true;if(_.touchObject.curX===undefined){return false;}if(_.touchObject.edgeHit===true){_.$slider.trigger('edge',[_,_.swipeDirection()]);}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case'left':case'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case'right':case'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction]);}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={};}}};Slick.prototype.swipeHandler=function(event){var _=this;if(_.options.swipe===false||'ontouchend'in document&&_.options.swipe===false){return;}else if(_.options.draggable===false&&event.type.indexOf('mouse')!==-1){return;}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;}switch(event.data.action){case'start':_.swipeStart(event);break;case'move':_.swipeMove(event);break;case'end':_.swipeEnd(event);break;}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false;}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false;}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength;}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault();}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if(_.currentSlide===0&&swipeDirection==='right'||_.currentSlide>=_.getDotCount()&&swipeDirection==='left'){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true;}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset;}else{_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset;}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset;}if(_.options.fade===true||_.options.touchMove===false){return false;}if(_.animating===true){_.swipeLeft=null;return false;}_.setCSS(_.swipeLeft);};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false;}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0];}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true;};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','');};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy();};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').end();_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active');}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true;}else{_.interrupted=false;}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=='object'||typeof opt=='undefined')_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret;}return _;};});/***/}),/***/"./node_modules/underscore/underscore.js":(/*!***********************************************!*\
      !*** ./node_modules/underscore/underscore.js ***!
      \***********************************************/ /***/(module,exports,__webpack_require__)=>{/* module decorator */module=__webpack_require__.nmd(module);var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){// Baseline setup
// --------------
// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root=typeof self=='object'&&self.self===self&&self||typeof __webpack_require__.g=='object'&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||this||{};// Save the previous value of the `_` variable.
var previousUnderscore=root._;// Save bytes in the minified (but not gzipped) version:
var ArrayProto=Array.prototype,ObjProto=Object.prototype;var SymbolProto=typeof Symbol!=='undefined'?Symbol.prototype:null;// Create quick reference variables for speed access to core prototypes.
var push=ArrayProto.push,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeCreate=Object.create;// Naked function reference for surrogate-prototype-swapping.
var Ctor=function(){};// Create a safe reference to the Underscore object for use below.
var _=function(obj){if(obj instanceof _)return obj;if(!(this instanceof _))return new _(obj);this._wrapped=obj;};// Export the Underscore object for **Node.js**, with
// backwards-compatibility for their old module API. If we're in
// the browser, add `_` as a global object.
// (`nodeType` is checked to ensure that `module`
// and `exports` are not HTML elements.)
if(true&&!exports.nodeType){if(true&&!module.nodeType&&module.exports){exports=module.exports=_;}exports._=_;}else{root._=_;}// Current version.
_.VERSION='1.9.1';// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var optimizeCb=function(func,context,argCount){if(context===void 0)return func;switch(argCount==null?3:argCount){case 1:return function(value){return func.call(context,value);};// The 2-argument case is omitted because we’re not using it.
case 3:return function(value,index,collection){return func.call(context,value,index,collection);};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection);};}return function(){return func.apply(context,arguments);};};var builtinIteratee;// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.
var cb=function(value,context,argCount){if(_.iteratee!==builtinIteratee)return _.iteratee(value,context);if(value==null)return _.identity;if(_.isFunction(value))return optimizeCb(value,context,argCount);if(_.isObject(value)&&!_.isArray(value))return _.matcher(value);return _.property(value);};// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only argCount argument.
_.iteratee=builtinIteratee=function(value,context){return cb(value,context,Infinity);};// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
var restArguments=function(func,startIndex){startIndex=startIndex==null?func.length-1:+startIndex;return function(){var length=Math.max(arguments.length-startIndex,0),rest=Array(length),index=0;for(;index<length;index++){rest[index]=arguments[index+startIndex];}switch(startIndex){case 0:return func.call(this,rest);case 1:return func.call(this,arguments[0],rest);case 2:return func.call(this,arguments[0],arguments[1],rest);}var args=Array(startIndex+1);for(index=0;index<startIndex;index++){args[index]=arguments[index];}args[startIndex]=rest;return func.apply(this,args);};};// An internal function for creating a new object that inherits from another.
var baseCreate=function(prototype){if(!_.isObject(prototype))return{};if(nativeCreate)return nativeCreate(prototype);Ctor.prototype=prototype;var result=new Ctor();Ctor.prototype=null;return result;};var shallowProperty=function(key){return function(obj){return obj==null?void 0:obj[key];};};var has=function(obj,path){return obj!=null&&hasOwnProperty.call(obj,path);};var deepGet=function(obj,path){var length=path.length;for(var i=0;i<length;i++){if(obj==null)return void 0;obj=obj[path[i]];}return length?obj:void 0;};// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
var MAX_ARRAY_INDEX=Math.pow(2,53)-1;var getLength=shallowProperty('length');var isArrayLike=function(collection){var length=getLength(collection);return typeof length=='number'&&length>=0&&length<=MAX_ARRAY_INDEX;};// Collection Functions
// --------------------
// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
_.each=_.forEach=function(obj,iteratee,context){iteratee=optimizeCb(iteratee,context);var i,length;if(isArrayLike(obj)){for(i=0,length=obj.length;i<length;i++){iteratee(obj[i],i,obj);}}else{var keys=_.keys(obj);for(i=0,length=keys.length;i<length;i++){iteratee(obj[keys[i]],keys[i],obj);}}return obj;};// Return the results of applying the iteratee to each element.
_.map=_.collect=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,results=Array(length);for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;results[index]=iteratee(obj[currentKey],currentKey,obj);}return results;};// Create a reducing function iterating left or right.
var createReduce=function(dir){// Wrap code that reassigns argument variables in a separate function than
// the one that accesses `arguments.length` to avoid a perf hit. (#1991)
var reducer=function(obj,iteratee,memo,initial){var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,index=dir>0?0:length-1;if(!initial){memo=obj[keys?keys[index]:index];index+=dir;}for(;index>=0&&index<length;index+=dir){var currentKey=keys?keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj);}return memo;};return function(obj,iteratee,memo,context){var initial=arguments.length>=3;return reducer(obj,optimizeCb(iteratee,context,4),memo,initial);};};// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
_.reduce=_.foldl=_.inject=createReduce(1);// The right-associative version of reduce, also known as `foldr`.
_.reduceRight=_.foldr=createReduce(-1);// Return the first value which passes a truth test. Aliased as `detect`.
_.find=_.detect=function(obj,predicate,context){var keyFinder=isArrayLike(obj)?_.findIndex:_.findKey;var key=keyFinder(obj,predicate,context);if(key!==void 0&&key!==-1)return obj[key];};// Return all the elements that pass a truth test.
// Aliased as `select`.
_.filter=_.select=function(obj,predicate,context){var results=[];predicate=cb(predicate,context);_.each(obj,function(value,index,list){if(predicate(value,index,list))results.push(value);});return results;};// Return all the elements for which a truth test fails.
_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(cb(predicate)),context);};// Determine whether all of the elements match a truth test.
// Aliased as `all`.
_.every=_.all=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(!predicate(obj[currentKey],currentKey,obj))return false;}return true;};// Determine if at least one element in the object matches a truth test.
// Aliased as `any`.
_.some=_.any=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(predicate(obj[currentKey],currentKey,obj))return true;}return false;};// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
_.contains=_.includes=_.include=function(obj,item,fromIndex,guard){if(!isArrayLike(obj))obj=_.values(obj);if(typeof fromIndex!='number'||guard)fromIndex=0;return _.indexOf(obj,item,fromIndex)>=0;};// Invoke a method (with arguments) on every item in a collection.
_.invoke=restArguments(function(obj,path,args){var contextPath,func;if(_.isFunction(path)){func=path;}else if(_.isArray(path)){contextPath=path.slice(0,-1);path=path[path.length-1];}return _.map(obj,function(context){var method=func;if(!method){if(contextPath&&contextPath.length){context=deepGet(context,contextPath);}if(context==null)return void 0;method=context[path];}return method==null?method:method.apply(context,args);});});// Convenience version of a common use case of `map`: fetching a property.
_.pluck=function(obj,key){return _.map(obj,_.property(key));};// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
_.where=function(obj,attrs){return _.filter(obj,_.matcher(attrs));};// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
_.findWhere=function(obj,attrs){return _.find(obj,_.matcher(attrs));};// Return the maximum element (or element-based computation).
_.max=function(obj,iteratee,context){var result=-Infinity,lastComputed=-Infinity,value,computed;if(iteratee==null||typeof iteratee=='number'&&typeof obj[0]!='object'&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value!=null&&value>result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(v,index,list){computed=iteratee(v,index,list);if(computed>lastComputed||computed===-Infinity&&result===-Infinity){result=v;lastComputed=computed;}});}return result;};// Return the minimum element (or element-based computation).
_.min=function(obj,iteratee,context){var result=Infinity,lastComputed=Infinity,value,computed;if(iteratee==null||typeof iteratee=='number'&&typeof obj[0]!='object'&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value!=null&&value<result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(v,index,list){computed=iteratee(v,index,list);if(computed<lastComputed||computed===Infinity&&result===Infinity){result=v;lastComputed=computed;}});}return result;};// Shuffle a collection.
_.shuffle=function(obj){return _.sample(obj,Infinity);};// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
_.sample=function(obj,n,guard){if(n==null||guard){if(!isArrayLike(obj))obj=_.values(obj);return obj[_.random(obj.length-1)];}var sample=isArrayLike(obj)?_.clone(obj):_.values(obj);var length=getLength(sample);n=Math.max(Math.min(n,length),0);var last=length-1;for(var index=0;index<n;index++){var rand=_.random(index,last);var temp=sample[index];sample[index]=sample[rand];sample[rand]=temp;}return sample.slice(0,n);};// Sort the object's values by a criterion produced by an iteratee.
_.sortBy=function(obj,iteratee,context){var index=0;iteratee=cb(iteratee,context);return _.pluck(_.map(obj,function(value,key,list){return{value:value,index:index++,criteria:iteratee(value,key,list)};}).sort(function(left,right){var a=left.criteria;var b=right.criteria;if(a!==b){if(a>b||a===void 0)return 1;if(a<b||b===void 0)return-1;}return left.index-right.index;}),'value');};// An internal function used for aggregate "group by" operations.
var group=function(behavior,partition){return function(obj,iteratee,context){var result=partition?[[],[]]:{};iteratee=cb(iteratee,context);_.each(obj,function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key);});return result;};};// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
_.groupBy=group(function(result,value,key){if(has(result,key))result[key].push(value);else result[key]=[value];});// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
_.indexBy=group(function(result,value,key){result[key]=value;});// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
_.countBy=group(function(result,value,key){if(has(result,key))result[key]++;else result[key]=1;});var reStrSymbol=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;// Safely create a real, live array from anything iterable.
_.toArray=function(obj){if(!obj)return[];if(_.isArray(obj))return slice.call(obj);if(_.isString(obj)){// Keep surrogate pair characters together
return obj.match(reStrSymbol);}if(isArrayLike(obj))return _.map(obj,_.identity);return _.values(obj);};// Return the number of elements in an object.
_.size=function(obj){if(obj==null)return 0;return isArrayLike(obj)?obj.length:_.keys(obj).length;};// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
_.partition=group(function(result,value,pass){result[pass?0:1].push(value);},true);// Array Functions
// ---------------
// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
_.first=_.head=_.take=function(array,n,guard){if(array==null||array.length<1)return n==null?void 0:[];if(n==null||guard)return array[0];return _.initial(array,array.length-n);};// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(n==null||guard?1:n)));};// Get the last element of an array. Passing **n** will return the last N
// values in the array.
_.last=function(array,n,guard){if(array==null||array.length<1)return n==null?void 0:[];if(n==null||guard)return array[array.length-1];return _.rest(array,Math.max(0,array.length-n));};// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array.
_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,n==null||guard?1:n);};// Trim out all falsy values from an array.
_.compact=function(array){return _.filter(array,Boolean);};// Internal implementation of a recursive `flatten` function.
var flatten=function(input,shallow,strict,output){output=output||[];var idx=output.length;for(var i=0,length=getLength(input);i<length;i++){var value=input[i];if(isArrayLike(value)&&(_.isArray(value)||_.isArguments(value))){// Flatten current level of array or arguments object.
if(shallow){var j=0,len=value.length;while(j<len)output[idx++]=value[j++];}else{flatten(value,shallow,strict,output);idx=output.length;}}else if(!strict){output[idx++]=value;}}return output;};// Flatten out an array, either recursively (by default), or just one level.
_.flatten=function(array,shallow){return flatten(array,shallow,false);};// Return a version of the array that does not contain the specified value(s).
_.without=restArguments(function(array,otherArrays){return _.difference(array,otherArrays);});// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
// Aliased as `unique`.
_.uniq=_.unique=function(array,isSorted,iteratee,context){if(!_.isBoolean(isSorted)){context=iteratee;iteratee=isSorted;isSorted=false;}if(iteratee!=null)iteratee=cb(iteratee,context);var result=[];var seen=[];for(var i=0,length=getLength(array);i<length;i++){var value=array[i],computed=iteratee?iteratee(value,i,array):value;if(isSorted&&!iteratee){if(!i||seen!==computed)result.push(value);seen=computed;}else if(iteratee){if(!_.contains(seen,computed)){seen.push(computed);result.push(value);}}else if(!_.contains(result,value)){result.push(value);}}return result;};// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
_.union=restArguments(function(arrays){return _.uniq(flatten(arrays,true,true));});// Produce an array that contains every item shared between all the
// passed-in arrays.
_.intersection=function(array){var result=[];var argsLength=arguments.length;for(var i=0,length=getLength(array);i<length;i++){var item=array[i];if(_.contains(result,item))continue;var j;for(j=1;j<argsLength;j++){if(!_.contains(arguments[j],item))break;}if(j===argsLength)result.push(item);}return result;};// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference=restArguments(function(array,rest){rest=flatten(rest,true,true);return _.filter(array,function(value){return!_.contains(rest,value);});});// Complement of _.zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
_.unzip=function(array){var length=array&&_.max(array,getLength).length||0;var result=Array(length);for(var index=0;index<length;index++){result[index]=_.pluck(array,index);}return result;};// Zip together multiple lists into a single array -- elements that share
// an index go together.
_.zip=restArguments(_.unzip);// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of _.pairs.
_.object=function(list,values){var result={};for(var i=0,length=getLength(list);i<length;i++){if(values){result[list[i]]=values[i];}else{result[list[i][0]]=list[i][1];}}return result;};// Generator function to create the findIndex and findLastIndex functions.
var createPredicateIndexFinder=function(dir){return function(array,predicate,context){predicate=cb(predicate,context);var length=getLength(array);var index=dir>0?0:length-1;for(;index>=0&&index<length;index+=dir){if(predicate(array[index],index,array))return index;}return-1;};};// Returns the first index on an array-like that passes a predicate test.
_.findIndex=createPredicateIndexFinder(1);_.findLastIndex=createPredicateIndexFinder(-1);// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
_.sortedIndex=function(array,obj,iteratee,context){iteratee=cb(iteratee,context,1);var value=iteratee(obj);var low=0,high=getLength(array);while(low<high){var mid=Math.floor((low+high)/2);if(iteratee(array[mid])<value)low=mid+1;else high=mid;}return low;};// Generator function to create the indexOf and lastIndexOf functions.
var createIndexFinder=function(dir,predicateFind,sortedIndex){return function(array,item,idx){var i=0,length=getLength(array);if(typeof idx=='number'){if(dir>0){i=idx>=0?idx:Math.max(idx+length,i);}else{length=idx>=0?Math.min(idx+1,length):idx+length+1;}}else if(sortedIndex&&idx&&length){idx=sortedIndex(array,item);return array[idx]===item?idx:-1;}if(item!==item){idx=predicateFind(slice.call(array,i,length),_.isNaN);return idx>=0?idx+i:-1;}for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir){if(array[idx]===item)return idx;}return-1;};};// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
_.indexOf=createIndexFinder(1,_.findIndex,_.sortedIndex);_.lastIndexOf=createIndexFinder(-1,_.findLastIndex);// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
_.range=function(start,stop,step){if(stop==null){stop=start||0;start=0;}if(!step){step=stop<start?-1:1;}var length=Math.max(Math.ceil((stop-start)/step),0);var range=Array(length);for(var idx=0;idx<length;idx++,start+=step){range[idx]=start;}return range;};// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
_.chunk=function(array,count){if(count==null||count<1)return[];var result=[];var i=0,length=array.length;while(i<length){result.push(slice.call(array,i,i+=count));}return result;};// Function (ahem) Functions
// ------------------
// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments.
var executeBound=function(sourceFunc,boundFunc,context,callingContext,args){if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);var self=baseCreate(sourceFunc.prototype);var result=sourceFunc.apply(self,args);if(_.isObject(result))return result;return self;};// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
_.bind=restArguments(function(func,context,args){if(!_.isFunction(func))throw new TypeError('Bind must be called on a function');var bound=restArguments(function(callArgs){return executeBound(func,bound,context,this,args.concat(callArgs));});return bound;});// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
_.partial=restArguments(function(func,boundArgs){var placeholder=_.partial.placeholder;var bound=function(){var position=0,length=boundArgs.length;var args=Array(length);for(var i=0;i<length;i++){args[i]=boundArgs[i]===placeholder?arguments[position++]:boundArgs[i];}while(position<arguments.length)args.push(arguments[position++]);return executeBound(func,bound,this,this,args);};return bound;});_.partial.placeholder=_;// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
_.bindAll=restArguments(function(obj,keys){keys=flatten(keys,false,false);var index=keys.length;if(index<1)throw new Error('bindAll must be passed function names');while(index--){var key=keys[index];obj[key]=_.bind(obj[key],obj);}});// Memoize an expensive function by storing its results.
_.memoize=function(func,hasher){var memoize=function(key){var cache=memoize.cache;var address=''+(hasher?hasher.apply(this,arguments):key);if(!has(cache,address))cache[address]=func.apply(this,arguments);return cache[address];};memoize.cache={};return memoize;};// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
_.delay=restArguments(function(func,wait,args){return setTimeout(function(){return func.apply(null,args);},wait);});// Defers a function, scheduling it to run after the current call stack has
// cleared.
_.defer=_.partial(_.delay,_,1);// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle=function(func,wait,options){var timeout,context,args,result;var previous=0;if(!options)options={};var later=function(){previous=options.leading===false?0:_.now();timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;};var throttled=function(){var now=_.now();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){if(timeout){clearTimeout(timeout);timeout=null;}previous=now;result=func.apply(context,args);if(!timeout)context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}return result;};throttled.cancel=function(){clearTimeout(timeout);previous=0;timeout=context=args=null;};return throttled;};// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
_.debounce=function(func,wait,immediate){var timeout,result;var later=function(context,args){timeout=null;if(args)result=func.apply(context,args);};var debounced=restArguments(function(args){if(timeout)clearTimeout(timeout);if(immediate){var callNow=!timeout;timeout=setTimeout(later,wait);if(callNow)result=func.apply(this,args);}else{timeout=_.delay(later,wait,this,args);}return result;});debounced.cancel=function(){clearTimeout(timeout);timeout=null;};return debounced;};// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
_.wrap=function(func,wrapper){return _.partial(wrapper,func);};// Returns a negated version of the passed-in predicate.
_.negate=function(predicate){return function(){return!predicate.apply(this,arguments);};};// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
_.compose=function(){var args=arguments;var start=args.length-1;return function(){var i=start;var result=args[start].apply(this,arguments);while(i--)result=args[i].call(this,result);return result;};};// Returns a function that will only be executed on and after the Nth call.
_.after=function(times,func){return function(){if(--times<1){return func.apply(this,arguments);}};};// Returns a function that will only be executed up to (but not including) the Nth call.
_.before=function(times,func){var memo;return function(){if(--times>0){memo=func.apply(this,arguments);}if(times<=1)func=null;return memo;};};// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
_.once=_.partial(_.before,2);_.restArguments=restArguments;// Object Functions
// ----------------
// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug=!{toString:null}.propertyIsEnumerable('toString');var nonEnumerableProps=['valueOf','isPrototypeOf','toString','propertyIsEnumerable','hasOwnProperty','toLocaleString'];var collectNonEnumProps=function(obj,keys){var nonEnumIdx=nonEnumerableProps.length;var constructor=obj.constructor;var proto=_.isFunction(constructor)&&constructor.prototype||ObjProto;// Constructor is a special case.
var prop='constructor';if(has(obj,prop)&&!_.contains(keys,prop))keys.push(prop);while(nonEnumIdx--){prop=nonEnumerableProps[nonEnumIdx];if(prop in obj&&obj[prop]!==proto[prop]&&!_.contains(keys,prop)){keys.push(prop);}}};// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
_.keys=function(obj){if(!_.isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)if(has(obj,key))keys.push(key);// Ahem, IE < 9.
if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};// Retrieve all the property names of an object.
_.allKeys=function(obj){if(!_.isObject(obj))return[];var keys=[];for(var key in obj)keys.push(key);// Ahem, IE < 9.
if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};// Retrieve the values of an object's properties.
_.values=function(obj){var keys=_.keys(obj);var length=keys.length;var values=Array(length);for(var i=0;i<length;i++){values[i]=obj[keys[i]];}return values;};// Returns the results of applying the iteratee to each element of the object.
// In contrast to _.map it returns an object.
_.mapObject=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=_.keys(obj),length=keys.length,results={};for(var index=0;index<length;index++){var currentKey=keys[index];results[currentKey]=iteratee(obj[currentKey],currentKey,obj);}return results;};// Convert an object into a list of `[key, value]` pairs.
// The opposite of _.object.
_.pairs=function(obj){var keys=_.keys(obj);var length=keys.length;var pairs=Array(length);for(var i=0;i<length;i++){pairs[i]=[keys[i],obj[keys[i]]];}return pairs;};// Invert the keys and values of an object. The values must be serializable.
_.invert=function(obj){var result={};var keys=_.keys(obj);for(var i=0,length=keys.length;i<length;i++){result[obj[keys[i]]]=keys[i];}return result;};// Return a sorted list of the function names available on the object.
// Aliased as `methods`.
_.functions=_.methods=function(obj){var names=[];for(var key in obj){if(_.isFunction(obj[key]))names.push(key);}return names.sort();};// An internal function for creating assigner functions.
var createAssigner=function(keysFunc,defaults){return function(obj){var length=arguments.length;if(defaults)obj=Object(obj);if(length<2||obj==null)return obj;for(var index=1;index<length;index++){var source=arguments[index],keys=keysFunc(source),l=keys.length;for(var i=0;i<l;i++){var key=keys[i];if(!defaults||obj[key]===void 0)obj[key]=source[key];}}return obj;};};// Extend a given object with all the properties in passed-in object(s).
_.extend=createAssigner(_.allKeys);// Assigns a given object with all the own properties in the passed-in object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
_.extendOwn=_.assign=createAssigner(_.keys);// Returns the first key on an object that passes a predicate test.
_.findKey=function(obj,predicate,context){predicate=cb(predicate,context);var keys=_.keys(obj),key;for(var i=0,length=keys.length;i<length;i++){key=keys[i];if(predicate(obj[key],key,obj))return key;}};// Internal pick helper function to determine if `obj` has key `key`.
var keyInObj=function(value,key,obj){return key in obj;};// Return a copy of the object only containing the whitelisted properties.
_.pick=restArguments(function(obj,keys){var result={},iteratee=keys[0];if(obj==null)return result;if(_.isFunction(iteratee)){if(keys.length>1)iteratee=optimizeCb(iteratee,keys[1]);keys=_.allKeys(obj);}else{iteratee=keyInObj;keys=flatten(keys,false,false);obj=Object(obj);}for(var i=0,length=keys.length;i<length;i++){var key=keys[i];var value=obj[key];if(iteratee(value,key,obj))result[key]=value;}return result;});// Return a copy of the object without the blacklisted properties.
_.omit=restArguments(function(obj,keys){var iteratee=keys[0],context;if(_.isFunction(iteratee)){iteratee=_.negate(iteratee);if(keys.length>1)context=keys[1];}else{keys=_.map(flatten(keys,false,false),String);iteratee=function(value,key){return!_.contains(keys,key);};}return _.pick(obj,iteratee,context);});// Fill in a given object with default properties.
_.defaults=createAssigner(_.allKeys,true);// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
_.create=function(prototype,props){var result=baseCreate(prototype);if(props)_.extendOwn(result,props);return result;};// Create a (shallow-cloned) duplicate of an object.
_.clone=function(obj){if(!_.isObject(obj))return obj;return _.isArray(obj)?obj.slice():_.extend({},obj);};// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
_.tap=function(obj,interceptor){interceptor(obj);return obj;};// Returns whether an object has a given set of `key:value` pairs.
_.isMatch=function(object,attrs){var keys=_.keys(attrs),length=keys.length;if(object==null)return!length;var obj=Object(object);for(var i=0;i<length;i++){var key=keys[i];if(attrs[key]!==obj[key]||!(key in obj))return false;}return true;};// Internal recursive comparison function for `isEqual`.
var eq,deepEq;eq=function(a,b,aStack,bStack){// Identical objects are equal. `0 === -0`, but they aren't identical.
// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
if(a===b)return a!==0||1/a===1/b;// `null` or `undefined` only equal to itself (strict comparison).
if(a==null||b==null)return false;// `NaN`s are equivalent, but non-reflexive.
if(a!==a)return b!==b;// Exhaust primitive checks
var type=typeof a;if(type!=='function'&&type!=='object'&&typeof b!='object')return false;return deepEq(a,b,aStack,bStack);};// Internal recursive comparison function for `isEqual`.
deepEq=function(a,b,aStack,bStack){// Unwrap any wrapped objects.
if(a instanceof _)a=a._wrapped;if(b instanceof _)b=b._wrapped;// Compare `[[Class]]` names.
var className=toString.call(a);if(className!==toString.call(b))return false;switch(className){// Strings, numbers, regular expressions, dates, and booleans are compared by value.
case'[object RegExp]':// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
case'[object String]':// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
// equivalent to `new String("5")`.
return''+a===''+b;case'[object Number]':// `NaN`s are equivalent, but non-reflexive.
// Object(NaN) is equivalent to NaN.
if(+a!==+a)return+b!==+b;// An `egal` comparison is performed for other numeric values.
return+a===0?1/+a===1/b:+a===+b;case'[object Date]':case'[object Boolean]':// Coerce dates and booleans to numeric primitive values. Dates are compared by their
// millisecond representations. Note that invalid dates with millisecond representations
// of `NaN` are not equivalent.
return+a===+b;case'[object Symbol]':return SymbolProto.valueOf.call(a)===SymbolProto.valueOf.call(b);}var areArrays=className==='[object Array]';if(!areArrays){if(typeof a!='object'||typeof b!='object')return false;// Objects with different constructors are not equivalent, but `Object`s or `Array`s
// from different frames are.
var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor)&&'constructor'in a&&'constructor'in b){return false;}}// Assume equality for cyclic structures. The algorithm for detecting cyclic
// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
// Initializing stack of traversed objects.
// It's done here since we only need them for objects and arrays comparison.
aStack=aStack||[];bStack=bStack||[];var length=aStack.length;while(length--){// Linear search. Performance is inversely proportional to the number of
// unique nested structures.
if(aStack[length]===a)return bStack[length]===b;}// Add the first object to the stack of traversed objects.
aStack.push(a);bStack.push(b);// Recursively compare objects and arrays.
if(areArrays){// Compare array lengths to determine if a deep comparison is necessary.
length=a.length;if(length!==b.length)return false;// Deep compare the contents, ignoring non-numeric properties.
while(length--){if(!eq(a[length],b[length],aStack,bStack))return false;}}else{// Deep compare objects.
var keys=_.keys(a),key;length=keys.length;// Ensure that both objects contain the same number of properties before comparing deep equality.
if(_.keys(b).length!==length)return false;while(length--){// Deep compare each member
key=keys[length];if(!(has(b,key)&&eq(a[key],b[key],aStack,bStack)))return false;}}// Remove the first object from the stack of traversed objects.
aStack.pop();bStack.pop();return true;};// Perform a deep comparison to check if two objects are equal.
_.isEqual=function(a,b){return eq(a,b);};// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
_.isEmpty=function(obj){if(obj==null)return true;if(isArrayLike(obj)&&(_.isArray(obj)||_.isString(obj)||_.isArguments(obj)))return obj.length===0;return _.keys(obj).length===0;};// Is a given value a DOM element?
_.isElement=function(obj){return!!(obj&&obj.nodeType===1);};// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
_.isArray=nativeIsArray||function(obj){return toString.call(obj)==='[object Array]';};// Is a given variable an object?
_.isObject=function(obj){var type=typeof obj;return type==='function'||type==='object'&&!!obj;};// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
_.each(['Arguments','Function','String','Number','Date','RegExp','Error','Symbol','Map','WeakMap','Set','WeakSet'],function(name){_['is'+name]=function(obj){return toString.call(obj)==='[object '+name+']';};});// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
if(!_.isArguments(arguments)){_.isArguments=function(obj){return has(obj,'callee');};}// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist=root.document&&root.document.childNodes;if(true&&typeof Int8Array!='object'&&typeof nodelist!='function'){_.isFunction=function(obj){return typeof obj=='function'||false;};}// Is a given object a finite number?
_.isFinite=function(obj){return!_.isSymbol(obj)&&isFinite(obj)&&!isNaN(parseFloat(obj));};// Is the given value `NaN`?
_.isNaN=function(obj){return _.isNumber(obj)&&isNaN(obj);};// Is a given value a boolean?
_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)==='[object Boolean]';};// Is a given value equal to null?
_.isNull=function(obj){return obj===null;};// Is a given variable undefined?
_.isUndefined=function(obj){return obj===void 0;};// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
_.has=function(obj,path){if(!_.isArray(path)){return has(obj,path);}var length=path.length;for(var i=0;i<length;i++){var key=path[i];if(obj==null||!hasOwnProperty.call(obj,key)){return false;}obj=obj[key];}return!!length;};// Utility Functions
// -----------------
// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
_.noConflict=function(){root._=previousUnderscore;return this;};// Keep the identity function around for default iteratees.
_.identity=function(value){return value;};// Predicate-generating functions. Often useful outside of Underscore.
_.constant=function(value){return function(){return value;};};_.noop=function(){};// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indexes.
_.property=function(path){if(!_.isArray(path)){return shallowProperty(path);}return function(obj){return deepGet(obj,path);};};// Generates a function for a given object that returns a given property.
_.propertyOf=function(obj){if(obj==null){return function(){};}return function(path){return!_.isArray(path)?obj[path]:deepGet(obj,path);};};// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
_.matcher=_.matches=function(attrs){attrs=_.extendOwn({},attrs);return function(obj){return _.isMatch(obj,attrs);};};// Run a function **n** times.
_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=optimizeCb(iteratee,context,1);for(var i=0;i<n;i++)accum[i]=iteratee(i);return accum;};// Return a random integer between min and max (inclusive).
_.random=function(min,max){if(max==null){max=min;min=0;}return min+Math.floor(Math.random()*(max-min+1));};// A (possibly faster) way to get the current timestamp as an integer.
_.now=Date.now||function(){return new Date().getTime();};// List of HTML entities for escaping.
var escapeMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;'};var unescapeMap=_.invert(escapeMap);// Functions for escaping and unescaping strings to/from HTML interpolation.
var createEscaper=function(map){var escaper=function(match){return map[match];};// Regexes for identifying a key that needs to be escaped.
var source='(?:'+_.keys(map).join('|')+')';var testRegexp=RegExp(source);var replaceRegexp=RegExp(source,'g');return function(string){string=string==null?'':''+string;return testRegexp.test(string)?string.replace(replaceRegexp,escaper):string;};};_.escape=createEscaper(escapeMap);_.unescape=createEscaper(unescapeMap);// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
_.result=function(obj,path,fallback){if(!_.isArray(path))path=[path];var length=path.length;if(!length){return _.isFunction(fallback)?fallback.call(obj):fallback;}for(var i=0;i<length;i++){var prop=obj==null?void 0:obj[path[i]];if(prop===void 0){prop=fallback;i=length;// Ensure we don't continue iterating.
}obj=_.isFunction(prop)?prop.call(obj):prop;}return obj;};// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+'';return prefix?prefix+id:id;};// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch=/(.)^/;// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes={"'":"'",'\\':'\\','\r':'r','\n':'n','\u2028':'u2028','\u2029':'u2029'};var escapeRegExp=/\\|'|\r|\n|\u2028|\u2029/g;var escapeChar=function(match){return'\\'+escapes[match];};// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
_.template=function(text,settings,oldSettings){if(!settings&&oldSettings)settings=oldSettings;settings=_.defaults({},settings,_.templateSettings);// Combine delimiters into one regular expression via alternation.
var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join('|')+'|$','g');// Compile the template source, escaping string literals appropriately.
var index=0;var source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){source+=text.slice(index,offset).replace(escapeRegExp,escapeChar);index=offset+match.length;if(escape){source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'";}else if(interpolate){source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";}else if(evaluate){source+="';\n"+evaluate+"\n__p+='";}// Adobe VMs need the match returned to produce the correct offset.
return match;});source+="';\n";// If a variable is not specified, place data values in local scope.
if(!settings.variable)source='with(obj||{}){\n'+source+'}\n';source="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+source+'return __p;\n';var render;try{render=new Function(settings.variable||'obj','_',source);}catch(e){e.source=source;throw e;}var template=function(data){return render.call(this,data,_);};// Provide the compiled source as a convenience for precompilation.
var argument=settings.variable||'obj';template.source='function('+argument+'){\n'+source+'}';return template;};// Add a "chain" function. Start chaining a wrapped Underscore object.
_.chain=function(obj){var instance=_(obj);instance._chain=true;return instance;};// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.
// Helper function to continue chaining intermediate results.
var chainResult=function(instance,obj){return instance._chain?_(obj).chain():obj;};// Add your own custom functions to the Underscore object.
_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];push.apply(args,arguments);return chainResult(this,func.apply(_,args));};});return _;};// Add all of the Underscore functions to the wrapper object.
_.mixin(_);// Add all mutator Array functions to the wrapper.
_.each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;method.apply(obj,arguments);if((name==='shift'||name==='splice')&&obj.length===0)delete obj[0];return chainResult(this,obj);};});// Add all accessor Array functions to the wrapper.
_.each(['concat','join','slice'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return chainResult(this,method.apply(this._wrapped,arguments));};});// Extracts the result from a wrapped and chained object.
_.prototype.value=function(){return this._wrapped;};// Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf=_.prototype.toJSON=_.prototype.value;_.prototype.toString=function(){return String(this._wrapped);};// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return _;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}})();/***/}),/***/"./node_modules/vanilla-lazyload/dist/lazyload.min.js":(/*!************************************************************!*\
      !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
      \************************************************************/ /***/function(module){!function(n,t){true?module.exports=t():0;}(this,function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);}return n;},n.apply(this,arguments);}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t);},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}});}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o});}window.dispatchEvent(e);},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",p="applied",m="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t);},k=function(n){return y(n,I);},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i);}(n,0,t);},A=function(n){return w(n,null);},L=function(n){return null===k(n);},O=function(n){return k(n)===h;},x=[v,b,p,m],C=function(n,t,e,i){n&&"function"==typeof n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i));},N=function(n,t){""!==t&&(o?n.classList.add(t):n.className+=(n.className?" ":"")+t);},M=function(n,t){""!==t&&(o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""));},z=function(n){return n.llTempImage;},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n);}},R=function(n,t){n&&(n.loadingCount+=t);},G=function(n,t){n&&(n.toLoadCount=t);},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e;},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t);},H=function(n,t){j(n).forEach(t);},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_];},S=function(n){return n[_];},U=function(n){return delete n[_];},$=function(n,t){if(!P(n)){var e={};t.forEach(function(t){e[t]=n.getAttribute(t);}),n[_]=e;}},q=function(n,t){if(P(n)){var e=S(n);t.forEach(function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t);}(n,t,e[t]);});}},K=function(n,t,e){N(n,t.class_applied),w(n,p),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e));},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e));},W=function(n,t,e){e&&n.setAttribute(t,e);},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src));},Y={IMG:function(n,t){D(n,function(n){$(n,B),X(n,t);}),$(n,B),X(n,t);},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src));},VIDEO:function(n,t){H(n,function(n){$(n,V),W(n,u,y(n,t.data_src));}),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load();},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src));}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0;}(t)||function(n){return n.toLoadCount>0;}(t)||C(n.callback_finish,t);},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e;},en=function(n,t,e){n.removeEventListener(t,e);},on=function(n){return!!n.llEvLisnrs;},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i);}delete n.llEvLisnrs;}},rn=function(n,t,e){!function(n){delete n.llTempImage;}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1);}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e);},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e);}(i,function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i);}(0,n,t,e),an(i);},function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,m),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i);}(0,n,t,e),an(i);});},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1;}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG");}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage});}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e));}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e));}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map(function(n){return"image-set(".concat(n,")");});n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map(function(n){return"-webkit-image-set(".concat(n,")");}),n.style.backgroundImage=a.join()),K(n,t,e);}}(n,t,e);}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e));}(n,t,e);}(n,t,e);},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d);},sn=function(n){D(n,function(n){q(n,B);}),q(n,B);},dn={IMG:sn,IFRAME:function(n){q(n,V);},VIDEO:function(n){H(n,function(n){q(n,V);}),q(n,F),n.load();},OBJECT:function(n){q(n,J);}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage;}}(n);})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error));}(n,t),A(n),U(n);},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype;},vn=function(n,t,e){n.forEach(function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0;}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0;}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e);}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i);}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v;}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,function(n){un(n);}),un(n);}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i));}(n,t,e,i),C(e.callback_exit,n,t,i));}(n.target,n,t,e);});},bn=function(n){return Array.prototype.slice.call(n);},pn=function(n){return n.container.querySelectorAll(n.elements_selector);},mn=function(n){return function(n){return k(n)===m;}(n);},hn=function(n,t){return function(n){return bn(n).filter(L);}(n||pn(t));},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver(function(e){vn(e,n,t);},function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"};}(n)));}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=pn(n),bn(e).filter(mn)).forEach(function(t){M(t,n.class_error),A(t);}),t.update();}(n,e);},window.addEventListener("online",e._onlineHandler));}(o,this),this.update(e);};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach(function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t);}(n,t),w(n,h);}(n,t,e);}),G(e,0);}(r,a,this):(o=r,function(n){n.disconnect();}(t=this._observer),function(n,t){t.forEach(function(t){n.observe(t);});}(t,o)):this.loadAll(r);},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),pn(this._settings).forEach(function(n){U(n);}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount;},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach(function(n){T(n,t),ln(n,e,t);});},restoreAll:function(){var n=this._settings;pn(n).forEach(function(t){fn(t,n);});}},En.load=function(n,t){var e=c(t);ln(n,e);},En.resetStatus=function(n){A(n);},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t);}(En,window.lazyLoadOptions),En;});/***/}),/***/"./node_modules/web-vitals/dist/web-vitals.js":(/*!****************************************************!*\
      !*** ./node_modules/web-vitals/dist/web-vitals.js ***!
      \****************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */getCLS:()=>(/* binding */s),/* harmony export */getFCP:()=>(/* binding */l),/* harmony export */getFID:()=>(/* binding */L),/* harmony export */getLCP:()=>(/* binding */T),/* harmony export */getTTFB:()=>(/* binding */b)/* harmony export */});var e,t,n,i,a=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)};},r=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver(function(e){return e.getEntries().map(t);});return n.observe({type:e,buffered:!0}),n;}}catch(e){}},o=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)));};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0);},c=function(e){addEventListener("pageshow",function(t){t.persisted&&e(t);},!0);},u="function"==typeof WeakSet?new WeakSet():new Set(),f=function(e,t,n){var i;return function(){t.value>=0&&(n||u.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)));};},s=function(e,t){var n,i=a("CLS",0),u=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n());},s=r("layout-shift",u);s&&(n=f(e,i,t),o(function(){s.takeRecords().map(u),n();}),c(function(){i=a("CLS",0),n=f(e,i,t);}));},m=-1,p=function(){return"hidden"===document.visibilityState?0:1/0;},v=function(){o(function(e){var t=e.timeStamp;m=t;},!0);},d=function(){return m<0&&(m=p(),v(),c(function(){setTimeout(function(){m=p(),v();},0);})),{get timeStamp(){return m;}};},l=function(e,t){var n,i=d(),o=a("FCP"),s=function(e){"first-contentful-paint"===e.name&&(p&&p.disconnect(),e.startTime<i.timeStamp&&(o.value=e.startTime,o.entries.push(e),u.add(o),n()));},m=performance.getEntriesByName("first-contentful-paint")[0],p=m?null:r("paint",s);(m||p)&&(n=f(e,o,t),m&&s(m),c(function(i){o=a("FCP"),n=f(e,o,t),requestAnimationFrame(function(){requestAnimationFrame(function(){o.value=performance.now()-i.timeStamp,u.add(o),n();});});}));},h={passive:!0,capture:!0},S=new Date(),y=function(i,a){e||(e=a,t=i,n=new Date(),w(removeEventListener),g());},g=function(){if(t>=0&&t<n-S){var a={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.forEach(function(e){e(a);}),i=[];}},E=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date():performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){y(e,t),a();},i=function(){a();},a=function(){removeEventListener("pointerup",n,h),removeEventListener("pointercancel",i,h);};addEventListener("pointerup",n,h),addEventListener("pointercancel",i,h);}(t,e):y(t,e);}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,E,h);});},L=function(n,s){var m,p=d(),v=a("FID"),l=function(e){e.startTime<p.timeStamp&&(v.value=e.processingStart-e.startTime,v.entries.push(e),u.add(v),m());},h=r("first-input",l);m=f(n,v,s),h&&o(function(){h.takeRecords().map(l),h.disconnect();},!0),h&&c(function(){var r;v=a("FID"),m=f(n,v,s),i=[],t=-1,e=null,w(addEventListener),r=l,i.push(r),g();});},T=function(e,t){var n,i=d(),s=a("LCP"),m=function(e){var t=e.startTime;t<i.timeStamp&&(s.value=t,s.entries.push(e)),n();},p=r("largest-contentful-paint",m);if(p){n=f(e,s,t);var v=function(){u.has(s)||(p.takeRecords().map(m),p.disconnect(),u.add(s),n());};["keydown","click"].forEach(function(e){addEventListener(e,v,{once:!0,capture:!0});}),o(v,!0),c(function(i){s=a("LCP"),n=f(e,s,t),requestAnimationFrame(function(){requestAnimationFrame(function(){s.value=performance.now()-i.timeStamp,u.add(s),n();});});});}},b=function(e){var t,n=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t;}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n);}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t);};/***/}),/***/"./node_modules/when-dom-ready/dist/index.es2015.js":(/*!**********************************************************!*\
      !*** ./node_modules/when-dom-ready/dist/index.es2015.js ***!
      \**********************************************************/ /***/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */"default":()=>__WEBPACK_DEFAULT_EXPORT__/* harmony export */});/* eslint no-void: "off" */ // Loaded ready states
var loadedStates=['interactive','complete'];// Return Promise
var whenDomReady=function whenDomReady(cb,doc){return new Promise(function(resolve){// Allow doc to be passed in as the lone first param
if(cb&&typeof cb!=='function'){doc=cb;cb=null;}// Use global document if we don't have one
doc=doc||window.document;// Handle DOM load
var done=function done(){return resolve(void(cb&&setTimeout(cb)));};// Resolve now if DOM has already loaded
// Otherwise wait for DOMContentLoaded
if(loadedStates.indexOf(doc.readyState)!==-1){done();}else{doc.addEventListener('DOMContentLoaded',done);}});};// Promise chain helper
whenDomReady.resume=function(doc){return function(val){return whenDomReady(doc).then(function(){return val;});};};/* harmony default export */const __WEBPACK_DEFAULT_EXPORT__=whenDomReady;/***/})/******/};/************************************************************************/ /******/ // The module cache
/******/var __webpack_module_cache__={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ // Check if module is in cache
/******/var cachedModule=__webpack_module_cache__[moduleId];/******/if(cachedModule!==undefined){/******/return cachedModule.exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=__webpack_module_cache__[moduleId]={/******/id:moduleId,/******/loaded:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/__webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.loaded=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=__webpack_modules__;/******/ /************************************************************************/ /******/ /* webpack/runtime/chunk loaded */ /******/(()=>{/******/var deferred=[];/******/__webpack_require__.O=(result,chunkIds,fn,priority)=>{/******/if(chunkIds){/******/priority=priority||0;/******/for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];/******/deferred[i]=[chunkIds,fn,priority];/******/return;/******/}/******/var notFulfilled=Infinity;/******/for(var i=0;i<deferred.length;i++){/******/var[chunkIds,fn,priority]=deferred[i];/******/var fulfilled=true;/******/for(var j=0;j<chunkIds.length;j++){/******/if((priority&1===0||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every(key=>__webpack_require__.O[key](chunkIds[j]))){/******/chunkIds.splice(j--,1);/******/}else{/******/fulfilled=false;/******/if(priority<notFulfilled)notFulfilled=priority;/******/}/******/}/******/if(fulfilled){/******/deferred.splice(i--,1);/******/var r=fn();/******/if(r!==undefined)result=r;/******/}/******/}/******/return result;/******/};/******/})();/******/ /******/ /* webpack/runtime/chunk prefetch function */ /******/(()=>{/******/__webpack_require__.F={};/******/__webpack_require__.E=chunkId=>{/******/Object.keys(__webpack_require__.F).map(key=>{/******/__webpack_require__.F[key](chunkId);/******/});/******/};/******/})();/******/ /******/ /* webpack/runtime/compat get default export */ /******/(()=>{/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=module=>{/******/var getter=module&&module.__esModule?/******/()=>module['default']:/******/()=>module;/******/__webpack_require__.d(getter,{a:getter});/******/return getter;/******/};/******/})();/******/ /******/ /* webpack/runtime/define property getters */ /******/(()=>{/******/ // define getter functions for harmony exports
/******/__webpack_require__.d=(exports,definition)=>{/******/for(var key in definition){/******/if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){/******/Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});/******/}/******/}/******/};/******/})();/******/ /******/ /* webpack/runtime/ensure chunk */ /******/(()=>{/******/__webpack_require__.f={};/******/ // This file contains only the entry chunk.
/******/ // The chunk loading function for additional chunks
/******/__webpack_require__.e=chunkId=>{/******/return Promise.all(Object.keys(__webpack_require__.f).reduce((promises,key)=>{/******/__webpack_require__.f[key](chunkId,promises);/******/return promises;/******/},[]));/******/};/******/})();/******/ /******/ /* webpack/runtime/get javascript chunk filename */ /******/(()=>{/******/ // This function allow to reference async chunks
/******/__webpack_require__.u=chunkId=>{/******/ // return url for filenames based on template
/******/return""+chunkId+".bundle.js";/******/};/******/})();/******/ /******/ /* webpack/runtime/get mini-css chunk filename */ /******/(()=>{/******/ // This function allow to reference async chunks
/******/__webpack_require__.miniCssF=chunkId=>{/******/ // return url for filenames based on template
/******/return""+chunkId+".styles.css";/******/};/******/})();/******/ /******/ /* webpack/runtime/global */ /******/(()=>{/******/__webpack_require__.g=function(){/******/if(typeof globalThis==='object')return globalThis;/******/try{/******/return this||new Function('return this')();/******/}catch(e){/******/if(typeof window==='object')return window;/******/}/******/}();/******/})();/******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/(()=>{/******/__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop);/******/})();/******/ /******/ /* webpack/runtime/load script */ /******/(()=>{/******/var inProgress={};/******/var dataWebpackPrefix="shopify-theme:";/******/ // loadScript function to load a script via script tag
/******/__webpack_require__.l=(url,done,key,chunkId)=>{/******/if(inProgress[url]){inProgress[url].push(done);return;}/******/var script,needAttach;/******/if(key!==undefined){/******/var scripts=document.getElementsByTagName("script");/******/for(var i=0;i<scripts.length;i++){/******/var s=scripts[i];/******/if(s.getAttribute("src")==url||s.getAttribute("data-webpack")==dataWebpackPrefix+key){script=s;break;}/******/}/******/}/******/if(!script){/******/needAttach=true;/******/script=document.createElement('script');/******/ /******/script.charset='utf-8';/******/script.timeout=120;/******/if(__webpack_require__.nc){/******/script.setAttribute("nonce",__webpack_require__.nc);/******/}/******/script.setAttribute("data-webpack",dataWebpackPrefix+key);/******/ /******/script.src=url;/******/}/******/inProgress[url]=[done];/******/var onScriptComplete=(prev,event)=>{/******/ // avoid mem leaks in IE.
/******/script.onerror=script.onload=null;/******/clearTimeout(timeout);/******/var doneFns=inProgress[url];/******/delete inProgress[url];/******/script.parentNode&&script.parentNode.removeChild(script);/******/doneFns&&doneFns.forEach(fn=>fn(event));/******/if(prev)return prev(event);/******/};/******/var timeout=setTimeout(onScriptComplete.bind(null,undefined,{type:'timeout',target:script}),120000);/******/script.onerror=onScriptComplete.bind(null,script.onerror);/******/script.onload=onScriptComplete.bind(null,script.onload);/******/needAttach&&document.head.appendChild(script);/******/};/******/})();/******/ /******/ /* webpack/runtime/make namespace object */ /******/(()=>{/******/ // define __esModule on exports
/******/__webpack_require__.r=exports=>{/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/})();/******/ /******/ /* webpack/runtime/node module decorator */ /******/(()=>{/******/__webpack_require__.nmd=module=>{/******/module.paths=[];/******/if(!module.children)module.children=[];/******/return module;/******/};/******/})();/******/ /******/ /* webpack/runtime/publicPath */ /******/(()=>{/******/__webpack_require__.p="";/******/})();/******/ /******/ /* webpack/runtime/css loading */ /******/(()=>{/******/if(typeof document==="undefined")return;/******/var createStylesheet=(chunkId,fullhref,oldTag,resolve,reject)=>{/******/var linkTag=document.createElement("link");/******/ /******/linkTag.rel="stylesheet";/******/linkTag.type="text/css";/******/if(__webpack_require__.nc){/******/linkTag.nonce=__webpack_require__.nc;/******/}/******/var onLinkComplete=event=>{/******/ // avoid mem leaks.
/******/linkTag.onerror=linkTag.onload=null;/******/if(event.type==='load'){/******/resolve();/******/}else{/******/var errorType=event&&event.type;/******/var realHref=event&&event.target&&event.target.href||fullhref;/******/var err=new Error("Loading CSS chunk "+chunkId+" failed.\n("+errorType+": "+realHref+")");/******/err.name="ChunkLoadError";/******/err.code="CSS_CHUNK_LOAD_FAILED";/******/err.type=errorType;/******/err.request=realHref;/******/if(linkTag.parentNode)linkTag.parentNode.removeChild(linkTag);/******/reject(err);/******/}/******/};/******/linkTag.onerror=linkTag.onload=onLinkComplete;/******/linkTag.href=fullhref;/******/ /******/ /******/if(oldTag){/******/oldTag.parentNode.insertBefore(linkTag,oldTag.nextSibling);/******/}else{/******/document.head.appendChild(linkTag);/******/}/******/return linkTag;/******/};/******/var findStylesheet=(href,fullhref)=>{/******/var existingLinkTags=document.getElementsByTagName("link");/******/for(var i=0;i<existingLinkTags.length;i++){/******/var tag=existingLinkTags[i];/******/var dataHref=tag.getAttribute("data-href")||tag.getAttribute("href");/******/if(tag.rel==="stylesheet"&&(dataHref===href||dataHref===fullhref))return tag;/******/}/******/var existingStyleTags=document.getElementsByTagName("style");/******/for(var i=0;i<existingStyleTags.length;i++){/******/var tag=existingStyleTags[i];/******/var dataHref=tag.getAttribute("data-href");/******/if(dataHref===href||dataHref===fullhref)return tag;/******/}/******/};/******/var loadStylesheet=chunkId=>{/******/return new Promise((resolve,reject)=>{/******/var href=__webpack_require__.miniCssF(chunkId);/******/var fullhref=__webpack_require__.p+href;/******/if(findStylesheet(href,fullhref))return resolve();/******/createStylesheet(chunkId,fullhref,null,resolve,reject);/******/});/******/};/******/ // object to store loaded CSS chunks
/******/var installedCssChunks={/******/"main":0/******/};/******/ /******/__webpack_require__.f.miniCss=(chunkId,promises)=>{/******/var cssChunks={"404":1,"src_scripts_modules_module-oneQuickShop_js":1,"product":1,"collection":1,"cart":1,"page.styles":1,"page.about":1,"blog":1,"article":1,"customers":1,"password":1,"page.store-locator":1};/******/if(installedCssChunks[chunkId])promises.push(installedCssChunks[chunkId]);/******/else if(installedCssChunks[chunkId]!==0&&cssChunks[chunkId]){/******/promises.push(installedCssChunks[chunkId]=loadStylesheet(chunkId).then(()=>{/******/installedCssChunks[chunkId]=0;/******/},e=>{/******/delete installedCssChunks[chunkId];/******/throw e;/******/}));/******/}/******/};/******/ /******/ // no hmr
/******/ /******/__webpack_require__.F.miniCss=chunkId=>{/******/if((!__webpack_require__.o(installedCssChunks,chunkId)||installedCssChunks[chunkId]===undefined)&&!/^(giftcard|vendors\-node_modules_panzoom_panzoom_dist_panzoom_es_js)$/.test(chunkId)){/******/installedCssChunks[chunkId]=null;/******/var link=document.createElement('link');/******/ /******/if(__webpack_require__.nc){/******/link.setAttribute("nonce",__webpack_require__.nc);/******/}/******/link.rel="prefetch";/******/link.as="style";/******/link.href=__webpack_require__.p+__webpack_require__.miniCssF(chunkId);/******/document.head.appendChild(link);/******/}/******/};/******/ /******/ // no preloaded
/******/})();/******/ /******/ /* webpack/runtime/jsonp chunk loading */ /******/(()=>{/******/ // no baseURI
/******/ /******/ // object to store loaded and loading chunks
/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/var installedChunks={/******/"main":0/******/};/******/ /******/__webpack_require__.f.j=(chunkId,promises)=>{/******/ // JSONP chunk loading for javascript
/******/var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:undefined;/******/if(installedChunkData!==0){// 0 means "already installed".
/******/ /******/ // a Promise means "currently loading".
/******/if(installedChunkData){/******/promises.push(installedChunkData[2]);/******/}else{/******/if(true){// all chunks have JS
/******/ // setup Promise in chunk cache
/******/var promise=new Promise((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]);/******/promises.push(installedChunkData[2]=promise);/******/ /******/ // start chunk loading
/******/var url=__webpack_require__.p+__webpack_require__.u(chunkId);/******/ // create error before stack unwound to get useful stacktrace later
/******/var error=new Error();/******/var loadingEnded=event=>{/******/if(__webpack_require__.o(installedChunks,chunkId)){/******/installedChunkData=installedChunks[chunkId];/******/if(installedChunkData!==0)installedChunks[chunkId]=undefined;/******/if(installedChunkData){/******/var errorType=event&&(event.type==='load'?'missing':event.type);/******/var realSrc=event&&event.target&&event.target.src;/******/error.message='Loading chunk '+chunkId+' failed.\n('+errorType+': '+realSrc+')';/******/error.name='ChunkLoadError';/******/error.type=errorType;/******/error.request=realSrc;/******/installedChunkData[1](error);/******/}/******/}/******/};/******/__webpack_require__.l(url,loadingEnded,"chunk-"+chunkId,chunkId);/******/}/******/}/******/}/******/};/******/ /******/__webpack_require__.F.j=chunkId=>{/******/if((!__webpack_require__.o(installedChunks,chunkId)||installedChunks[chunkId]===undefined)&&true){/******/installedChunks[chunkId]=null;/******/var link=document.createElement('link');/******/ /******/if(__webpack_require__.nc){/******/link.setAttribute("nonce",__webpack_require__.nc);/******/}/******/link.rel="prefetch";/******/link.as="script";/******/link.href=__webpack_require__.p+__webpack_require__.u(chunkId);/******/document.head.appendChild(link);/******/}/******/};/******/ /******/ // no preloaded
/******/ /******/ // no HMR
/******/ /******/ // no HMR manifest
/******/ /******/__webpack_require__.O.j=chunkId=>installedChunks[chunkId]===0;/******/ /******/ // install a JSONP callback for chunk loading
/******/var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{/******/var[chunkIds,moreModules,runtime]=data;/******/ // add "moreModules" to the modules object,
/******/ // then flag all "chunkIds" as loaded and fire callback
/******/var moduleId,chunkId,i=0;/******/if(chunkIds.some(id=>installedChunks[id]!==0)){/******/for(moduleId in moreModules){/******/if(__webpack_require__.o(moreModules,moduleId)){/******/__webpack_require__.m[moduleId]=moreModules[moduleId];/******/}/******/}/******/if(runtime)var result=runtime(__webpack_require__);/******/}/******/if(parentChunkLoadingFunction)parentChunkLoadingFunction(data);/******/for(;i<chunkIds.length;i++){/******/chunkId=chunkIds[i];/******/if(__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]){/******/installedChunks[chunkId][0]();/******/}/******/installedChunks[chunkId]=0;/******/}/******/return __webpack_require__.O(result);/******/};/******/ /******/var chunkLoadingGlobal=self["webpackChunkshopify_theme"]=self["webpackChunkshopify_theme"]||[];/******/chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0));/******/chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal));/******/})();/******/ /******/ /* webpack/runtime/startup prefetch */ /******/(()=>{/******/__webpack_require__.O(0,["main"],()=>{/******/["vendors-node_modules_panzoom_panzoom_dist_panzoom_es_js","src_scripts_modules_module-oneQuickShop_js","product","collection","giftcard","cart","page.styles","page.about","404","blog","article","customers","password","page.store-locator"].map(__webpack_require__.E);/******/},5);/******/})();/******/ /************************************************************************/var __webpack_exports__={};// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";/*!******************************!*\
      !*** ./src/scripts/index.js ***!
      \******************************/__webpack_require__.r(__webpack_exports__);/* harmony import */var _public_path__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./public-path */"./src/scripts/public-path.js");/* harmony import */var _public_path__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_public_path__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var intersection_observer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! intersection-observer */"./node_modules/intersection-observer/intersection-observer.js");/* harmony import */var intersection_observer__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var matchmedia_polyfill__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! matchmedia-polyfill */"./node_modules/matchmedia-polyfill/matchMedia.js");/* harmony import */var matchmedia_polyfill__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(matchmedia_polyfill__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var matchmedia_polyfill_matchMedia_addListener__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! matchmedia-polyfill/matchMedia.addListener */"./node_modules/matchmedia-polyfill/matchMedia.addListener.js");/* harmony import */var matchmedia_polyfill_matchMedia_addListener__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(matchmedia_polyfill_matchMedia_addListener__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _lib_media_check__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./lib/media-check */"./src/scripts/lib/media-check.js");/* harmony import */var _lib_media_check__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_lib_media_check__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _router__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./router */"./src/scripts/router.js");/* harmony import */var _modules_module_onePerformance__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./modules/module-onePerformance */"./src/scripts/modules/module-onePerformance.js");/* harmony import */var _styles_style_scss__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ../styles/style.scss */"./src/styles/style.scss");/*
        1R Scripts Entry
    */ /*
        Extending ORW object
    */ORW.utilities.mediaCheck=function(entryCallback,exitCallback){if(!entryCallback){entryCallback=function(){};}if(!exitCallback){exitCallback=function(){};}mediaCheck({media:ORW.breakpoint,entry:entryCallback,exit:exitCallback});};/*
        Global Function Calls
    */ORW.utilities.mediaCheck(function(){console.log('large screen');ORW.responsive='large';},function(){console.log('small screen');ORW.responsive='small';});/*
        1R Performance Injections
    */if(ORW.performance.webVitalsEnable){_modules_module_onePerformance__WEBPACK_IMPORTED_MODULE_6__["default"].init();}console.log('ORW Index JS loaded test 111');(0,_router__WEBPACK_IMPORTED_MODULE_5__["default"])();})();__webpack_exports__=__webpack_require__.O(__webpack_exports__);/******/})();