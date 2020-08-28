// Check off todos by clicking


// when an "li" is clicked inside an "ul" do the following
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on x to delete todo

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();

	});
	event.stopPropagation();
});

//select input 

$("input[type='text']").keypress(function(event){
	// checking for when "enter" was pressed
	if(event.which === 13){
		var todoText = $(this).val();
		//clear the input value
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
		
	}// if 

});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();

})
