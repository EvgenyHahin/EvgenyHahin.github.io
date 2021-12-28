function Date_func() {
	document.getElementById('button').removeAttribute("onclick");
	var opac_int = 0;
	setInterval( function(){
	    let blocks = document.getElementsByClassName("forjs");
	    if (opac_int <= 0.9) {
			opac_int += 0.1
			let opac = String(opac_int)
		 	for( let i = 0; i < blocks.length; i++){
		    	blocks[i].style.opacity = opac;
			}
		}
	}, 100);
}