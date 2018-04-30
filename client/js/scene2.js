createArScene("../data/patt.kanji", function(webglGroup, css3dGroup) {
	webglGroup.add(new THREE.AmbientLight( 0xF0F0F0 ));
	webglGroup.add(new THREE.AxesHelper(5))
	
	let loader = new THREE.FBXLoader();
	let loaderAutoScale = 0.01
	// load a resource
	let clock = new THREE.Clock();
	let mixers = []
	loader.load(
		// resource URL
		'models/fbx/Samba Dancing.fbx',
		// called when resource is loaded
		function ( object ) {
			object.scale.x = loaderAutoScale
			object.scale.y = loaderAutoScale
			object.scale.z = loaderAutoScale
			webglGroup.add( object );
			object.mixer = new THREE.AnimationMixer( object );
			mixers.push( object.mixer );
			console.log(object)
			
			let action = object.mixer.clipAction( object.animations[ 0 ] );
			// console.log(action)
			action.play();
		},
		// called when loading is in progresses
		function ( xhr ) {
			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		},
		// called when loading has errors
		function ( error ) {
			console.log(error.message);
		}
	);
	
	onRenderFcts.push(function(dt) {
		if ( mixers.length > 0 ) {
			for ( var i = 0; i < mixers.length; i++ ) {
				mixers[i].update( dt );
			}
		}
	})	
})