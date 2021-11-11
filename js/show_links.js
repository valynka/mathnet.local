
var counterLinks = 0;
var counterSocLinks = 0;
var counterMenu = 0;
var counterConf = 0;
var counterSem=0;
var counterEntry=0;

	function showLinks(){
		
		if(counterLinks == 0){
			counterMenu = 0;
			counterSocLinks = 0;
			counterEntry=0;
			document.getElementById("soc_links").style.display = "";
			document.getElementById("menu").style.display = "";
			document.getElementById("entry").style.display = "";
			
			document.getElementById("left").style.display = "block";
			document.getElementById("search").style.display = "block";
			document.getElementById("serv_links").style.display = "block";
			document.getElementById("main").style.display = "none";
			var right = document.getElementById("right");
			if(right){
				right.style.display = "none";
			}
			counterLinks++;
		}
		
		else if(counterLinks == 1){
			document.getElementById("left").style.display = "";
			document.getElementById("search").style.display = "";
			document.getElementById("serv_links").style.display = "";
			document.getElementById("main").style.display = "";
			var right = document.getElementById("right");
			if(right){
				right.style.display = "";
			}
			counterLinks=0;
		}
	}



	function showSocLinks(){
		
		if(counterSocLinks == 0){
			counterLinks=0;
			counterMenu=0;
			counterEntry=0;
			document.getElementById("search").style.display = "";
			document.getElementById("serv_links").style.display = "";
			document.getElementById("menu").style.display = "";
			document.getElementById("entry").style.display = "";
			
			document.getElementById("left").style.display = "block";
			document.getElementById("soc_links").style.display = "block";
			document.getElementById("main").style.display = "none";
			var right = document.getElementById("right");
			if(right){
				right.style.display = "none";
			}
			counterSocLinks++;
		}
		
		else if(counterSocLinks == 1){
			document.getElementById("left").style.display = "";
			document.getElementById("soc_links").style.display = "";
			document.getElementById("main").style.display = "";
			var right = document.getElementById("right");
			if(right){
				right.style.display = "";
			}
			counterSocLinks=0;
		}
	}
	
	function showMenu(){
		if(counterMenu == 0){
			counterLinks=0;
			counterSocLinks=0;
			counterEntry=0;
			document.getElementById("left").style.display = "";
			document.getElementById("entry").style.display = "";
			
			document.getElementById("menu").style.display = "block";
			document.getElementById("main").style.display = "none";
			var right = document.getElementById("right");
			if(right){
				right.style.display = "none";
			}
			counterMenu++;
		}
		
		else if(counterMenu == 1){
			document.getElementById("menu").style.display = "";
			document.getElementById("main").style.display = "";
			var right = document.getElementById("right");
			if(right){
				right.style.display = "";
			}
			counterMenu = 0;
		}
	}
	
	function showEntry(){
		if(counterEntry == 0){
			counterLinks=0;
			counterSocLinks=0;
			counterMenu=0;
			document.getElementById("left").style.display = "";
			document.getElementById("menu").style.display = "";
			
			document.getElementById("entry").style.display = "block";
			document.getElementById("main").style.display = "none";
			var right = document.getElementById("right");
			if(right){
				right.style.display = "none";
			}
			counterEntry++;
		}
		else if(counterEntry == 1){
			document.getElementById("entry").style.display = "";
			document.getElementById("main").style.display = "";
			var right = document.getElementById("right");
			if(right){
				right.style.display = "";
			}
			counterEntry = 0;
		}
		
	}
	
	
	
	function showConfMenu(e){
		if (window.screen.width <= '935') {
			if(counterConf==0){
				document.getElementById("sub_conf").style.display = "block";
				counterConf++;
			}
			else if(counterConf==1){
				document.getElementById("sub_conf").style.display = "";
				counterConf=0;
			}
		}
		else {
			if (location.href === 'file:///D:/mathnet.local/index.html') location.href = "./blocks/conf/conference.html";
			else location.href = "../conf/conference.html";
		}
		
	}
	
	
	function showSemMenu(e){
		if (window.screen.width <= '935') {
			if(counterSem==0){
				document.getElementById("sub_sem").style.display = "block";
				counterSem++;
			}
			else if(counterSem==1){
				document.getElementById("sub_sem").style.display = "";
				counterSem=0;
			}
		}
		else {
			location.href = "../seminar/seminar_soon.html";
		}
		
	}
	
	var counterLeft = 0;
	
	function showLeft(){
		if(counterLeft == 0){
			document.getElementById("search").style.display = "block";
			document.getElementById("serv_links").style.display = "block";
			document.getElementById("soc_links").style.display = "block";
			document.getElementById("main").style.opacity = "0.3";
			document.getElementById("main").style.marginLeft = "30px";
			document.getElementById("left").style.width = "15rem";
			document.getElementById("left").style.background = "#fbfafa";
			document.getElementById("left").style.position = "absolute";
			document.getElementById("left").style.zIndex = "10";
			document.getElementById("left").style.marginTop = "1rem";
			document.getElementById("tags").style.marginBottom = "1rem";
			counterLeft++;
		}
		else if(counterLeft == 1){
			document.getElementById("search").style.display = "";
			document.getElementById("serv_links").style.display = "";
			document.getElementById("soc_links").style.display = "";
			document.getElementById("main").style.opacity = "";
			document.getElementById("main").style.marginLeft = "";
			document.getElementById("left").style.width = "";
			document.getElementById("left").style.background = "";
			document.getElementById("left").style.position = "";
			document.getElementById("left").style.zIndex = "";
			document.getElementById("left").style.marginTop = "";
			document.getElementById("tags").style.marginBottom = "";
			counterLeft = 0;
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	