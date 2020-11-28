$(function(){
	$(document).ready(function(){
		$('#mytab a').click(function(){
			$(this).tab('show');
		});
	});
	$('#myCarousel').carousel({
		interval: 2000
	});
});