createArScene("../data/music1.patt", function(webglGroup, css3dGroup) {
	let divScale = 0.004
	let perspectivePoint = new THREE.Vector3(0, 1500 * divScale, 0)
	
	let elements = [] // All elements to be rendered to the sphere
	
	let main = document.createElement("div");
	main.className = "outerbox"
	main.onclick = "console.log(\'FUCK\')"
	main.style.width = '400px';
	main.style.height = '500px';
	main.innerHTML = `
  <div class="button"></div>
  <div class="innerbox transform">
    <div class="button2" onclick='toggleOff()'></div>
    <div id="text">
      Sydney Dance Company: ab intra 
    </div>
    <div class="cale"></div>

    <div id = "text2">
      30 May - 2 June
    </div>
    <div class="cale2"></div>
    <div id="text3">
      Art Centre Melbourne
    </div>
    <div class="cale3"></div>
    <div id="text4">
      Visual & Performing art
    </div>
  </div>
	`
	elements.push(main)
	
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
	  divPlane.previouslyHovering = false
	  divPlane.onHover = function() {
	  	divPlane.hovering = true
	  }
	  
	  webglGroup.add(divPlane)
	  
	  onRenderFcts.push(function(dt) {
	  	if (divPlane.hovering) {
	  		if (!divPlane.previouslyHovering) {
		  		divPlane.element.style.outline = "5px solid white"
		  		divPlane.previouslyHovering = true
		      $('.transform').toggleClass('innerbox-active');
		      $(".button").hide("slow");
	  		}
	  		divPlane.hovering = false
	  	} else if (!divPlane.hovering && divPlane.previouslyHovering) {
	  		divPlane.element.style.outline = "0px"
	  		divPlane.previouslyHovering = false
	      $('.transform').toggleClass('innerbox-active');
	      $(".button").hide("slow");
	  	}
	  })
	}
})
	
