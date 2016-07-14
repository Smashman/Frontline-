var shade, zoomimg, vidframe;

$(function(){
	$("body").addClass("js-enabled");

	shade = $("#shade");
	zoomimg = shade.find("img")[0];

	shade.click(function(){shade.fadeOut(200);vidframe.remove();});

	$(".asset.model .imgholder").click(function(ev){
		zoomimg.src = ev.currentTarget.firstElementChild.src;
		$(zoomimg).show();
		shade.removeClass("particle");
		shade.fadeIn(200);
	});

	$(".asset.particle .imgholder").click(function(ev){
		ev.preventDefault();
		ev.stopPropagation();

		var vidid = ev.currentTarget.dataset.vid;
		vidframe = $("<iframe class=\"video\" src=\"http://www.youtube.com/embed/" + vidid + "?showinfo=0&amp;vq=hd720&amp;rel=0&amp;autohide=1&amp;autoplay=1\" frameborder=\"0\" allowfullscreen=\"\"></iframe>");
		shade.addClass("particle");
		shade.children().append(vidframe);
		$(zoomimg).hide();
		shade.fadeIn(200);
	});

});