var shade, zoomimg;

function zoomAsset(asset) {
	zooming.src = asset.firstElementChild.src;
	shade.fadeIn(200);
}

$(function(){
	$("body").addClass("js-enabled");
	shade = $("#shade");
	shade.click(function(){shade.fadeOut(200)});
	zooming = shade.find("img")[0];
	$(".asset.model .imgholder").click(function(ev){
		console.log(ev);
		ev.stopPropagation();
		zoomAsset(ev.currentTarget);
	});
});