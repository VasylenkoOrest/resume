$(document).ready(function(){
  $(window).scroll(()=>{
  	$('#scrollText').text('ScrollY:'+window.scrollY)

		if($(this).scrollTop()>=200){
  		$('#earth').addClass('fixed-earth')
  	}
  	else if($(this).scrollTop()<=200){
  		$('#earth').removeClass('fixed-earth')
  	}


  	if($(this).scrollTop()>=600 && $(this).scrollTop()<=1000){
  		$('#cl1').animate({left: '0px'});
  		$('#cr1').fadeIn('slow');
  	}
  	else{
  		$('#cl1').animate({left: '-280px'});
  		$('#cr1').fadeOut();
  }

  })
});