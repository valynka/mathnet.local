
	var counter = 0;
	
	function ChangePicture(){
		if(window.screen.width <= '935'){
			if(counter == 0){
				document.getElementById("lang").style.left="-50px";
				counter++;
			}
			else if(counter == 1){
				document.getElementById("lang").style.left="-2px";
				counter=0;
			}
		}
		else{
			if(counter == 0){
				document.getElementById("lang").style.left="-50px";
				counter++;
			}
			else if(counter == 1){
				document.getElementById("lang").style.left="0px";
				counter=0;
			}
		}
		
	}
