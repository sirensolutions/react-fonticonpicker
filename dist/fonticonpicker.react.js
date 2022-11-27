/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0-siren-6
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2022 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("classnames"),require("react-transition-group"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","classnames","react-transition-group","react-dom"],t):"object"==typeof exports?exports.FontIconPicker=t(require("react"),require("prop-types"),require("classnames"),require("react-transition-group"),require("react-dom")):e.FontIconPicker=t(e.React,e.PropTypes,e.classNames,e.ReactTransitionGroup,e.ReactDOM)}(window,(function(e,t,r,n,a){return l=[function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return a(e);if(null!==t)return void 0!==e[t]?a(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);(n="function"==typeof Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))):n).forEach((function(t){var n,a;n=e,a=r[t=t],t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a}))}return e}({},e);return Object.keys(n).forEach((function(e){r=a(r).concat(a(n[e]))})),function(e){return a(new Set(e))}(r)},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&((e=a(e)).sort(),(t=a(t)).sort(),JSON.stringify(e)===JSON.stringify(t))},t.getOffset=function(e){e=e.getBoundingClientRect();var t=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+r,left:e.left+t}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(r<n)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.substringSearch=function(e,t){for(var r=e.toLowerCase(),n=t.toLowerCase().split(/-| |,|;|:/),a=0;a<n.length;a+=1)if(n[a].startsWith(r))return!0;return!1},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout((function(){return e.apply(n,a)}),t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r=((r=r(5))&&r.__esModule?r:{default:r}).default,t.default=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(0)),a=f(r(1)),o=f(r(2)),l=r(6),i=f(r(7)),u=f(r(8)),c=f(r(12)),s=r(3);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){t&&y(e.prototype,t),r&&y(e,r)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[];r=function(e){var t=r;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");function r(e){var t;if(this instanceof r)return this,e=(r.__proto__||Object.getPrototypeOf(r)).call(this,e),t=!e||"object"!==d(e)&&"function"!=typeof e?g(this):e,Object.defineProperty(g(t),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){e=e.target,t.isClickWithin(e)||t.closeDropdown()}}),Object.defineProperty(g(t),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&t.closeDropdown()}}),Object.defineProperty(g(t),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return"fipicon-angle-left"===e.className||"fipicon-angle-right"===e.className||"rfipicons__label"===e.className||t.fipButtonRef.current.contains(e)||t.fipDropDownRef.current&&t.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(t),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){t.setState((function(e){return t.handleDropDown(!e.isOpen,!1)}))}}),Object.defineProperty(g(t),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){t.handleDropDown(!1)}}),Object.defineProperty(g(t),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=r.getDerivedClassName("rfip",t.props.theme,t.props.isMulti,e),a.btnClass=r.getDerivedClassName("rfipbtn",t.props.theme,t.props.isMulti,e),a.ddClass=r.getDerivedClassName("rfipdropdown",t.props.theme,t.props.isMulti,e),n&&t.setState(a),a}}),Object.defineProperty(g(t),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var r;t.props.isMulti?(r=p(t.state.value)).includes(e)?(r=r.filter((function(t){return t!==e}))).length||(r=m):r.push(e):r=e===t.state.value?"":e,t.setState({value:r,isOpen:!t.props.closeOnSelect}),t.props.onChange(r)}}),Object.defineProperty(g(t),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=t.props.isMulti?t.state.value.filter((function(t){return t!==e})):r.getDerivedValue(n,t.props.isMulti);t.setState({value:n}),t.props.onChange(n)}}),Object.defineProperty(g(t),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){t.setState({currentPage:e})}}),Object.defineProperty(g(t),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){t.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(t),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){t.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(t),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach((function(t){e.style[t]=null}))}}),Object.defineProperty(g(t),"defaultIconRenderer",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return"class"===t.props.renderUsing?n.default.createElement("i",{className:e}):(e=h({},t.props.renderUsing,t.props.convertHex?(0,s.convertToHex)(e):e),n.default.createElement("i",e))}}),Object.defineProperty(g(t),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var r=e.childNodes[0];t.resetPortalStyle(r),e=getComputedStyle(r);t.fipPortalComputedStyle={height:e.height,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach((function(e){r.style[e]="0px"}))}}),Object.defineProperty(g(t),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){(e=e.childNodes[0]).style.maxHeight=t.fipPortalComputedStyle.height,e.style.paddingTop=t.fipPortalComputedStyle.paddingTop,e.style.paddingBottom=t.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(t),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){e=e.childNodes[0],t.resetPortalStyle(e),t.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&e.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(t),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){e=e.childNodes[0],t.resetPortalStyle(e);var r=getComputedStyle(e).height;e.style.maxHeight=r}}),Object.defineProperty(g(t),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){}}),t.fipButtonRef=n.default.createRef(),t.fipDropDownRef=n.default.createRef(),t.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},t.fipPortalComputedStyle=null,t;throw new TypeError("Cannot call a class as a function")}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),b(r,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n={};return n.elemClass=r.getDerivedClassName("rfip",e.theme,e.isMulti,t.isOpen),n.btnClass=r.getDerivedClassName("rfipbtn",e.theme,e.isMulti,t.isOpen),n.ddClass=r.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,t.isOpen),n.value=r.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=""),r}}]),b(r,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach((function(t){document.addEventListener(t,e.handleOuterClick,!1)})),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach((function(t){document.removeEventListener(t,e.handleOuterClick,!1)})),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"getIconRenderer",value:function(){return"function"==typeof this.props.renderFunc?this.props.renderFunc:this.defaultIconRenderer}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.getIconRenderer(),handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.getIconRenderer(),handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),r}(n.default.PureComponent);Object.defineProperty(r,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"}),Object.defineProperty(r,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(r,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),t.default=r},function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(0)),a=l(r(1)),o=l(r(2));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r=function(e){var t=r;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");function r(){var e,t=this,a=r;if(!(t instanceof a))throw new TypeError("Cannot call a class as a function");for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(void 0,(a=e=s(this,(t=r.__proto__||Object.getPrototypeOf(r)).call.apply(t,[this].concat(l))),Object.defineProperty(f(e),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){e.props.onClick()}}),Object.defineProperty(f(e),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(t){32!==t.keyCode&&13!==t.keyCode||e.props.onClick()}}),Object.defineProperty(f(e),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(t,r){t.stopPropagation(),e.props.handleDeleteValue(r)}}),Object.defineProperty(f(e),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(t,r){32!==t.keyCode&&13!==t.keyCode||e.props.handleDeleteValue(r)}}),Object.defineProperty(f(e),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},e.props.noSelectedPlaceholder)}}),a))}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),t=r,(e=[{key:"renderIcon",value:function(e){var t=this;return""===e||null==e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map((function(t){return e.renderIcon(t)})):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"renderCurrentSelection",value:function(){return!this.props.isMulti&&this.props.value?n.default.createElement("span",{className:"rfipbtn__selection"},this.props.value):n.default.createElement(n.default.Fragment,null)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons(),this.renderCurrentSelection()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(t.prototype,e),r}(n.default.PureComponent),Object.defineProperty(r,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}}),t.default=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(0)),a=c(r(1)),o=c(r(9)),l=c(r(10)),i=c(r(11)),u=r(3);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&d(e.prototype,t),r&&d(e,r)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r=function(e){var t=r;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");function r(e){var t;if(this instanceof r)return this,e=(r.__proto__||Object.getPrototypeOf(r)).call(this,e),t=!e||"object"!==s(e)&&"function"!=typeof e?h(this):e,Object.defineProperty(h(t),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){e=parseInt(e.target.value,10),Number.isNaN(e)&&(e=0),t.props.handleChangeCategory(e),t.props.handleChangePage(0)}}),Object.defineProperty(h(t),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){e=e.target.value,t.props.handleChangeSearch(e)}}),t.state={},t;throw new TypeError("Cannot call a class as a function")}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),p(r,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return{categories:t=null!==t?[e.allCatPlaceholder].concat(f(t)):t,searchString:e.currentSearch}}}]),p(r,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),r}(n.default.PureComponent),Object.defineProperty(r,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(r,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}}),t.default=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0));r=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){if(!t||"object"!==o(t)&&"function"!=typeof t){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}var u=function(e){var t=r;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");function r(){var e=this,t=r;if(e instanceof t)return i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments));throw new TypeError("Cannot call a class as a function")}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),t=r,(e=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map((function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)}))),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&l(t.prototype,e),r}(n.default.PureComponent);Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:r.default.func.isRequired,value:r.default.number.isRequired,categories:r.default.arrayOf(r.default.string).isRequired}}),t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0));r=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))}o.propTypes={handleSearch:r.default.func.isRequired,value:r.default.string.isRequired,placeholder:r.default.string.isRequired},t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),a=i(r(1)),o=i(r(2)),l=r(3);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){t&&s(e.prototype,t),r&&s(e,r)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r=function(e){var t=r;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");function r(e){var t;if(this instanceof r)return this,e=(r.__proto__||Object.getPrototypeOf(r)).call(this,e),t=!e||"object"!==u(e)&&"function"!=typeof e?d(this):e,Object.defineProperty(d(t),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=t.props.currentPage,a=t.state.totalPage;null!==r?"next"===r?n+=1:--n:n=parseInt(e.target.value,10)-1,e=(n=a-1<(n=n<0?0:n)?a-1:n)+1,null===r&&Number.isNaN(n)&&(n=0,e=""),t.setState({viewPage:e}),t.props.handleChangePage(n)}}),Object.defineProperty(d(t),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,r){13!==e.keyCode&&32!==e.keyCode||t.handleChangePage({},r)}}),Object.defineProperty(d(t),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){t.props.handleChangeValue(e)}}),Object.defineProperty(d(t),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,r){13!==e.keyCode&&32!==e.keyCode||t.handleChangeValue(r)}}),t.state={viewPage:t.props.currentPage+1},t;throw new TypeError("Cannot call a class as a function")}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),f(r,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=r.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=r.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=(a=(n=r.getActiveIcons(n,a,e.currentSearch)).activeIcons,n=n.activeTitles,e.currentPage),l=e.iconsPerPage;n={iconView:r.getCurrentViewIcons(a,l,o),titleView:r.getCurrentViewIcons(n,l,o),totalPage:Math.ceil(a.length/l)};return""!==t.viewPage&&(n.viewPage=e.currentPage+1),n}},{key:"getActiveIcons",value:function(e,t,r){e=c(e);var n=c(t);if(""===r||null===r)return{activeIcons:e,activeTitles:n};var a=[],o=[];return e.forEach((function(e,n){(0,l.substringSearch)(r,t[n])&&(a.includes(e)||a.push(e),o.includes(t[n])||o.push(t[n]))})),{activeIcons:a,activeTitles:o}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){return e.slice(r*t,(r+1)*t)}}]),f(r,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=0<this.props.currentPage?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return 0<this.state.totalPage?this.state.iconView.map((function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))})):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),r}(n.default.PureComponent),Object.defineProperty(r,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(r,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}}),t.default=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(0)),a=r(13),o=u(r(1)),l=u(r(2)),i=r(3);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){t&&s(e.prototype,t),r&&s(e,r)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r=function(e){var t=r;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");function r(e){var t;if(this instanceof r)return this,e=(r.__proto__||Object.getPrototypeOf(r)).call(this,e),t=!e||"object"!==c(e)&&"function"!=typeof e?d(this):e,Object.defineProperty(d(t),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){t.resetPortalPosition(),t.fixWindowOverflow()}}),Object.defineProperty(d(t),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=t.props.domRef.current.offsetWidth,r=t.props.domRef.current.offsetHeight,n=(a=window).innerWidth,a=a.pageYOffset,o=document.documentElement.clientHeight,l=(u=(0,i.getOffset)(t.props.domRef.current)).left,u=u.top,c="self"===t.state.appendRoot?t.props.domRef.current:t.state.appendRoot,s=(c=(0,i.getOffset)(c),t.props.btnRef.current),f=t.props.domRef.current,d=(0,i.getOffset)(s);s=getComputedStyle(s),s=(parseInt(s.borderTop,10)||0)+(parseInt(s.borderBottom,10)||0);n-20<l+e&&((n=d.left+t.props.btnRef.current.offsetWidth-(e+c.left))+c.left<0&&(n=10-c.left),f.style.left="".concat(n,"px")),o<r+u-a&&0<d.top-r&&("self"===t.state.appendRoot?f.style.top="-".concat(r-s,"px"):f.style.top="".concat(d.top+s-r,"px"))}}),t.state={},t.debouncedSyncPortalPosition=(0,i.debounce)(t.syncPortalPosition,250),t;throw new TypeError("Cannot call a class as a function")}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),f(r,null,[{key:"calculateAppendAndClass",value:function(e){var t="self";return{portalClasses:(0,l.default)({"rfipdropdown--portal":!1!==e}),appendRoot:t=!1!==e?document.querySelector(e):t}}},{key:"getDerivedStateFromProps",value:function(e){return{appendRoot:(e=r.calculateAppendAndClass(e.appendRoot)).appendRoot,portalClasses:e.portalClasses}}}]),f(r,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display,t=(this.props.domRef.current.style.display="none",this.props.btnRef.current),r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot);t=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+t,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses);e=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?e:(0,a.createPortal)(e,this.state.appendRoot)}}]),r}(n.default.PureComponent),Object.defineProperty(r,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(r,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}}),t.default=r},function(e,t){e.exports=a}],i={},o.m=l,o.c=i,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4).default;function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var l,i}));
//# sourceMappingURL=fonticonpicker.react.js.map