 function initApp() {
  	loadCount=0;
	itemsToLoad = 3;
	
	//1
	barkingSound = document.createElement("audio");
	document.body.appendChild(barkingSound);	
	barkingSound.setAttribute("src", "barking-sound.mp3");
	barkingSound.addEventListener("canplaythrough",itemLoaded,false);
	//2
	barkingSound2 = document.createElement("audio");
	document.body.appendChild(barkingSound2);
	barkingSound2.setAttribute("src", "barking-sound.mp3");
	barkingSound2.addEventListener("canplaythrough",itemLoaded,false);
	//3
	barkingSound3 = document.createElement("audio");
	document.body.appendChild(barkingSound3);
	barkingSound3.setAttribute("src", "barking-sound.mp3");
	barkingSound3.addEventListener("canplaythrough",itemLoaded,false);
	
  
  }
  
  
function itemLoaded(event) {

	loadCount++;
	if (loadCount >= itemsToLoad) {

		barkingSound.removeEventListener("canplaythrough",itemLoaded, false);
		barkingSound2.removeEventListener("canplaythrough",itemLoaded, false);
		barkingSound3.removeEventListener("canplaythrough",itemLoaded, false);
		
		soundPool.push({name:"explode1", element:barkingSound, played:false});
		soundPool.push({name:"explode1", element:barkingSound2, played:false});
		soundPool.push({name:"explode1", element:barkingSound3, played:false});
	
	}

  }


function playSound(sound,volume) {

		var soundFound = false;
		var soundIndex = 0;
		var tempSound;

		if (soundPool.length > 0) {
			while (!soundFound && soundIndex < soundPool.length) {

				var tSound = soundPool[soundIndex];
				if ((tSound.element.ended || !tSound.played) && tSound.name == sound) {
					soundFound = true;
					tSound.played = true;
				} else {
					soundIndex++;
				}
			}
		}
		if (soundFound) {
			tempSound = soundPool[soundIndex].element;
			tempSound.volume = volume;
			tempSound.play();

		} else if (soundPool.length < MAX_SOUNDS){
			tempSound = document.createElement("audio");
			tempSound.setAttribute("src", sound + "." + audioType);
			tempSound.volume = volume;
			tempSound.play();
			soundPool.push({name:sound, element:tempSound, type:audioType, played:true});
		}
	}