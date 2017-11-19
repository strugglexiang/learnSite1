(
   function(){
   	//设置section高度

   	console.log($("body").css("height"));
   	var h=parseFloat($("body").css("height"));
    var s=h-75;
 
    console.log($(".seciton"));
    $(".section").css("height",s)
   	
   	
   	
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
    
    //---------------登陆框业务逻辑----------------------------------------
    
    //信号量
      var check=[];
      check.length=2;
     //样式
     $(".tianru .left>input").focus(function(){
     	 $(this).parent().css("border","1px solid #f55d54 ");
     })
     //用户名
    $(".name input").blur(function(){
    	//失去
    	$(this).parent().css("border","1px solid #ccc");
    	
    	var str=$(this).val();
    	var zz=/^[0-9a-zA-Z]{6,12}$/g;
    	
    	if(!str){

    		$(".name>.right>p").hide();
            $(".name>.right>.err2").show();
            return;
            
    	}
    	
    	if(zz.test(str)){
    		 $(".name>.right>p").hide();
             $(".name>.right>.right").show();
             check[0]=true;
    	}
    	else{
    		$(".name>.right>p").hide();
            $(".name>.right>.err").show();
           check[0]=false;
    	}
       
    	
    })
    
    
    //密码检测
     $(".password input").blur(function(){
     	console.log(1)
     	$(this).parent().css("border","1px solid #ccc");
     	
    	var str=$(this).val();
    	var zz=/^[0-9a-zA-Z]{6,12}$/g;
//  	console.log(str);
//  	console.log(Boolean(str));
    	
    	if(!str){

    		$(".password>.right>p").hide();
            $(".password>.right>.err2").show();
            return;
            
    	}
    	if(zz.test(str)){
    		 $(".password>.right>p").hide();
             $(".password>.right>.right").show();
             check[1]=true;
    	}
    	else{
    		$(".password>.right>p").hide();
            $(".password>.right>.err").show();
           check[1]=false;
    	}
        
    	
    })
     
     //获得身份信息
    
     
     
     //提交前检测
     $(".bt").click(function(){
     	 var sf=$("select").val();
     	 for(var i=0;i<check.length;i++){
     	 	if(!check[i]){
     	 		return;
     	 	}
     	 }
     	
     	var obj={
     		"sf":sf,
     		"name":$(".name input").val(),
     		"password":$(".password input").val()
     	}
     	console.log(obj)
     })
     
})();