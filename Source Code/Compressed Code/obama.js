"use strict";if(typeof documentBody==='undefined')var documentBody=document.body;if(1&isMobile){var m=document.getElementsByTagName("nav")[0].children;!function(){var e=document.location.pathname.match(/[^\/]+$/)||"",t=m[0].parentNode,n=!0;if(null!=e[0])for(var o=1;o<m.length;o++)m[o].getAttribute("href")==e[0]&&(t.insertBefore(m[o],m[0]),n=!1,o=m.length);if(n&&m[0].getAttribute("href")!=e[0]&&null!=e[0]){var r=document.createElement("A"),l=document.createElement("IMG"),a=document.createElement("SPAN"),i=document.createTextNode("Navigation");l.src="images/404-icon.png";a.appendChild(i),r.appendChild(l),r.appendChild(a),t.insertBefore(r,m[0])}o=0;for(var c=m.length-1;o<c;o++)m[o].style.zIndex=c-o;o=1;for(var f=m.length,d=m[0].clientHeight;o<f;o++)m[o].style.top=o*d}(),function(){var e,t=m[0].clientHeight,n=m[0].children[1],o=n.textContent+" ";n.textContent=o+"∨";var r,l=Date.now(),a=-t,i=t,c=function(){for(e=Date.now(),i+=(e-l)*a/400,l=e,r=m.length-1;0<r;r--)m[r].style.top=i*r;if(0<a&&i<t||a<0&&0<i)requestAnimationFrame(c);else if(0<a)for(r=m.length-1;0<r;r--)m[r].style.top=t*r;else for(r=m.length-1;0<r;r--)m[r].style.removeProperty("top")};c(),m[0].addEventListener("click",function(e){e.preventDefault(),a<0?(l=Date.now(),i=0,a=t,c(),n.textContent=o+"∧"):(l=Date.now(),a=-(i=t),c(),n.textContent=o+"∨")})}()}!function(){var e,t=document.getElementsByTagName("footer")[0].children[0].textContent;for(e=0;"©"!=t[e];e++);e++,t=t.slice(0,e)+" "+(new Date).getFullYear()+","+t.slice(e),document.getElementsByTagName("footer")[0].children[0].textContent=t}();