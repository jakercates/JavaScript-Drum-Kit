
	window.addEventListener('keydown', function(e) {
	const audioEl = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const aKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if(!audioEl)
	{
		return; //stop the function.
	}
	audioEl.currentTime = 0; //resets the audio of a sound already playing. Without this, needs to wait for sound to complete before playing the sound again. 
	audioEl.play();   //play the audio sound based off the user key input.
	aKey.classList.add('playing');
	});

	
	function removeTransition(e)
	{
		if(e.propertyName !== 'transform')
		{
			return;
		}
		this.classList.remove('playing');
	}
	//Removes the transition from the notes pressed to return it to its original state
	const allKeys = document.querySelectorAll('.key');
	allKeys.forEach(key => key.addEventListener('transitionend', removeTransition));


