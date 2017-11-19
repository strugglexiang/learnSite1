(function(){
	 //加载传统轮播图
	 mylunbo(".section-context-center");
	 //验证登陆
	 var check=0;//表示没有登陆
	 if(!check){
	 	$(".section-context-right-yidenglu").css("display","none");
	 	$(".section-context-right-weidenglu").css("display","block");
	 }
	 else{
	 	$(".section-context-right-yidenglu").css("display","block");
	 	$(".section-context-right-weidenglu").css("display","none");
	 }
	 
	 //点击链接
	$(".daohang>ul>li>a").click(function(event){
//		  event.preventDefault();
//		  console.dir(typeof this.hash.slice(2))
          
	})
})();
