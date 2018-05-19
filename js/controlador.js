$("div").hide();
$("#purete").click(function(){
	$("div").show();
	$("#purete").hide();
})
$("#puretazo").click(function(){
	$("#img1").show();
	$("#img2").show();
	$("#img3").show();
	$("#img4").show();
	console.log($("p").text() );
	$("div").html("<h1>Fracaso</h1>");
})
$("#button1").click(function(){
	$("#img1").hide();
	$("#img2").hide();
	$("#img3").hide();
})
$("#button2").click(function(){
	$("#img2").slideDown("slow", "linear");
})
$("#button3").click(function(){
	$("#img3").fadeIn(3000);
})
$("#button4").click(function(){
	$("#img4").slideUp("fast", "swing");
})


