(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{304:function(module,exports,__webpack_require__){__webpack_require__(305),__webpack_require__(451),__webpack_require__(452),module.exports=__webpack_require__(604)},369:function(module,exports){},41:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return make}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),emotion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),$$default=_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.f(void 0,[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.m("default"),[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.i("Arial"),[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.o([5691738,.5]),0]]]),primaryStyle=_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.f(void 0,[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.m("primaryStyle"),[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.e([5194459,"000088"]),0]]),large=_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.f(void 0,[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.m("large"),[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.j([5691738,2]),0]]),medium=_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.f(void 0,[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.m("medium"),[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.j([5691738,1.6]),0]]),small=_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.f(void 0,[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.m("small"),[_ahrefs_bs_emotion_src_Emotion_bs_js__WEBPACK_IMPORTED_MODULE_1__.j([5691738,1.2]),0]]);function getClass(size){if(void 0===size)return"";switch(size){case 0:return large;case 1:return medium;case 2:return small}}function Typography(Props){Props.primary;var size=Props.size,match=Props.primary,primary=void 0!==match&&match,children=Props.children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:emotion__WEBPACK_IMPORTED_MODULE_2__.b($$default,getClass(size),primary?primaryStyle:"")},children)}var make=Typography;Typography.__docgenInfo={description:"",methods:[],displayName:"Typography"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Typography/Typography.bs.js"]={name:"Typography",docgenInfo:Typography.__docgenInfo,path:"src/Typography/Typography.bs.js"})},604:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(300);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(641)],module)}.call(this,__webpack_require__(605)(module))},641:function(module,exports,__webpack_require__){var map={"./ButtonShowcase.bs.js":644,"./CheckboxShowcase.bs.js":647,"./CodeShowcase.bs.js":646,"./RadioShowcase.bs.js":645,"./TextInputShowcase.bs.js":643,"./TypographyShowcase.bs.js":642};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=641},642:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"$$default",(function(){return $$default})),__webpack_require__.d(__webpack_exports__,"default",(function(){return $$default})),__webpack_require__.d(__webpack_exports__,"content",(function(){return content})),__webpack_require__.d(__webpack_exports__,"normal",(function(){return normal})),__webpack_require__.d(__webpack_exports__,"primary",(function(){return primary}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_src_Typography_Typography_bs_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),$$default={title:"Typo",excludeStories:["$$default","content"]},content="Hello World";function normal(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,void 0,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_Typography_Typography_bs_js__WEBPACK_IMPORTED_MODULE_1__.a,{size:0,children:content}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_Typography_Typography_bs_js__WEBPACK_IMPORTED_MODULE_1__.a,{size:1,children:content}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_Typography_Typography_bs_js__WEBPACK_IMPORTED_MODULE_1__.a,{size:2,children:content}))}function primary(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,void 0,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_Typography_Typography_bs_js__WEBPACK_IMPORTED_MODULE_1__.a,{primary:!0,size:0,children:content}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_Typography_Typography_bs_js__WEBPACK_IMPORTED_MODULE_1__.a,{primary:!0,size:1,children:content}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_Typography_Typography_bs_js__WEBPACK_IMPORTED_MODULE_1__.a,{primary:!0,size:2,children:content}))}normal.__docgenInfo={description:"",methods:[],displayName:"normal"},primary.__docgenInfo={description:"",methods:[],displayName:"primary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/TypographyShowcase.bs.js"]={name:"normal",docgenInfo:normal.__docgenInfo,path:"stories/TypographyShowcase.bs.js"}),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/TypographyShowcase.bs.js"]={name:"primary",docgenInfo:primary.__docgenInfo,path:"stories/TypographyShowcase.bs.js"})},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(3),curry=__webpack_require__(0),Emotion_bs=__webpack_require__(1),index_esm=__webpack_require__(16),Typography_bs=__webpack_require__(41),caml_option=__webpack_require__(6),defaultStyle=Emotion_bs.f(void 0,[Emotion_bs.m("defaultStyle"),[Emotion_bs.l([5691738,1]),[Emotion_bs.v(-1065951377),[Emotion_bs.j([5691738,1]),[Emotion_bs.q([5691738,.5],[5691738,1]),[Emotion_bs.o([5691738,.3]),[Emotion_bs.b([25096,3],12956715,[5194459,"333333"]),[Emotion_bs.d([25096,3]),[Emotion_bs.a([-878128972,[0,0,0,0]]),0]]]]]]]]]),primaryStyle=Emotion_bs.f(void 0,[Emotion_bs.m("primaryStyle"),[Emotion_bs.c([5194459,"000033"]),0]]),disabledStyle=Emotion_bs.f(void 0,[Emotion_bs.m("disabledStyle"),[Emotion_bs.p(.5),0]]);function createLabel(param){return void 0!==param?react.createElement(Typography_bs.a,{size:2,children:null},param,react.createElement("br",void 0)):null}function TextInput(Props){var value=Props.value,onChange=Props.onChange,match=Props.disabled,disabled=void 0!==match&&match,match$1=Props.primary,primary=void 0!==match$1&&match$1,label=Props.label,match$2=Props.type_,type_=void 0!==match$2?match$2:"text",match$3=Props.children,children=void 0!==match$3?caml_option.b(match$3):null,match$4=react.useState((function(){return""})),setInternalValue=match$4[1],onChange$1=void 0!==onChange?onChange:function($$event){return curry.a(setInternalValue,$$event.target.value)},value$1=void 0!==value?value:match$4[0];return react.createElement("label",{className:index_esm.b(disabled?disabledStyle:"")},createLabel(label),children,react.createElement("input",{className:index_esm.b(defaultStyle,primary?primaryStyle:""),disabled:disabled,type:type_,value:value$1,onChange:onChange$1}))}var make=TextInput;createLabel.__docgenInfo={description:"",methods:[],displayName:"createLabel"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TextInput/TextInput.bs.js"]={name:"createLabel",docgenInfo:createLabel.__docgenInfo,path:"src/TextInput/TextInput.bs.js"}),TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TextInput/TextInput.bs.js"]={name:"TextInput",docgenInfo:TextInput.__docgenInfo,path:"src/TextInput/TextInput.bs.js"}),__webpack_require__.d(__webpack_exports__,"$$default",(function(){return $$default})),__webpack_require__.d(__webpack_exports__,"default",(function(){return $$default})),__webpack_require__.d(__webpack_exports__,"normal",(function(){return normal}));var $$default={title:"TextInput",excludeStories:["$$default"]};function normal(){return react.createElement(make,{disabled:!1,primary:!1,label:"Sushi"})}normal.__docgenInfo={description:"",methods:[],displayName:"normal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/TextInputShowcase.bs.js"]={name:"normal",docgenInfo:normal.__docgenInfo,path:"stories/TextInputShowcase.bs.js"})},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(3),Emotion_bs=__webpack_require__(1),index_esm=__webpack_require__(16),$$default=Emotion_bs.f(void 0,[Emotion_bs.m("default"),[Emotion_bs.e([5194459,"000000"]),[Emotion_bs.q([5691738,.5],[5691738,2]),[Emotion_bs.o([5691738,.5]),[Emotion_bs.d([5691738,2]),[Emotion_bs.j([5691738,1]),[Emotion_bs.c([5194459,"000088"]),[Emotion_bs.g(-786317123),[Emotion_bs.a([5194459,"ffffff"]),[Emotion_bs.k(600),0]]]]]]]]]]),primaryStyle=Emotion_bs.f(void 0,[Emotion_bs.m("primaryStyle"),[Emotion_bs.e([5194459,"ffffff"]),[Emotion_bs.a([5194459,"000088"]),0]]]);function Button(Props){var match=Props.primary,primary=void 0!==match&&match,children=Props.children;return react.createElement("button",{className:index_esm.b($$default,primary?primaryStyle:"")},children)}var make=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.bs.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/Button/Button.bs.js"}),__webpack_require__.d(__webpack_exports__,"$$default",(function(){return ButtonShowcase_bs_$$default})),__webpack_require__.d(__webpack_exports__,"default",(function(){return ButtonShowcase_bs_$$default})),__webpack_require__.d(__webpack_exports__,"primary",(function(){return ButtonShowcase_bs_primary}));var ButtonShowcase_bs_$$default={title:"Button",excludeStories:["$$default"]};function ButtonShowcase_bs_primary(){return react.createElement(make,{primary:!1,children:"Hello"})}ButtonShowcase_bs_primary.__docgenInfo={description:"",methods:[],displayName:"primary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/ButtonShowcase.bs.js"]={name:"primary",docgenInfo:ButtonShowcase_bs_primary.__docgenInfo,path:"stories/ButtonShowcase.bs.js"})},645:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(22),__webpack_require__(15),__webpack_require__(27);var array=__webpack_require__(302),curry=__webpack_require__(0),react=__webpack_require__(3),Emotion_bs=__webpack_require__(1),index_esm=__webpack_require__(16),defaultStyle=Emotion_bs.f(void 0,[Emotion_bs.m("defaultStyle"),[Emotion_bs.b([25096,3],12956715,[5194459,"222222"]),[Emotion_bs.d([5691738,1]),[Emotion_bs.g(-786317123),[Emotion_bs.e([5194459,"ffffff"]),[Emotion_bs.s(98248149),[Emotion_bs.h(-147785676),[Emotion_bs.v([5691738,1]),[Emotion_bs.l([5691738,1]),[Emotion_bs.t(-922086728),0]]]]]]]]]]),checkStyle=Emotion_bs.f(void 0,[Emotion_bs.m("checkStyle"),[Emotion_bs.e([5194459,"000000"]),0]]),inputStyle=Emotion_bs.f(void 0,[Emotion_bs.m("inputStyle"),[Emotion_bs.u(-862584982),0]]);function Radio(Props){var values=Props.values,match=Props.defaultValue,defaultValue=void 0!==match?match:"",match$1=react.useState((function(){return defaultValue})),setCurrent=match$1[1],current=match$1[0];return react.createElement(react.Fragment,void 0,array.a((function(value){return react.createElement("label",void 0,react.createElement("input",{className:inputStyle,checked:current===value,type:"radio",value:value,onChange:function onChange(e){return curry.a(setCurrent,e.target.value)}}),react.createElement("span",{className:index_esm.b(defaultStyle,current===value?checkStyle:"")},"•"),"  "+value,react.createElement("br",void 0))}),values))}var make=Radio;Radio.__docgenInfo={description:"",methods:[],displayName:"Radio"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Radio/Radio.bs.js"]={name:"Radio",docgenInfo:Radio.__docgenInfo,path:"src/Radio/Radio.bs.js"}),__webpack_require__.d(__webpack_exports__,"$$default",(function(){return $$default})),__webpack_require__.d(__webpack_exports__,"default",(function(){return $$default})),__webpack_require__.d(__webpack_exports__,"normal",(function(){return normal}));var $$default={title:"Radio",excludeStories:["$$default"]};function normal(){return react.createElement(make,{values:["Toto","Tata","Titi"],defaultValue:"Tata"})}normal.__docgenInfo={description:"",methods:[],displayName:"normal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/RadioShowcase.bs.js"]={name:"normal",docgenInfo:normal.__docgenInfo,path:"stories/RadioShowcase.bs.js"})},646:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(3),Emotion_bs=__webpack_require__(1),index_esm=__webpack_require__(16),$$default=Emotion_bs.f(void 0,[Emotion_bs.m("default"),[Emotion_bs.q([5691738,.5],[5691738,1]),[Emotion_bs.i("Courier"),[Emotion_bs.b([25096,1],12956715,[5194459,"aaaaaa"]),[Emotion_bs.e([5194459,"555555"]),[Emotion_bs.a([5194459,"fafafa"]),[Emotion_bs.b([25096,1],12956715,[5194459,"999999"]),[Emotion_bs.d([25096,2]),0]]]]]]]]);function Code(Props){var children=Props.children;return react.createElement("div",{className:index_esm.b($$default)},children)}var make=Code;Code.__docgenInfo={description:"",methods:[],displayName:"Code"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Code/Code.bs.js"]={name:"Code",docgenInfo:Code.__docgenInfo,path:"src/Code/Code.bs.js"}),__webpack_require__.d(__webpack_exports__,"$$default",(function(){return CodeShowcase_bs_$$default})),__webpack_require__.d(__webpack_exports__,"default",(function(){return CodeShowcase_bs_$$default})),__webpack_require__.d(__webpack_exports__,"normal",(function(){return normal}));var CodeShowcase_bs_$$default={title:"Code",excludeStories:["$$default"]};function normal(){return react.createElement(make,{children:"yarn add @generous-folks/reason-ui"})}normal.__docgenInfo={description:"",methods:[],displayName:"normal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/CodeShowcase.bs.js"]={name:"normal",docgenInfo:normal.__docgenInfo,path:"stories/CodeShowcase.bs.js"})},647:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(3),curry=__webpack_require__(0),Emotion_bs=__webpack_require__(1),index_esm=__webpack_require__(16),caml_option=__webpack_require__(6),defaultStyle=Emotion_bs.f(void 0,[Emotion_bs.m("defaultStyle"),[Emotion_bs.b([25096,3],12956715,[5194459,"222222"]),[Emotion_bs.r(-1013592457),[Emotion_bs.n([25096,0]),[Emotion_bs.d([25096,3]),[Emotion_bs.g(-786317123),[Emotion_bs.e([5194459,"ffffff"]),[Emotion_bs.s(98248149),[Emotion_bs.h(-147785676),[Emotion_bs.v([5691738,1]),[Emotion_bs.l([5691738,1]),[Emotion_bs.t(-922086728),0]]]]]]]]]]]]),checkStyle=Emotion_bs.f(void 0,[Emotion_bs.m("checkStyle"),[Emotion_bs.e([5194459,"000000"]),0]]),disabledStyle=Emotion_bs.f(void 0,[Emotion_bs.m("disabledStyle"),[Emotion_bs.p(.5),0]]),inputStyle=Emotion_bs.f(void 0,[Emotion_bs.m("inputStyle"),[Emotion_bs.u(-862584982),0]]);function Checkbox(Props){var checked=Props.checked,onChange=Props.onChange,match=Props.disabled,disabled=void 0!==match&&match,match$1=Props.label,label=void 0!==match$1?match$1:"",match$2=Props.children,children=void 0!==match$2?caml_option.b(match$2):null,match$3=react.useState((function(){return!1})),setInternalChecked=match$3[1],internalChecked=match$3[0],onChange$1=void 0!==onChange?onChange:function(){return curry.a(setInternalChecked,(function(){return!internalChecked}))},checked$1=void 0!==checked?checked:internalChecked;return react.createElement("label",{className:index_esm.b(disabled?disabledStyle:"")},react.createElement("input",{className:inputStyle,checked:checked$1,disabled:disabled,type:"checkbox",onChange:onChange$1}),react.createElement("span",{className:index_esm.b(defaultStyle,checked$1?checkStyle:"")},"✓"),label,children)}var make=Checkbox;Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Checkbox/Checkbox.bs.js"]={name:"Checkbox",docgenInfo:Checkbox.__docgenInfo,path:"src/Checkbox/Checkbox.bs.js"});var Typography_bs=__webpack_require__(41);__webpack_require__.d(__webpack_exports__,"$$default",(function(){return $$default})),__webpack_require__.d(__webpack_exports__,"default",(function(){return $$default})),__webpack_require__.d(__webpack_exports__,"uncontrolled",(function(){return uncontrolled})),__webpack_require__.d(__webpack_exports__,"controlled",(function(){return controlled}));var $$default={title:"Checkbox",excludeStories:["$$default"]};function uncontrolled(){return react.createElement(make,{disabled:!1,children:react.createElement(Typography_bs.a,{size:2,children:"Hi there !"})})}function controlled(){return react.createElement(make,{checked:!0,disabled:!1,children:react.createElement(Typography_bs.a,{size:2,children:"I am controlled"})})}uncontrolled.__docgenInfo={description:"",methods:[],displayName:"uncontrolled"},controlled.__docgenInfo={description:"",methods:[],displayName:"controlled"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/CheckboxShowcase.bs.js"]={name:"uncontrolled",docgenInfo:uncontrolled.__docgenInfo,path:"stories/CheckboxShowcase.bs.js"}),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/CheckboxShowcase.bs.js"]={name:"controlled",docgenInfo:controlled.__docgenInfo,path:"stories/CheckboxShowcase.bs.js"})}},[[304,1,2]]]);
//# sourceMappingURL=main.140836080d842eaf8d92.bundle.js.map