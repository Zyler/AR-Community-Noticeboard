createArScene("../data/music_blue.patt", function(webglGroup, css3dGroup) {
	webglGroup.add(new THREE.AmbientLight( 0xF0F0F0 ));
	webglGroup.add(new THREE.AxesHelper(5))
	
	let loader = new THREE.FBXLoader();
	let loaderAutoScale = 1
	// load a resource
	loader.load(
		// resource URL
		'models/studiofiles/fixed_headphone2.fbx',
		// called when resource is loaded
		function ( object ) {
			object.scale.x = loaderAutoScale
			object.scale.y = loaderAutoScale
			object.scale.z = loaderAutoScale
			object.rotation.x = -3.14/2
			onRenderFcts.push(function(dt){
				object.rotation.y += dt
			})
			webglGroup.add( object );
		}
	);
})