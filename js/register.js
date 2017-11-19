(
   function(){
   	//设置高度
   	console.log($("body").css("height"));
   	var h=parseFloat($("body").css("height"));
    var s=h-75;
 
    console.log($(".seciton"));
   $(".seciton").css("height",s);
   	
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
    
    //---------------注册框业务逻辑----------------------------------------
    
    
    //维护一个一个信号量数字
//  var checktel;
//  var checkname;
//  var checkpass1;
//  var checkpass2;
     var check=[];
     check.length=4;
    
    //电话检测
    $(".telbox input").blur(function(){
    	var str=$(this).val();
    	var zz=/^[\d]{11}$/g;
    	if(!str){
    		$(".telbox>.check>p").hide();
           $(".telbox>.check>.err3").show();
            return;           
    	}
    	if(zz.test(str)){
//  		console.log(1);
             //验证成功
            $(".telbox>.check>p").hide();
            $(".telbox>.check>.right").show();
//          checktel=true;
            check[0]=true;
            
    	}
    	else{
//  		console.log(0); 
            $(".telbox>.check>p").hide();
            $(".telbox>.check>.err").show();
            check[0]=false;
    	}
    })
    
    //姓名检测
    $(".namebox input").blur(function(){
    	var str=$(this).val();
    	var zz=/^[0-9a-zA-Z]{6,12}$/g;
    	if(!str){
    		$(".namebox>.check>p").hide();
           $(".namebox>.check>.err3").show();
            return;           
    	}
    	if(zz.test(str)){
    		 $(".namebox>.check>p").hide();
            $(".namebox>.check>.right").show();
            check[1]=true;
    	}
    	else{
    		$(".namebox>.check>p").hide();
            $(".namebox>.check>.err").show();
           check[1]=false;
    	}
    })
    
    //密码检测
    $(".passbox input").blur(function(){
    	var str=$(this).val();
    	var zz=/^[0-9a-zA-Z]{6,12}$/g;
    	if(!str){
    		$(".passbox>.check>p").hide();
           $(".passbox>.check>.err3").show();
            return;           
    	}
    	if(zz.test(str)){
    		 $(".passbox>.check>p").hide();
             $(".passbox>.check>.right").show();
             check[2]=true;
    	}
    	else{
    		$(".passbox>.check>p").hide();
            $(".passbox>.check>.err").show();
           check[2]=false;
    	}
    	//如果此时确认框的密码不为空
    	if($(".passboxagin input").val()!=""){
    		checkpassagin();
    		console.log("111")
    	}
    	
    })
    //再次确认
  
    $(".passboxagin input").blur(checkpassagin);
    function checkpassagin(){
    	//当前输入
    	var str=$(".passboxagin input").val();
    	var zz=/^[0-9a-zA-Z]{6,12}$/g;
    	var firststr=$(".passbox input").val();
//  	console.log(firststr,str);
    	//第一次密码
    	var firststr=$(".passbox input").val();
    	if(!str){
    		$(".passboxagin >.check>p").hide();
           $(".passboxagin >.check>.err3").show();
            return;           
    	}
    	//先验证密码格式是否正确
        if(zz.test(str)){
        	//密码格式正确，验证两次密码是否一致
        	if(firststr==str){
        		$(".passboxagin>.check>p").hide();
        		$(".passboxagin>.check>.right").show();
//      		checkpass2=true;
                check[3]=true;
        	}
        	else{
        		$(".passboxagin>.check>p").hide();
        		$(".passboxagin>.check>.err1").show();
//      		checkpass2=false;
                 check[3]=false;
        	}
        }else{
        	    $(".passboxagin>.check>p").hide();
        		$(".passboxagin>.check>.err2").show();
//      		checkpass2=false;
                check[3]=false;
        }
    	

    }
    
    //最后提交
    $(".bt").click(function(){
//  	 console.log(checktel,checkname,checkpass1,checkpass2);
          for(var i=0;i<check.length;i++){
          	  if(!check[i]){
          	  	   console.log("验证有错误项，请重新确认");
          	  	   return; 
          	  }
          }
          
          console.log("验证正确");
          //验证正确后，可执行ajax
         //发送ajax前，应该要函数节流。
         var obj={
         	 "sf":$("select").val(),
         	 "tel":$(".telbox input").val(),
         	 "name":$(".namebox input").val(),
         	 "password1":$(".passbox input").val(),
         	 "password2":$(".passboxagin input").val()
         };
         console.log(obj);
         
    })
})();