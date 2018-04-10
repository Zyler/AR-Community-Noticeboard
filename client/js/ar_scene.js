
var divScale = 0.004
var perspectivePoint = new THREE.Vector3(0, 1500 * divScale, 0)

var elements = [] // All elements to be rendered to the sphere

var div1 = document.createElement("div");
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
				<span style="font-size: 35px;">Restaurant on North </span> 
				<span style="font-size: 15px"> 13:50 </span>
			</div>
			<div style='width: 100%'>
				<span style="font-size: 35px"> Live Band Performance </span>
			</div>
		</div>
		<div style='height: 100px; background-color: white; margin: 20px; padding: 10px'>
			<div style='width: 100%'>
				<span style="font-size: 35px;">Restaurant on North </span> 
				<span style="font-size: 15px"> Tues 17:30 </span>
			</div>
			<div style='width: 100%'>
				<span style="font-size: 35px"> Taco Tuesday </span>
			</div>
		</div>
		<div style='height: 100px; background-color: white; margin: 20px; padding: 10px'>
			<div style='width: 100%'>
				<span style="font-size: 35px;">Restaurant on North </span> 
				<span style="font-size: 15px"> Wed 18:45 </span>
			</div>
			<div style='width: 100%'>
				<span style="font-size: 35px"> Tango </span>
			</div>
		</div>
		<div style='height: 100px; background-color: white; margin: 20px; padding: 10px'>
			<div style='width: 100%'>
				<span style="font-size: 35px;">Restaurant on North </span> 
				<span style="font-size: 15px"> Tues 17:30 </span>
			</div>
			<div style='width: 100%'>
				<span style="font-size: 35px"> Taco Tuesday </span>
			</div>
		</div>
	</div>`
elements.push(div1)

var div2 = document.createElement("div");
div2.style.width = '50px'
elements.push(div2)

var div3 = document.createElement("div");
div3.style.width = '480px';
div3.style.height = '480px';
div3.style.backgroundColor = '#74B73E';
div3.style.borderRadius = '80px';
div3.style.overflow = 'hidden';
div3.innerHTML = `
	<div style='
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

var div4 = document.createElement("div");
div4.style.width = '50px'
elements.push(div4)

var div5 = document.createElement("div");
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
elements.push(div5)

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

var previousAngle = 0
var radius = perspectivePoint.length()

// Offset the rotation to the center panel
var centerPanelNumber = Math.round(elements.length/2);
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
  css3dScene.add(elements[i])
}


webglScene.add(new THREE.AmbientLight( 0xF0F0F0 ));
webglScene.add(new THREE.AxesHelper(5))

// var loader = new THREE.FBXLoader();
// var loaderAutoScale = 0.01
// // load a resource
// loader.load(
// 	// resource URL
// 	'models/lego_Full_body(1).fbx',
// 	// called when resource is loaded
// 	function ( object ) {
// 		object.scale.x = loaderAutoScale
// 		object.scale.y = loaderAutoScale
// 		object.scale.z = loaderAutoScale
// 		webglScene.add( object );

// 	},
// 	// called when loading is in progresses
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {
// 		// console.log("FUCK")
// 		console.log(error.message);

// 	}
// );

// var loader = new THREE.FBXLoader();
// loader.load( 'models/fbx/Samba Dancing.fbx', 
// 	function ( object ) {
// 		object.scale.x = loaderAutoScale
// 		object.scale.y = loaderAutoScale
// 		object.scale.z = loaderAutoScale
// 		webglScene.add( object );
// 	},
// 	function ( xhr ) {
// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
// 	},
// 	// called when loading has errors
// 	function ( error ) {
// 		// console.log( JSON.stringify(error) );
// 		console.log(error.message)

// 	}
// );