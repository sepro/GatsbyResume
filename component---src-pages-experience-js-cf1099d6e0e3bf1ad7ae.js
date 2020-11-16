/*! For license information please see component---src-pages-experience-js-cf1099d6e0e3bf1ad7ae.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1IBR":function(e,t){e.exports=[{role:"Senior PostDoc",company:"KULeuven | VIB - Center for Microbiology",where:"Leuven, Belgium",when:"2018 - now",moreInfo:"",highlight:1},{role:"PostDoc",company:"Max Planck Institute of Molecular Plant Physiology",where:"Potsdam, Germany",when:"2015 - 2018",moreInfo:"",highlight:0},{role:"Junior PostDoc/Bioinformatics Expert",company:"Universität Potsdam | Max Planck Institute of Molecular Plant Physiology",where:"Potsdam, Germany",when:"2012 - 2015",moreInfo:"",highlight:0},{role:"PhD Student",company:"Universiteit Gent | VIB - Plant Systems Biology",where:"Gent, Belgium",when:"2007 - 2012",moreInfo:"",highlight:0}]},"3Csf":function(e,t){e.exports=[{degree:"Doctor",major:"Science : Biotechnology",school:"Universiteit Gent (Doctoral Schools)",where:"Gent, Belgium",when:"2007 - 2012",moreInfo:"",highlight:1},{degree:"Master",major:"Biotechnology",school:"Universiteit Gent",where:"Gent, Belgium",when:"2005 - 2007",moreInfo:"Graduated Cum Laude",highlight:0},{degree:"Bachelor",major:"Biology",school:"Universiteit Hasselt",where:"Hasselt, Belgium",when:"2003 - 2005",moreInfo:"Graduated Cum Laude",highlight:0}]},"8ncr":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("q1tI")),r=o(n("17x9")),l=o(n("TSYQ"));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t=e.animate,n=e.className,r=e.layout,o=e.children;return i.default.createElement("div",{className:(0,l.default)(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===r,"vertical-timeline--one-column-left":"1-column"===r||"1-column-left"===r,"vertical-timeline--one-column-right":"1-column-right"===r})},o)};a.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,className:r.default.string,animate:r.default.bool,layout:r.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"])},a.defaultProps={animate:!0,className:"",layout:"2-columns"};var s=a;t.default=s},GWl7:function(e,t,n){"use strict";var i=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("q1tI")),l=(0,i(n("8/g6")).default)(r.default.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work");t.default=l},HnPO:function(e,t,n){"use strict";var i=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("q1tI")),l=(0,i(n("8/g6")).default)(r.default.createElement("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");t.default=l},I4Ts:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),l=n("Bl7J"),o=n("1IBR"),a=n.n(o),s=n("3Csf"),c=n.n(s),u=n("HnPO"),d=n.n(u),f=n("GWl7"),h=n.n(f),m=n("UQjd");n("aw3t");t.default=function(e){function t(e){return 1===e?{background:"rgb(230, 138, 0)",color:"#fff"}:{background:"rgb(221,221,221)",color:"#000"}}function n(e){return 1===e?{borderRight:"7px solid  rgb(230, 138, 0)"}:{borderRight:"7px solid  rgb(221,221,221)"}}var i=a.a.map((function(e,i){return r.a.createElement(m.VerticalTimelineElement,{key:i,className:"vertical-timeline-element--work",contentStyle:t(e.highlight),contentArrowStyle:n(e.highlight),date:e.when,iconStyle:t(e.highlight),icon:r.a.createElement(h.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},e.role),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company," - ",e.where),r.a.createElement("p",null,e.moreInfo))})),o=c.a.map((function(e,i){return r.a.createElement(m.VerticalTimelineElement,{key:i,className:"vertical-timeline-element--work",contentStyle:t(e.highlight),contentArrowStyle:n(e.highlight),date:e.when,iconStyle:t(e.highlight),icon:r.a.createElement(d.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},(e.degree||"")+" "+(e.major?"in "+e.major:"")),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.school," - ",e.where),r.a.createElement("p",null,e.moreInfo))}));return r.a.createElement(l.a,{pageTitle:"Experience & Education",pageDescription:"Learn more about my experience"},r.a.createElement(m.VerticalTimeline,{layout:"1-column-left"},i,o))}},IdOR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("q1tI")),r=a(n("17x9")),l=a(n("TSYQ")),o=n("PGlZ");function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.children,n=e.className,r=e.contentArrowStyle,a=e.contentStyle,s=e.date,c=e.dateClassName,u=e.icon,d=e.iconClassName,f=e.iconOnClick,h=e.onTimelineElementClick,m=e.iconStyle,p=e.id,v=e.position,g=e.style,y=e.textClassName,b=e.intersectionObserverProps,w=e.visible;return i.default.createElement(o.InView,b,(function(e){var o=e.inView,b=e.ref;return i.default.createElement("div",{ref:b,id:p,className:(0,l.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===v,"vertical-timeline-element--right":"right"===v,"vertical-timeline-element--no-children":""===t}),style:g},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:m,onClick:f,className:(0,l.default)(d,"vertical-timeline-element-icon",{"bounce-in":o||w,"is-hidden":!(o||w)})},u),i.default.createElement("div",{style:a,onClick:h,className:(0,l.default)(y,"vertical-timeline-element-content",{"bounce-in":o||w,"is-hidden":!(o||w)})},i.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),t,i.default.createElement("span",{className:(0,l.default)(c,"vertical-timeline-element-date")},s))))}))};s.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]),className:r.default.string,contentArrowStyle:r.default.shape({}),contentStyle:r.default.shape({}),date:r.default.node,dateClassName:r.default.string,icon:r.default.element,iconClassName:r.default.string,iconStyle:r.default.shape({}),iconOnClick:r.default.func,onTimelineElementClick:r.default.func,id:r.default.string,position:r.default.string,style:r.default.shape({}),textClassName:r.default.string,visible:r.default.bool,intersectionObserverProps:r.default.shape({root:r.default.object,rootMargin:r.default.string,threshold:r.default.number,triggerOnce:r.default.bool})},s.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px"}};var c=s;t.default=c},PGlZ:function(e,t,n){"use strict";n.r(t),n.d(t,"InView",(function(){return d})),n.d(t,"useInView",(function(){return f}));var i=n("q1tI");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=new Map,o=new Map,a=0;function s(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(o.has(n)||(a+=1,o.set(n,a.toString())),o.get(n)):"0":e[t]);var n})).toString()}function c(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var i=function(e){var t=s(e),n=l.get(t);if(!n){var i,r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,l=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=l),null==(n=r.get(t.target))||n.forEach((function(e){e(l,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},l.set(t,n)}return n}(n),r=i.id,o=i.observer,a=i.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),o.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),l.delete(r))}}function u(e){return"function"!=typeof e.children}var d=function(e){var t,n;function l(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=l.prototype;return o.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},o.componentWillUnmount=function(){this.unobserve(),this.node=null},o.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin,r=e.trackVisibility,l=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i,trackVisibility:r,delay:l})}},o.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},o.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var l=this.props,o=l.children,a=l.as,s=l.tag,c=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(l,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(i.createElement)(a||s||"div",r({ref:this.handleNode},c),o)},l}(i.Component);function f(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,l=t.trackVisibility,o=t.rootMargin,a=t.root,s=t.triggerOnce,u=t.skip,d=t.initialInView,f=Object(i.useRef)(),h=Object(i.useState)({inView:!!d}),m=h[0],p=h[1],v=Object(i.useCallback)((function(e){void 0!==f.current&&(f.current(),f.current=void 0),u||e&&(f.current=c(e,(function(e,t){p({inView:e,entry:t}),t.isIntersecting&&s&&f.current&&(f.current(),f.current=void 0)}),{root:a,rootMargin:o,threshold:n,trackVisibility:l,delay:r}))}),[Array.isArray(n)?n.toString():n,a,o,s,u,l,r]);Object(i.useEffect)((function(){f.current||!m.entry||s||u||p({inView:!!d})}));var g=[v,m.inView,m.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}d.displayName="InView",d.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1},t.default=d},TSYQ:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var l=typeof i;if("string"===l||"number"===l)e.push(i);else if(Array.isArray(i)&&i.length){var o=r.apply(null,i);o&&e.push(o)}else if("object"===l)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},UQjd:function(e,t,n){"use strict";e.exports={VerticalTimeline:n("8ncr").default,VerticalTimelineElement:n("IdOR").default}},aw3t:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-experience-js-cf1099d6e0e3bf1ad7ae.js.map