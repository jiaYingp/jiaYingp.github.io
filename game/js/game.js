window.onload=function(){
	var box = document.getElementById('box');
	var people = document.getElementById('people');
	var people2 = document.getElementById('people2');
	var body = people.getElementsByTagName('div');
	var bj = document.querySelector('.bj');
	var ul = bj.querySelector('ul');
	var obstacle = document.querySelector('.obstacle');
	var obstacle1 = document.querySelector('.obstacle1');
	var obstacle2 = document.querySelector('.obstacle2');
	var state = document.querySelector('#state');
	var score = document.querySelector('.score');
	var wuqi = document.querySelector('.wuqi');
	var zz = document.querySelector('.zz');
	var sxin = zz.querySelector('.shuaxin'); 
	var ks = document.querySelector('.ks');
	var bz = document.querySelector('.bz');
	var bz2 = document.querySelector('.bz');
	var left_arm = people.querySelector('.left_arm');
	var right_arm = people.querySelector('.right_arm');
	var left_leg = people.querySelector('.left_leg');
	var right_leg = people.querySelector('.right_leg');
	var offon = true
	var onoff = true;
	var time = null;
	var timer = null;
	var num = 90;
	var speedTime = 4600;
	var speedTime1 = 3000;
	var speedTime2 = 5000;
	var n=0;
	var x=0;

	sxin.onclick=function(){
		offon = true
		onoff = true;
		num=90;
		n=0;
		x=0;
		people.style.webkitBoxReflect='below 0px -webkit-linear-gradient(rgba(0,0,0,0) 1%, rgba(0,0,0,1) 90%)';
		for (var i = 0; i < body.length; i++) {
			body[i].style.animationPlayState="running"
		}
		ul.style.animationPlayState="running"
		obstacle.style.left=1008+'px';
		people.style.left=70+'px';
		people.style.transform='rotateY(0deg)';
		people2.style.left=70+'px';
		obstacle1.style.left=1008+'px';
		obstacle2.style.left=1008+'px';
		setInterval(obstacle.timer);
		setInterval(obstacle1.timer);
		setInterval(obstacle2.timer);
		wuqi.innerHTML='技能:'+ x;	
		speedTime = 4600;
	 	speedTime1 = 3000;
		hinder()
		hinder1()
		jump1 ()
		jifen()
		zz.style.display='none'
	}	
	ks.onclick =function(){
		if(onoff){	
			ks.style.display='none';
			for (var i = 0; i < body.length; i++) {
				body[i].style.animationPlayState="running"
			}
			ul.style.animationPlayState="running"		
			if(time==null){
				jump1 ()
			}
			jifen()
			hinder()
			hinder1()
		}
	}

	//按上键时跳动
	document.onkeydown = function(e) {
		if(e.which==39){
			if(onoff){
				people.style.transform='rotateY(0deg)';
				num+=15
				mTween(people,num,'left',10,'linear',function(){
					if(people.offsetLeft>900){
						num=900
					}
				})
				
			}
			accelerate()	
		}
		
		if(e.which==37){
			if(people.style.display=='block' && onoff){
				people.style.transform='rotateY(180deg)';
				num-=15
				mTween(people,num,'left',10,'linear',function(){
					if(people.offsetLeft<25){
						num=-20
					}	
				})	
			}
			accelerate()
		}
	}
		
	//方向右键抬起
	document.onkeyup = function(e) {
		if(e.which==38){
			if(onoff){
			people.style.display='none'
			people2.style.display='block'	
//			people2.style.transform='rotateY(rY+deg)'
			people2.style.left=(num+30) + 'px'
			jump ()	
			}
		}
		if(e.which==40){
			box.style.background=''
			if(people.style.display=='block'){
				x--
				if(x<0){
					x=0
				}else{
				if(onoff){
					qiu()
				}	
			}
			}
			wuqi.innerHTML='技能:'+ x;
		}
		if(e.which==39){
			reduction()
		}
		if(e.which==37){
			reduction()
		}
	
	}
	//跳动函数
	function jump (){
		if(onoff){
			onoff = false;
			mTween(people2,120,'top',450,'linear',function(){
				mTween(people2,246,'top',450,'linear',function(){
					onoff = true;
					people2.style.display='none';
//					people.style.left=(num+30)+'px'
					people.style.display='block';
				})
			})
		}		
	}	
	function jump1 (){
		if(onoff){
			onoff = false;
			people2.style.display='block'
			mTween(people2,130,'top',350,'linear',function(){
				mTween(people2,246,'top',350,'linear',function(){
					onoff = true;
					people2.style.display='none';
					people.style.display='block';
					people.style.top=256+'px';
				})
			})
		}		
	}
	//计分
	function jifen(){
		clearInterval(time);
		time=setInterval(function(){
				n++
				if(n==1000){
					hinder2 ()
				}
				if(n%150==0){
					x++
					wuqi.innerHTML='技能:'+ x;
					wuqi.style.animationPlayState="running";
				}
				score.innerHTML='得分:'+n+'米';
			},50)
		wuqi.style.animationPlayState="paused";
	}

	//障碍物移动
	function hinder(){
		speedTime-=50;
		if(speedTime<=1000){
			speedTime=1000
		}
		mTween(obstacle,-120,'left',speedTime,'linear',function(){		
			obstacle.style.left=1008+'px';
			hinder()
		},function(value){	
			if(value<(people.offsetLeft+people.offsetWidth) && obstacle.offsetTop<(people.offsetTop+people.offsetHeight) && people.offsetLeft<(obstacle.offsetLeft + obstacle.offsetWidth)){                                                      
				stop ()
			}
		})
	}
	//障碍物移动
	function hinder1(){
		speedTime1-=50;
		if(speedTime1<=1000){
			speedTime1=1000
		}
		mTween(obstacle1,-40,'left',speedTime1,'linear',function(){
			obstacle1.style.left=1008+'px';
			hinder1()
		},function(value){
			if(value<(people.offsetLeft+people.offsetWidth) && obstacle1.offsetTop<(people.offsetTop+people.offsetHeight) && people.offsetLeft<(obstacle1.offsetLeft + obstacle1.offsetWidth)){                                                      
				stop (obstacle1)
			}
		})
	}
	//鹿的移动
	function hinder2(){
		mTween(obstacle2,-120,'left',speedTime2,'linear',function(){
			obstacle2.style.left=1008+'px';
			hinder2()		
		},function(value){
			if(value<(people.offsetLeft+people.offsetWidth) && obstacle2.offsetTop<(people.offsetTop+people.offsetHeight) && people.offsetLeft<(obstacle2.offsetLeft + obstacle2.offsetWidth)){                                                      
				stop ()
			}
		})
	}

//	技能函数
	function qiu(){
		var div=document.createElement('div');
		div.className='jn';
		div.style.left= num+50 + 'px';
		bj.appendChild(div);
		//运动
		mTween(div,1080,'left',1500,'linear',function(){},function(value){
			if(div.offsetLeft+div.offsetWidth>obstacle1.offsetLeft && div.offsetLeft<obstacle1.offsetLeft+obstacle1.offsetWidth){
				//碰撞检测后
				qiustop (obstacle1,div)
				setTimeout(function(){
					qiustopblock (bz2,obstacle1)
					if(offon){					
						hinder1();	
					}
				},500)
				}
			if(div.offsetLeft+div.offsetWidth>obstacle.offsetLeft && div.offsetLeft<obstacle.offsetLeft+obstacle.offsetWidth){
					console.log(offon)
					qiustop (obstacle,div)
					setTimeout(function(){
						qiustopblock (bz,obstacle)				
						if(offon){
							hinder();
		 				}
				},500)
					
			}
		})
			
	}
	//小人碰撞后停止函数
	function stop (){
		offon=false
		clearInterval(people.timer);
		clearInterval(obstacle.timer);
		clearInterval(obstacle1.timer);
		clearInterval(obstacle2.timer);
		people.style.webkitBoxReflect='none';
		ul.style.animationPlayState="paused";
		for (var i = 0; i < body.length; i++) {
			body[i].style.animationPlayState="paused";
		}
		mTween(people,356,'top',500,'linear',function(){
			people.style.display='none'
		})
		onoff =false;
		clearInterval(time);
		zz.style.display='block';
	}
	
	function qiustop (o,d){	
		clearInterval(o.timer);
			bj.removeChild(d);
			bz.style.left=o.offsetLeft+'px';
			o.style.opacity=0;
	}
	
	function qiustopblock (b,o){	
		b.style.left=9999+'px';
			o.style.left=1008+'px';
			o.style.opacity=1;
			o.style.display='block';
	}
	//加速
	function accelerate(){
		left_arm.style.animation='0.12s move linear infinite alternate';
		right_arm.style.animation='0.12s move1 linear infinite alternate';
		left_leg.style.animation='0.12s move linear infinite alternate';
		right_leg.style.animation='0.12s move2 linear infinite alternate';		
	}
	//正常
	function reduction(){
		left_arm.style.animation='0.2s move linear infinite alternate';
		right_arm.style.animation='0.2s move1 linear infinite alternate';
		left_leg.style.animation='0.2s move linear infinite alternate';
		right_leg.style.animation='0.2s move2 linear infinite alternate';	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
