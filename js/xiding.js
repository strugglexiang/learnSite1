(function(){
	$(window).scroll(function(){
		 xidingshow();
	})
    window.xidingshow=function(){
    	 if($(".xiding").is(":animated")){
    	 	 return;
    	 }
    	 if($(document).scrollTop()>250){
		 	 $(".xiding").css("animation","xidingchuxian 0.5s linear 0s forwards") ;
		 }
		 else{
		 	$(".xiding").css("animation","none") ;
		 }
    }
    
    
    //搜索部分
    $(".xiding-sousuobox input").keydown(function(event){
    	
    	  if(event.key=="Enter"){
    	  	 console.log(1)
    	  }
    });
    
    $(".xiding-sousuobox span").click(function(){
    	 console.log(1);
    })
})();

//console.log(xidingshow);
