$(function(){
	var items = $('#testimonial .item');
	var btns = $('.owl-page');
	btns.eq(0).addClass('active');
	items.eq(0).addClass('active1');
	btns.on('click',function(e){
		btns.removeClass('active');
		$(this).addClass('active');
		items.removeClass('active1');
		var index = $(this).index();
		items.eq(index).addClass('active1');
	})
})
