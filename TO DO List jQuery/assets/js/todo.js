//Check of specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");	
});

//click on x to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopProppagation();//stop bubblingup i.e. other event added to parent won't go on
});

//
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo 
		var todoText = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});