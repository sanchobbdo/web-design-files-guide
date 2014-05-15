var SANCHOGUIDES = SANCHOGUIDES || {};
SANCHOGUIDES.Site = (function(){
	'use strict';

	var $slidePanel = $('section, .logo-container');

	$('.menu-btn').on('click', function(e) {
		$slidePanel.toggleClass('is-open');
		e.preventDefault();
	});

	$('.nav').on('click', 'a', function(){
		$slidePanel.removeClass('is-open');
	});

}());