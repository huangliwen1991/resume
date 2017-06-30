window.onload = function(){
	var oImg = document.getElementById("info").getElementsByTagName("img");
	var oDiv0 = document.getElementById("myInfo_info");
	var oDiv1 = document.getElementById("eduLocat_edu");
	var oDiv2 = document.getElementById("eduLocat_locat");
	var oDiv3 = document.getElementById("workPhone_work");
	var oDiv4 = document.getElementById("workPhone_phone");
	var arr = new Array(oDiv0, oDiv1, oDiv2, oDiv3, oDiv4);
 	var alpha = 30;
 	var speed = 0;
 	var timer = null;
 	
	for(var i=0; i<oImg.length; i++){
 		oImg[i].index = i;
 		oImg[i].onmouseover = function(){
 			changeOpacity(100, arr[this.index]);
 		};
 		oImg[i].onmouseout = function(){
  			changeOpacity(30, arr[this.index]);
 		};
	}
 	function changeOpacity(target, obj){
  		clearInterval(timer);
  		if(target > alpha){
   				speed = 2;
   			}else if(target < alpha){
   				speed = -2;
  			}
  		timer = setInterval(function(){
   			if(alpha == target){
   			 	clearInterval(timer);
  			}
   			else{
   				alpha += speed;
   				obj.style.filter = 'alpha(opacity=' + alpha + ')';
    			obj.style.opacity = alpha/100;
  			}
 		},5);
 	}


  var oDiv = document.getElementById("erweima");
  var oBt = document.getElementById("bt");

  oBt.onmouseover = function(){
    oDiv.style.display = "block";
  }
  oBt.onmouseout = function(){
    oDiv.style.display = "none";
  }


  var list1Div = document.getElementById("list1").getElementsByTagName("div");
  var list2Img = document.getElementById("list2").getElementsByTagName("img");
  var main1 = document.getElementById("main1");
  var main2 = document.getElementById("main2");
  var main3 = document.getElementById("main3");
  var main4 = document.getElementById("main4");
  var mArray = new Array(main1,main2,main3,main4); 

  for(var i=0; i<list2Img.length; i++){
    list2Img[i].index = i;

    list2Img[i].onmouseover = function(){
      list1Div[this.index].style.opacity = 1;
      list1Div[this.index].style.filter = "alpha(opacity=1)";
      this.style.width = 60 + "px";
      this.style.height = 60 + "px";
    }
    list2Img[i].onmouseout = function(){
      list1Div[this.index].style.opacity = 0.3;
      list1Div[this.index].style.filter = "alpha(opacity=30)";
      this.style.width = 40 + "px";
      this.style.height = 40 + "px";
    }
    list2Img[i].onclick = function(){
      for(var j=0; j<mArray.length; j++){
        mArray[j].style.left = 100 + "%";
      }
      mArray[this.index].style.left = 0;
    }
  }
}
