function switchCategory(categoryName) {
	console.log(categoryName)
	$('#scroller').empty()
	categoryLists[categoryName].forEach(function(element) {
		let item = document.createElement("div")
		item.className = "s1"
		item.addEventListener('click', function() {
			setLeftPanelContent(element.title, element.startTime.toDateString(), element.loc, element.desc)
		})
		item.innerHTML = element.title + `
		<div class="all">
			>>
			<a href=` + generateGoogleCalendarLink(element.title, element.startTime, element.endTime, element.desc, element.loc) + `>
				<img src="img/save.png" alt="" style="width:35px;" />
			</a>
		</div>
		`
		$('#scroller').append(item)
	});
}

createArScene("../data/music3.patt", function(webglGroup, css3dGroup) {
	webglGroup.add(new THREE.AmbientLight( 0xF0F0F0 ));
	
	let objectList = []
	let selected = null
	let loader = new THREE.FBXLoader();
	let loaderAutoScale = 0.1
	
	function addBackgroundHexagon(categoryModels) {
		loader.load(
			// resource URL
			'models/final/headphoneblah.fbx',
			// called when resource is loaded
			function ( object ) {
				object.scale.x = loaderAutoScale * 0.5
				object.scale.y = loaderAutoScale * 0.5
				object.scale.z = loaderAutoScale * 0.5
				
				for (let idx in object.children) {
					if (object.children[idx].name == "background_01") {
						let mesh = object.children[idx].clone()
						mesh.rotation.y = 3.14
						mesh.rotation.x = -3.14/2
						categoryModels.add(mesh)
					}
				}
				console.log(categoryModels.children)
			},
			function() {
				
			},
			function(err) {
				console.log(err.message)
			}
		);	
	}
	let musicModels = null
	// load a resource
	loader.load(
		// resource URL
		'models/final/headphoneblah.fbx',
		// called when resource is loaded
		function ( object ) {
			musicModels = object
			object.categoryName = "music"
			object.scale.x = loaderAutoScale * 0.5
			object.scale.y = loaderAutoScale * 0.5
			object.scale.z = loaderAutoScale * 0.5
			object.position.x = 0.5
			object.position.z = 0.3
			object.rotation.y = 3.14
			object.rotation.x = -3.14/2
			object.clicked = false
			let headphoneObject = null
			object.children.forEach(function(element) {
				if (element.name == "Headphones_01") {
					objectList.push(element)
					headphoneObject = element
					element.onClick = function() {
						object.clicked = true
					}
				}
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					//DOSTUFF
					switchCategory(object.categoryName)
					selected = headphoneObject
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
			object.categoryName = "film"
			object.scale.x = loaderAutoScale
			object.scale.y = loaderAutoScale
			object.scale.z = loaderAutoScale
			object.position.z = 0.7
			object.rotation.x = -3.14/2
			object.clicked = false
			let clapper = null
			object.children.forEach(function(element) {
				if (element.name == "clapper_final") {
					objectList.push(element)
					clapper = element
					element.onClick = function() {
						object.clicked = true
					}
				}
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					//DOSTUFF
					switchCategory(object.categoryName)
					selected = clapper
					object.clicked = false
				}
			})
			webglGroup.add( object );
			addBackgroundHexagon(object)
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
			object.categoryName = "culture"
			object.scale.x = loaderAutoScale * 0.06
			object.scale.y = loaderAutoScale * 0.06
			object.scale.z = loaderAutoScale * 0.06
			object.rotation.x = -3.14/2
			object.position.z = -0.5
			object.clicked = false
			let mask = null
			object.children.forEach(function(element) {
				if (element.name == "BasicHeadMask_01") {
					objectList.push(element)
					mask = element
					element.onClick = function() {
						object.clicked = true
					}
				}
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					//DOSTUFF
					switchCategory(object.categoryName)
					selected = mask
					object.clicked = false
				}
			})
			webglGroup.add( object );
			addBackgroundHexagon(object)
		}
	);
	
	onRenderFcts.push(function(dt) {
		objectList.forEach(function(element) {
			if (selected == element) {
				element.rotation.y += dt * 2
			} else {
				element.rotation.y = 0
			}
		})
	})
})

switchCategory("music")