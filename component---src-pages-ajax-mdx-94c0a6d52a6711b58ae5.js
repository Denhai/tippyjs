(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{171:function(e,a,t){"use strict";t.r(a);var n=t(86),s=t.n(n),c=t(7),o=t.n(c),r=t(0),l=t.n(r),m=t(173),i=t(177),p=t(179),u=t(221),E=t.n(u),h=(t(186),t(223)),N=t.n(h),k=t(174);function g(e){var a=e.children;return l.a.createElement(p.b,{content:"Loading...",animation:"fade",animateFill:!1,onShow:function(){var e=N()(E.a.mark(function e(a){var t,n,s,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.ajax||(a.state.ajax={isFetching:!1,canFetch:!0}),!a.state.ajax.isFetching&&a.state.ajax.canFetch){e.next=3;break}return e.abrupt("return");case 3:return a.state.ajax.isFetching=!0,a.state.ajax.canFetch=!1,e.prev=5,e.next=8,fetch("https://unsplash.it/200/?random");case 8:return t=e.sent,e.next=11,t.blob();case 11:n=e.sent,s=URL.createObjectURL(n),a.state.isVisible&&((c=new Image).width=200,c.height=200,c.src=s,c.style.display="block",a.setContent(c)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),a.setContent("Fetch failed. "+e.t0);case 19:return e.prev=19,a.state.ajax.isFetching=!1,e.finish(19);case 22:case"end":return e.stop()}},e,this,[[5,16,19,22]])}));return function(a){return e.apply(this,arguments)}}(),onHidden:function(e){e.state.ajax.canFetch=!0,e.setContent("Loading...")}},l.a.createElement(k.a,null,a))}g.defaultProps={withoutState:!1};var f=g,d=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(a=e.call.apply(e,[this].concat(n))||this).state={isFetching:!1,canFetch:!0,imageURL:null,showImage:!1},a.onShow=function(e){if(!0!==a.state.isFetching&&!1!==a.state.canFetch){a.setState({isFetching:!0,canFetch:!1,showImage:!1});var t=e.popper,n=e.popperChildren,s=n.tooltip,c=n.content;s.style.transitionDuration="0.2s",t.style.width="200px",fetch("https://unsplash.it/200/?random").then(function(e){return e.blob()}).then(function(n){if(a.setState({isFetching:!1,imageURL:URL.createObjectURL(n)}),e.state.isVisible){e._transitionEndListener||(e._transitionEndListener=function(e){e.target===e.currentTarget&&"height"===e.propertyName&&(c.style.opacity="1",a.setState({showImage:!0}))}),s.addEventListener("transitionend",e._transitionEndListener),e._baseHeight||(e._baseHeight=s.clientHeight||30),c.style.opacity="0";t.style.height="200px",s.style.height=e._baseHeight+"px",s.offsetHeight,s.style.height="200px",e.setContent("")}}).catch(function(){a.setState({isFetching:!1})})}},a.onHidden=function(e){a.setState({canFetch:!0,imageURL:null});var t=e.popperChildren.tooltip;t.style.height=null,t.removeEventListener("transitionend",e._transitionEndListener),e._transitionEndListener=null},a}return o()(a,e),a.prototype.render=function(){var e=this.state,a=e.imageURL,t=e.showImage;return l.a.createElement(p.b,{content:t?l.a.createElement("img",{src:a,alt:"Unsplash"}):l.a.createElement("div",{style:{margin:5}},"Loading..."),animation:"fade",animateFill:!1,duration:200,theme:"ajax",onShow:this.onShow,onHidden:this.onHidden,trigger:"click"},l.a.createElement(k.a,null,"Smooth transition"))},a}(r.Component);t.d(a,"default",function(){return y}),t.d(a,"_frontmatter",function(){return w});var y=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=i.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return l.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:a},l.a.createElement(m.MDXTag,{name:"p",components:a},"Initiating AJAX requests is facilitated by lifecycle functions:"),l.a.createElement(m.MDXTag,{name:"ul",components:a},l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement("code",{className:"language-text"},"onShow()")),l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement("code",{className:"language-text"},"onMount()")),l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement("code",{className:"language-text"},"onShown()")),l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement("code",{className:"language-text"},"onHide()")),l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement("code",{className:"language-text"},"onHidden()"))),l.a.createElement(m.MDXTag,{name:"p",components:a},"This allows you to do very powerful things. For example, let's say you wanted to\nshow a new image inside a tooltip each time it gets shown:"),l.a.createElement(k.c,null,l.a.createElement(f,null,"Hover for a new image")),l.a.createElement(m.MDXTag,{name:"p",components:a},"Let's walk through a little tutorial to learn how to do this."),l.a.createElement(m.MDXTag,{name:"p",components:a},"First, let's setup our HTML:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",{className:"language-html"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",l.a.createElement("span",{className:"token attr-name"},"id"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"ajax-tippy",l.a.createElement("span",{className:"token punctuation"},'"')),l.a.createElement("span",{className:"token punctuation"},">")),"Hover for a new image",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"button"),l.a.createElement("span",{className:"token punctuation"},">"))))),l.a.createElement(m.MDXTag,{name:"p",components:a},"Now, let's add some JavaScript:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'#ajax-tippy'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"content"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'Loading...'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token definition property"},"animateFill"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"false"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token definition property"},"animation"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'fade'"),l.a.createElement("span",{className:"token punctuation"},","),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"Here's the result so far:"),l.a.createElement(k.c,null,l.a.createElement(p.b,{content:"Loading...",animation:"fade",animateFill:!1},l.a.createElement(k.a,null,"Hover for a new image"))),l.a.createElement(m.MDXTag,{name:"p",components:a},"To initiate the AJAX request every time the tippy shows, use the ",l.a.createElement("code",{className:"language-text"},"onShow"),"\nlifecycle:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'#ajax-tippy'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"content"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'Loading...'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token definition property"},"animateFill"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"false"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token definition property"},"animation"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'fade'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token function"},"onShow"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"instance"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.a.createElement("span",{className:"token comment"},"// Code here is executed every time the tippy shows"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"Modern browsers support the ",l.a.createElement("code",{className:"language-text"},"fetch")," API, so we'll use it for this example\nbecause it's cleaner than ",l.a.createElement("code",{className:"language-text"},"XMLHttpRequest"),". We are using an Unsplash API to\nfetch a random 200x200 image:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'#ajax-tippy'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token comment"},"// ..."),"\n","  ",l.a.createElement("span",{className:"token function"},"onShow"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"instance"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.a.createElement("span",{className:"token function"},"fetch"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'https://unsplash.it/200/?random'"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"then"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"response")," ",l.a.createElement("span",{className:"token arrow operator"},"=>")," response",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"blob"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"then"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"blob")," ",l.a.createElement("span",{className:"token arrow operator"},"=>")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",l.a.createElement("span",{className:"token comment"},"// Convert the blob into a URL"),"\n","        ",l.a.createElement("span",{className:"token keyword"},"const")," url ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token constant"},"URL"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"createObjectURL"),l.a.createElement("span",{className:"token punctuation"},"("),"blob",l.a.createElement("span",{className:"token punctuation"},")"),"\n","        ",l.a.createElement("span",{className:"token comment"},"// Create an image"),"\n","        ",l.a.createElement("span",{className:"token keyword"},"const")," image ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token op keyword"},"new")," ",l.a.createElement("span",{className:"token class-name"},"Image"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")"),"\n","        ","image",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"width")," ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token number"},"200"),"\n","        ","image",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"height")," ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token number"},"200"),"\n","        ","image",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"style"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"display")," ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token string"},"'block'"),"\n","        ","image",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"src")," ",l.a.createElement("span",{className:"token operator"},"=")," url","\n","        ",l.a.createElement("span",{className:"token comment"},"// Update the tippy content with the image"),"\n","        ","instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"setContent"),l.a.createElement("span",{className:"token punctuation"},"("),"image",l.a.createElement("span",{className:"token punctuation"},")"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(k.c,null,l.a.createElement(p.b,{content:"Loading...",animation:"fade",animateFill:!1,onShow:function(e){fetch("https://unsplash.it/200/?random").then(function(e){return e.blob()}).then(function(a){var t=URL.createObjectURL(a),n=new Image;n.width=200,n.height=200,n.style.display="block",n.src=t,e.setContent(n)}).catch(function(a){e.setContent("Request failed. "+a)})}},l.a.createElement(k.a,null,"Hover for a new image"))),l.a.createElement(m.MDXTag,{name:"p",components:a},"There are currently two problems with this:"),l.a.createElement(m.MDXTag,{name:"ul",components:a},l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"When the tippy is hidden, it doesn't reset back to ",l.a.createElement("code",{className:"language-text"},"Loading...")),l.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"If you quickly hover in and out of the tippy, it initiates many different\nrequests and each image rapidly replaces the old one as each request finishes.")),l.a.createElement(m.MDXTag,{name:"p",components:a},"The first one can be solved by using the ",l.a.createElement("code",{className:"language-text"},"onHidden")," lifecycle, which is executed\nonce the tippy fully transitions out and is unmounted from the DOM:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'#ajax-tippy'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token comment"},"// ..."),"\n","  ",l.a.createElement("span",{className:"token function"},"onHidden"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"instance"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"setContent"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'Loading...'"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"The second one is trickier and requires using state. This will let us know the\ncurrent condition the tooltip is in."),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'#ajax-tippy'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token comment"},"// ..."),"\n","  ",l.a.createElement("span",{className:"token function"},"onShow"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"instance"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.a.createElement("span",{className:"token comment"},"// We can monkey-patch the instance's state object with our own state"),"\n","    ",l.a.createElement("span",{className:"token keyword"},"if")," ",l.a.createElement("span",{className:"token punctuation"},"("),"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"state"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"ajax")," ",l.a.createElement("span",{className:"token operator"},"===")," ",l.a.createElement("span",{className:"token nil keyword"},"undefined"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"state"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"ajax")," ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",l.a.createElement("span",{className:"token definition property"},"isFetching"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"false"),l.a.createElement("span",{className:"token punctuation"},","),"\n","        ",l.a.createElement("span",{className:"token definition property"},"canFetch"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"true"),l.a.createElement("span",{className:"token punctuation"},","),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n","    ",l.a.createElement("span",{className:"token comment"},"// Now we will avoid initiating a new request unless the old one"),"\n","    ",l.a.createElement("span",{className:"token comment"},"// finished (`isFetching`)."),"\n","    ",l.a.createElement("span",{className:"token comment"},"// We also only want to initiate a request if the tooltip has been"),"\n","    ",l.a.createElement("span",{className:"token comment"},"// reset back to Loading... (`canFetch`)."),"\n","    ",l.a.createElement("span",{className:"token keyword"},"if")," ",l.a.createElement("span",{className:"token punctuation"},"("),"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"state"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"ajax"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"isFetching")," ",l.a.createElement("span",{className:"token operator"},"||")," ",l.a.createElement("span",{className:"token operator"},"!"),"instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"state"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"ajax"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"canFetch"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",l.a.createElement("span",{className:"token flow keyword"},"return"),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n","    ",l.a.createElement("span",{className:"token function"},"fetch"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'https://unsplash.it/200/?random'"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"then"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"response")," ",l.a.createElement("span",{className:"token arrow operator"},"=>")," response",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"blob"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"then"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"blob")," ",l.a.createElement("span",{className:"token arrow operator"},"=>")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",l.a.createElement("span",{className:"token comment"},"// ..."),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token keyword"},"catch"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"error")," ",l.a.createElement("span",{className:"token arrow operator"},"=>")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",l.a.createElement("span",{className:"token comment"},"// ..."),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token keyword"},"finally"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token arrow operator"},"=>")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",l.a.createElement("span",{className:"token comment"},"// Make sure to set it back to false so new requests can be"),"\n","        ",l.a.createElement("span",{className:"token comment"},"// initiated"),"\n","        ","instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"state"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"ajax"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"isFetching")," ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token boolean"},"false"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token function"},"onHidden"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token parameter"},"instance"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token method function"},"setContent"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'Loading...'"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","    ","instance",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"state"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"ajax"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"canFetch")," ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token boolean"},"true"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"We use state to keep track of the request's status. Without the state booleans,\nunexpected effects may occur, such as initiating too many requests before\nwaiting for the previous one to finish, or showing new images before the tooltip\nhides and resets back to ",l.a.createElement("code",{className:"language-text"},"Loading..."),', both of which appear "buggy".'),l.a.createElement(m.MDXTag,{name:"p",components:a},"Currently, the image instantly replaces the ",l.a.createElement("code",{className:"language-text"},"Loading...")," text without any smooth\ntransition. How do we make it so the tooltip smoothly transitions in height?"),l.a.createElement(k.c,null,l.a.createElement(d,null)),l.a.createElement(m.MDXTag,{name:"p",components:a},"To look at example code solving this dynamically (i.e. not knowing the height of\nthe image or initial size of the tooltip) view the\n",l.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://codepen.io/atomiks/pen/LgjMbW"}},"CodePen demo"),"."))},a}(l.a.Component),w={}},186:function(e,a){!function(a){"use strict";var t,n=Object.prototype,s=n.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},o=c.iterator||"@@iterator",r=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag",m="object"==typeof e,i=a.regeneratorRuntime;if(i)m&&(e.exports=i);else{(i=a.regeneratorRuntime=m?e.exports:{}).wrap=y;var p="suspendedStart",u="suspendedYield",E="executing",h="completed",N={},k={};k[o]=function(){return this};var g=Object.getPrototypeOf,f=g&&g(g(D([])));f&&f!==n&&s.call(f,o)&&(k=f);var d=x.prototype=v.prototype=Object.create(k);b.prototype=d.constructor=x,x.constructor=b,x[l]=b.displayName="GeneratorFunction",i.isGeneratorFunction=function(e){var a="function"==typeof e&&e.constructor;return!!a&&(a===b||"GeneratorFunction"===(a.displayName||a.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(d),e},i.awrap=function(e){return{__await:e}},L(j.prototype),j.prototype[r]=function(){return this},i.AsyncIterator=j,i.async=function(e,a,t,n){var s=new j(y(e,a,t,n));return i.isGeneratorFunction(a)?s:s.next().then(function(e){return e.done?e.value:s.next()})},L(d),d[l]="Generator",d[o]=function(){return this},d.toString=function(){return"[object Generator]"},i.keys=function(e){var a=[];for(var t in e)a.push(t);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},i.values=D,X.prototype={constructor:X,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var a in this)"t"===a.charAt(0)&&s.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function n(n,s){return r.type="throw",r.arg=e,a.next=n,s&&(a.method="next",a.arg=t),!!s}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],r=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=s.call(o,"catchLoc"),m=s.call(o,"finallyLoc");if(l&&m){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,a){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=a&&a<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=a,c?(this.method="next",this.next=c.finallyLoc,N):this.complete(o)},complete:function(e,a){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&a&&(this.next=a),N},finish:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),M(t),N}},catch:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var s=n.arg;M(t)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,n){return this.delegate={iterator:D(e),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=t),N}}}function y(e,a,t,n){var s=a&&a.prototype instanceof v?a:v,c=Object.create(s.prototype),o=new X(n||[]);return c._invoke=function(e,a,t){var n=p;return function(s,c){if(n===E)throw new Error("Generator is already running");if(n===h){if("throw"===s)throw c;return _()}for(t.method=s,t.arg=c;;){var o=t.delegate;if(o){var r=F(o,t);if(r){if(r===N)continue;return r}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===p)throw n=h,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=E;var l=w(e,a,t);if("normal"===l.type){if(n=t.done?h:u,l.arg===N)continue;return{value:l.arg,done:t.done}}"throw"===l.type&&(n=h,t.method="throw",t.arg=l.arg)}}}(e,t,o),c}function w(e,a,t){try{return{type:"normal",arg:e.call(a,t)}}catch(n){return{type:"throw",arg:n}}}function v(){}function b(){}function x(){}function L(e){["next","throw","return"].forEach(function(a){e[a]=function(e){return this._invoke(a,e)}})}function j(e){var a;this._invoke=function(t,n){function c(){return new Promise(function(a,c){!function a(t,n,c,o){var r=w(e[t],e,n);if("throw"!==r.type){var l=r.arg,m=l.value;return m&&"object"==typeof m&&s.call(m,"__await")?Promise.resolve(m.__await).then(function(e){a("next",e,c,o)},function(e){a("throw",e,c,o)}):Promise.resolve(m).then(function(e){l.value=e,c(l)},function(e){return a("throw",e,c,o)})}o(r.arg)}(t,n,a,c)})}return a=a?a.then(c,c):c()}}function F(e,a){var n=e.iterator[a.method];if(n===t){if(a.delegate=null,"throw"===a.method){if(e.iterator.return&&(a.method="return",a.arg=t,F(e,a),"throw"===a.method))return N;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return N}var s=w(n,e.iterator,a.arg);if("throw"===s.type)return a.method="throw",a.arg=s.arg,a.delegate=null,N;var c=s.arg;return c?c.done?(a[e.resultName]=c.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,N):c:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,N)}function T(e){var a={tryLoc:e[0]};1 in e&&(a.catchLoc=e[1]),2 in e&&(a.finallyLoc=e[2],a.afterLoc=e[3]),this.tryEntries.push(a)}function M(e){var a=e.completion||{};a.type="normal",delete a.arg,e.completion=a}function X(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function D(e){if(e){var a=e[o];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,c=function a(){for(;++n<e.length;)if(s.call(e,n))return a.value=e[n],a.done=!1,a;return a.value=t,a.done=!0,a};return c.next=c}}return{next:_}}function _(){return{value:t,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},221:function(e,a,t){e.exports=t(222)},222:function(e,a,t){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),s=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,c=s&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=t(186),s)n.regeneratorRuntime=c;else try{delete n.regeneratorRuntime}catch(o){n.regeneratorRuntime=void 0}},223:function(e,a){function t(e,a,t,n,s,c,o){try{var r=e[c](o),l=r.value}catch(m){return void t(m)}r.done?a(l):Promise.resolve(l).then(n,s)}e.exports=function(e){return function(){var a=this,n=arguments;return new Promise(function(s,c){var o=e.apply(a,n);function r(e){t(o,s,c,r,l,"next",e)}function l(e){t(o,s,c,r,l,"throw",e)}r(void 0)})}}}}]);
//# sourceMappingURL=component---src-pages-ajax-mdx-94c0a6d52a6711b58ae5.js.map