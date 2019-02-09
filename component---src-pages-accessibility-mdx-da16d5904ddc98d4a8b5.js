(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return E}),t.d(a,"_frontmatter",function(){return N});var n=t(86),s=t.n(n),c=t(7),l=t.n(c),o=t(0),m=t.n(o),r=t(174),p=t(178),i=t(175),u=t(183),E=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return l()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:a},m.a.createElement(r.MDXTag,{name:"p",components:a},"It's recommended that tooltips are applied only to natively focusable elements\nlike ",m.a.createElement("code",{className:"language-text"},"<button>"),". Most screenreader software will not announce the tooltip on an\nelement like ",m.a.createElement("code",{className:"language-text"},"<div>"),"."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Non-interactive tooltips are accessible by default. The default trigger for\ntooltips is ",m.a.createElement("code",{className:"language-text"},'"mouseenter focus"'),". This means both a hover and focus via keyboard\nnavigation will trigger a tooltip."),m.a.createElement(r.MDXTag,{name:"p",components:a},"In addition, the reference element receives an ",m.a.createElement("code",{className:"language-text"},"aria-describedby")," attribute\n(configurable) once the tooltip is fully shown:"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},m.a.createElement("pre",{className:"language-html"},m.a.createElement("code",{className:"language-html"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",m.a.createElement("span",{className:"token attr-name"},"aria-describedby"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"tippy-1",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"Text",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"button"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"div")," ",m.a.createElement("span",{className:"token attr-name"},"id"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"tippy-1",m.a.createElement("span",{className:"token punctuation"},'"'))," ",m.a.createElement("span",{className:"token attr-name"},"role"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"tooltip",m.a.createElement("span",{className:"token punctuation"},'"'))," ",m.a.createElement("span",{className:"token attr-name"},"class"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"tippy-popper",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token comment"},"\x3c!-- inner elements --\x3e"),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"div"),m.a.createElement("span",{className:"token punctuation"},">"))))),m.a.createElement(r.MDXTag,{name:"p",components:a},"This allows screenreader software to announce the tooltip content describing the\nreference element. No work is required by you to achieve this functionality."),m.a.createElement(r.MDXTag,{name:"h3",components:a},"Interactivity"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Although non-interactive tooltips are accessible by default, making interactive\ntooltips accessible requires a bit of work by you."),m.a.createElement(r.MDXTag,{name:"p",components:a},"For UI elements like dropdowns, you should apply these attributes to the\nreference:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement("code",{className:"language-text"},'aria-haspopup="true"')),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement("code",{className:"language-text"},'aria-expanded="false"'))),m.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},m.a.createElement("pre",{className:"language-html"},m.a.createElement("code",{className:"language-html"},m.a.createElement("span",{className:"token comment"},"\x3c!-- The element should have its own wrapper. --\x3e"),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"div"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",m.a.createElement("span",{className:"token attr-name"},"aria-haspopup"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"true",m.a.createElement("span",{className:"token punctuation"},'"'))," ",m.a.createElement("span",{className:"token attr-name"},"aria-expanded"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"false",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"Text",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"button"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"div"),m.a.createElement("span",{className:"token punctuation"},">"))))),m.a.createElement(r.MDXTag,{name:"p",components:a},"The following options are recommended:"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'button'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",m.a.createElement("span",{className:"token definition property"},"interactive"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token boolean"},"true"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token comment"},"// `focus` is not suitable for buttons with dropdowns"),"\n","  ",m.a.createElement("span",{className:"token definition property"},"trigger"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'click'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token comment"},"// Don't announce the tooltip's contents when expanded"),"\n","  ",m.a.createElement("span",{className:"token definition property"},"aria"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token nil keyword"},"null"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token comment"},"// Important: the tooltip should be DIRECTLY after the reference element"),"\n","  ",m.a.createElement("span",{className:"token comment"},"// in the DOM source order, which is why it has its own wrapper element"),"\n","  ",m.a.createElement("span",{className:"token definition property"},"appendTo"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'parent'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token comment"},"// Let the user know the popup has been expanded"),"\n","  ",m.a.createElement("span",{className:"token function"},"onMount"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},m.a.createElement("span",{className:"token punctuation"},"{")," reference ",m.a.createElement("span",{className:"token punctuation"},"}")),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","reference",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token method function"},"setAttribute"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'aria-expanded'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token string"},"'true'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token function"},"onHide"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},m.a.createElement("span",{className:"token punctuation"},"{")," reference ",m.a.createElement("span",{className:"token punctuation"},"}")),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","reference",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token method function"},"setAttribute"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'aria-expanded'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token string"},"'false'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")))),m.a.createElement(i.c,null,m.a.createElement(i.a,null,"Click me then press Tab"),m.a.createElement(u.a,{text:"Press enter to click"})),m.a.createElement(r.MDXTag,{name:"p",components:a},"Using this technique, elements within the tippy can be tabbed to since they are\ndirectly after the reference element."),m.a.createElement(r.MDXTag,{name:"p",components:a},"It's also possible to change the ",m.a.createElement("code",{className:"language-text"},"role")," of the tippy to something other than\n",m.a.createElement("code",{className:"language-text"},'"tooltip"'),":"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'button'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",m.a.createElement("span",{className:"token definition property"},"role"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'menu'"),m.a.createElement("span",{className:"token punctuation"},","),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")))))},a}(m.a.Component),N={}},183:function(e,a,t){"use strict";var n=t(0),s=t.n(n),c=t(179),l=t(180),o=t(175),m=c.c.ul.withConfig({displayName:"Dropdown__List",componentId:"sc-1bayfxq-0"})(["margin:0;padding-left:0;list-style:none;text-align:left;"]),r=c.c.button.attrs({role:"menuitem"}).withConfig({displayName:"Dropdown__Reaction",componentId:"sc-1bayfxq-1"})(["background:none;border:none;font-size:22px;color:inherit;transition:transform 0.1s ease-out;transform:scale(1.0001);cursor:pointer;&:hover,&:focus{transform:scale(1.25);}"]),p=c.c.p.withConfig({displayName:"Dropdown__Text",componentId:"sc-1bayfxq-2"})(["margin:5px 0;color:#777;"]);function i(e){var a=e.text;return s.a.createElement(l.b,{content:s.a.createElement(s.a.Fragment,null,s.a.createElement(p,null,"Pick your reaction"),s.a.createElement("hr",null),s.a.createElement(m,null,s.a.createElement(r,{"aria-label":"React with thumbs up emoji"},s.a.createElement("span",{role:"img","aria-label":"Thumbs up"},"👍")),s.a.createElement(r,{"aria-label":"React with thumbs down emoji"},s.a.createElement("span",{role:"img","aria-label":"Thumbs down"},"👎")),s.a.createElement(r,{"aria-label":"React with heart emoji"},s.a.createElement("span",{role:"img","aria-label":"Heart"},"❤️")),s.a.createElement(r,{"aria-label":"React with crying with laughter emoji"},s.a.createElement("span",{role:"img","aria-label":"Crying with laughter"},"😂")),s.a.createElement(r,{"aria-label":"React with party emoji"},s.a.createElement("span",{role:"img","aria-label":"Party"},"🎉")))),interactive:!0,aria:null,animateFill:!1,placement:"bottom",distance:7,animation:"fade",theme:"light-border dropdown",trigger:"click",arrow:!0,appendTo:function(e){return e.parentNode},onMount:function(e){e.reference.setAttribute("aria-expanded","true")},onHide:function(e){e.reference.setAttribute("aria-expanded","false")}},s.a.createElement(o.a,{"aria-haspopup":"true","aria-expanded":"false"},a))}i.defaultProps={text:"Dropdown"},a.a=i}}]);
//# sourceMappingURL=component---src-pages-accessibility-mdx-da16d5904ddc98d4a8b5.js.map