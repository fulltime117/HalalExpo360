$(document).ready(function(){
	$(".navButton").click(function(){		
		$(".side-bar").addClass("active");
		$(".action").css("display", "block");
	});

	$(".close-btn").click(function(){
		$(".side-bar").removeClass("active");
		$(".action").css("display", "none");		
	});

	$(".action").click(function(){
		$(".side-bar").removeClass("active");
		$(this).css("display", "none");	
	});
	
	
	if ($(window).width() > 700 ){
		$(".sub-content").mouseover(function(){
			$(".data-img").css("margin-left","-216px");
			$(".accoditionTextSpan").css("display", "none");
			var up_display = $(".upicon").css("display");
			if(up_display != "inline-block"){
				$(".downicon").css("display","inline-block");
			}	
		});
	
		$(".sub-content").mouseleave(function(){
			var down_display = $(".downicon").css("display");
			if(down_display == "inline-block"){
				$(".downicon").css("display","none");
				$(".data-img").css("margin-left","0px");
				$(".accoditionTextSpan").css("display", "inline-block");
			}else{
				
			}
		});
		$(document).on('click', '.accordion-heading',function(){
			var down_display = $(".downicon").css("display");
			if(down_display == "inline-block"){
				$(".downicon").css("display","none");
				$(".upicon").css("display","inline-block");			
			}else{
				$(".downicon").css("display","inline-block");
				$(".upicon").css("display","none");
				
			}
		});
	}	
	
	


// for responsive
	// if ($(window).width() < 1200 && $(window).width() > 700 ) {
	// 	console.log("dsf");
	// 	$(".home-sub-body").removeClass("container");
	// 	$(".sub-content").mouseover(function(){
	// 		$(".data-img").css("margin-left","-152px");
	// 	});
	//  }
	//  else {
	// 	$(".home-sub-body").addClass("container");
	//  }



	//  if ($(window).width() < 700){
	// 	$(document).on('click', '.accordion-heading',function(){
	// 		alert();
	// 	});
		 
	// 	$(window).scroll(function(){

	// 		if ($(this).scrollTop() > 30){
	// 			$('.social').css("visibility", "hidden");
	// 		}else{
	// 			$('.social').css("visibility", "visible");
	// 		}
	// 	});
	//  }

	

});

