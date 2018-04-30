createArScene("../data/patt.hiro", function(webglGroup, css3dGroup) {
	let divScale = 0.004
	let perspectivePoint = new THREE.Vector3(0, 1500 * divScale, 0)
	
	let elements = [] // All elements to be rendered to the sphere
	
	let div1 = document.createElement("div");
	div1.style.overflow = 'hidden';
	div1.style.width = '480px'
	div1.style.height = '480px'
	div1.innerHTML = `
		<div style='
		background-color: white;
		height: 50px;
		padding-left: 10px;
		font-size: 35px;'
		>
			Monday, 16th of August
		</div>
		<div style='
			background-color:#7D84C6; 
			height: 430px;
			overflow: auto'
		>
			<div style='height: 1px;'></div>
			<div style='height: 100px; background-color: white; margin: 20px; padding: 10px'>
				<div style='width: 100%'>
					<span style="font-size: 36px;">Restaurant on North </span> 
					<span style="font-size: 18px"> 13:50 </span>
				</div>
				<div style='width: 100%'>
					<span style="font-size: 36px"> Live Band Performance </span>
				</div>
			</div>
			<div style='height: 100px; background-color: white; margin: 20px; padding: 10px'>
				<div style='width: 100%'>
					<span style="font-size: 36px;">Restaurant on North </span> 
					<span style="font-size: 18px"> Tues 17:30 </span>
				</div>
				<div style='width: 100%'>
					<span style="font-size: 36px"> Taco Tuesday </span>
				</div>
			</div>
			<div style='height: 100px; background-color: white; margin: 20px; padding: 10px'>
				<div style='width: 100%'>
					<span style="font-size: 36px;">Restaurant on North </span> 
					<span style="font-size: 18px"> Wed 18:45 </span>
				</div>
				<div style='width: 100%'>
					<span style="font-size: 36px"> Tango </span>
				</div>
			</div>
			<div style='height: 100px; background-color: white; margin: 20px; padding: 10px'>
				<div style='width: 100%'>
					<span style="font-size: 36px;">Restaurant on North </span> 
					<span style="font-size: 18px"> Tues 17:30 </span>
				</div>
				<div style='width: 100%'>
					<span style="font-size: 36px"> Taco Tuesday </span>
				</div>
			</div>
		</div>`
	// elements.push(div1)
	
	let div2 = document.createElement("div");
	div2.style.width = '50px'
	// elements.push(div2)
	
	let div3 = document.createElement("div");
	div3.style.width = '480px';
	div3.style.height = '480px';
	div3.style.backgroundColor = '#74B73E';
	div3.style.borderRadius = '80px';
	div3.style.overflow = 'hidden';
	div3.scrollerId = 'div3Scroller'
	div3.innerHTML = `
		<div id = 'div3Scroller' style='
			background-color:white; 
			margin-top: 80px; 
			height: 400px;
			overflow: auto'
		>
			<div style='height: 1px;'></div>
			<div style='
				height: 100px; 
				margin: 10px; 
				border-style: solid;
		    border-color: grey;
		    border-width: 0px;
		    border-bottom-width: 7px;
				padding-left: 30px;
				padding-right: 30px;
				padding-bottom: 5px;'
			>
				<div style='width: 100%'>
					<span style="font-size: 40px;">Restaurant on North </span>
				</div>
				<div style='width: 100%'>
					<div style="float:left; font-size: 25px"> Lorem ipsum dolor s... </div>
					<img style="float:right" src="img/music.png" alt="music icon" height="48" width="48"> 
					<img style="float:right" src="img/book.png" alt="book icon" height="48" width="48"> 
				</div>
			</div>
			<div style='
				height: 100px; 
				margin: 10px; 
				border-style: solid;
		    border-color: grey;
		    border-width: 0px;
		    border-bottom-width: 7px;
				padding-left: 30px;
				padding-right: 30px;
				padding-bottom: 5px;'
			>
				<div style='width: 100%'>
					<span style="font-size: 40px;">Restaurant on North </span>
				</div>
				<div style='width: 100%'>
					<div style="float:left; font-size: 25px"> Lorem ipsum dolor s... </div>
					<img style="float:right" src="img/music.png" alt="music icon" height="48" width="48"> 
					<img style="float:right" src="img/book.png" alt="book icon" height="48" width="48"> 
				</div>
			</div>
			<div style='
				height: 100px; 
				margin: 10px; 
				border-style: solid;
		    border-color: grey;
		    border-width: 0px;
		    border-bottom-width: 7px;
				padding-left: 30px;
				padding-right: 30px;
				padding-bottom: 5px;'
			>
				<div style='width: 100%'>
					<span style="font-size: 40px;">Restaurant on North </span>
				</div>
				<div style='width: 100%'>
					<div style="float:left; font-size: 25px"> Lorem ipsum dolor s... </div>
					<img style="float:right" src="img/music.png" alt="music icon" height="48" width="48"> 
					<img style="float:right" src="img/book.png" alt="book icon" height="48" width="48"> 
				</div>
			</div>
			<div style='
				height: 100px; 
				margin: 10px; 
				border-style: solid;
		    border-color: grey;
		    border-width: 0px;
		    border-bottom-width: 7px;
				padding-left: 30px;
				padding-right: 30px;
				padding-bottom: 5px;'
			>
				<div style='width: 100%'>
					<span style="font-size: 40px;">Restaurant on North </span>
				</div>
				<div style='width: 100%'>
					<div style="float:left; font-size: 25px"> Lorem ipsum dolor s... </div>
					<img style="float:right" src="img/music.png" alt="music icon" height="48" width="48"> 
					<img style="float:right" src="img/book.png" alt="book icon" height="48" width="48"> 
				</div>
			</div>
		</div>
	`
	elements.push(div3)
	
	let div4 = document.createElement("div");
	div4.style.width = '50px'
	// elements.push(div4)
	
	let div5 = document.createElement("div");
	div5.style.width = '600px'
	div5.style.height = '360px'
	div5.innerHTML = `
		<div style='
			background-size:cover; 
			background-repeat: no-repeat;  
			background-position: center center ;
			background-color: white; 
			background-image:url("img/Thirty-Eight-Chairs-Carlton-North-1-1024x690.jpg"); 
			overflow:hidden;
			height: 100%;'
		>
			<div 
			style='
				height: 100%;
				width: 45%;
				background-color: black;
				color: white;
				opacity: 0.7;
				float:right;
				padding:10px;
				overflow:hidden;'
			>
				<h1> Restaurant on North </h1>
				<span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet nisl dui. Suspendisse egestas leo turpis. Phasellus a erat tellus. Donec condimentum ornare ante ut suscipit. Nam rutrum vehicula ipsum ut facilisis. Proin ac tincidunt augue. Morbi hendrerit vitae lacus id pulvinar. Integer at fermentum nisl.
		
				Cras volutpat ante vitae rhoncus venenatis. Vivamus quis viverra ipsum. Pellentesque lorem ex, convallis vel neque et, tincidunt eleifend quam. Mauris id semper nisi. Vestibulum porta augue risus, quis scelerisque nunc feugiat ut. Aliquam hendrerit risus vel augue tempus feugiat. Maecenas hendrerit fermentum accumsan. Suspendisse dignissim laoreet pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis hendrerit nisl quis imperdiet porta. Quisque non dui et ante volutpat congue sed ut augue. Praesent sed fermentum velit. Nunc tincidunt magna at bibendum ornare. Duis feugiat nulla nec aliquam interdum. 
				</span>
				
			</div>
			
			<button 
			style='
				height: 75px;
				width: 150px;
				font-size: 60px;
				font-align: center;
				color: white;
				font-style: oblique;
				border-radius: 12px;
				opacity: 0.8;
				background-color: #778899;
				border:none;
				position: absolute;
				bottom: 50px;
				left: 50px;'
			onclick="location.href='newurl.html';"
			>
				GO!
			</button>
		</div>
	`
	// elements.push(div5)
	elements = elements.map((element) => {
	  let cssObj = new THREE.CSS3DObject(element)
	  cssObj.scale.x = divScale
	  cssObj.scale.y = divScale
	  cssObj.scale.z = divScale
	  return cssObj
	})
	
	
	////////////////////////////////
	/// RENDERING TO SPHERE CODE ///
	////////////////////////////////
	
	function getAngleFromLength(radius, length) {
		return 2 * Math.asin(length/(radius*2))
	}
	
	function getCoordinatesFromAngle(origin, radius, angle) {
		return new THREE.Vector3((origin.x + radius * Math.cos(angle)), (origin.y + radius * Math.sin(angle)), 0)
	}
	
	function getMidpoint(point1, point2) {
		return new THREE.Vector3((point1.x + point2.x)/2, (point1.y + point2.y)/2, (point1.z + point2.z)/2)
	}
	
	let previousAngle = 0
	let radius = perspectivePoint.length()
	
	// Offset the rotation to the center panel
	let centerPanelNumber = Math.round(elements.length/2);
	for (let i = 0; i <  centerPanelNumber; i++) {
	    let width = parseInt(elements[i].element.style.width,10) * divScale
		let angleOffset = getAngleFromLength(radius, width)
		if (i == centerPanelNumber-1)
			angleOffset /= 2
		previousAngle += angleOffset
	}
	
	previousAngle = -previousAngle
	previousAngle -= Math.PI/2
	
	for (let i = 0; i < elements.length; i++) {
		let div = elements[i].element;
		let width = parseInt(div.style.width,10) * divScale
		let angleOffset = getAngleFromLength(radius, width)
		let point1 = getCoordinatesFromAngle(perspectivePoint, radius, previousAngle)
		let point2 = getCoordinatesFromAngle(perspectivePoint, radius, previousAngle + angleOffset)
		previousAngle += angleOffset
		let midpoint = getMidpoint(point1, point2)
		
		elements[i].position.x = midpoint.x
		elements[i].position.y = midpoint.y
		elements[i].position.z = midpoint.z
		elements[i].lookAt(perspectivePoint)
		elements[i].rotation.z = 0
		css3dGroup.add(elements[i])
		
		
	  
	  let divGeom = new THREE.PlaneGeometry(parseInt(div.style.width, 10) * divScale, parseInt(div.style.height, 10) * divScale)
	  let divMat = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
	  divMat.transparent = true
	  divMat.opacity = 0
	  
	  let divPlane = new THREE.Mesh(divGeom, divMat)
	  divPlane.position = elements[i].position
	  divPlane.lookAt(perspectivePoint)
	  divPlane.rotation.z = 0
	  divPlane.element = elements[i].element
	  divPlane.hovering = false
	  divPlane.onHover = function() {
	  	divPlane.hovering = true
	  }
	  
	  
	  let scrollGeom = new THREE.PlaneGeometry(parseInt(div.style.width, 10) * divScale, parseInt(div.style.height, 10)/5 * divScale)
	  let scrollMat = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide} );
	  scrollMat.transparent = true
	  scrollMat.opacity = 0
	  
	  let scrollUpPlane = new THREE.Mesh(scrollGeom, scrollMat)
	  scrollUpPlane.position = elements[i].position
	  scrollUpPlane.lookAt(perspectivePoint)
	  scrollUpPlane.position.z -= parseInt(div.style.height, 10)/5 * 2 * divScale
	  scrollUpPlane.rotation.z = 0
	  scrollUpPlane.element = elements[i].element
	  scrollUpPlane.hovering = false
	  scrollUpPlane.onHover = function() {
	  	scrollUpPlane.hovering = true
	  }
	  
	  let scrollDownPlane = new THREE.Mesh(scrollGeom, scrollMat)
	  scrollDownPlane.position = elements[i].position
	  scrollDownPlane.lookAt(perspectivePoint)
	  scrollDownPlane.position.z += parseInt(div.style.height, 10)/5 * 2 * divScale
	  scrollDownPlane.rotation.z = 0
	  scrollDownPlane.element = elements[i].element
	  scrollDownPlane.hovering = false
	  scrollDownPlane.onHover = function() {
	  	scrollDownPlane.hovering = true
	  }
	  
	  webglGroup.add(scrollUpPlane)
	  webglGroup.add(divPlane)
	  webglGroup.add(scrollDownPlane)
	  
	  let scrollingSpeed = 300
	  onRenderFcts.push(function(dt) {
	  	if (divPlane.hovering) {
	  		divPlane.element.style.outline = "5px solid white"
	  		divPlane.hovering = false
	  		divPlane.hoveringPoint = null
	  		
  			let scrollingDiv = document.getElementById(divPlane.element.scrollerId)
	  		if (scrollUpPlane.hovering) {
	  			scrollingDiv.scrollTop = scrollingDiv.scrollTop - (dt * scrollingSpeed)
	  			scrollUpPlane.hovering = false
	  		}
	  		else if (scrollDownPlane.hovering) {
	  			scrollingDiv.scrollTop = scrollingDiv.scrollTop + (dt * scrollingSpeed)
	  			scrollDownPlane.hovering = false
	  		}
	  	} else {
	  		divPlane.element.style.outline = "0px"
	  	}
	  })
	}
})
	
