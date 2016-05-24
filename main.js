//Create a select and append a menu

var $select = $("<select></select>");
	$("#menu").append($select);




//Cycle over menu links
$("#menu a").each(function(){
	var $anchor = $(this);
	//create an option
	var $option = $("<option></option>");


	if($anchor.parent().hasClass("selected")){
		$option.prop("selected", true); 
	} 


	//options value is the href of the link 

	$option.val($anchor.attr("href"));
//options value is the href of the link 
	$option.text($anchor.text());
	//options text is the link text
//append option to select.
	$select.append($option);
});

//Bind change listener to select

	$select.change(function(){
		window.location = $select.val();


});
	
	




//Create a button to click to 
//go to select's location
//modify css to hide links on small resoultion(widths) and show button on select.
//Hide the select button on wide widths

//Ensure selected class shows what page the navigation in currently on.