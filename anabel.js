$(document).ready(function(){
	var correct_code = 00000000;
        var response= "<center><h1>No Bitch Your Wrong</h1></center>";
	//create click event for submit button
	$("#submit").click(function(){
    		var first = $("#code").val();
		if (first == correct_code) {
		        window.location = "sholguinasc.github.io/anabel.html/#";
                 } 
	         else {
		     	$("#top_text").replaceWith(response);
          		$("body").css("background-color","#f71b1b");
	         }
	
	});
});
