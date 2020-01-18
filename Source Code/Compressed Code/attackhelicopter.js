"use strict";var windowHeight,windowWidth,backgroundDiv,galleryDivsStyle,columnWidthStyle,columnMarginStyle,imageColumns,columnMargin,galleryDiv=document.getElementById("gallery"),galleryImageDivs=galleryDiv.children,thumbnailDiv=document.getElementById("thumbnails"),currentImage=-1;function loadAnimationTriggers(){var u,e,t,s,c,m,h,w,y,f,v,I,p,n,i=performance.now(),b=0,W=0,D=0,H=galleryDiv.getElementsByTagName("img"),M=!1,C=function(){e=Date.now(),t=(e-u)/400,u=e,m+=t*f,h+=t*v,w+=t*I,y+=t*p,backgroundDiv.style.opacity=h,H[currentImage].style.opacity=h,H[currentImage].style.width=m,H[currentImage].style.left=w,H[currentImage].style.top=y,b&&m<c||!b&&c<m?n=requestAnimationFrame(C):((backgroundDiv.style.opacity=b)?(H[currentImage].style.opacity=b,H[currentImage].style.width=c,H[currentImage].style.left=W,H[currentImage].style.top=D):(H[currentImage].removeAttribute("style"),currentImage=-1,backgroundDiv.style.zIndex=-1),M=!1)};function E(){u=Date.now(),m=c,c=galleryImageDivs[0].clientWidth,w=W,y=D,f=c-m,I=(W=b=0)-w,p=(D=0)-y,v=b-(h=1),M=!0,C()}for(var k,L,A,O,S,X,Y=function(){e=Date.now(),t=(e-u)/s,u=e,w+=t*I,H[currentImage].style.left=w,I<0&&W<w||0<I&&w<W?n=requestAnimationFrame(Y):(H[currentImage].style.left=W,M=!1)},o=function(e){M&&(cancelAnimationFrame(n),b?(-1<h&&h<2?(backgroundDiv.style.opacity=b,H[currentImage].style.opacity=b,H[currentImage].style.width=c,H[currentImage].style.left=W):(H[currentImage].removeAttribute("style"),H[currentImage=O].style.left=W),H[currentImage].style.top=D):(backgroundDiv.style.opacity=b,H[currentImage].removeAttribute("style"),backgroundDiv.style.zIndex=-1)),e()},r=document.getElementById("container"),B=r.children[0],x=r.children[1],l=0;l<H.length;l++)H[l].id=l,1&isMobile&&(H[l].addEventListener("touchstart",a),H[l].addEventListener("touchend",d)),1&isMobile||(H[l].addEventListener("mousedown",a),H[l].addEventListener("mouseup",d));function a(g){g.button||o(function(){if(-1<currentImage){g.preventDefault();var t,n,i,o,r=g.pageX,l=g.pageY,a=0;function d(e){null==e.button?document.removeEventListener("touchmove",d):document.removeEventListener("mousemove",d),A=currentImage>=H.length-1?(O=0,currentImage-1):0==currentImage?(O=currentImage+1,H.length-1):(O=currentImage+1,currentImage-1),documentBody.clientWidth<=windowWidth&&(documentBody.style.overflowX="hidden"),w=e.pageX-r,y=e.pageY-l,n=y>Math.abs(w)?function(e){w=W+e.pageX-r,y=D+e.pageY-l,m=c-(Math.abs(e.pageY-l)+Math.abs(e.pageX-r)*L)/2,h=(2*l-e.pageY)/l,H[currentImage].style.left=w,H[currentImage].style.top=y,H[currentImage].style.width=m,H[currentImage].style.opacity=h,backgroundDiv.style.opacity=h}:(m=galleryImageDivs[0].clientWidth,k=H[A].naturalHeight/H[A].naturalWidth,h=(S-windowWidth)/2-(v=L<k?.9*windowHeight/k:.9*windowWidth)-X-(X+m)*(A%imageColumns)+window.pageXOffset,p=(windowHeight-v*k)/2-X-(X+m)*Math.floor(A/imageColumns)-B.clientHeight-x.clientHeight+window.pageYOffset,k=H[O].naturalHeight/H[O].naturalWidth,f=L<k?.9*windowHeight/k:.9*windowWidth,I=(windowWidth+S)/2-X-(X+m)*(O%imageColumns)+window.pageXOffset,y=(windowHeight-f*k)/2-X-(X+m)*Math.floor(O/imageColumns)-B.clientHeight-x.clientHeight+window.pageYOffset,H[A].style.width=v,H[A].style.top=p,H[A].style.left=h,H[A].style.opacity=1,H[A].style.zIndex=3,H[O].style.width=f,H[O].style.top=y,H[O].style.left=I,H[O].style.opacity=1,H[O].style.zIndex=3,i=(windowWidth-c)/2,function(e){a=Date.now(),t=w,o=e.pageX-r,w=W+o,i<o?H[A].style.left=h-i+o:o<-i&&(H[O].style.left=I+i+o),H[currentImage].style.left=w}),null==e.button?document.addEventListener("touchmove",n):document.addEventListener("mousemove",n)}function e(){u=Date.now(),a?a<u-50?(s=600*Math.log(Math.abs(o)+500)-4e3,o<i&&-i<o?(H[A].removeAttribute("style"),H[O].removeAttribute("style"),I=W-w,M=!0,Y()):(o<0?(H[A].removeAttribute("style"),Math.abs(o)<S/2?(A=O,O=currentImage,currentImage=A,y=I+i+o):(y=w,w=I+i+(A=o),f!=c&&(A=f,f=c,c=A)),W=(S-c)/2-X-(X+m)*(O%imageColumns)+window.pageXOffset,h=Math.abs(o)<S/2?W+(windowWidth+f)/2:W-(windowWidth+f)/2):0<o&&(H[O].removeAttribute("style"),O=A,o<S/2?(A=currentImage,currentImage=O,O=A,y=h-i+o):(y=w,w=h-i+(A=o),v!=c&&(A=v,v=c,c=A)),W=(S-c)/2-X-(X+m)*(O%imageColumns)+window.pageXOffset,h=o<S/2?W-(windowWidth+v)/2:W+(windowWidth+v)/2),o&&(I=W-w,p=h-o,M=!0,z()))):(s=100+800*(u-a)/Math.abs(w-t),a=S/2-X+window.pageXOffset,h=t<w?(o<-i?(H[A].removeAttribute("style"),A=currentImage,currentImage=O,O=A,y=I+i+o):(H[O].removeAttribute("style"),O=A,v!=c&&(A=v,v=c,c=A),p!=D&&(D=p),y=w,w=h-i+o),a+windowWidth/1.96-(X+m)*(currentImage%imageColumns)):(h=i<o?(H[O].removeAttribute("style"),O=currentImage,currentImage=A,y=h-i+o,a-v):(H[A].removeAttribute("style"),f!=c&&(A=f,f=c,c=A),y!=D&&(D=y),y=w,w=I+i+o,a-f))-windowWidth/1.96-(X+m)*(currentImage%imageColumns),I=(W=a-c/2-(X+m)*(O%imageColumns))-w,p=h-y,M=!0,z()):n?(c=galleryImageDivs[0].clientWidth,f=c-m,I=(W=b=0)-w,p=(D=0)-y,v=b-h,M=!0,C()):E(),null==g.button?(n?document.removeEventListener("touchmove",n):document.removeEventListener("touchmove",d),document.removeEventListener("touchend",e)):(n?document.removeEventListener("mousemove",n):document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",e))}w=W,null==g.button?(document.addEventListener("touchmove",d),document.addEventListener("touchend",e)):(document.addEventListener("mousemove",d),document.addEventListener("mouseup",e))}else k=window.pageYOffset})}function d(e){k==window.pageYOffset&&(u=Date.now(),backgroundDiv.style.top=k,backgroundDiv.style.left=window.pageXOffset,currentImage=~~e.target.id,m=e.target.clientWidth,X=galleryImageDivs[0].offsetTop,S=r.clientWidth,k=e.target.naturalHeight/e.target.naturalWidth,D=(windowHeight-(c=(L=windowHeight/windowWidth)<k?.9*windowHeight/k:.9*windowWidth)*k)/2-X-(X+m)*Math.floor(currentImage/imageColumns)-B.clientHeight-x.clientHeight+window.pageYOffset,W=(S-c)/2-X-(X+m)*(currentImage%imageColumns)+window.pageXOffset,f=c-m,I=W-(w=0),p=D-(y=0),v=(b=1)-(h=0),H[currentImage].style.zIndex=3,backgroundDiv.style.zIndex=2,M=!0,C())}backgroundDiv.addEventListener("click",function(){-1<currentImage&&o(function(){E()})},!1);var z=function(){e=Date.now(),t=(e-u)/s,u=e,w+=t*I,y+=t*I,H[O].style.left=w,H[currentImage].style.left=y,I<0&&W<w||0<I&&w<W?n=requestAnimationFrame(z):(H[currentImage].removeAttribute("style"),H[currentImage=O].style.left=W,M=!1)};1&isMobile||document.addEventListener("keydown",function(e){-1<currentImage&&o(function(){u=Date.now(),"Escape"===e.code?E():"ArrowLeft"===e.code?(c<=m&&(m=galleryImageDivs[0].clientWidth),h=(y=W)+(windowWidth+c)/2,O=0==currentImage?H.length-1:currentImage-1,k=H[O].naturalHeight/H[O].naturalWidth,w=(S-windowWidth)/2-X-(X+m)*(O%imageColumns)-(c=L<k?.9*windowHeight/k:.9*windowWidth)+window.pageXOffset,W=(windowWidth+c)/2+w,D=(windowHeight-c*k)/2-X-(X+m)*Math.floor(O/imageColumns)-B.clientHeight-x.clientHeight+window.pageYOffset,I=W-w,s=200,documentBody.clientWidth<=windowWidth&&(documentBody.style.overflowX="hidden"),H[O].style.width=c,H[O].style.top=D,H[O].style.opacity=1,H[O].style.zIndex=3,M=!0,z()):"ArrowRight"===e.code&&(c<=m&&(m=galleryImageDivs[0].clientWidth),h=(y=W)-(windowWidth+c)/2,O=currentImage>=H.length-1?0:currentImage+1,k=H[O].naturalHeight/H[O].naturalWidth,c=L<k?.9*windowHeight/k:.9*windowWidth,w=windowWidth-X-(X+m)*(O%imageColumns)+window.pageXOffset,W=w-windowWidth-(c-S)/2,D=(windowHeight-c*k)/2-X-(X+m)*Math.floor(O/imageColumns)-B.clientHeight-x.clientHeight+window.pageYOffset,I=W-w,s=200,documentBody.clientWidth<=windowWidth&&(documentBody.style.overflowX="hidden"),H[O].style.width=c,H[O].style.top=D,H[O].style.opacity=1,H[O].style.zIndex=3,M=!0,z())})}),document.addEventListener("scroll",function(e){-1<currentImage&&(backgroundDiv.style.top=window.pageYOffset,backgroundDiv.style.left=window.pageXOffset,m=galleryImageDivs[0].clientWidth,W=(S-c)/2-X-(X+m)*(currentImage%imageColumns)+window.pageXOffset,D=(windowHeight-c*k)/2-X-(X+m)*Math.floor(currentImage/imageColumns)-B.clientHeight-x.clientHeight+window.pageYOffset,H[currentImage].style.left=W,H[currentImage].style.top=D)}),window.addEventListener("resize",function(){resizeDivs(),-1<currentImage&&(S=r.clientWidth,X=galleryImageDivs[0].offsetLeft,m=galleryImageDivs[0].clientWidth,W=(S-(c=(L=windowHeight/windowWidth)<k?.9*windowHeight/k:.9*windowWidth))/2-X-(X+m)*(currentImage%imageColumns)+window.pageXOffset,D=(windowHeight-c*k)/2-X-(X+m)*Math.floor(currentImage/imageColumns)-B.clientHeight-x.clientHeight+window.pageYOffset,H[currentImage].style.left=W,H[currentImage].style.top=D,H[currentImage].style.width=c)})}function resizeDivs(){imageColumns=Math.ceil(container.clientWidth/220),columnMargin=440/((imageColumns+10)*(imageColumns+10)),columnMarginStyle.marginTop=columnMargin+"%",columnMarginStyle.marginLeft=columnMargin+"%",columnWidthStyle.width=(100-(imageColumns+1)*columnMargin)/imageColumns+"%",galleryDivsStyle.height=galleryImageDivs[0].clientWidth,windowHeight=backgroundDiv.clientHeight,windowWidth=backgroundDiv.clientWidth}function grabStyle(){var e,t,n=document.styleSheets,i=n.length-1,o=n[i],r=o.cssRules.length;o.insertRule("div#gallery div{\n\n}",r),galleryDivsStyle=o.cssRules[r].style;for(var l=0;l<i;l++){for(t=(e=n[l].href).length-1;"/"!=e[t]&&t;)t--;t&&(t++,e=e.substr(t),1&isMobile?"style.css"==e?columnMarginStyle=findStyleAttribute(n[l].cssRules,"div#thumbnails img, div#gallery div"):"mobile.css"==e&&(t=0):"style.css"==e&&(t=0),t||(n=n[l].cssRules,l=i))}1&isMobile?columnWidthStyle=columnMarginStyle:(columnWidthStyle=findStyleAttribute(n,"div#thumbnails img, div#gallery div"),columnMarginStyle=columnWidthStyle)}function findStyleAttribute(e,t){for(var n=e.length,i=0;i<n;i++)if(e[i].selectorText==t)return e[i].style;return!1}function setUpBackground(){var e=documentBody.children;e=e[e-1],(backgroundDiv=document.createElement("DIV")).style="position:absolute; background:rgba(0,0,0,0.8); width:100%; height:100%; opacity:0; z-index:-1; top:"+window.pageYOffset+"; right:"+window.pageXOffset,documentBody.appendChild(backgroundDiv)}function removeTextNodes(){for(var e=thumbnailDiv.childNodes,t=galleryDiv.childNodes,n=e.length-1;0<=n;n-=2)thumbnailDiv.removeChild(e[n]),galleryDiv.removeChild(t[n])}removeTextNodes(),setUpBackground(),grabStyle(),resizeDivs(),loadAnimationTriggers();