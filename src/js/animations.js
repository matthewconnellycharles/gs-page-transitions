// timelines
var master = new TimelineLite();
var slide1 = new TimelineLite();
var slide2 = new TimelineLite();

var anim1 = new TimelineLite(
	{onComplete: function(){console.log(this.name+' complete.')}
});
anim1.name = 'anim1';

var anim2 = new TimelineLite(
	{onComplete: function(){console.log(this.name+' complete.')}
});
anim2.name = 'anim2';

// ====================

anim1.to('.col-3.row-2',1,{left:'25%'});
anim1.to('.col-3.row-2',1,{top:'50%'});

anim2.to('.col-6.row-5, .col-6.row-6',1,{left:'50%'});
anim2.to('.col-6.row-5, .col-6.row-6',1,{top:'25%'});
anim2.to('.col-4.row-3',1,{left:'75%'});

slide1.add(anim1,0)
	.add(anim2,0);

master.add(slide1);