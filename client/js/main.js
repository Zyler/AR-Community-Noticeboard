//////////////////////////////////////////////////////////////////////////////////
//		Init
//////////////////////////////////////////////////////////////////////////////////

// init renderer

var css3dRenderer = new THREE.CSS3DRenderer();
css3dRenderer.setSize( window.innerWidth, window.innerHeight );
css3dRenderer.domElement.style.position = 'absolute';
css3dRenderer.domElement.style.top = 0;

var webglRenderer	= new THREE.WebGLRenderer({
	antialias: true,
	alpha:true
})
webglRenderer.setClearColor(new THREE.Color('lightgrey'), 0)
webglRenderer.setPixelRatio( window.devicePixelRatio );
webglRenderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( webglRenderer.domElement );
document.body.appendChild( css3dRenderer.domElement );

// array of functions for the rendering loop
var onRenderFcts= [];

// init scene
var webglScene	= new THREE.Scene();
var css3dScene = new THREE.Scene();
	
//////////////////////////////////////////////////////////////////////////////////
//		Initialize a basic camera
//////////////////////////////////////////////////////////////////////////////////

// Create a camera
var camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 100 );

////////////////////////////////////////////////////////////////////////////////
//          handle arToolkitSource
////////////////////////////////////////////////////////////////////////////////

var arToolkitSource = new THREEx.ArToolkitSource({
	// to read from the webcam 
	sourceType : 'webcam',
})

arToolkitSource.init(function onReady(){
	onResize()
})

// handle resize
window.addEventListener('resize', function(){
	onResize()
})


var currentRotation = 0

function onResize(){
	arToolkitSource.onResizeElement()
	arToolkitSource.copyElementSizeTo(css3dRenderer.domElement)
	css3dRenderer.setSize(
		parseInt(css3dRenderer.domElement.style.width, 10), 
		parseInt(css3dRenderer.domElement.style.height, 10))
		
	arToolkitSource.copyElementSizeTo(webglRenderer.domElement)
	if( arToolkitContext.arController !== null ){
		arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas)	
	}	
}

////////////////////////////////////////////////////////////////////////////////
//          initialize arToolkitContext
////////////////////////////////////////////////////////////////////////////////


// create atToolkitContext
var arToolkitContext = new THREEx.ArToolkitContext({
	cameraParametersUrl: THREEx.ArToolkitContext.baseURL + './data/camera_para.dat',
	detectionMode: 'mono',
})
// initialize it
arToolkitContext.init(function onCompleted(){
	// copy projection matrix to camera
	camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
})

// update artoolkit on every frame
onRenderFcts.push(function(){
	if( arToolkitSource.ready === false )	return

	arToolkitContext.update( arToolkitSource.domElement )
})

//////////////////////////////////////////////////////////////////////////////////
//		render the whole thing on the page
//////////////////////////////////////////////////////////////////////////////////

// render the scene
onRenderFcts.push(function(){
	css3dRenderer.render(css3dScene, camera);
	webglRenderer.render(webglScene, camera);
})

// run the rendering loop
var lastTimeMsec= null

requestAnimationFrame(function animate(nowMsec){
	// keep looping
	requestAnimationFrame( animate );
	// measure time
	lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
	var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
	lastTimeMsec	= nowMsec
	// call each update function
	onRenderFcts.forEach(function(onRenderFct){
		onRenderFct(deltaMsec/1000, nowMsec/1000)
	})
})

function createArScene(patternPath, init) {
	let webglGroup = new THREE.Group
	let css3dGroup = new THREE.Group
	webglScene.add(webglGroup)
	css3dScene.add(css3dGroup)
	
	let markerControls = new THREEx.ArMarkerControls(arToolkitContext, webglGroup, {
		type : 'pattern',
		patternUrl : THREEx.ArToolkitContext.baseURL + patternPath,
	})

	onRenderFcts.push(function(){
		css3dGroup.matrix.identity()
		css3dGroup.applyMatrix(webglGroup.matrix)
		css3dGroup.traverse( function( node ) {
		    if ( node instanceof THREE.CSS3DObject ) {
		        node.element.style.visibility = webglGroup.visible ? "visible" : "hidden"
		    }
		});
	})
	init(webglGroup, css3dGroup)
}

// Update tweens
onRenderFcts.push(function() {
	TWEEN.update()
})

//mouse event shit

var raycaster = new THREE.Raycaster();

let centerPointerLocation = new THREE.Vector2(0, 0)

onRenderFcts.push(function() {
	raycaster.setFromCamera(centerPointerLocation, camera)
	var intersects = raycaster.intersectObjects(webglScene.children, true)
	if (intersects.length>0) {
		intersects.forEach(function(element){
			if (typeof element.object.onHover === 'function') {
				element.object.onHover(element.point)
			}
		})
	}
})