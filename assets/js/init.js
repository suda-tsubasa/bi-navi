$(function(){
	let menu = $('.js-tab-menu');
	let content = $('.js-tab-content');
	let banner = $('.js-tab-banner');
	menu.on('click', function(){
		let index = menu.index(this);
		menu.removeClass('active');
		$(this).addClass('active');
		content.removeClass('active');
		content.eq(index).addClass('active');
		banner.removeClass('active');
		banner.eq(index).addClass('active');
	});
}); 