function switchCategory(categoryName) {
	console.log(categoryName)
}

createArScene("../data/patt.hiro", function(webglGroup, css3dGroup) {
	webglGroup.add(new THREE.AmbientLight( 0xF0F0F0 ));
	webglGroup.add(new THREE.AxesHelper(5))
	
	let objectList = []
	
	let loader = new THREE.FBXLoader();
	let loaderAutoScale = 0.1
	// load a resource
	loader.load(
		// resource URL
		'models/final/headphoneblah.fbx',
		// called when resource is loaded
		function ( object ) {
			objectList.push(object)
			object.categoryName = "music"
			object.scale.x = loaderAutoScale * 0.5
			object.scale.y = loaderAutoScale * 0.5
			object.scale.z = loaderAutoScale * 0.5
			object.position.x = 0.5
			object.position.z = 0.3
			object.rotation.x = -3.14/2
			object.clicked = false
			object.children.forEach(function(element) {
				if (element.name == "Headphones_01") {
					element.onClick = function() {
						object.clicked = true
					}
				}
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					//DOSTUFF
					switchCategory(object.categoryName)
					object.clicked = false
				}
			})
			webglGroup.add( object );
		},
		function() {
			
		},
		function(err) {
			console.log(err.message)
		}
	);	
	
	loader.load(
		// resource URL
		'models/final/clapper.fbx',
		// called when resource is loaded
		function ( object ) {
			objectList.push(object)
			object.categoryName = "film"
			object.scale.x = loaderAutoScale
			object.scale.y = loaderAutoScale
			object.scale.z = loaderAutoScale
			object.position.z = 0.7
			object.rotation.x = -3.14/2
			object.clicked = false
			object.children.forEach(function(element) {
				if (element.name == "clapper_final") {
					element.onClick = function() {
						object.clicked = true
					}
				}
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					//DOSTUFF
					switchCategory(object.categoryName)
					object.clicked = false
				}
			})
			webglGroup.add( object );
		},
		function() {
			
		},
		function(err) {
			console.log(err.message)
		}
	);
	loader.load(
		// resource URL
		'models/final/mask_Entertainment (1).fbx',
		// called when resource is loaded
		function ( object ) {
			objectList.push(object)
			object.categoryName = "culture"
			object.scale.x = loaderAutoScale * 0.06
			object.scale.y = loaderAutoScale * 0.06
			object.scale.z = loaderAutoScale * 0.06
			object.rotation.x = -3.14/2
			object.position.z = -0.5
			object.clicked = false
			object.children.forEach(function(element) {
				if (element.name == "BasicHeadMask_01") {
					element.onClick = function() {
						object.clicked = true
					}
				}
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					//DOSTUFF
					switchCategory(object.categoryName)
					object.clicked = false
				}
			})
			webglGroup.add( object );
		},
		function() {
			
		},
		function(err) {
			console.log(err.message)
		}
	);
})