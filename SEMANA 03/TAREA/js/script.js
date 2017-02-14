// $("document").ready(function(){
// 	$("audio").hide("fast");
// });

$(document).ready(function( $ ) {
  $('audio').on("play", function (me) {
    $('audio').each(function (i,e) {
      if (e !== me.currentTarget) {
        this.pause(); 
      }
    });
  });

  $('audio').hide("fast");

// *******************PRIMERA********************
	var playBtn = document.getElementById('play1');
	var stopBtn = document.getElementById('stop1');

	var playSound = function() {
		primera.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){primera.pause()}, false);

// *******************SEGUNDA********************
	var playBtn = document.getElementById('play2');
	var stopBtn = document.getElementById('stop2');

	var playSound = function() {
		segunda.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){segunda.pause()}, false);

// *******************TERCERA********************
	var playBtn = document.getElementById('play3');
	var stopBtn = document.getElementById('stop3');

	var playSound = function() {
		tercera.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){tercera.pause()}, false);

// *******************CUARTA********************
	var playBtn = document.getElementById('play4');
	var stopBtn = document.getElementById('stop4');

	var playSound = function() {
		cuarta.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){cuarta.pause()}, false);

// *******************quinta********************
	var playBtn = document.getElementById('play5');
	var stopBtn = document.getElementById('stop5');

	var playSound = function() {
		quinta.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){quinta.pause()}, false);

// *******************sexta********************
	var playBtn = document.getElementById('play6');
	var stopBtn = document.getElementById('stop6');

	var playSound = function() {
		sexta.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){sexta.pause()}, false);

// *******************septima********************
	var playBtn = document.getElementById('play7');
	var stopBtn = document.getElementById('stop7');

	var playSound = function() {
		septima.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){septima.pause()}, false);

// *******************octava********************
	var playBtn = document.getElementById('play8');
	var stopBtn = document.getElementById('stop8');

	var playSound = function() {
		octava.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){octava.pause()}, false);

// *******************novena********************
	var playBtn = document.getElementById('play9');
	var stopBtn = document.getElementById('stop9');

	var playSound = function() {
		novena.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){novena.pause()}, false);

// *******************decima********************
	var playBtn = document.getElementById('play10');
	var stopBtn = document.getElementById('stop10');

	var playSound = function() {
		decima.play();
	};

	playBtn.addEventListener('click', playSound, false);
	stopBtn.addEventListener('click', function(){decima.pause()}, false);

});
