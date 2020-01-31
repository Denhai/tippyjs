(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{S4hi:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return l}));t("rGqo"),t("q1tI");var n=t("7ljp"),s=t("7oih");t("qKvR");function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const o={},b={_frontmatter:o},m=s.a;function l(e){let{components:a}=e,t=c(e,["components"]);return Object(n.b)(m,p({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Tooltip and popovers are usually not mouse-only UI elements. If vital\nfunctionality or information is contained within them, they should be accessible\nto keyboard and touch inputs so that users who navigate interfaces without using\na mouse are not locked out. This is especially true for people with disabilities\nsuch as low vision who rely on screen reader technology to assist them with\nusing an application."),Object(n.b)("p",null,"To ensure these users get the best possible experience, Tippy already employs\nbaked-in defaults to ensure accessibility. However, some special consideration\nshould be taken into account when using the library so you can be aware of\npotential accessibility problems that may arise."),Object(n.b)("h3",null,"Use natively focusable elements"),Object(n.b)("p",null,"Tooltips should only be applied to natively focusable elements like ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<button>"),"\nor ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<input>"),". If you are using a ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<div>")," or ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<span>")," element, ensure you add\n",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),'tabindex="0"')," so that it can receive focus."),Object(n.b)("h3",null,"Mouse, keyboard, and touch input"),Object(n.b)("p",null,"The default trigger for tooltips is ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),'"mouseenter focus"')," This means both a hover\nvia mouse and focus via keyboard navigation will trigger a tooltip. Both of\nthese events also cover touch devices via a tap, with some mobile browsers\nfiring ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"mouseenter")," and others ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"focus")," (or both)."),Object(n.b)("h3",null,"Announcing tooltip content"),Object(n.b)("p",null,"Non-interactive tooltips give the reference element an ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"aria-describedby"),"\nattribute once they show:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",p({parentName:"div"},{className:"language-html"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"aria-describedby"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"tippy-1",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"Text",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"id"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"tippy-1",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"role"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"tooltip",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"class"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"tippy-popper",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.b)("span",p({parentName:"code"},{className:"token comment"}),"\x3c!-- inner elements --\x3e"),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.b)("p",null,"This allows screen reader software to announce the tooltip content describing\nthe reference element once it's in focus."),Object(n.b)("h3",null,"Interactivity"),Object(n.b)("p",null,"Tippy uses two techniques to ensure interactive popovers are accessible:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",p({parentName:"li"},{className:"language-text"}),"aria-expanded")," attribute"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",p({parentName:"li"},{className:"language-text"}),'appendTo: "parent"'))),Object(n.b)("p",null,"This means once the reference element has focus, the assistive technology will\nlet the user know it has an expandable popover attached to it."),Object(n.b)("p",null,"Once they open it, elements within the tippy can be tabbed to immediately once\nfocus has left the reference element. This relies on there being no more\nfocusable sibling elements after the reference element itself."),Object(n.b)("p",null,"Before opening the popover:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",p({parentName:"div"},{className:"language-html"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"id"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"parent",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"aria-expanded"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"false",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"Text",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.b)("p",null,"After opening the popover:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",p({parentName:"div"},{className:"language-html"}),Object(n.b)("code",p({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"id"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"parent",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"aria-expanded"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"true",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"Text",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"id"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"tippy-1",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"role"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"tooltip",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(n.b)("span",p({parentName:"span"},{className:"token attr-name"}),"class"),Object(n.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"tippy-popper",Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(n.b)("span",p({parentName:"code"},{className:"token comment"}),"\x3c!-- inner elements, with focusable content --\x3e"),"\n  ",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",p({parentName:"code"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token tag"}),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.b)("span",p({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.b)("p",null,"You should wrap the reference element in its own parent element (",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<div>")," or\n",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"<span>"),") if it's not the only focusable sibling element."),Object(n.b)("h4",null,"Clipping issues"),Object(n.b)("p",null,"Sometimes, this behavior won't work for your app due to clipping issues. In this\ncase, you need to specify a custom ",Object(n.b)("code",p({parentName:"p"},{className:"language-text"}),"appendTo")," element outside of the parent node\ncontext and use a focus management solution to handle keyboard navigation.\n",Object(n.b)("a",p({parentName:"p"},{href:"/tippyjs/faq/#my-tooltip-appears-cut-off-or-is-not-showing-at-all"}),"More details here"),"."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-accessibility-mdx-4609fa7b7fae7ead8fed.js.map