{
	let sections=document.querySelectorAll(".section");
    let inner=document.querySelector(".content");
    let pages=document.querySelectorAll(".page span");
    let pagerbox=document.querySelector(".pagerbox");
    let totop=document.querySelector(".fanhui span");
    window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>500){
			pagerbox.style.height="200px";
		}else{
			pagerbox.style.height=0;
		}	
	}
    let obj=pages[0];
    let arr=["about","skill","projects","contact"];
    location.hash="#about";
    window.onhashchange=function () {
        let hash=location.hash;
        // let index=hash.charAt(2)-1;    //获取字符串的下标
        let index=arr.indexOf(hash.slice(1));   //截取#
        obj.classList.remove("active");
        pages[index].classList.add("active");
        obj=pages[index];
    }
    let flag=true;
    inner.onwheel=function (e) {
        if(flag){
            flag=false;
            //三元表达式 当前方向
            let dir=e.deltaY>0?"down":"up";
            let hash=location.hash;
            let index=arr.indexOf(hash.slice(1));
            let target;
            if(dir==="down"){
                target=arr[index+1];  //目标位置
            }else{
                target=arr[index-1];
            }
            if(target){
                location.hash="#"+target;
            }else{
                flag=true;
            }
        }
    }
    inner.addEventListener("transitionend",function () {
        flag=true;
    })
 	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let pt=document.documentElement.scrollTop;
		let t=setInterval(function(){
           pt-=200;
           if(pt<0){
           		pt=0;
           		clearInterval(t);
           }
           document.documentElement.scrollTop=pt;
		},25)
	}
}
//作品
{
    // $(".btn").click(function () {
    //     $(".btn").removeClass("active");
    //     $(this).addClass("active");
    //     var index=$(this).index();
    //     $(".content").removeClass("active").eq(index).addClass("active");
    // })
    
    let btns=document.querySelectorAll(".projects_title li");
    let items=document.querySelectorAll(".boxda");
    let n=0;
    btns.forEach(function(ele,index){ 
        ele.onclick=function(){
            for(let i=0;i<btns.length;i++){
                btns[i].classList.remove("active");
                items[i].style.zIndex=0;
            }
            this.classList.add("active");
            items[index].style.zIndex=999;
        }
        
    })
}