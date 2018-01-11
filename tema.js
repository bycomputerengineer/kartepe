$(document).ready(function(){
	$(".alt-dropdown-content").children().click(function(){
		var tablo_ismi = $(this).attr("value");
		$.post("urunler/geturun.php", {tablo: tablo_ismi}, function(veri2){
			$("alt-kalip").append(veri2);
		});
	});

	$(".satir10").children().children().click(function(){
		$(this).parent().children().attr("class",$(this).attr("class").replace("active-nav", ""));
		$(this).attr("class",$(this).attr("class")+" active-nav");
		var yol = $(this).attr("value");
		var php = yol+"/"+yol+".php";
		$(".ust-kalip").children().first().remove();
		$.post(php,{msg:"msg"},function(veri){
			$(".ust-kalip").append(veri);
		});
	});
});