$(document).ready(function() {

	$('#updateUsername').submit(function(){
		
	$.ajax({
		url: 'update',
		type: 'POST',
		dataType: 'json',
		data: $('#updateUsername').serialize(),
		
		success: function(data){
			if(data.isValid){
//				alert("This is returned");
				$('#displayName').html("Your name is" + data.username);
				$('#displayName').slideDown(500);
			}
			else{
				alert("Enter valid username");
		}}
		
	});
		return false;
	});

});
