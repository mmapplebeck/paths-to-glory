(this["webpackJsonppaths-to-glory"]=this["webpackJsonppaths-to-glory"]||[]).push([[0],{21:function(n,e,t){n.exports=t(41)},26:function(n,e,t){},33:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(12),c=t.n(o),i=(t(26),t(1)),u=t(8),l=t(13),s=t(14),d=t(15),f=t.n(d);var m=function(){function n(){Object(l.a)(this,n)}return Object(s.a)(n,null,[{key:"getPaths",value:function(n){return f.a.get("".concat("http://10.110.101.254/nodes","/").concat(n,"/paths")).then((function(n){return JSON.parse(n.text)})).catch((function(n){console.log(n)}))}},{key:"transformPaths",value:function(n){var e=n.node,t=new Set(n.previous.nodes.map((function(n){return n.name}))),r=n.previous.nodes.filter((function(n){return n.name!==e.name})).sort((function(n,e){return e.count-n.count})).slice(0,10).map((function(n){return[n.name,e.name,n.count]})),a=n.next.nodes.filter((function(n){return n.name!==e.name})).sort((function(n,e){return e.count-n.count})).slice(0,10).map((function(n){return[e.name,t.has(n.name)?(r=n.name,r+" (cycle)"):n.name,n.count];var r}));return[].concat([["From","To","Count"]],Object(u.a)(r),Object(u.a)(a))}},{key:"getDataForNode",value:function(n){var e=this;return this.getPaths(function(n){return n.includes(" (cycle)")?n.replace(" (cycle)",""):n}(n)).then((function(n){return e.transformPaths(n)}))}},{key:"getResults",value:function(n){if(n.length<2)return[];return["Demographics","Visit List","Summary","Find Patient"].filter((function(e){return e.toLowerCase().includes(n.toLowerCase())}))}}]),n}(),h=(t(33),t(3)),p=t(4);function b(){var n=Object(h.a)(["\n  display: block;\n  width: 100%;\n  height: 3rem;\n  font-weight: bold;\n  padding: 1rem;\n  margin: 0;\n  border: 0;\n  font-size: 1rem;\n  text-align: left;\n\n  &:hover {\n    background-color: #f2f2f5;\n    cursor: pointer;\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(h.a)(["\n  position: absolute;\n  top: calc(3rem + 2px);\n  left: 0;\n  width: 100%;\n  padding: 0.5rem 0;\n  background-color: white;\n  z-index: 1000;\n  border: 1px solid #758299;\n  border-radius: 3px;\n"]);return v=function(){return n},n}function g(){var n=Object(h.a)(["\n  width: 100%;\n  height: 3rem;\n  box-shadow: none;\n  border: 1px solid #758299;\n  margin-bottom: 1rem;\n  border-radius: 3px;\n  font-size: 1rem;\n  padding: 0.5rem;\n\n  ::placeholder {\n    color: #758299;\n  }\n"]);return g=function(){return n},n}function w(){var n=Object(h.a)(["\n  position: relative;\n"]);return w=function(){return n},n}p.a.div(w()),p.a.input(g()),p.a.div(v()),p.a.button(b());var O=t(19),y=["#5051DB","#05bfe0","#1463b0","#33d1bf","#0a7387","#33f5f5"];var j=function(n){var e=n.data,t=n.setNodeName;return(a.a.createElement(O.a,{width:"100%",height:"100%",chartType:"Sankey",loader:a.a.createElement("div",null,"Loading Chart"),data:e,options:{sankey:{node:{width:100,interactivity:!0,colors:y,nodePadding:16,label:{fontSize:16,bold:!0}},link:{colors:y,colorMode:"gradient",fillOpacity:.9}}},chartEvents:[{eventName:"select",callback:function(n){var e=n.chartWrapper.getChart().getSelection();if(1===e.length){var r=Object(i.a)(e,1)[0].name;t(r)}}}]}))};var k=function(){var n=Object(r.useState)("Visit List"),e=Object(i.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(null),u=Object(i.a)(c,2),l=u[0],s=u[1],d=Object(r.useState)(null),f=Object(i.a)(d,2),h=f[0],p=f[1],b=Object(r.useState)(!1),v=Object(i.a)(b,2),g=v[0],w=v[1];return Object(r.useEffect)((function(){w(!0),m.getDataForNode(t).then((function(n){return s(n)})).catch((function(n){return p(n)})).finally((function(){return w(!1)}))}),[t]),a.a.createElement("div",{className:"App"},l&&a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{data:l,setNodeName:o})),h&&a.a.createElement("div",null,"There was an error."),g&&a.a.createElement("div",null,"Loading..."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.d509778d.chunk.js.map