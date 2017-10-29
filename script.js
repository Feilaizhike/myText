
/* 获取元素 */
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];

//音乐播放完停止光盘自动停止
    audio.addEventListener("ended",function(event){
        music.setAttribute("class","");
        //music.style.animationPlayState = "paused";
        //music.webkitAnimationPlayState = "paused";
    },false);

//点击音乐图标控制音乐播放
//music.onclick = function (){
//    if(audio.paused){
//        audio.play();
//        this.setAttribute("class","play");
//        //this.style.webkitAnimationPlayState = "running";
//            //  this.style.animationPlayState = "running";
//    }
//    else{
//        audio.pause();
//        this.setAttribute("class","");
//        //this.style.webkitAnimationPlayState = "paused";
//        //      this.style.animationPlayState = "paused";
//    };
//};
//点击音乐图标控制音乐播放
music.addEventListener("touchstart", function (event) {
    if(audio.paused){
        audio.play();
        this.setAttribute("class","play");
    }
    else{
        audio.pause();
        this.setAttribute("class", "");
    };
},false);
/*点击屏幕开启好运*/
page1.addEventListener("touchstart", function (event) {
    page1.style.display = "none";
    page2.style.display =  "block";
    page3.style.display =  "block";
    page3.style.top    =   "100%";

    setTimeout(function(){
        page2.setAttribute("class", "page fadeOut");
        page3.setAttribute("class", "page fadeIn");
    },5500);
},false);


