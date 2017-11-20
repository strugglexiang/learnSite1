(function(){
	//---------样式部分------------------
	  $(".g-top li").click(function(){
	  	 var index=$(this).index();
//	  	 console.log(index)
	  	 //自身样式改变
	  	 $(this).addClass("xianshi").siblings().removeClass("xianshi");
	  	 $(".g-body>div").eq(index).css("display","block").siblings().css("display","none")
	  })
})()
