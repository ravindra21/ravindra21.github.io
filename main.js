function toggleSidebar() {
	$('#sidebar').toggle();
	$('.overlay').toggle();	
}
$('#navbtn').click(function() {
	toggleSidebar();
});
$('.overlay').click(function(){
	toggleSidebar();
});

$("#portfolio .card").each(function(index){
	$(this).css({
		'animation-delay' : (0.5+index) + 's'
	});
});

$("#skill img").each(function(index){
	let rand = Math.random() * 1 + 0.111;
	rand = rand.toFixed(3);

	$(this).css({
		'animation-delay' : rand + 's'
	});
});

$(document).ready(function(){
	$('.typewritter').teletype({
	  text: [
	    'nama saya ravindra setya alkahfi',
	    'umur saya 22 tahun',
	  ]
	});

	$("#portfolio .card").addClass('flip-in-ver-right');
	$("#p-photo").addClass('scale-in-center');
	$('#skill img').addClass('swirl-in-fwd');
});
