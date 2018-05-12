/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  return "unknown";
}

createArScene("../data/music2.patt", function(webglGroup, css3dGroup) {
	let divScale = 0.004
	let perspectivePoint = new THREE.Vector3(0, 1500 * divScale, 0)
	
	let elements = [] // All elements to be rendered to the sphere
	
	let main = document.createElement("div");
	main.style.width = '360px';
	main.style.height = '500px';
	main.scrollerId = "scroller"
	
	let scroller = document.createElement("div")
	scroller.id = "scroller"
	scroller.style.width = "100%"
	scroller.style.height = "100%"
	scroller.style.overflow = "auto"
	main.appendChild(scroller)

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