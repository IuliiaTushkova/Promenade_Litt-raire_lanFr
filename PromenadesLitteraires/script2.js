$(function(){

var $mainMenuItems = $("#main-menu ul").children("li");
var totalMainMenuItems = $mainMenuItems.length; 
var openedIndex = 0,



 init = function()
 {
 	bindEvents();

 		if(validIndex(openedIndex))
 			animateItem($mainMenuItems.eq(openedIndex), true, 700);
 };

bindEvents = function()
{

$mainMenuItems.children(".images").click(function(){
		var newIndex = $(this).parent().index();
		$item = $mainMenuItems.eq(newIndex);

		if(openedIndex === newIndex)
		{
			animateItem($item, false, 400);
			openedIndex = -1;
		}
		else
		{
			if(validIndex(newIndex))
			{
				
				animateItem($mainMenuItems.eq(openedIndex), false, 400);
				openedIndex = newIndex;
				animateItem($item, true, 400);
			};
		};
		
	});
	$(".buttons").hover(
		function(){
			$(this).toggleClass("hovered");
		}
		
		);



	$(".buttons").click(function(){
		var newIndex = $(this).index();
		checkAndAnimateItem(newIndex);

	});

},

validIndex = function(indexToCheck){
	return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
},

animateItem = function($item, toOpen, speed){
	var $colorImage = $item.find(".color"),
		itemParam = toOpen ? {width: "420px"}: {width: "140px"},
		colorImageParam = toOpen ? {left: "0px"}: {left: "140px"};
		$colorImage.animate(colorImageParam, speed);
		$item.animate(itemParam,speed);	
};
checkAndAnimateItem = function(indexToCheckAndAnimate){
	if(openedIndex === indexToCheckAndAnimate)
		{
			animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 400);
			openedIndex = -1;
		}
		else
		{
			if(validIndex(indexToCheckAndAnimate))
			{
				
				animateItem($mainMenuItems.eq(openedIndex), false, 400);
				openedIndex = indexToCheckAndAnimate;
				animateItem($mainMenuItems.eq(openedIndex), true, 400);
			};
		};

};

init();


});