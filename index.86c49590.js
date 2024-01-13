const t=document.querySelector(".spider"),e=document.querySelector(".wall");e.addEventListener("click",f=>{let i=f.clientX-e.offsetLeft-e.clientLeft,o=f.clientY-e.offsetTop-e.clientTop,l=i-t.offsetWidth/2,c=o-t.offsetHeight/2;o<t.offsetHeight/2&&(c=0),i<t.offsetWidth/2&&(l=0),i>e.clientWidth-t.offsetWidth/2&&(l=e.clientWidth-t.offsetWidth),o>e.clientHeight-t.offsetHeight/2&&(c=e.clientHeight-t.offsetHeight),t.style.left=`${l}px`,t.style.top=`${c}px`});//# sourceMappingURL=index.86c49590.js.map

//# sourceMappingURL=index.86c49590.js.map
