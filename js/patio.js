(function ($) {

$(document).click (function(e){
	console.log(e.target.className)
	if (e.target.className == 'form_btn') {
		$('.form_overlay').addClass('open_form');
		// $('.navigation').toggleClass('open_list');
	}
	// else {
	// 	$('.form_overlay').removeClass('open_form');
	// 	// $('.navigation').removeClass('open_list');
	// }
});

$(document).click (function(e){
	console.log(e.target.className)
	if (e.target.className == 'close_form') {
		$('.form_overlay').removeClass('open_form');
		// $('.navigation').toggleClass('open_list');
	}
	// else {
	// 	$('.form_overlay').removeClass('open_form');
	// 	// $('.navigation').removeClass('open_list');
	// }
});

}(jQuery));