	function reactionGame() {

		function getRandomColor() {
                      var letters = '0123456789ABCDEF'.split('');
                      var color = '#';
                      for (var i = 0; i<6; i++) {
                          color += letters[Math.round(Math.random() * 15)];
                      }
                     return color;
		}
		<!--.split function splits long string into individual letters-->

		var clickedTime; var createdTime; var reactionTime;

		function makeBox() {
			var time = Math.random();
			time = time*5000; 
			stamp = time;

			setTimeout(function() {
				if (Math.random()>0.5){
				document.getElementById("box").style.borderRadius="100px";
				}
				else{
					document.getElementById("box").style.borderRadius="0";
					}
			
				var top = Math.random();
				top = top *300;
				var left = Math.random();
				left = left *300;        

				document.getElementById("box").style.top=top+"px";
				document.getElementById("box").style.left=left+"px";
				
				document.getElementById("box").style.backgroundColor=getRandomColor();
				
				document.getElementById("box").style.display="block";
				
			}, time);
      
           
          }
		  
		makeBox();
		createdTime = Date.now()+stamp;
	
		document.getElementById("box").onclick=function() {
		
			clickedTime = Date.now();
		
			reactionTime = (clickedTime-createdTime)/1000;
		
			document.getElementById("timewas").innerHTML=reactionTime;
		
			this.style.display = "none";
			
	
				reactionGame();
				
		}
	
	}
	reactionGame();

		
