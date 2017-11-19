function mylunbo(str){
	
	//首先添加内容
	var str1=`
	   		 <div class="mylunbomove">
			 	  <ul>
			 	  	<li><img src="img/lunbo/0.jpg"/></li>
			 	  	<li><img src="img/lunbo/1.jpg"/></li>
			 	    <li><img src="img/lunbo/2.jpg"/></li>
			 	  	<li><img src="img/lunbo/3.jpg"/></li>
			 	  	<li><img src="img/lunbo/4.jpg"/></li>
			 	  
			 	  </ul>
			 </div>
			 <div class="mylunboqiehuan">
			 	    <span class="mylunboqiehuan-left"><</span>
			 	    <span class="mylunboqiehuan-right">></span>
			 </div>
			 <div class="mylunbobt">
			 	    <ul>
			 	    	<li><i><span class="lunbocurrent"></span></i></li>
			 	    	<li><i><span></span></i></li>
			 	    	<li><i><span></span></i></li>
			 	    	<li><i><span></span></i></li>
			 	    	<li><i><span></span></i></li>
			 	    </ul>
			 </div>
			`
	   $(str).html(str1);
	 
	
	
   //获取要放置轮播图的盒子的宽
   var width=$(str).css("width");
   //把轮播li和宽设为和盒子一样
   $(".mylunbomove ul li").css("width",width);
   
   
   //主要业务逻辑
   
   //尾部增加图片
   $(".mylunbomove ul li:first").clone().appendTo(".mylunbomove ul");
   
   //信号量
   var index=0;
   //左移长度
   var length=parseFloat($(str).css("width"));
   //图片数量
   var picnumber=$(".mylunbomove ul li img").length;
// console.log(picnumber)
   
   //点击右边处理
   function righthandle(){
   	   if($(".mylunbomove ul").is(":animated")){
   	   	   return;
   	   }
   	   index++;
   	    changecircle();
       $(".mylunbomove ul").animate({"left":-index*length},1000,function(){
       	    
       	     if(index===picnumber-1){
		   	   	   index=0;
		   	   	   $(".mylunbomove ul").css("left",0);
   	        }
       });
   }
   
   //点击处理  
   
   function lefthandle(){

   	   if($(".mylunbomove ul").is(":animated")){
   	   	   return;
   	   }
   	   index--;
   	   if(index<0){
   	   	  index=picnumber-1;
   	   	  $(".mylunbomove ul").css("left",-index*length);
   	   	  lefthandle();
   	   }
   	    changecircle();
   	    $(".mylunbomove ul").animate({"left":-index*length},1000,function(){
   	    	 
   	    });
   	   
   }
   
   function changecircle(){
   	   var t=index;
// 	   console.log(t)
   	   if(t>picnumber-2){
   	   	   t=0;
   	   }
   	    $(".mylunbobt ul li span").removeClass("lunbocurrent");
   	   $(".mylunbobt ul li span").eq(t).addClass("lunbocurrent");
   	   
   }
   
   //添加点击事件
   $(".mylunboqiehuan-left").click(function(){
   	   //传统轮播
   	   lefthandle();
   	   //呼吸背景
   	   huxileft();
   	   
   });


   $(".mylunboqiehuan-right").click(function(){
   	   //传统轮播图
   	   righthandle();
   	   //呼气背景
   	   huxiright();
   });
   
   //设置定时器
   var timer=setInterval(function(){
   	  //传统
   	  righthandle();
   	  //呼吸
   	  huxiright();
   	  
   },4000);
   
   //当鼠标放入轮播盒子的时候
   $(str).mouseover(function(){
   	    clearInterval(timer);
   });
   //鼠标放出的时候
   $(str).mouseout(function(){
   	    timer=setInterval(function(){
   	    	//传统
   	    	 righthandle();
   	    	 //呼吸
   	    	 huxiright()
   	    },4000);
   });
   
   //最后点击下方按钮的时候做的事情
   $(".mylunbobt ul li").click(function(){
   	     //瞬间完成当前动画，并清空队列。
   	     $(".mylunbomove ul").stop(true,true);
   	     //stop(false, true); //瞬间完成当前的动画并继续下一个
   	    var num=$(this).index();
   	    index=num;
   	     changecircle();
   	    $(".mylunbomove ul").animate({"left":-index*length},1000,function(){
   	    	
   	    });
   	    
   	    //呼吸轮播业务  	    
        if($(".huxifugai ul li").eq(huxiindex).is(":animated")){
          	  	    $(".huxifugai ul li").eq(huxiindex).stop(true,true);
               	    $(".huxifugai ul li").eq(next).stop(true,true);
        }
        
         $(".huxifugai ul li").eq(huxiindex).animate({"opacity":"0"},1000,function(){
   	   	      huxiindex=num;
   	   });
   	     $(".huxifugai ul li").eq(num).animate({"opacity":"1"},1000);
   	   
        
          
        
        
   	    
   })
   
   
   //-----------------------呼吸轮播图业务逻辑-------------------
   //信号量
   var huxiindex=0;
   //
   var next;
   //呼吸轮播数量
   var huxilength=$(".huxifugai ul li").length;
// console.log(huxilength);
   //右击处理方法
   function huxiright(){
   	   if($(".huxifugai ul li").eq(huxiindex).is(":animated")){
   	   	   return;
   	   }
   	   if(huxiindex>huxilength-1){
   	   	   huxiindex=0;
   	   }
   	   if(huxiindex==huxilength-1){
   	   	  next=0;
   	   }else{
   	   	   next=huxiindex+1;
   	   }   	   
// 	   console.log(huxiindex,next);
   	   $(".huxifugai ul li").eq(huxiindex).animate({"opacity":"0"},1000,function(){
   	   	   huxiindex++;
   	   });
   	   $(".huxifugai ul li").eq(next).animate({"opacity":"1"},1000);
   	   
   	   
   }
   
   //左击处理方法
   function huxileft(){
   	   if($(".huxifugai ul li").eq(huxiindex).is(":animated")){
   	   	   return;
   	   }
   	   if(huxiindex<0){
   	   	  huxiindex=huxilength-1;
   	   }
   	   if(huxiindex==0){
   	   	  next=huxilength-1; 
   	   }else{
   	   	   next=huxiindex-1;
   	   }
//   	   	   console.log(huxiindex,next);
   	   $(".huxifugai ul li").eq(huxiindex).animate({"opacity":"0"},1000,function(){
   	   	   huxiindex--;
   	   });
   	   $(".huxifugai ul li").eq(next).animate({"opacity":"1"},1000);
   	   
   }
   
   
   
}



