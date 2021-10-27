$(document).ready(function() {
	if($(window).width() > 1230) {
		$('.close-submenu').click(function() {
			$(this).closest('.subitems').slideToggle();
		});
		$('.menu__box > li > a').mouseenter(function() {
			$('.subitems').hide();
			$(this).next('.subitems').slideDown();
		});	
	}
	$('.popup-close').click(function() {
		$(this).closest('.popup').fadeOut();
	});
	$('[type=tel]').mask("+7 (999) 99-99-999");
	$('.call-calc').click(function(e) {
		e.preventDefault();
		$('.calculator__calc').hide();
		if($('#'+$(this).data('calc')).is(':hidden'))
			$('#'+$(this).data('calc')).show();
	});
	$('.calculator__calc .close').click(function() {
		$(this).closest('.calculator__calc').hide();
	});
	$('.calculator__calc input').change(function() {
		const isCheckedBool = $(this).is(':checked');
		const isChecked = isCheckedBool ? 1 : 0;
		const inputName = $(this).attr('class');
		const formName = $(this).closest('.calculator__calc').attr('id');
		let formValues = $(this).closest('.calculator__calc--wrapper').children('.calculator__calc--info'),
			radioGroup = $(this).closest('.calculator__calc--radio'),
			value1 = formValues.children('div').first().children('span'),
			value2 = formValues.children('div').eq(1).children('span'),
			calcValues = [[1000, '1 час'],[2000, '2 часа'],[3000, '3 часа']];
		if(formName === 'calc2') {
			calcValues = [[1200, '2 часа'],[2400, '3 часа'],[3800, '4 часа']];
		}
		switch(inputName) {
			case 'type-2':
				value1.html(calcValues[isChecked][0]);
				value2.html(calcValues[isChecked][1]);
				radioGroup.find('label').last().toggleClass('disabled');
				radioGroup.find('.type-3').prop({'disabled': !isCheckedBool,'checked': false});
				break;
			case 'type-3':
				value1.html(calcValues[isChecked+1][0]);
				value2.html(calcValues[isChecked+1][1]);
				break;
		}
	});
	$('form').submit(function(e) {
		e.preventDefault();
		$('.thanks-popup').css("display","flex").hide().fadeIn();
	});
});