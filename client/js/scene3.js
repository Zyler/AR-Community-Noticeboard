createArScene("../data/music3.patt", function(webglGroup, css3dGroup) {
	let categoryLists = {
		"Visual & Performing Art": [
			{
				title: "asemic, unpronounceable symbol",
				start: new Date("2018-02-03T09:00:00"),
				end: new Date("2018-02-03T09:00:00"),
				timezone: "Australia",
				title: "asemic, unpronounceable symbol",
				desc: 'Emilie Tarp Østensgård communicates a concept to Lotte Schwerdtfeger via a single sheet of A4 paper. Without preconceptions, Lotte Schwerdtfeger interprets this as instructions to create a work.',
				loc: "107 Victoria Harbour Pmde.",
				organizer: "Mira",
				organizerEmail: "mira.moro92@gmail.com",
				dateFormat: "MM/DD/YYYY",
				img: "/webpage/img/Entertainment/Asemic/Asemic.jpg",
				url: "/webpage/ASEMIC.html"
			},
			{
				title: "Travel sketching with Alissa Duke",
				start: new Date("2018-02-24T09:00:00"),
				end: new Date("2018-02-03T09:00:00"),
				timezone: "Australia",
				title: "Travel sketching with Alissa Duke",
				desc: 'Join artist Alissa Duke on an inspirational walk around East Melbourne with some hands-on drawing experience along with tips and techniques on travel sketching.',
				loc: "122 George St.",
				organizer: "Mira",
				organizerEmail: "mira.moro92@gmail.com",
				dateFormat: "MM/DD/YYYY",
				img: "/webpage/img/Entertainment/sketch/sk.jpg",
				url: "/webpage/TRAVEL%20SKETCHING.html"
			},
			{
				title: "Raymond Walters: Me, My Life",
				start: new Date("2018-05-11T09:00:00"),
				end: new Date("2018-02-03T09:00:00"),
				timezone: "Australia",
				title: "Raymond Walters: Me, My Life",
				desc: 'Where is your kurunpa - your soul, your spirit? Every drop or stroke of paint, raw and free flowing or still and purposed is me, my life.',
				loc: "253 Flinders Ln.",
				organizer: "Mira",
				organizerEmail: "mira.moro92@gmail.com",
				dateFormat: "MM/DD/YYYY",	
				img: "/webpage/img/Entertainment/ray.jpg",
				url: "/webpage/raymond%20walters.html"
			},
			{
				title: "'The Ringmasters' Carnival: A Goblin Cruise",
				start: new Date("2018-03-24T019:30:00"),
				end: new Date("2018-02-03T09:00:00"),
				timezone: "Australia",
				title: "'The Ringmasters' Carnival: A Goblin Cruise",
				desc: 'The Ringmasters’ Carnival is a boat party – this is how we bring you a celebration for less!',
				loc: "Dock 14, Central Pier Docklands",
				organizer: "Mira",
				organizerEmail: "mira.moro92@gmail.com",
				img: "/webpage/img/Entertainment/car.jpg",
				url: "/webpage/Carnival.html"
			}
		],
		"Film & Media": [
			{
				title: "MakerHangout: VR freeplay",
				start: new Date("2018-02-04T09:13:00"),
				end: new Date("2018-02-03T09:00:00"),
				timezone: "Australia",
				title: "MakerHangout: VR freeplay",
				desc: 'On Sundays at the Library at The Dock Makerspace we showcase a variety of games on the HTC Vive.',
				loc: "107 Victoria Harbour Pmde.",
				organizer: "Mira",
				organizerEmail: "mira.moro92@gmail.com",
				img: "/webpage/img/Entertainment/vr.jpg",
				url: "/webpage/vr.html"
			},
			{
				title: "Miranda Jill Millen: My Kath & Kim",
				start: new Date("2018-03-02T09:00:00"),
				end: new Date("2018-02-03T09:00:00"),
				timezone: "Australia",
				title: "Miranda Jill Millen: My Kath & Kim",
				desc: 'In celebration of one of the most iconic television programs in Australia, Miranda Jill Millen welcomes you to her solo exhibition My Kath & Kim.',
				loc: "253 Flinders Ln",
				organizer: "Mira",
				organizerEmail: "mira.moro92@gmail.com",
				img: "/webpage/img/Entertainment/kim.jpg",
				url: "/webpage/MIRANDA%20JILL.html"
			}	
		],
		"Music": [
			{
				title: "Fluxus and beyond",
				start: new Date("2018-03-28T09:18:00"),
				end: new Date("2018-02-03T09:00:00"),
				timezone: "Australia",
				title: "Fluxus and beyond",
				desc: 'Join us for a revisiting of Fluxus performances and see new work inspired by the movement.',
				loc: "253 Flinders Ln",
				organizer: "Mira",
				organizerEmail: "mira.moro92@gmail.com",		
				img: "/webpage/img/Entertainment/flu.jpg",
				url: "/webpage/Fluxus%20beyond.html"
			},
			{
				title: "Internal Surround",
				start: new Date("2018-03-20T09:00:00"),
				end: new Date("2018-02-03T09:00:00"),
				timezone: "Australia",
				title: "Internal Surround",
				desc: 'What does home sound like to you? We asked four local sound artists to make works that reflect where they come from, where they are and where they’re heading.',
				loc: "107 Victoria Harbour Pmde.",
				organizer: "Mira",
				organizerEmail: "mira.moro92@gmail.com",
				img: "/webpage/img/Entertainment/inte.jpg",
				url: "/webpage/internal%20surround.html"
			}	
		]
	}
	
	function switchEvent(element) {
		$('#leftPanel').css('background-image', 'url(..' + element.img + ')')
		$('#text1').html(element.title)
		$('#text2').html(element.start.toDateString())
		$('#text3').html(element.loc)
		$('#text4').html(element.desc)
	}
	
	function switchCategory(categoryName) {
		selected = categoryName
		$('#scroller').empty()
		for (let element in categoryLists[categoryName]) {
			switchEvent(categoryLists[categoryName][element])
			break
		}
		categoryLists[categoryName].forEach(function(element) {
			let item = document.createElement("div")
			item.className = "s1"
			item.addEventListener('click', function() {
				switchEvent(element)
			})
			let startDateFormat = element.start.toISOString().replace(/-|:|\.\d\d\d/g,"")
			let endDateFormat = element.end.toISOString().replace(/-|:|\.\d\d\d/g,"")
			
			let calendarUrl = "https://calendar.google.com/calendar/r/eventedit?" 
			+ "text=" + encodeURIComponent(element.title)
			+ '&dates=' + encodeURIComponent(startDateFormat) + "/" + encodeURIComponent(endDateFormat)
			+ '&details=' + encodeURIComponent(element.desc)
			+ '&location=' + encodeURIComponent(element.loc)
		
			item.innerHTML = `<div class="content">` + element.title + `</div>
			<div class="all">
				<a style="float:right;"href=` + calendarUrl + `>
					<img src="img/save.png" alt="" style="width:35px;" />
				</a>
			</div>
			 <a href="` + element.url + `"><div class="seemore">see more </div></a>
			`
			$('#scroller').append(item)
		});
	}
	
	webglGroup.add(new THREE.AmbientLight( 0xF0F0F0 ));
	
	let objectList = []
	let selected = null
	let loader = new THREE.FBXLoader();
	let loaderAutoScale = 0.1
		// load a resource
	
	function addHexagon(bgColor, parent, offset) {
		loader.load(
			// resource URL
			'models/final/hexagon.fbx',
			// called when resource is loaded
			function ( object ) {
				object.children.forEach(function(element) {
					if (element.name == "Circle") {
						element.material = new THREE.MeshBasicMaterial( {color: bgColor, side: THREE.DoubleSide} );
					}
				})
				object.scale.x = loaderAutoScale * 0.03
				object.scale.y = loaderAutoScale * 0.03
				object.scale.z = loaderAutoScale * 0.03
				object.position.x = parent.position.x - offset.x
				object.position.y = parent.position.y - offset.y
				object.position.z = parent.position.z - offset.z

				webglGroup.add( object );
			}
		);
	}
	// load a resource
	loader.load(
		// resource URL
		'models/final/headphoneblah.fbx',
		// called when resource is loaded
		function ( object ) {
			objectList.push(object)
			object.categoryName = "Music"
			object.scale.x = loaderAutoScale * 0.5
			object.scale.y = loaderAutoScale * 0.5
			object.scale.z = loaderAutoScale * 0.5
			object.position.x = 0.5
			object.position.z = 0.3
			object.rotation.x = -3.14/2
			object.clicked = false
			object.rotator = null
			object.children.forEach(function(element) {
				if (element.name == "Headphones_01") {
					object.rotator = element
					element.onClick = function() {
						object.clicked = true
					}
				}
			addHexagon(0xFF7E42, object, {x: 0, y: 0.2, z: 0.37})
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					switchCategory(object.categoryName)
					object.clicked = false
				}
			})
			webglGroup.add( object );
		}
	);	
	
	loader.load(
		// resource URL
		'models/final/clapper.fbx',
		// called when resource is loaded
		function ( object ) {
			objectList.push(object)
			object.categoryName = "Film & Media"
			object.scale.x = loaderAutoScale
			object.scale.y = loaderAutoScale
			object.scale.z = loaderAutoScale
			object.position.z = 0.7
			object.rotation.x = -3.14/2
			object.clicked = false
			object.rotator = null
			let clapper = null
			object.children.forEach(function(element) {
				if (element.name == "clapper_final") {
					object.rotator = element
					element.onClick = function() {
						object.clicked = true
					}
				}
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					switchCategory(object.categoryName)
					object.clicked = false
				}
			})
			webglGroup.add( object );
			addHexagon(0xFF7E42, object, {x: 0, y: 0.2, z: 0.25})
		}
	);
	
	loader.load(
		// resource URL
		'models/final/mask_Entertainment (1).fbx',
		// called when resource is loaded
		function ( object ) {
			objectList.push(object)
			object.categoryName = "Visual & Performing Art"
			object.scale.x = loaderAutoScale * 0.06
			object.scale.y = loaderAutoScale * 0.06
			object.scale.z = loaderAutoScale * 0.06
			object.rotation.x = -3.14/2
			object.position.z = -0.5
			object.clicked = false
			object.rotator = null
			object.children.forEach(function(element) {
				if (element.name == "BasicHeadMask_01") {
					object.rotator = element
					element.onClick = function() {
						object.clicked = true
					}
				}
			})
			onRenderFcts.push(function() {
				if (object.clicked) {
					switchCategory(object.categoryName)
					object.clicked = false
				}
			})
			addHexagon(0xFF7E42, object, {x: 0, y: 0.2, z: 0.2})
			webglGroup.add( object );
		}
	);
	
	onRenderFcts.push(function(dt) {
		objectList.forEach(function(element) {
			if (selected == element.categoryName) {
				element.rotator.rotation.y += dt * 2
			} else {
				element.rotator.rotation.y = 0
			}
		})
	})
	
	setTimeout(function() { switchCategory("Music"); }, 5000);
})
