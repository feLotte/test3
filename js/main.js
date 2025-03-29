// JavaScript Document
$(function(){
	setContBefore();
});

function setContBefore(){
	$("section.content").each(function(index){
		//var cu="";
		if(index!=0){
			var color=$(this).prev(".content").data('color');
			var dir="L";
			if(index% 2 === 0){
				dir="R";
			}
			$(this).prepend("<div><img src='img/sect-end-"+color+"-"+dir+".png'></div>");
		}
		
	});
}