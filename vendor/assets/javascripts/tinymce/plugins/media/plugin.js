/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.6.0 (2020-11-18)
 */
!function(){"use strict";var e,t,r,n=tinymce.util.Tools.resolve("tinymce.PluginManager"),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e){return function(){return e}},o=a(!1),c=a(!0),i=function(){return u},u=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:o,isSome:o,isNone:c,getOr:r=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(undefined),or:r,orThunk:t,map:i,each:function(){},bind:i,exists:o,forall:c,filter:i,equals:e,equals_:e,toArray:function(){return[]},toString:a("none()")}),s=function(r){var e=a(r),t=function(){return i},n=function(e){return e(r)},i={fold:function(e,t){return t(r)},is:function(e){return r===e},isSome:c,isNone:o,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return s(e(r))},each:function(e){e(r)},bind:n,exists:n,forall:n,filter:function(e){return e(r)?i:u},toArray:function(){return[r]},toString:function(){return"some("+r+")"},equals:function(e){return e.is(r)},equals_:function(e,t){return e.fold(o,function(e){return t(r,e)})}};return i},l={some:s,none:i,from:function(e){return null===e||e===undefined?u:s(e)}},m=function(n){return function(e){return r=typeof(t=e),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===n;var t,r}},d=m("string"),h=m("object"),g=m("array"),v=Array.prototype.push,f=function(e,t){for(var r=0,n=e.length;r<n;r++){t(e[r],r)}},w=function(e){var t=e;return{get:function(){return t},set:function(e){t=e}}},b=Object.keys,y=Object.hasOwnProperty,x=function(e,t){return j(e,t)?l.from(e[t]):l.none()},j=function(e,t){return y.call(e,t)},O=function(e){return e.getParam("media_scripts")},S=tinymce.util.Tools.resolve("tinymce.util.Tools"),_=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),k=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),A=function(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]},T=_.DOM,C=function(e){return e.replace(/px$/,"")},P=function(o,e){var c=w(!1),u={};return k({validate:!1,allow_conditional_comments:!0,start:function(e,t){if(!c.get())if(j(t.map,"data-ephox-embed-iri"))c.set(!0),i=(n=t).map.style,a=i?T.parseStyle(i):{},u={type:"ephox-embed-iri",source:n.map["data-ephox-embed-iri"],altsource:"",poster:"",width:x(a,"max-width").map(C).getOr(""),height:x(a,"max-height").map(C).getOr("")};else{if(u.source||"param"!==e||(u.source=t.map.movie),"iframe"!==e&&"object"!==e&&"embed"!==e&&"video"!==e&&"audio"!==e||(u.type||(u.type=e),u=S.extend(t.map,u)),"script"===e){var r=A(o,t.map.src);if(!r)return;u={type:"script",source:t.map.src,width:String(r.width),height:String(r.height)}}"source"===e&&(u.source?u.altsource||(u.altsource=t.map.src):u.source=t.map.src),"img"!==e||u.poster||(u.poster=t.map.src)}var n,i,a}}).parse(e),u.source=u.source||u.src||u.data,u.altsource=u.altsource||"",u.poster=u.poster||"",u},D=function(e){var t={mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()];return t||""},$=tinymce.util.Tools.resolve("tinymce.html.Schema"),F=tinymce.util.Tools.resolve("tinymce.html.Writer"),M=_.DOM,z=function(e){return/^[0-9.]+$/.test(e)?e+"px":e},N=function(a,e){!function(e,t){for(var r=b(e),n=0,i=r.length;n<i;n++){var a=r[n];t(e[a],a)}}(e,function(e,t){var r=""+e;if(a.map[t])for(var n=a.length;n--;){var i=a[n];i.name===t&&(r?(a.map[t]=r,i.value=r):(delete a.map[t],a.splice(n,1)))}else r&&(a.push({name:t,value:r}),a.map[t]=r)})},U=["source","altsource"],E=function(e,c,u){var s,l=F(),m=w(!1),d=0;return k({validate:!1,allow_conditional_comments:!0,comment:function(e){l.comment(e)},cdata:function(e){l.cdata(e)},text:function(e,t){l.text(e,t)},start:function(e,t,r){if(!m.get())if(j(t.map,"data-ephox-embed-iri"))m.set(!0),n=c,a=(i=t).map.style,(o=a?M.parseStyle(a):{})["max-width"]=z(n.width),o["max-height"]=z(n.height),N(i,{style:M.serializeStyle(o)});else{switch(e){case"video":case"object":case"embed":case"img":case"iframe":c.height!==undefined&&c.width!==undefined&&N(t,{width:c.width,height:c.height})}if(u)switch(e){case"video":N(t,{poster:c.poster,src:""}),c.altsource&&N(t,{src:""});break;case"iframe":N(t,{src:c.source});break;case"source":if(d<2&&(N(t,{src:c[U[d]],type:c[U[d]+"mime"]}),!c[U[d]]))return;d++;break;case"img":if(!c.poster)return;s=!0}}var n,i,a,o;l.start(e,t,r)},end:function(e){if(!m.get()){if("video"===e&&u)for(var t,r=0;r<2;r++){c[U[r]]&&((t=[]).map={},d<=r&&(N(t,{src:c[U[r]],type:c[U[r]+"mime"]}),l.start("source",t,!0)))}var n;c.poster&&"object"===e&&u&&!s&&((n=[]).map={},N(n,{src:c.poster,width:c.width,height:c.height}),l.start("img",n,!0))}l.end(e)}},$({})).parse(e),l.getContent()},R=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],L=function(t){var e=R.filter(function(e){return e.regex.test(t)});return 0<e.length?S.extend({},e[0],{url:function(e,t){for(var r,n=(r=t.match(/^(https?:\/\/|www\.)(.+)$/i))&&1<r.length&&"www."!==r[1]?r[1]:"https://",i=e.regex.exec(t),a=n+e.url,o=0;o<i.length;o++)!function(e){a=a.replace("$"+e,function(){return i[e]?i[e]:""})}(o);return a.replace(/\?$/,"")}(e[0],t)}):null},I=function(r,e){var n=S.extend({},e);if(!n.source&&(S.extend(n,P(O(r),n.embed)),!n.source))return"";n.altsource||(n.altsource=""),n.poster||(n.poster=""),n.source=r.convertURL(n.source,"source"),n.altsource=r.convertURL(n.altsource,"source"),n.sourcemime=D(n.source),n.altsourcemime=D(n.altsource),n.poster=r.convertURL(n.poster,"poster");var t=L(n.source);if(t&&(n.source=t.url,n.type=t.type,n.allowFullscreen=t.allowFullscreen,n.width=n.width||String(t.w),n.height=n.height||String(t.h)),n.embed)return E(n.embed,n,!0);var i=A(O(r),n.source);i&&(n.type="script",n.width=String(i.width),n.height=String(i.height));var a,o,c,u,s,l,m,d,h=r.getParam("audio_template_callback"),f=r.getParam("video_template_callback");return n.width=n.width||"300",n.height=n.height||"150",S.each(n,function(e,t){n[t]=r.dom.encode(""+e)}),"iframe"===n.type?(d=(m=n).allowFullscreen?' allowFullscreen="1"':"",'<iframe src="'+m.source+'" width="'+m.width+'" height="'+m.height+'"'+d+"></iframe>"):"application/x-shockwave-flash"===n.sourcemime?(l='<object data="'+(s=n).source+'" width="'+s.width+'" height="'+s.height+'" type="application/x-shockwave-flash">',s.poster&&(l+='<img src="'+s.poster+'" width="'+s.width+'" height="'+s.height+'" />'),l+="</object>"):-1!==n.sourcemime.indexOf("audio")?(c=n,(u=h)?u(c):'<audio controls="controls" src="'+c.source+'">'+(c.altsource?'\n<source src="'+c.altsource+'"'+(c.altsourcemime?' type="'+c.altsourcemime+'"':"")+" />\n":"")+"</audio>"):"script"===n.type?'<script src="'+n.source+'"><\/script>':(a=n,(o=f)?o(a):'<video width="'+a.width+'" height="'+a.height+'"'+(a.poster?' poster="'+a.poster+'"':"")+' controls="controls">\n<source src="'+a.source+'"'+(a.sourcemime?' type="'+a.sourcemime+'"':"")+" />\n"+(a.altsource?'<source src="'+a.altsource+'"'+(a.altsourcemime?' type="'+a.altsourcemime+'"':"")+" />\n":"")+"</video>")},q=tinymce.util.Tools.resolve("tinymce.util.Promise"),B={},W=function(t){return function(e){return I(t,e)}},G=function(e,t){var r,n,i,a,o,c=e.getParam("media_url_resolver");return c?(i=t,a=W(e),o=c,new q(function(t,e){var r=function(e){return e.html&&(B[i.source]=e),t({url:i.source,html:e.html?e.html:a(i)})};B[i.source]?r(B[i.source]):o({url:i.source},r,e)})):(r=t,n=W(e),new q(function(e){e({html:n(r),url:r.source})}))},H=function(a,o,c){return function(e){var t=function(){return x(a,e)},r=function(){return x(o,e)},n=function(e){return x(e,"value").bind(function(e){return 0<e.length?l.some(e):l.none()})},i={};return i[e]=(e===c?t().bind(function(e){return h(e)?n(e).orThunk(r):r().orThunk(function(){return l.from(e)})}):r().orThunk(function(){return t().bind(function(e){return h(e)?n(e):l.from(e)})})).getOr(""),i}},J=function(e,t){var r,n,i=t?x(e,t).bind(function(e){return x(e,"meta")}).getOr({}):{},a=H(e,i,t);return p(p(p(p(p({},a("source")),a("altsource")),a("poster")),a("embed")),(r=i,n={},x(e,"dimensions").each(function(e){f(["width","height"],function(t){x(r,t).orThunk(function(){return x(e,t)}).each(function(e){return n[t]=e})})}),n))},K=function(e){var n=p(p({},e),{source:{value:x(e,"source").getOr("")},altsource:{value:x(e,"altsource").getOr("")},poster:{value:x(e,"poster").getOr("")}});return f(["width","height"],function(r){x(e,r).each(function(e){var t=n.dimensions||{};t[r]=e,n.dimensions=t})}),n},Q=function(r){return function(e){var t=e&&e.msg?"Media embed handler error: "+e.msg:"Media embed handler threw unknown error.";r.notificationManager.open({type:"error",text:t})}},V=function(e,t){return P(O(e),t)},X=function(i,a){return function(e){var t,r,n;d(e.url)&&0<e.url.trim().length&&(t=e.html,r=V(a,t),n=p(p({},r),{source:e.url,embed:t}),i.setData(K(n)))}},Y=function(e,t){var r=e.dom.select("img[data-mce-object]");e.insertContent(t),function(e,t){for(var r=e.dom.select("img[data-mce-object]"),n=0;n<t.length;n++)for(var i=r.length-1;0<=i;i--)t[n]===r[i]&&r.splice(i,1);e.selection.select(r[0])}(e,r),e.nodeChanged()},Z=function(e,t,r){var n;t.embed=E(t.embed,t),t.embed&&(e.source===t.source||(n=t.source,B.hasOwnProperty(n)))?Y(r,t.embed):G(r,t).then(function(e){Y(r,e.html)})["catch"](Q(r))},ee=function(m){var e,t,r,n,i=(r=(e=m).selection.getNode(),n=(t=r).getAttribute("data-mce-object")||t.getAttribute("data-ephox-embed-iri")?e.serializer.serialize(r,{selection:!0}):"",p({embed:n},P(O(e),n))),d=w(i),a=K(i),o={title:"General",name:"general",items:function(e){for(var t=[],r=0,n=e.length;r<n;++r){if(!g(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e);v.apply(t,e[r])}return t}([[{name:"source",type:"urlinput",filetype:"media",label:"Source"}],m.getParam("media_dimensions",!0)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[]])},c={title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]},u=[];m.getParam("media_alt_source",!0)&&u.push({name:"altsource",type:"urlinput",filetype:"media",label:"Alternative source URL"}),m.getParam("media_poster",!0)&&u.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"});var s={title:"Advanced",name:"advanced",items:u},l=[o,c];0<u.length&&l.push(s);var h={type:"tabpanel",tabs:l},f=m.windowManager.open({title:"Insert/Edit Media",size:"normal",body:h,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(e){var t=J(e.getData());Z(d.get(),t,m),e.close()},onChange:function(e,t){switch(t.name){case"source":s=d.get(),l=J(e.getData(),"source"),s.source!==l.source&&(X(f,m)({url:l.source,html:""}),G(m,l).then(X(f,m))["catch"](Q(m)));break;case"embed":c=J((o=e).getData()),u=V(m,c.embed),o.setData(K(u));break;case"dimensions":case"altsource":case"poster":r=e,n=t.name,i=J(r.getData(),n),a=I(m,i),r.setData(K(p(p({},i),{embed:a})))}var r,n,i,a,o,c,u,s,l;d.set(J(e.getData()))},initialData:a})},te=tinymce.util.Tools.resolve("tinymce.html.Node"),re=tinymce.util.Tools.resolve("tinymce.Env"),ne=function(a,e){if(!1===a.getParam("media_filter_html",!0))return e;var o,c=F();return k({validate:!1,allow_conditional_comments:!1,comment:function(e){c.comment(e)},cdata:function(e){c.cdata(e)},text:function(e,t){c.text(e,t)},start:function(e,t,r){if(o=!0,"script"!==e&&"noscript"!==e&&"svg"!==e){for(var n=t.length-1;0<=n;n--){var i=t[n].name;0===i.indexOf("on")&&(delete t.map[i],t.splice(n,1)),"style"===i&&(t[n].value=a.dom.serializeStyle(a.dom.parseStyle(t[n].value),e))}c.start(e,t,r),o=!1}},end:function(e){o||c.end(e)}},$({})).parse(e),c.getContent()},ie=function(e,t,r){for(var n,i,a=t.attributes,o=a.length;o--;)n=a[o].name,i=a[o].value,"width"!==n&&"height"!==n&&"style"!==n&&("data"!==n&&"src"!==n||(i=e.convertURL(i,n)),r.attr("data-mce-p-"+n,i));var c=t.firstChild&&t.firstChild.value;c&&(r.attr("data-mce-html",escape(ne(e,c))),r.firstChild=null)},ae=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri")||(t=e.attr("class"))&&/\btiny-pageembed\b/.test(t))return!0;var t;return!1},oe=function(u){return function(e){for(var t,r,n,i,a,o,c=e.length;c--;)(t=e[c]).parent&&(t.parent.attr("data-mce-object")||"script"===t.name&&!(r=A(O(u),t.attr("src")))||(r&&(r.width&&t.attr("width",r.width.toString()),r.height&&t.attr("height",r.height.toString())),"iframe"===t.name&&u.getParam("media_live_embeds",!0)&&re.ceFalse?ae(t)||t.replace(function(e,t){var r=t.name,n=new te("span",1);n.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":r,"class":"mce-preview-object mce-object-"+r}),ie(e,t,n);var i=new te(r,1);i.attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),style:t.attr("style"),"class":t.attr("class"),width:t.attr("width"),height:t.attr("height"),frameborder:"0"});var a=new te("span",1);return a.attr("class","mce-shim"),n.append(i),n.append(a),n}(u,t)):ae(t)||t.replace((n=u,o=void 0,a=(i=t).name,(o=new te("img",1)).shortEnded=!0,ie(n,i,o),o.attr({width:i.attr("width")||"300",height:i.attr("height")||("audio"===a?"30":"150"),style:i.attr("style"),src:re.transparentSrc,"data-mce-object":a,"class":"mce-object mce-object-"+a}),o))))}},ce=function(e){var t,r;e.ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction:function(){e.execCommand("mceMedia")},onSetup:(t=e,r=["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"],function(e){return t.selection.selectorChangedWithUnbind(r.join(","),e.setActive).unbind})}),e.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction:function(){e.execCommand("mceMedia")}})};n.add("media",function(e){var t,d,r,n;return(t=e).addCommand("mceMedia",function(){ee(t)}),ce(e),e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}),(d=e).on("preInit",function(){var t=d.schema.getSpecialElements();S.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var r=d.schema.getBoolAttrs();S.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),d.parser.addNodeFilter("iframe,video,audio,object,embed,script",oe(d)),d.serializer.addAttributeFilter("data-mce-object",function(e,t){for(var r,n,i,a,o,c,u,s,l=e.length;l--;)if((r=e[l]).parent){for(u=r.attr(t),n=new te(u,1),"audio"!==u&&"script"!==u&&((s=r.attr("class"))&&-1!==s.indexOf("mce-preview-object")?n.attr({width:r.firstChild.attr("width"),height:r.firstChild.attr("height")}):n.attr({width:r.attr("width"),height:r.attr("height")})),n.attr({style:r.attr("style")}),i=(a=r.attributes).length;i--;){var m=a[i].name;0===m.indexOf("data-mce-p-")&&n.attr(m.substr(11),a[i].value)}"script"===u&&n.attr("type","text/javascript"),(o=r.attr("data-mce-html"))&&((c=new te("#text",3)).raw=!0,c.value=ne(d,unescape(o)),n.append(c)),r.replace(n)}})}),d.on("SetContent",function(){d.$("span.mce-preview-object").each(function(e,t){var r=d.$(t);0===r.find("span.mce-shim").length&&r.append('<span class="mce-shim"></span>')})}),(r=e).on("click keyup touchend",function(){var e=r.selection.getNode();e&&r.dom.hasClass(e,"mce-preview-object")&&r.dom.getAttrib(e,"data-mce-selected")&&e.setAttribute("data-mce-selected","2")}),r.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object");"audio"!==t&&"script"!==t||e.preventDefault()}),r.on("ObjectResized",function(e){var t,r=e.target;r.getAttribute("data-mce-object")&&(t=r.getAttribute("data-mce-html"))&&(t=unescape(t),r.setAttribute("data-mce-html",escape(E(t,{width:String(e.width),height:String(e.height)}))))}),n=e,{showDialog:function(){ee(n)}}})}();