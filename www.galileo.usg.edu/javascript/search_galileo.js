/*
----------------------------------------------------------------------
search_galileo_dropin.js:
  - search_galileo()
----------------------------------------------------------------------
*/

/*
----------------------------------------------------------------------
minification of:
https://raw.github.com/douglascrockford/JSON-js/master/json2.js
This is needed because some web pages may clobber the JSON object
----------------------------------------------------------------------
*/

var JSON;if(!JSON){JSON={}}(function(){'use strict';function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify')}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse')}}}());

/*
----------------------------------------------------------------------
from dt.js
----------------------------------------------------------------------
*/

function valC(a,b){var c=false;if(b){if(a.match(/^.+$/)&&a!='null'&&a!='false'&&a!='0'&&a!='inherit')c=true}else{if(a)c=true}return c}function mySetA(a,b,c,d){if(d){switch(b.toLowerCase()){case'id':a.setAttribute("id",c);break;case'valign':a.setAttribute("vAlign",c);break;case'class':a.setAttribute("className",c);break;case'style':a.style.setAttribute("cssText",c);break;case'cellpadding':a.setAttribute("cellPadding",c);break;case'cellspacing':a.setAttribute("cellSpacing",c);break;case'bgcolor':a.setAttribute("bgColor",c);break;case'colspan':a.setAttribute("colSpan",c);break;case'rowspan':a.setAttribute("rowSpan",c);break}}else{a.setAttribute(b,c)}}function dt(a,b){var c=a.divid;var d=a.rows;var e=document.getElementById(c);if(!e)return;var f=document.createElement("TABLE");var g=document.createElement("TBODY");f.appendChild(g);for(var h=0;h<d.length;h++){var i=document.createElement("TR");mySetA(i,"valign","top",b);g.appendChild(i);var j=d[h];for(var k=0;k<j.length;k++){aCellSpecs=j[k];var l=document.createElement("TD");var c=aCellSpecs[0];mySetA(l,"id",c,b);var m=aCellSpecs[1];for(var n=0;n<m.length;n++){var o=document.getElementById(m[n]);if(o)l.appendChild(o.parentNode.removeChild(o))}if(aCellSpecs.length>2){var p=aCellSpecs[2];for(var q=0;q<p.length;q+=2){var r=p[q];var s=p[q+1];mySetA(l,r,s,b)}}i.appendChild(l)}}var t=e.attributes;for(var q=0;q<t.length;q++){var r=t[q].name;var s=t[q].value;if(valC(s,b))mySetA(f,r,s,b)}e.parentNode.replaceChild(f,e)}

function search_galileo ( oParms ) {

    var sCGIParms = "";
    var sID       = "search_galileo";

    if ( oParms && typeof oParms === 'object') {

        oParms.host     = window.location.host;      // pass along host in case of ezproxy
        oParms.protocol = window.location.protocol;  // http: or https:?

        var sJSON;
        if( typeof JSON !== 'undefined' ) {
            if( JSON.stringify ) {
                sJSON = JSON.stringify( oParms );
                sCGIParms = "?json="+escape( sJSON );
            }
            else if ( JSON.encode ) {  // mootools?
                sJSON = JSON.encode( oParms );
                sCGIParms = "?json="+escape( sJSON );
            }
        }

        var sHeight   = ("pane_height" in oParms ? oParms.pane_height :
          (oParms.home ? '250px' : (oParms.advanced ? '140px' : '120px')));

        if( "id"          in oParms ) sID     = oParms.id;
    }

    var aHTML = [
        '<iframe width="100%" height="' + sHeight + '" marginwidth="0" marginheight="0"',
        '    frameborder="0" style="border:0;margin:0;padding;0;" scrolling="auto"',
        '    src="https://www.galileo.usg.edu/cgi/search_galileo'+sCGIParms+'">',
        '</iframe>',
    ];

    var sHTML = aHTML.join( "\n" );

    var eDiv = document.getElementById( sID );
    eDiv.innerHTML = sHTML;
}

// __END__
