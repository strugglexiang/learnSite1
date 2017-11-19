(function(){
	 var box=document.createElement("div");
	 box.className="returnTop"
	 var str=`
	       <div>
				 <span class="returnTop-span1"></span>
			     <span class="returnTop-span2">返回顶部</span>
			</div>
	 `
	 box.innerHTML=str;
	$(box).appendTo($("body"));
	$(window).scroll(function(){
//		   console.log(1)
//		   xidingshow();
		   fanhuidbxiu();
	})
	
	
	function fanhuidbxiu(){
		 if($("html,body").is(":animated")){
		 	 return;
		 }
		 if($(document).scrollTop()>400){
		  	  $(box).show();
		  }
		  else{
		  	$(box).hide();
		  }
	}
	$(box).click(function(){
		 $("html,body").animate({
		 	 "scrollTop":"0"
		 },500,function(){
		 	  console.log("已经返回顶部")
		 });
	});
	 
})()
