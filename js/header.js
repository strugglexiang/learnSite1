(
   function(){
	//-----------------搜索框隐藏和显示----------------------------------
	//点击搜索按钮
   $(".header-center>span").click(function(){  
   	     $(this).css("display","none"); 
   	     $(".sousuobox-input")[0].focus();
   	     $(".sousuobox").animate({"opacity":"1"},700,function(){
   	     	 
   	     });
      }); 
      
    //点击其他部分
    /*
    $(".header").click(function(event){
    	  var tag=event.toElement;
    	  if(tag.className.indexOf("sousuobox")==-1){
    	  	   $(".sousuobox").animate({"opacity":"0"},700,function(){
    	  	   	    $(".header-center>span").css("display","block");
    	  	   });
    	  }
    })
    */
   
   $(".sousuobox-input").blur(function(){
   	            if($(".sousuobox").is(":animated")){
   	            	 return
   	            }
   				$(".sousuobox").animate({"opacity":"0"},700,function(){
    	  	   	    $(".header-center>span").css("display","block");
    	  	   });
   });
    
    //---------------点击搜索或者按确认键---------------------------
    //确认键
    $(".sousuobox-input").keydown(function(event){
    	    if(event.key=="Enter"){
    	    	sousuo();
    	    }
    });
    //点击搜索
    $(".sousuobox-i").click(sousuo);
    
    //处理方法
    function sousuo(){
    	 console.log(1);
    }
    
    //---------------检测是否登录----------------------
    //cookie值或者localStora
    var check=0;
    if(check){
    	  $(".weidenglu").hide();
    	  $(".yidenglu").show();
    }
    else{
    	$(".weidenglu").show();
    	$(".yidenglu").hide();
    }
    
})();
