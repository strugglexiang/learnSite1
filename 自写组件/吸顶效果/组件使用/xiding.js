(function(){
	var str=`
	         <div class="xiding-fugai"></div>
		 	 <div class="xiding-context">
		 	 	<div>
		 	 		<div class="xiding-logo">
		 	 		
			 	 	</div>
			 	 	<div class="xiding-sousuobox">
			 	 		  <input type="text" name="" id="" placeholder="搜索一下" />
			 	 		  <span>
			 	 		  	  搜索
			 	 		  </span>
			 	 	</div>
		 	 	</div>
		 	 </div>
	`
	var xidingbox=document.createElement("div");
	xidingbox.className="xiding";	
	$(xidingbox).html(str);
	$(xidingbox).appendTo($("body"));
	$(window).scroll(function(){
		 xidingshow();
	})
    window.xidingshow=function(){
    	 if($(document).scrollTop()>400){
		 	 $(xidingbox).css("animation","xidingchuxian 1s ease 0s forwards") ;
		 }
		 else{
		 	$(xidingbox).css("animation","none") ;
		 }
    }
})();

//console.log(xidingshow);
