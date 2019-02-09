(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{163:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i}),t.d(a,"_frontmatter",function(){return u});var n=t(86),s=t.n(n),c=t(7),o=t.n(c),r=t(0),l=t.n(r),m=t(173),p=t(177),i=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return l.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:a},l.a.createElement(m.MDXTag,{name:"p",components:a},"Methods on instances allow you to control the tippy programmatically. See the\n",l.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/tippy-instance/"}},"Tippy Instance")," section for how to access a Tippy instance."),l.a.createElement(m.MDXTag,{name:"h3",components:a},"Show the tippy"),l.a.createElement(m.MDXTag,{name:"p",components:a},"Programmatically show the tippy at any time:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"show"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"h3",components:a},"Hide the tippy"),l.a.createElement(m.MDXTag,{name:"p",components:a},"Programmatically hide the tippy at any time:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"hide"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"For both the ",l.a.createElement("code",{className:"language-text"},"show()")," and ",l.a.createElement("code",{className:"language-text"},"hide()")," methods, you can pass a number in as an\nargument to use as the animation duration. This will override the instance's\noption."),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"show"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token number"},"1000"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token comment"},"// 1000ms"),"\n","instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"hide"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token number"},"0"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token comment"},"// 0ms")))),l.a.createElement(m.MDXTag,{name:"h3",components:a},"Disable the tippy"),l.a.createElement(m.MDXTag,{name:"p",components:a},"Temporarily prevent a tippy from showing or hiding:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"disable"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"Re-enable it with this method:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"enable"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"h3",components:a},"Destroy the tippy"),l.a.createElement(m.MDXTag,{name:"p",components:a},"To permanently destroy and clean up the instance, use this method:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"destroy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"The ",l.a.createElement("code",{className:"language-text"},"_tippy")," property is deleted from the reference element upon destruction."),l.a.createElement(m.MDXTag,{name:"p",components:a},"If you're destroying a delegate instance (i.e., one you created with the\n",l.a.createElement("code",{className:"language-text"},"target")," option), pass ",l.a.createElement("code",{className:"language-text"},"true")," as an argument to destroy all child instances that\nmay have been created too."),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"destroy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token boolean"},"true"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"h3",components:a},"Update the tippy"),l.a.createElement(m.MDXTag,{name:"p",components:a},"You can update any option after the instance has been created using the ",l.a.createElement("code",{className:"language-text"},"set()"),"\nmethod. Pass an object of new options in:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token keyword"},"set"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"arrow"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"true"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token definition property"},"animation"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'scale'"),l.a.createElement("span",{className:"token punctuation"},","),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"There is also a shortcut for updating the content:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"setContent"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'New content'"),l.a.createElement("span",{className:"token punctuation"},")")))))},a}(l.a.Component),u={}},172:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=r(t(0)),c=r(t(58)),o=r(t(1));function r(e){return e&&e.__esModule?e:{default:e}}var l=(0,c.default)({}),m=l.Provider,p=l.Consumer;a.withMDXComponents=function(e){return function(a){var t=a.components,c=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["components"]);return s.default.createElement(p,null,function(a){return s.default.createElement(e,n({components:t||a},c))})}};var i=function(e){var a=e.components,t=e.children;return s.default.createElement(m,{value:a},t)};i.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},a.default=i},173:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(175);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return c(n).default}});var s=t(172);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return c(s).default}})},175:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),c=t(0),o=m(c),r=m(t(176)),l=t(172);function m(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},i=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,c.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.parentName,s=e.props,c=void 0===s?{}:s,l=e.children,m=e.components,i=void 0===m?{}:m,u=e.Layout,g=e.layoutProps,d=i[t+"."+a]||i[a]||p[a]||a;return u?((0,r.default)(this,u),o.default.createElement(u,n({components:i},g),o.default.createElement(d,c,l))):o.default.createElement(d,c,l)}}]),a}();a.default=(0,l.withMDXComponents)(i)},176:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=m&&m(Object);e.exports=function e(a,t,i){if("string"!=typeof t){if(p){var u=m(t);u&&u!==p&&e(a,u,i)}var g=o(t);r&&(g=g.concat(r(t)));for(var d=0;d<g.length;++d){var h=g[d];if(!(n[h]||s[h]||i&&i[h])){var E=l(t,h);try{c(a,h,E)}catch(f){}}}return a}return a}}}]);
//# sourceMappingURL=component---src-pages-methods-mdx-394e4272dd9b49e50913.js.map