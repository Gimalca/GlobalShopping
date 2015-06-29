/*
 * jQuery.counter plugin
 *
 * Copyright (c) 2012 Sophilabs <hi@sophilabs.com>
 * MIT License
 */!function(e,t,n){typeof define=="function"&&typeof define.amd=="object"?define(["jquery"],t):t(n)}(this,function(e){var t=function(t){var n=0,r=0;e.each(t.parts,function(e,t){n+=n*t.limit+t.stop;r+=r*t.limit+t.value});return t.down?n>=r:n<=r},n=function(){var n=e(this),i=n.data("counter"),s=i.parts.length-1;while(s>=0){var o=i.parts[s];o.value+=i.down?-1:1;if(i.down&&o.value<0)o.value=o.limit;else{if(!(!i.down&&o.value>o.limit))break;o.value=0}s--}r(n,s);if(t(i)){clearInterval(i.intervalId);n.trigger("counterStop")}},r=function(t,n){var r=t.data("counter"),o=r.parts.length-1,u=function(e,n){i(t,o,e,n)};while(o>=n){var a=r.parts[o],f=a.value+"";while(f.length<a.padding)f="0"+f;e.each(s(f,""),u);o--}},i=function(t,n,r,i){var s=e(e(t.children("span.part").get(n)).find("span.digit").get(r));s.attr("class","digit digit"+i+" digit"+s.text()+i).text(i)},s=function(e){var t=String.prototype.split,n=/()??/.exec("")[1]===e,r;r=function(r,i,s){if(Object.prototype.toString.call(i)!=="[object RegExp]")return t.call(r,i,s);var o=[],u=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.extended?"x":"")+(i.sticky?"y":""),a=0,i=new RegExp(i.source,u+"g"),f,l,c,h;r+="";n||(f=new RegExp("^"+i.source+"$(?!\\s)",u));s=s===e?-1>>>0:s>>>0;while(l=i.exec(r)){c=l.index+l[0].length;if(c>a){o.push(r.slice(a,l.index));!n&&l.length>1&&l[0].replace(f,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(l[t]=e)});l.length>1&&l.index<r.length&&Array.prototype.push.apply(o,l.slice(1));h=l[0].length;a=c;if(o.length>=s)break}i.lastIndex===l.index&&i.lastIndex++}a===r.length?(h||!i.test(""))&&o.push(""):o.push(r.slice(a));return o.length>s?o.slice(0,s):o};return r}(),o={init:function(r){r=r||{};return this.each(function(){var i=e(this),o=i.data("counter")||{};o.interval=parseInt(r.interval||i.attr("data-interval")||"1000",10);o.down=(r.direction||i.attr("data-direction")||"down")=="down";o.parts=[];var u=s(r.initial||i.text(),/([^0-9]+)/),a=s(r.format||i.attr("data-format")||"23:59:59",/([^0-9]+)/),f=r.stop||i.attr("data-stop");f&&(f=s(f,/([^0-9]+)/));i.html("");e.each(a,function(t,n){if(/^\d+$/.test(n)){var r={};r.index=t;r.padding=(n+"").length;r.limit=parseInt(n,10);r.value=parseInt(u[u.length-a.length+t]||0,10);r.value=r.value>r.limit?r.limit:r.value;r.reset=r.value;r.stop=parseInt(f?f[f.length-a.length+t]:o.down?0:r.limit,10);r.stop=r.stop>r.limit?r.limit:r.stop;r.stop=r.stop<0?0:r.stop;var l=e("<span>").addClass("part").addClass("part"+t),c=r.value+"";while(c.length<r.padding)c="0"+c;e.each(s(c,""),function(t,n){l.append(e("<span>").addClass("digit digit"+n).text(n))});i.append(l);o.parts.push(r)}else i.append(e("<span>").addClass("separator").addClass("separator"+t).text(n))});t(o)?i.trigger("counterStop"):o.intervalId=setInterval(e.proxy(n,this),o.interval);i.data("counter",o);return this})},play:function(){return this.each(function(){var t=e(this),r=t.data("counter");r.intervalId||(r.intervalId=setInterval(e.proxy(n,this),r.interval))})},reset:function(){return this.each(function(){var t=e(this),i=t.data("counter");e.each(i.parts,function(e,t){t.value=t.reset});r(e(this),0);if(i.intervalId){clearInterval(i.intervalId);i.intervalId=setInterval(e.proxy(n,this),i.interval)}})},stop:function(){return this.each(function(){var t=e(this),n=t.data("counter");clearInterval(n.intervalId);n.intervalId=0;t.trigger("counterStop")})}};e.fn.counter=function(t){if(o[t])return o[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return o.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.counter")}},jQuery);