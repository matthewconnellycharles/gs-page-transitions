$(document).keyup(function(e) {
    switch(e.which) {
        case 37: //left
        	classHide();
        	break;

        case 38: //up
        	restartZoom();
        	break;

        case 39: //right
        	classShow();
        	break;
        case 40: //down
        	reverseZoom();

        	break;

        case 32: //space


        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

// // development fn's
var tile = document.getElementsByClassName('row');

function classShow(){
	for(var i=0;i< tile.length;i++){
		tile[i].innerHTML=tile[i].className;
	}
}

function classHide(){
	for(var i=0;i< tile.length;i++){
		tile[i].innerHTML='';
	}
}

// animations
var zoom = new TimelineLite();
function playZoom(){return zoom.play();}
function restartZoom(){return zoom.restart();}
function reverseZoom(){return zoom.reverse();}

// // driectional animations (from x to x, determines direction)
// // var up_down = new TimelineLite();
// // var down_up = new TimelineLite();
// // var left_right = new TimelineLite();
// // var right_left= new TimelineLite();
// // var tl = new TimelineLite();

// // var directional = new TimelineLite();

// // // starting transition
zoom.fromTo('.slide', 1, 
	{height:'50vh', width:'50%', opacity: 0.4, y:'50%'}, 
	{height:'100vh', width:'100%', opacity: 1, y:'0%'});

// // up_down.fromTo('.up-down', 1, {y:'-100%'}, {y:'0%'});
// // down_up.fromTo('.down-up', 1, {y:'100%'}, {y:'0%'});
// // left_right.fromTo('.left-right', 1, {x:'-100%'}, {x:'0%'});
// // right_left.fromTo('.right-left', 1, {x:'100%'}, {x:'0%'});

// // function allAnim(){
// // 	directional.add(up_down)
// // 		.add(down_up)
// // 		.add(left_right)
// // 		.add(right_left);
// // 	}

// // var slideCounter = 0;

// // document.addEventListener('click',function(){
// // 	slideCounter++;
// // 	console.log(slideCounter);

// // 	// slide 2
// // 	if(slideCounter==1){

// // 		reverseZoom();

// // 		setTimeout(function(){
// // 		 	left_right.fromTo('.left-right', 1, {x:'0%'}, {x:'-100%'});
// // 			right_left.fromTo('.right-left', 1, {x:'0%'}, {x:'-100%'});
// // 			tl.fromTo('.col-6.row-3', 1, {x:'0%'}, {x:'-300%'});
// // 		},1500)

// // 		setTimeout(function(){
// // 			restartZoom();
// // 		},2000)

// // 	}

// // 	// slide 3
// // 	if(slideCounter==2){
// // 		// alert('text TEST2')
// // 		slideCounter = 0;
// // 		zoom.reverse();

// // 		setTimeout(function(){
// // 			down_up.reverse();
// // 			left_right.reverse();
// // 			right_left.reverse();
// // 			tl.reverse();
// // 			zoom.reverse();
// // 		},1000)

// // 		setTimeout(function(){
// // 			zoom.restart();
// // 		},1500)

// // 	}

// // })