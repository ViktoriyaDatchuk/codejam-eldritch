(()=>{"use strict";var r={7921:(r,n,e)=>{e.r(n),e.d(n,{default:()=>o});var t={azathoth:e.p+"asset/Azathoth.png",cthulhu:e.p+"asset/Cthulthu.png",iogSothoth:e.p+"asset/IogSothoth.png",shubNiggurath:e.p+"asset/ShubNiggurath.png"};const o=[{id:"azathoth",name:"azathoth",cardFace:t.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",cardFace:t.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",cardFace:t.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",cardFace:t.shubNiggurath,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}]},3574:(r,n,e)=>{e.r(n),e.d(n,{default:()=>t});const t=[{id:"veryEasy",name:"Очень низкая"},{id:"easy",name:"Низкая"},{id:"normal",name:"Средняя"},{id:"hard",name:"Высокая"},{id:"veryHard",name:"Очень высокая"}]},8048:(r,n,e)=>{e.r(n),e.d(n,{shuffle:()=>M,startGame:()=>v});var t=e(7921),o={brown1:e.p+"asset/brown1.png",brown2:e.p+"asset/brown2.png",brown3:e.p+"asset/brown3.png",brown4:e.p+"asset/brown4.png",brown5:e.p+"asset/brown5.png",brown6:e.p+"asset/brown6.png",brown7:e.p+"asset/brown7.png",brown8:e.p+"asset/brown8.png",brown9:e.p+"asset/brown9.png",brown10:e.p+"asset/brown10.png",brown11:e.p+"asset/brown11.png",brown12:e.p+"asset/brown12.png",brown13:e.p+"asset/brown13.png",brown14:e.p+"asset/brown14.png",brown15:e.p+"asset/brown15.png",brown16:e.p+"asset/brown16.png",brown17:e.p+"asset/brown17.png",brown18:e.p+"asset/brown18.png",brown19:e.p+"asset/brown19.png",brown20:e.p+"asset/brown20.png",brown21:e.p+"asset/brown21.png"};const a=[{id:"brown1",cardFace:o.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:o.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:o.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:o.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:o.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:o.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:o.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:o.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:o.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:o.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:o.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:o.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:o.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:o.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:o.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:o.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:o.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:o.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:o.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:o.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:o.brown21,difficulty:"easy",color:"brown"}];var c={blue1:e.p+"asset/blue1.png",blue2:e.p+"asset/blue2.png",blue3:e.p+"asset/blue3.png",blue4:e.p+"asset/blue4.png",blue5:e.p+"asset/blue5.png",blue6:e.p+"asset/blue6.png",blue7:e.p+"asset/blue7.png",blue8:e.p+"asset/blue8.png",blue9:e.p+"asset/blue9.png",blue10:e.p+"asset/blue10.png",blue11:e.p+"asset/blue11.png",blue12:e.p+"asset/blue12.png"};const i=[{id:"blue1",cardFace:c.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:c.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:c.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:c.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:c.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:c.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:c.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:c.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:c.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:c.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:c.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:c.blue12,difficulty:"normal",color:"blue"}];var l={green1:e.p+"asset/green1.png",green2:e.p+"asset/green2.png",green3:e.p+"asset/green3.png",green4:e.p+"asset/green4.png",green5:e.p+"asset/green5.png",green6:e.p+"asset/green6.png",green7:e.p+"asset/green7.png",green8:e.p+"asset/green8.png",green9:e.p+"asset/green9.png",green10:e.p+"asset/green10.png",green11:e.p+"asset/green11.png",green12:e.p+"asset/green12.png",green13:e.p+"asset/green13.png",green14:e.p+"asset/green14.png",green15:e.p+"asset/green15.png",green16:e.p+"asset/green16.png",green17:e.p+"asset/green17.png",green18:e.p+"asset/green18.png"};const s=[{id:"green1",cardFace:l.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:l.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:l.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:l.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:l.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:l.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:l.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:l.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:l.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:l.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:l.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:l.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:l.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:l.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:l.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:l.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:l.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:l.green18,difficulty:"easy",color:"green"}];var d,u,f,p,g,b,A,h,y,m;function C(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}var v=function(r){t.default.forEach((function(n){r.classList.contains(n.id)&&(d=n.firstStage,u=n.secondStage,f=n.thirdStage)})),document.querySelector(".difficulty").addEventListener("click",w)},w=function(r){E(r),document.querySelector(".card-wrapper").classList.add("hidden"),document.querySelector(".select-card").style.backgroundImage="none",document.querySelector(".card-deck").classList.remove("visibility");var n,e=function(r,n){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,n){if(r){if("string"==typeof r)return C(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?C(r,n):void 0}}(r))||n&&r&&"number"==typeof r.length){e&&(r=e);var t=0,o=function(){};return{s:o,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return c=r.done,r},e:function(r){i=!0,a=r},f:function(){try{c||null==e.return||e.return()}finally{if(i)throw a}}}}(document.querySelectorAll(".stage-title"));try{for(e.s();!(n=e.n()).done;)n.value.style.color="aliceblue"}catch(r){e.e(r)}finally{e.f()}},E=function(r){r.target.classList.contains("difficulty-button")&&(document.querySelector(".shuffle-deck").classList.remove("hidden"),document.querySelectorAll(".difficulty-button").forEach((function(r){r.classList.remove("active-button")})),r.target.classList.add("active-button"),p=r.target.id,document.querySelector(".shuffle-deck").addEventListener("click",x))},x=function(r){B(),r.target.classList.add("active-button"),document.querySelector(".card-wrapper").classList.remove("hidden");var n=d.greenCards+u.greenCards+f.greenCards,e=d.blueCards+u.blueCards+f.blueCards,t=d.brownCards+u.brownCards+f.brownCards;"veryEasy"===p?(h=function(r){var n=[],e=[],t=[];if(s.forEach((function(r){"easy"===r.difficulty?n.push(r):"normal"===r.difficulty&&e.push(r)})),n.length<r)for(var o=0;o<r-n.length;o++){var a=Math.floor(Math.random()*e.length);n.push(e[a]),e.splice(a,1)}for(var c=0;c<r;c++){var i=Math.floor(Math.random()*n.length);t.push(n[i]),n.splice(i,1)}return t}(n),y=function(r){var n=[],e=[],t=[];if(i.forEach((function(r){"easy"===r.difficulty?n.push(r):"normal"===r.difficulty&&e.push(r)})),n.length<r)for(var o=0;o<r-n.length;o++){var a=Math.floor(Math.random()*e.length);n.push(e[a]),e.splice(a,1)}for(var c=0;c<r;c++){var l=Math.floor(Math.random()*n.length);t.push(n[l]),n.splice(l,1)}return t}(e),m=function(r){var n=[],e=[],t=[];if(a.forEach((function(r){"easy"===r.difficulty?n.push(r):"normal"===r.difficulty&&e.push(r)})),n.length<r)for(var o=0;o<r-n.length;o++){var c=Math.floor(Math.random()*e.length);n.push(e[c]),e.splice(c,1)}for(var i=0;i<r;i++){var l=Math.floor(Math.random()*n.length);t.push(n[l])}return t}(t)):"easy"===p?(h=function(r){var n=[],e=[];s.forEach((function(r){"hard"!==r.difficulty&&n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(n),y=function(r){var n=[],e=[];i.forEach((function(r){"hard"!==r.difficulty&&n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(e),m=function(r){var n=[],e=[];a.forEach((function(r){"hard"!==r.difficulty&&n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(t)):"normal"===p?(h=function(r){var n=[],e=[];s.forEach((function(r){n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(n),y=function(r){var n=[],e=[];i.forEach((function(r){n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(e),m=function(r){var n=[],e=[];a.forEach((function(r){n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(t)):"hard"===p?(h=function(r){var n=[],e=[];s.forEach((function(r){"easy"!==r.difficulty&&n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(n),y=function(r){var n=[],e=[];i.forEach((function(r){"easy"!==r.difficulty&&n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(e),m=function(r){var n=[],e=[];a.forEach((function(r){"easy"!==r.difficulty&&n.push(r)}));for(var t=0;t<r;t++){var o=Math.floor(Math.random()*n.length);e.push(n[o]),n.splice(o,1)}return e}(t)):(h=function(r){var n=[],e=[],t=[];if(s.forEach((function(r){"hard"===r.difficulty?n.push(r):"normal"===r.difficulty&&e.push(r)})),n.length<r)for(var o=0;o<r-n.length;o++){var a=Math.floor(Math.random()*e.length);n.push(e[a]),e.splice(a,1)}for(var c=0;c<r;c++){var i=Math.floor(Math.random()*n.length);t.push(n[i]),n.splice(i,1)}return t}(n),y=function(r){var n=[],e=[],t=[];if(i.forEach((function(r){"hard"===r.difficulty?n.push(r):"normal"===r.difficulty&&e.push(r)})),n.length<r)for(var o=0;o<r-n.length;o++){var a=Math.floor(Math.random()*e.length);n.push(e[a]),e.splice(a,1)}for(var c=0;c<r;c++){var l=Math.floor(Math.random()*n.length);t.push(n[l]),n.splice(l,1)}return t}(e),m=function(r){var n=[],e=[],t=[];if(a.forEach((function(r){"hard"===r.difficulty?n.push(r):"normal"===r.difficulty&&e.push(r)})),n.length<r)for(var o=0;o<r-n.length;o++){var c=Math.floor(Math.random()*e.length);n.push(e[c]),e.splice(c,1)}for(var i=0;i<r;i++){var l=Math.floor(Math.random()*n.length);t.push(n[l])}return t}(t)),g=S(d,h,y,m),b=S(u,h,y,m),A=S(f,h,y,m),document.querySelector(".card-deck").addEventListener("click",I)},I=function(){if(g.length>0){var r=g.pop(),n=new Image;n.src="".concat(r.cardFace),n.onload=function(){document.querySelector(".select-card").style.backgroundImage="url('".concat(n.src,"')")},console.log(r),0===g.length&&(document.querySelectorAll(".stage-title")[0].style.color="red"),"green"===r.color?document.querySelectorAll(".green")[0].innerHTML--:"blue"===r.color?document.querySelectorAll(".blue")[0].innerHTML--:document.querySelectorAll(".brown")[0].innerHTML--}else if(b.length>0){var e=b.pop(),t=new Image;t.src="".concat(e.cardFace),t.onload=function(){document.querySelector(".select-card").style.backgroundImage="url('".concat(t.src,"')")},console.log(e),0===b.length&&(document.querySelectorAll(".stage-title")[1].style.color="red"),"green"===e.color?document.querySelectorAll(".green")[1].innerHTML--:"blue"===e.color?document.querySelectorAll(".blue")[1].innerHTML--:document.querySelectorAll(".brown")[1].innerHTML--}else if(A.length>0){var o=A.pop(),a=new Image;a.src="".concat(o.cardFace),a.onload=function(){document.querySelector(".select-card").style.backgroundImage="url('".concat(a.src,"')")},console.log(o),0===A.length&&(document.querySelectorAll(".stage-title")[2].style.color="red",document.querySelector(".card-deck").classList.add("visibility")),"green"===o.color?document.querySelectorAll(".green")[2].innerHTML--:"blue"===o.color?document.querySelectorAll(".blue")[2].innerHTML--:document.querySelectorAll(".brown")[2].innerHTML--}},B=function(){var r=document.querySelectorAll(".green"),n=document.querySelectorAll(".blue"),e=document.querySelectorAll(".brown");r[0].innerHTML=d.greenCards,n[0].innerHTML=d.blueCards,e[0].innerHTML=d.brownCards,r[1].innerHTML=u.greenCards,n[1].innerHTML=u.blueCards,e[1].innerHTML=u.brownCards,r[2].innerHTML=f.greenCards,n[2].innerHTML=f.blueCards,e[2].innerHTML=f.brownCards},S=function(r,n,e,t){var o=[];return function(r,n,e){for(var t=0;t<r.greenCards;t++){var o=Math.floor(Math.random()*e.length);n.push(e[o]),e.splice(o,1)}}(r,o,n),function(r,n,e){for(var t=0;t<r.blueCards;t++){var o=Math.floor(Math.random()*e.length);n.push(e[o]),e.splice(o,1)}}(r,o,e),function(r,n,e){for(var t=0;t<r.brownCards;t++){var o=Math.floor(Math.random()*e.length);n.push(e[o]),e.splice(o,1)}}(r,o,t),M(o),o},M=function(r){r.sort((function(){return Math.random()-.5}))}},1402:(r,n,e)=>{e.d(n,{Z:()=>g});var t=e(7537),o=e.n(t),a=e(3645),c=e.n(a),i=e(1667),l=e.n(i),s=new URL(e(161),e.b),d=new URL(e(1481),e.b),u=c()(o()),f=l()(s),p=l()(d);u.push([r.id,"* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    min-height: 100vh;\r\n    font-family: 'Oswald', sans-serif;\r\n    background: url("+f+") center/cover no-repeat;\r\n  }\r\n\r\n  .game-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 0 50px;\r\n    gap: 80px;\r\n  }\r\n\r\n  .game-space {\r\n    height: 40vh;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .settings {\r\n    display: flex;\r\n    gap: 70px;\r\n  }\r\n\r\n  .difficulty-button {\r\n    background-color: rgb(215, 131, 86);\r\n    margin: 15px 0;\r\n    padding: 3px 8px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    border: 4px solid rgb(215, 131, 86);\r\n    cursor: pointer;\r\n    transition: .7s;\r\n  }\r\n\r\n  .difficulty-button:hover {\r\n    background-color: rgb(183, 107, 66);\r\n    border: 4px solid rgb(183, 107, 66);\r\n  }\r\n\r\n  .active-button {\r\n    border: 4px solid rgb(173, 41, 21);\r\n  }\r\n\r\n  .active-button:hover {\r\n    background-color: rgb(183, 107, 66);\r\n    border: 4px solid rgb(173, 41, 21);\r\n  }\r\n\r\n  .shuffle-deck {\r\n    align-self: center;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 16px;\r\n    margin: 0 0 17px 0;\r\n    transition: .7s;\r\n  }\r\n\r\n  .card-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 50px;\r\n    transition: 1s;\r\n  }\r\n\r\n  .tracker {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .stage-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    align-items: center;\r\n  }\r\n\r\n  .stage-title {\r\n    color: aliceblue;\r\n  }\r\n\r\n  .dots-wrapper {\r\n    align-items: center;\r\n    display: flex;\r\n    gap: 20px;\r\n    justify-content: center;\r\n  }\r\n\r\n  .dot {\r\n    width: 30px;\r\n    height: 30px;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .green {\r\n    background-color: rgb(10, 94, 10);\r\n  }\r\n\r\n  .brown {\r\n    background-color: rgb(117, 91, 40);\r\n  }\r\n\r\n  .blue {\r\n    background-color: rgb(51, 101, 208);\r\n  }\r\n\r\n  .card-deck,\r\n  .select-card {\r\n    cursor: pointer;\r\n    width: 150px;\r\n    height: 207px;\r\n    border-radius: 5px;\r\n    background-size: contain;\r\n    transition: all 1s linear;\r\n  }\r\n\r\n  .card-deck {\r\n    background-image: url("+p+");\r\n  }\r\n\r\n  .ancients-cards {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .azathoth,\r\n  .cthulhu,\r\n  .iogSothoth,\r\n  .shubNiggurath {\r\n    width: 200px;\r\n    height: 260px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    background-size: contain;\r\n    transition: 1s;\r\n  }\r\n  \r\n  .selected {\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  .hidden {\r\n    display: none;\r\n  }\r\n\r\n  .visibility {\r\n    opacity: 0;\r\n  }","",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,iBAAiB;IACjB,iCAAiC;IACjC,0EAAoE;EACtE;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,eAAe;IACf,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,mCAAmC;IACnC,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,mCAAmC;IACnC,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,mCAAmC;IACnC,mCAAmC;EACrC;;EAEA;IACE,kCAAkC;EACpC;;EAEA;IACE,mCAAmC;IACnC,kCAAkC;EACpC;;EAEA;IACE,kBAAkB;IAClB,iCAAiC;IACjC,eAAe;IACf,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,uBAAuB;EACzB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;EACpB;;EAEA;IACE,iCAAiC;EACnC;;EAEA;IACE,kCAAkC;EACpC;;EAEA;IACE,mCAAmC;EACrC;;EAEA;;IAEE,eAAe;IACf,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,yBAAyB;EAC3B;;EAEA;IACE,yDAA6D;EAC/D;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;;;;IAIE,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,wBAAwB;IACxB,cAAc;EAChB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;EACZ",sourcesContent:["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    min-height: 100vh;\r\n    font-family: 'Oswald', sans-serif;\r\n    background: url(../assets/img/background.jpg) center/cover no-repeat;\r\n  }\r\n\r\n  .game-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 0 50px;\r\n    gap: 80px;\r\n  }\r\n\r\n  .game-space {\r\n    height: 40vh;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .settings {\r\n    display: flex;\r\n    gap: 70px;\r\n  }\r\n\r\n  .difficulty-button {\r\n    background-color: rgb(215, 131, 86);\r\n    margin: 15px 0;\r\n    padding: 3px 8px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    border: 4px solid rgb(215, 131, 86);\r\n    cursor: pointer;\r\n    transition: .7s;\r\n  }\r\n\r\n  .difficulty-button:hover {\r\n    background-color: rgb(183, 107, 66);\r\n    border: 4px solid rgb(183, 107, 66);\r\n  }\r\n\r\n  .active-button {\r\n    border: 4px solid rgb(173, 41, 21);\r\n  }\r\n\r\n  .active-button:hover {\r\n    background-color: rgb(183, 107, 66);\r\n    border: 4px solid rgb(173, 41, 21);\r\n  }\r\n\r\n  .shuffle-deck {\r\n    align-self: center;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 16px;\r\n    margin: 0 0 17px 0;\r\n    transition: .7s;\r\n  }\r\n\r\n  .card-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 50px;\r\n    transition: 1s;\r\n  }\r\n\r\n  .tracker {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .stage-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    align-items: center;\r\n  }\r\n\r\n  .stage-title {\r\n    color: aliceblue;\r\n  }\r\n\r\n  .dots-wrapper {\r\n    align-items: center;\r\n    display: flex;\r\n    gap: 20px;\r\n    justify-content: center;\r\n  }\r\n\r\n  .dot {\r\n    width: 30px;\r\n    height: 30px;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .green {\r\n    background-color: rgb(10, 94, 10);\r\n  }\r\n\r\n  .brown {\r\n    background-color: rgb(117, 91, 40);\r\n  }\r\n\r\n  .blue {\r\n    background-color: rgb(51, 101, 208);\r\n  }\r\n\r\n  .card-deck,\r\n  .select-card {\r\n    cursor: pointer;\r\n    width: 150px;\r\n    height: 207px;\r\n    border-radius: 5px;\r\n    background-size: contain;\r\n    transition: all 1s linear;\r\n  }\r\n\r\n  .card-deck {\r\n    background-image: url(../assets/img/mythicCardBackground.png);\r\n  }\r\n\r\n  .ancients-cards {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .azathoth,\r\n  .cthulhu,\r\n  .iogSothoth,\r\n  .shubNiggurath {\r\n    width: 200px;\r\n    height: 260px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    background-size: contain;\r\n    transition: 1s;\r\n  }\r\n  \r\n  .selected {\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  .hidden {\r\n    display: none;\r\n  }\r\n\r\n  .visibility {\r\n    opacity: 0;\r\n  }"],sourceRoot:""}]);const g=u},3645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<r.length;s++){var d=[].concat(r[s]);t&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},1667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},7537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),c=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(c).concat([a]).join("\n")}return[n].join("\n")}},3379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},c=[],i=0;i<r.length;i++){var l=r[i],s=t.base?l[0]+t.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var f=e(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var g=o(p,t);t.byIndex=i,n.splice(i,0,{identifier:u,updater:g,references:1})}c.push(u)}return c}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var c=0;c<a.length;c++){var i=e(a[c]);n[i].references--}for(var l=t(r,o),s=0;s<a.length;s++){var d=e(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},9216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},3565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},7795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},4589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},161:(r,n,e)=>{r.exports=e.p+"asset/background.jpg"},1481:(r,n,e)=>{r.exports=e.p+"asset/mythicCardBackground.png"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.m=r,e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var r=e(3379),n=e.n(r),t=e(7795),o=e.n(t),a=e(569),c=e.n(a),i=e(3565),l=e.n(i),s=e(9216),d=e.n(s),u=e(4589),f=e.n(u),p=e(1402),g={};function b(r,n){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,n){if(r){if("string"==typeof r)return A(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?A(r,n):void 0}}(r))||n&&r&&"number"==typeof r.length){e&&(r=e);var t=0,o=function(){};return{s:o,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return c=r.done,r},e:function(r){i=!0,a=r},f:function(){try{c||null==e.return||e.return()}finally{if(i)throw a}}}}function A(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),n()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals,e(1481);var h=e(7921).default,y=e(3574).default,m=e(8048).startGame;window.onload=function(){C(),v(),w()};var C=function(){var r,n=b(document.querySelectorAll(".ancients-card"));try{var e=function(){var n=r.value;h.forEach((function(r){if(n.classList.contains(r.id)){var e=new Image;e.src=r.cardFace,e.onload=function(){n.style.backgroundImage="url('".concat(e.src,"')")}}}))};for(n.s();!(r=n.n()).done;)e()}catch(r){n.e(r)}finally{n.f()}},v=function(){var r,n=b(document.querySelectorAll(".difficulty-button"));try{var e=function(){var n=r.value;y.forEach((function(r){n.id===r.id&&(n.innerHTML=r.name)}))};for(n.s();!(r=n.n()).done;)e()}catch(r){n.e(r)}finally{n.f()}},w=function(){var r=document.querySelectorAll(".ancients-card");document.querySelector(".ancients-cards").addEventListener("click",(function(n){var e,t=b(document.querySelectorAll(".difficulty-button"));try{for(t.s();!(e=t.n()).done;)e.value.classList.remove("active-button")}catch(r){t.e(r)}finally{t.f()}document.querySelector(".card-wrapper").classList.add("hidden"),document.querySelector(".select-card").style.backgroundImage="none",document.querySelector(".card-deck").classList.remove("visibility");var o,a=b(document.querySelectorAll(".stage-title"));try{for(a.s();!(o=a.n()).done;)o.value.style.color="aliceblue"}catch(r){a.e(r)}finally{a.f()}var c,i=b(r);try{for(i.s();!(c=i.n()).done;)c.value.classList.remove("selected")}catch(r){i.e(r)}finally{i.f()}n.target.classList.add("selected"),m(n.target)}))}})()})();