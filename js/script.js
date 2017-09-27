	var init = function(){
	  let palabra = "";
	  let fieldText = document.getElementById("texT");
		return {
			removeWord: function(){
				palabra = palabra.slice(0, -1);
				fieldText.innerHTML = palabra;				
			},
			addLetter: function(letter){
				palabra = palabra.concat(letter);
				fieldText.innerHTML = palabra;
			},
			playWord: function(th){
			 	(th === 3)? responsiveVoice.speak("NO se para que es esto", "Spanish Latin American Female"): responsiveVoice.speak("La palabra es "+palabra, "Spanish Latin American Female");
			}
		}
	}

	let obj = new init();
	function concatLet(character){
		obj.addLetter(character);
	}

	function speak(){
		console.log("s");
		obj.playWord();
	}

	function removeWord(){
		obj.removeWord();
	}

	function message(){
		obj.playWord(3)
	}