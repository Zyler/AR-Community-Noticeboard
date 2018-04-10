	//////////////////////////////////////////////////////////////////////////////////
	//		Init
	//////////////////////////////////////////////////////////////////////////////////

	// init renderer
	var webglRenderer	= new THREE.WebGLRenderer({
		antialias: true,
		alpha: true
	});
	webglRenderer.setClearColor(new THREE.Color('lightgrey'), 0)
	webglRenderer.setSize( window.innerWidth, window.innerHeight );
	webglRenderer.domElement.style.position = 'absolute'
	webglRenderer.domElement.style.top = '0px'
	webglRenderer.domElement.style.left = '0px'
	document.body.appendChild( webglRenderer.domElement );

	var css3dRenderer = new THREE.CSS3DRenderer();
	css3dRenderer.setSize(window.innerWidth, window.innerHeight);
	css3dRenderer.domElement.style.position = 'absolute';
	css3dRenderer.domElement.style.top = '0px'
	css3dRenderer.domElement.style.left = '0px'
	document.body.appendChild(css3dRenderer.domElement);

	// array of functions for the rendering loop
	var onRenderFcts= [];

	// init scene
	var webglScene	= new THREE.Scene();
	var css3dScene = new THREE.Scene();
		
	//////////////////////////////////////////////////////////////////////////////////
	//		Initialize a basic camera
	//////////////////////////////////////////////////////////////////////////////////

	// Create a camera
  var camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 10000 );
	webglScene.add(camera);
	css3dScene.add(camera)

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
	function onResize(){
		arToolkitSource.onResizeElement()	
		arToolkitSource.copyElementSizeTo(webglRenderer.domElement)
		css3dRenderer.setSize(window.innerWidth, window.innerHeight)
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
		
		// update scene.visible if the marker is seen
		webglScene.visible = camera.visible
		css3dScene.traverse( function( node ) {
		    if ( node instanceof THREE.CSS3DObject ) {
		        node.element.style.visibility = camera.visible ? "visible" : "hidden"
		    }
		});
	})
		
	////////////////////////////////////////////////////////////////////////////////
	//          Create a ArMarkerControls
	////////////////////////////////////////////////////////////////////////////////
	
	// init controls for camera
	var markerControls = new THREEx.ArMarkerControls(arToolkitContext, camera, {
		type : 'pattern',
		patternUrl : THREEx.ArToolkitContext.baseURL + './data/thirdmarker.patt',
		// patternUrl : THREEx.ArToolkitContext.baseURL + '../data/data/patt.kanji',
		// as we controls the camera, set changeMatrixMode: 'cameraTransformMatrix'
		changeMatrixMode: 'cameraTransformMatrix'
	})
	// as we do changeMatrixMode: 'cameraTransformMatrix', start with invisible scene
	webglScene.visible = false
	css3dScene.visible = false

	//////////////////////////////////////////////////////////////////////////////////
	//		render the whole thing on the page
	//////////////////////////////////////////////////////////////////////////////////

	// render the scene
	onRenderFcts.push(function(){
		webglRenderer.render( webglScene, camera );
		css3dRenderer.render( css3dScene, camera);
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