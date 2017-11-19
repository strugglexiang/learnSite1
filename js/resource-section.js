(function(){
	  //-----------获取哈希值------------------------
//	  console.log(location.hash.slice(2));
      var hashinex=location.hash.slice(2);
      hashindex=Number(hashinex);
//    console.log(hashindex)
      var s=$(".section-right>div").eq(hashindex-1).offset().top;
   
      if(hashindex==0){
      	  $(".section-left a").removeClass("dianji");//其他所有移除样式
      	  $(".section-left a").eq(0).addClass("dianji")//第一链接添加样式
      	  $("html,body").css("scrollTop",s);
    }
     else{
      	 $(".section-left a").removeClass("dianji");//其他所有移除样式
      	  $(".section-left a").eq(hashindex-1).addClass("dianji");
      	  //这里有点不清楚
//        console.log(s)
//        debugger
//    	  document.body.scrollTop=s+75
      	$("html,body").animate({"scrollTop":s-75},20);
      }
//    console.log(hashindex)
	  
	 //------------左边高度控制--------------------
	 var h=parseFloat($(window).height());
	 console.log(h);
	 $(".section-left").css('height',h-75);
	 $(".section-left>div").css('height',h-75)
	 //-----------滚动事件--------------------
	 $(".section-left a").click(function(event){
	 	  //------------------控制样式--------------------
	 	  $(".section-left a").removeClass("dianji");//其他所有移除样式
	 	  $(this).addClass("dianji");//自己加样式
	 	  
	 	  
	 	  
	 	  //------------------卷动行为----------------------
//	 	  console.log(1)
          event.preventDefault();
          var index=$(this.parentNode).index();
//        console.log(index)
          var s=$(".section-right>div").eq(index).offset().top;
//        console.log(s)
          if($("html,body").is(":animated")){
          	    $("html,body").stop(true,true);
          }
          $("html,body").animate({"scrollTop":s-75},400);
	 })
})()
