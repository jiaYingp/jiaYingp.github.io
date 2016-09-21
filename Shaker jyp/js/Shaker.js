$(function(){
	
	var bg = $('.bg');
	var gridding = $('.gridding');
	var gridding2 = $('.gridding2');
	var firstcontent = $('.first-content');
	var contentpath1 = $('.content_path1');
	var about = $('.about');
	var content_path2 = $('.content_path2');
	var process = $('.process');
	var services = $('.services');
	var boxshadow = $('.box-shadow')[0];
	var title1 = $('.first-content .title1')[0];
	var title2 = $('.about .title2')[0];
	var title3 = $('.process .title2')[0];
	var title4 = $('.services .title2')[0];
	var btnstart = $('.btn_start');
	var overstart = $('.over_start');
	var na = $('header a');
	var content_img_service = $('.content_img_service');
	var item_service1 = $('.item_service1');
	var maxTop = $('.roll')[0].offsetHeight - $('.rollstrip')[0].offsetHeight;
	var num=0;
	var n=0;
	var um=0;
	
	var w = window.innerWidth/2

	$(document).mousemove(function (e) {
    	if(e.clientX>w){
			var	x1=(w-e.clientX)/350
		}
    	if(e.clientX>w){
			var	x2=(w-e.clientX)/100
		}
    	if(e.clientX>w){
			var	x3=(w-e.clientX)/50
		}
		if(e.clientX<w){
			var	x1=(w-e.clientX)/350
			var	x2=(w-e.clientX)/100
			var	x3=(w-e.clientX)/50
		}	

		function level(n){
			var levelh = n.getBoundingClientRect().top+n.offsetHeight/2		
			if(e.clientY>levelh){
				var y = (levelh-e.clientY)/30	
			}
			if(e.clientY<levelh){
				var y = (levelh-e.clientY)/30	
			}	
			if(n.style.left){
				n.style.top=y+'px';
			}else{
				n.style.textShadow = ""+x3+"px "+y+"px 0px rgba(1,142,105,0.6)" ;
			}	
		}
 		bg.css('left', x1);
 		gridding2.css('left', x2);
 		gridding.css('left', x3);
 		firstcontent.css('left', x3);
 		contentpath1.css('left', x3);
 		about.css('left', x3);
 		$('.content_path1 svg').css('left', x3);
 		content_path2.css('left', x3);
 		process.css('left', x3);
 		services.css('left', x3);
 		boxshadow.style.left=x3+'px';
		level(title1)
		level(title2)
		level(title3)
		level(title4)
		level(boxshadow)
    });
		
	btnstart.hover(
		function () {
   			overstart.css('width',222)
		},
		function () {
			overstart.css('width',0)
		}
	)
	
	na.hover(
		function () {
			$(this).css('transform','translateY(-85px)')
		},
		function () {
			$(this).css('transform','translateY(0px)')
		}
	)

	na.on("click", function(){

		$('.rollstrip')[0].style.top = $(this).index()+'80'+'px';
		$('.main_content')[0].style.top = (window.innerHeight - $('.main_content')[0].offsetHeight) * (( $(this).index()+'80') / maxTop ) + 'px';

	});
	

	item_service1.hover(
		function(){
			$(this).find('.over_bars1').css('top',100+'%');
			$(this).find('.over_bars2').css('top',-100+'%');
			$(this).find('.img_over').css('opacity',1);
		},
		function(){
			$(this).find('.over_bars1').css('top',-100+'%');
			$(this).find('.over_bars2').css('top',100+'%');
			$(this).find('.img_over').css('opacity',0);			
		}
	)

	$('.rollstrip')[0].onmousedown = function(e) {		
		var disY = e.clientY - this.offsetTop;	
		document.onmousemove = function(e) {
            var T = e.clientY - disY;
            if (T < 0) {
                T = 0;
            } else if (T > maxTop) {
                T = maxTop;
            }
           $('.rollstrip')[0].style.top = T + 'px';
           $('.main_content')[0].style.top = (window.innerHeight - $('.main_content')[0].offsetHeight) * ( T / maxTop ) + 'px';
        }
		document.onmouseup = function() {
            document.onmousemove = null;
        }
		return false;
	}
	
	$('.roll')[0].onmousewheel = document.onmousewheel = fn;
    $('.roll')[0].addEventListener('DOMMouseScroll', fn);
    document.addEventListener('DOMMouseScroll', fn);
    function fn(e) {
        var flag = true;

        if (e.wheelDelta) {
            flag = e.wheelDelta > 0 ? true : false;
        } else {
            flag = e.detail < 0 ? true : false;
        }
        var T;
        if (flag) {
            T = $('.rollstrip')[0].offsetTop - 10;
        } else {
            T = $('.rollstrip')[0].offsetTop + 10;
        }
        if (T < 0) {
            T = 0;
        } else 
        if (T > maxTop) {
            T = maxTop;
        }
        if(T>=50){
        	$('header').css('position','fixed')
        }
        else if(T<50){
        	$('header').css('position','relative')   	
        }
		console.log(T)
		if(T>20){
		$('.content_path1 path')[0].setAttribute('stroke-dasharray','10 3000')
		}
		if(T>30){
		$('.content_path1 path')[0].setAttribute('stroke-dasharray','500 2000')
		}
		if(T>40){
		$('.content_path1 path')[0].setAttribute('stroke-dasharray','1000 1500')
		}
		if(T>50){
		$('.content_path1 path')[0].setAttribute('stroke-dasharray','2000 1000')
		}
		if(T>70){
		$('.content_path1 path')[0].setAttribute('stroke-dasharray','5000  0')
		}
		
		if(T==80){
			na[0].style.transform = 'translateY(-85px)'
		}else{
			na[0].style.transform = 'translateY(0px)'
		}
		if(T==180){
			na[1].style.transform = 'translateY(-85px)'
		}else{
			na[1].style.transform = 'translateY(0px)'
		}
		if(T==280){
			na[2].style.transform = 'translateY(-85px)'
		}else{
			na[2].style.transform = 'translateY(0px)'
		}
		if(T==380){
			na[3].style.transform = 'translateY(-85px)'
		}else{
			na[3].style.transform = 'translateY(0px)'
		}
		
		if(T>120){
		$('#path2 path')[0].setAttribute('stroke-dasharray','50 3000')
		}
		if(T>131){
		$('#path2 path')[0].setAttribute('stroke-dasharray','900 2000')
		}
		if(T>141){
		$('#path2 path')[0].setAttribute('stroke-dasharray','1500 1000')
		}
		if(T>151){
		$('#path2 path')[0].setAttribute('stroke-dasharray','3000 0')
		}
		
		if(T>200){
		$('#path4 path')[0].setAttribute('stroke-dasharray','10 3000')
		}
		if(T>210){
		$('#path4 path')[0].setAttribute('stroke-dasharray','600 2000')
		}
		if(T>231){
		$('#path4 path')[0].setAttribute('stroke-dasharray','1000 1000')
		}
		if(T>241){
		$('#path4 path')[0].setAttribute('stroke-dasharray','3000 0')
		}
		
		if(T>340){
		$('#path3 path')[0].setAttribute('stroke-dasharray','10 3000')
		}
		if(T>360){
		$('#path3 path')[0].setAttribute('stroke-dasharray','600 2000')
		}
		if(T>371){
		$('#path3 path')[0].setAttribute('stroke-dasharray','1000 1000')
		}
		if(T>381){
		$('#path3 path')[0].setAttribute('stroke-dasharray','3000 0')
		}
        $('.rollstrip')[0].style.top = T + "px";
		gridding2[0].style.top = (window.innerHeight - $('.main_content')[0].offsetHeight) * ( T / maxTop ) + 'px';
        $('.main_content')[0].style.top =  (window.innerHeight - $('.main_content')[0].offsetHeight) * ( T / maxTop ) + 'px';
        e.preventDefault();
        return false;
    }
	




	
})
