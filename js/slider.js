function nextSlide(direction){
	
	var central = document.getElementsByClassName('central');
	var cent = central[0];
	var secondRight = document.getElementsByClassName('second-right');
	var sr = secondRight[0];
	var firstRight = document.getElementsByClassName('first-right');
	var fr = firstRight[0];
	var secondLeft = document.getElementsByClassName('second-left');
	var sl = secondLeft[0];
	var firstLeft = document.getElementsByClassName('first-left');
	var fl = firstLeft[0];
	var in1 = document.getElementsByClassName('first-left');
	
	if (direction == 'forward'){
	cent.classList.add('second-left');
	cent.classList.remove('central');
	
	sr.classList.add('central');
	sr.classList.remove('second-right');
	
	fr.classList.add('second-right');
	fr.classList.remove('first-right');
	
	sl.classList.add('first-left');
	sl.classList.remove('second-left');
	
	fl.classList.add('first-right');
	fl.classList.remove('first-left');
	} else {
		cent.classList.add('second-right');
		cent.classList.remove('central');
	
		sr.classList.add('first-right');
		sr.classList.remove('second-right');
	
		fr.classList.add('first-left');
		fr.classList.remove('first-right');
	
		sl.classList.add('central');
		sl.classList.remove('second-left');
	
		fl.classList.add('second-left');
		fl.classList.remove('first-left');
	}
	
}