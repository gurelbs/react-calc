(this["webpackJsonpreact-calc"]=this["webpackJsonpreact-calc"]||[]).push([[0],{14:function(e,_,t){},5:function(e,_,t){"use strict";t.d(_,"a",(function(){return l}));var a=t(0),c=t.n(a);function l(e){var _=function(_){var t=_.target.value;e.btnClick(t)};return c.a.createElement("div",{class:"calc-container container-fluid bg-dark text-light text-center"},c.a.createElement("div",{class:"align-items-center h-100 w-50 row mx-auto"},c.a.createElement("div",{class:"col"},c.a.createElement("div",{class:"calculator card"},c.a.createElement("input",{type:"text",class:"calculator-screen z-depth-1",value:e.valueInput,disabled:!0}),c.a.createElement("div",{class:"calculator-keys"},c.a.createElement("button",{onClick:_,type:"button",class:"operator btn btn-info",value:"+"},"+"),c.a.createElement("button",{onClick:_,type:"button",class:"operator btn btn-info",value:"-"},"-"),c.a.createElement("button",{onClick:_,type:"button",class:"operator btn btn-info",value:"*"},"\xd7"),c.a.createElement("button",{onClick:_,type:"button",class:"operator btn btn-info",value:"/"},"\xf7"),c.a.createElement("button",{onClick:_,type:"button",value:"7",class:"btn btn-dark waves-effect"},"7"),c.a.createElement("button",{onClick:_,type:"button",value:"8",class:"btn btn-dark waves-effect"},"8"),c.a.createElement("button",{onClick:_,type:"button",value:"9",class:"btn btn-dark waves-effect"},"9"),c.a.createElement("button",{onClick:_,type:"button",value:"4",class:"btn btn-dark waves-effect"},"4"),c.a.createElement("button",{onClick:_,type:"button",value:"5",class:"btn btn-dark waves-effect"},"5"),c.a.createElement("button",{onClick:_,type:"button",value:"6",class:"btn btn-dark waves-effect"},"6"),c.a.createElement("button",{onClick:_,type:"button",value:"1",class:"btn btn-dark waves-effect"},"1"),c.a.createElement("button",{onClick:_,type:"button",value:"2",class:"btn btn-dark waves-effect"},"2"),c.a.createElement("button",{onClick:_,type:"button",value:"3",class:"btn btn-dark waves-effect"},"3"),c.a.createElement("button",{onClick:_,type:"button",value:"0",class:"btn btn-dark waves-effect"},"0"),c.a.createElement("button",{onClick:_,type:"button",class:"decimal function btn btn-secondary",value:"."},"."),c.a.createElement("button",{onClick:_,type:"button",class:"all-clear function btn btn-danger btn-sm",value:"all-clear"},"AC"),c.a.createElement("button",{onClick:_,type:"button",class:"equal-sign operator btn btn-outline-success",value:"="},"="))))))}},8:function(e,_,t){e.exports=t(9)},9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var C_Users_GUR_Desktop_react_calc_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_GUR_Desktop_react_calc_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_GUR_Desktop_react_calc_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_Users_GUR_Desktop_react_calc_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),react_dom__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__),_style_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14),_style_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__),_components_Calc__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5),App=function(_Component){Object(C_Users_GUR_Desktop_react_calc_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(C_Users_GUR_Desktop_react_calc_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(C_Users_GUR_Desktop_react_calc_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={result:" "},_this.btnPressed=function(value){console.log(value);try{"="===value?_this.setState({result:eval(_this.state.result)}):"all-clear"===value?_this.setState({result:" "}):void 0===value?_this.setState({result:value}):_this.setState({result:_this.state.result+value})}catch(error){console.log(error)}},_this}return Object(C_Users_GUR_Desktop_react_calc_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Calc__WEBPACK_IMPORTED_MODULE_7__.a,{btnClick:this.btnPressed,valueInput:" "===this.state.result?0:this.state.result})}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(App,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.b6c426a4.chunk.js.map