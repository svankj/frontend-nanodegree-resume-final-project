/******************************** builder pages **************************************************/
'use strict';

/**************************** me page *****************************************/
var bio = {
	"name" : "Max Schreck",
	"role" : "Developer",
	"contacts" : {
		"mobile" : "001-445-9540",
		"email" : "max.schreck@gmail.com",
		"github" : "maxsk",
		"twitter" : "#maxsk",
		"location" : "Berlin"
	},
	"street" : "Strassen",
	"number" : "4",
	"nationality" : "Germany",
	"age" : "35",
	"sex" : "Male",
	"welcomeMessage" : "What we see and what we seem are but a dream, a dream within a dream.",
	"description" : "I would like to acquire a challenging position in a dynamic environment "+
	"in the web or mobile development for a software house where I am able to leverage the experience and skills "+
	"I have obtained in 5 years of creative problem solving, project management, innovative thinking "+
	"and maintaining client relations.",
	"skills" : ["C++", "Java", "Php", "JS", "Oracle", "Android", "MVC"],
	"biopic" : "../images/my-pict.jpg"
};

var HTMLkeywordName = '<li><span id="nameId">Name </span><span id="dataId">%data%</span></li>';
var HTMLkeywordJob = '<li><span id="nameId">Job </span><span id="dataId">%data%</span></li>';
var HTMLkeywordLocation = '<li><span id="nameId">City </span><span id="dataId">%data%</span></li>';
var HTMLkeywordStreet = '<li><span id="nameId">Street </span><span id="dataId">%data% ';
var HTMLkeywordNumber = '%data%</span></li>';
var HTMLkeywordNationality = '<li><span id="nameId">From </span><span id="dataId">%data%</span></li>';
var HTMLkeywordAge = '<li><span id="nameId">Age </span><span id="dataId">%data%</span></li>';
var HTMLkeywordSex = '<li><span id="nameId">Sex </span><span id="dataId">%data%</span></li>';
var HTMLkeywordMobile = '<li><span id="nameId">Mobile </span><span id="dataId">%data%</span></li>';
var HTMLkeywordEmail = '<li><span id="nameId">@ </span><span id="dataId">%data%</span></li>';
var HTMLkeywordGitHub = '<li><span id="nameId">gitHub </span><span id="dataId">%data%</span></li>';
var HTMLkeywordTwitter = '<li><span id="nameId">Twitter </span><span id="dataId">%data%</span></li>';
var HTMLkeywordSkills = '<li><span id="nameId">Skills </span><span id="dataId">%data%</span></li>';
var HTMLkeywordWelcomeMessage = '<p class="morph"><q>%data%</q></p>';
var HTMLkeywordDescription = '<p class="morph">%data%</p>';
var HTMLkeywordBiopic = '<img id="myimm" src="%data%" alt="My phicture">';

bio.display = function() {
	var formattedName = HTMLkeywordName.replace("%data%", bio.name);
	var formattedJob = HTMLkeywordJob.replace("%data%", bio.role);
	var formattedLocation = HTMLkeywordLocation.replace("%data%", bio.contacts.location);
	var formattedStreet = HTMLkeywordStreet.replace("%data%", bio.street);
	var formattedNumber = HTMLkeywordNumber.replace("%data%", bio.number);
	var formattedNationality = HTMLkeywordNationality.replace("%data%", bio.nationality);
	var formattedAge = HTMLkeywordAge.replace("%data%", bio.age);
	var formattedSex = HTMLkeywordSex.replace("%data%", bio.sex);
	var formattedMobile = HTMLkeywordMobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLkeywordEmail.replace("%data%", bio.contacts.email);
	var formattedGitHub = HTMLkeywordGitHub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLkeywordTwitter.replace("%data%", bio.contacts.twitter);
	$(".sub-box-1a").append(HTMLkeywordBiopic.replace("%data%", bio.biopic));
	var formattedSkillsTmp="";
	for(var i=0; i<bio.skills.length; i++) {
		if(bio.skills[i] !== null)
			if(i === bio.skills.length-1) formattedSkillsTmp += bio.skills[i];
				else formattedSkillsTmp += bio.skills[i]+", ";
	}
	var formattedSkills = HTMLkeywordSkills.replace("%data%", formattedSkillsTmp);
	$("#me-list").append(formattedName+formattedJob+formattedLocation+formattedStreet+formattedNumber
		+formattedNationality+formattedAge+formattedSex+formattedMobile+formattedEmail+formattedGitHub
		+formattedTwitter+formattedSkills);
	var formattedWelcomeMessage = HTMLkeywordWelcomeMessage.replace("%data%", bio.welcomeMessage);
	var formattedDescription = HTMLkeywordDescription.replace("%data%", bio.description);
	$("#me-desc").append(formattedWelcomeMessage+formattedDescription);
};

bio.display();

/****************************** MAP SECTION TAKEN FROM COURSE ********/
var googleMap = '<div id="map"></div>';
$("#mapDiv").append(googleMap);

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    locations.push(footer.location);
    for (var i=0; i<education.schools.length; i++) {
    	locations.push(education.schools[i].location);
    }
    for (var i=0; i<work.jobs.length; i++) {
    	locations.push(work.jobs[i].location);
    }
    locations.push(contact.home.location);
    locations.push(contact.office.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    // education.schools.forEach(function(school){
    //   locations.push(school.location);
    // });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    // work.jobs.forEach(function(job){
    //   locations.push(job.location);
    // });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

 	var contentString = '<div id="mapItem">'+
      name+'</div><img src="../images/pin.png" height="48" width="48"></img>'+'<span> place of work or study</span>';

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: contentString//name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);


// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
/****************************** END MAP SECTION TAKEN FROM COURSE ********/

/**************************** education page *****************************************/
var education = {
	"title" : "Education, schools and skills",
	"schools" : [
		{
		  "name" : "Master Computer Science",
		  "location" : "Paris",
		  "degree" : "Master",
		  "majors" : ["Computer Science", "C++"],
		  "dates" : "2005-2009",
		  "url" : "http://www.universitedeparis.fr/"
		},
		{
		  "name" : "Computer Science University",
		  "location" : "London",
		  "degree" : "Bachelor",
		  "majors" : ["Computer Science", "Java", "C++", "Neural Network"],
		  "dates" : "1996-2005",
		  "url" : "http://www.londonuniv.co.uk/"
		},
		{
		  "name" : "Second Level College of Science",
		  "location" : "Hannover",
		  "degree" : "High school diploma",
		  "majors" : ["Math", "Physics"],
		  "dates" : "1990-1996",
		  "url" : "http://www.hannovercollegeschool.de/"
		},
		{
		  "name" : "Elementary school",
		  "location" : "Hannover",
		  "degree" : "Primary school diploma",
		  "majors" : ["Math", "German"],
		  "dates" : "1985-1990",
		  "url" : "http://www.hannoverelementaryschool.de/"
		}
	],
	"onlineCourses" : [
		{
		  "title" : "Front-End Web Developer Nanodegree",
		  "school" : "Udacity",
		  "date" : "2014-2015",
		  "url" : "http://www.udacity.com/"
		},
		{
		  "title" : "Android Development for Beginners",
		  "school" : "Udacity",
		  "date" : "2013-2014",
		  "url" : "http://www.udacity.com/"
		},
		{
		  "title" : "Beginning Game Programming with C#",
		  "school" : "University of Colorado System, Coursera",
		  "date" : "2012-2013",
		  "url" : "http://www.coursera.org/"
		}
	]
};

var HTMLeducationTitle = '<h1 id="id-title">%data%</h1>';
var HTMLschoolStart = '<div class="title-format"><h2>education</h2></div>';
var HTMLschoolDates = '<div class="name-date-format"><span class="date-format">%data%</span>';
var HTMLschoolName = '<span class="name-format"><a href="%data2%">%data%</a></span></div>';
var HTMLschoolLocation = '<div class="location-format">(%data%)</div>';
var HTMLschoolDegree = '<div class="degree-format">degree: %data%</div>';
var HTMLschoolMajor = '<div class="degree-format">major: %data%</div>';

var HTMLonlineStart = '<div class="title-format"><h2>web courses</h2></div>';
var HTMLonlineDates = '<div class="name-date-format"><span class="date-format">%data%</span>';
var HTMLonlineTitle = '<span class="name-format"><a href="%data2%">%data%</a></span></div>';
var HTMLonlineSchool = '<div class="location-format">(%data%)</div>';

education.display = function() {
	$(".box-1-1e").append(HTMLeducationTitle.replace("%data%", education.title));
	$(".box-1-2e").append(HTMLschoolStart);
	for(var school in education.schools) {
		if(education.schools[school].dates !== null) {
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolName = HTMLschoolName.replace(
				"%data%", education.schools[school].name).replace("%data2%", education.schools[school].url);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".box-1-2e").append(formattedSchoolDates + formattedSchoolName + formattedSchoolLocation + formattedSchoolDegree);
			var formattedSchoolMajors = [];
			for (var i=0; i<education.schools[school].majors.length; i++) {
				formattedSchoolMajors[i] = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
				$(".box-1-2e").append(formattedSchoolMajors[i]);
			}
		}
	}
	$(".box-1-4e").append(HTMLonlineStart);
	for(var course in education.onlineCourses) {
		if(education.schools[course].dates !== null) {
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			var formattedOnlineName = HTMLschoolName.replace("%data%",
				education.onlineCourses[course].title).replace("%data2%", education.onlineCourses[course].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".box-1-4e").append(formattedOnlineDates + formattedOnlineName + formattedOnlineSchool);
		}
	}
};

education.display();


/**************************** work page *****************************************/
var work = {
	"title" : "Work experience",
	"jobs" : [
		{
		  "employer" : "ArchLab",
		  "title" : "Javascript Developer",
		  "location" : "London",
		  "dates" : "2014- ",
		  "description" : "Map features for web, using GeoServer and OpenLayers."
		},
		{
		  "employer" : "NewEvolution",
		  "title" : "Android Developer",
		  "location" : "Amsterdam",
		  "dates" : "2012-2014",
		  "description" : "Apps for Android recognizing images using OpenCV."
		},
		{
		  "employer" : "GamesDev",
		  "title" : "C++ Developer",
		  "location" : "Ginevra",
		  "dates" : "2011-2012",
		  "description" : "A game for Playstation."
		},
		{
		  "employer" : "WebSoft",
		  "title" : "Java Web Programmer",
		  "location" : "Rome",
		  "dates" : "2009-2011",
		  "description" : "Implementing new website for a megastore."
		}
	]
};

var HTMLworkStart = '<h1 id="id-title">%data%</h1>';
var HTMLworkTitle = '<div class="title-format"><h2>work</h2></div>';
var HTMLworkDates = '<div class="name-date-format"><span class="date-format">%data%</span>';
var HTMLworkEmployer = '<span class="name-format">%data%</span></div>';
var HTMLworkLocation = '<div class="location-format">(%data%)</div>';
var HTMLworkRole = '<div class="role-format">position: %data%</div>';
var HTMLworkDescription = '<div class="description-format">%data%</div>';

work.display = function() {
	$(".box-1-1w").append(HTMLworkStart.replace("%data%", work.title));
	$(".box-1-2w").append(HTMLworkTitle);
	for(var job in work.jobs) {
		if(work.jobs[job].dates !== null) {
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedRole = HTMLworkRole.replace("%data%", work.jobs[job].title);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".box-1-2w").append(formattedDates + formattedEmployer + formattedLocation + formattedRole
				+  formattedDescription);
		}
	}
};

work.display();

/**************************** qualifications page *****************************************/
var qualifications = {
	title : "Qualifications: personal and professional skills",
	"personal" : ["1 I am a problem solver at heart, and I strive to deliver creative "+
	"and effective solutions at the highest of standards.",
	"2 I have a strong eye for detail and a strong ability to conceptualize and think visually",
	"3 Strong verbal and written communication skills",
	"4 Self—motivated",
	"5 Efficient worker in independent and team environments",
	"6 Able to prioritize tasks, multitask and meet deadlines",
	"7 Strong organizational skills",
	"8 Adaptive thinker",
	"9 Skilled in cultivating positive relationships with clients"],
	"professional" : ["C++","Java","JS","Oracle","Linux","MVC","JavaEE","Android","OpenLayers","C#"]
};

var HTMLQualificationsTitle = '<h1 id="id-title">%data%</h1>';
var HTMLpersonalStart = '<div class="title-format"><h2>personal skills</h2></div>';
var HTMLpersonalKey = '<li id="li-sx-style">%data%</li>';

var HTMLprofessionalStart = '<div class="title-format"><h2>professional skills</h2></div>';
var HTMLprofessionalKey = '<li id="li-dx-style">%data%</li>';

qualifications.display = function() {
	$(".box-1-1q").append(HTMLQualificationsTitle.replace("%data%", qualifications.title));
	var list = $(".box-1-2q").append(HTMLpersonalStart);
	list = $(".box-1-2q").append('<ul></ul>').find('ul');
	var formattedElement;
	for (var i=0; i<qualifications.personal.length; i++) {
		formattedElement = HTMLpersonalKey.replace("%data%", qualifications.personal[i]);
		list.append(formattedElement);
	}
	$(".box-1-4q").append(HTMLprofessionalStart);
	list = $(".box-1-4q").append('<ul></ul>').find('ul');
	for (var i=0; i<qualifications.professional.length; i++) {
		formattedElement = HTMLprofessionalKey.replace("%data%", qualifications.professional[i]);
		list.append(formattedElement);
	}
};

qualifications.display();

/**************************** projects page *****************************************/
var projects = {
	"title" : "Projects & research",
	"projects" : [
		{
		  "title" : "SecureSMS",
		  "dates" : "2015",
		  "description" : "Android app for sending secure messages.",
		  "images" : ["http://www.maxschreck.com/images/sms01.jpg", "http://www.maxschreck.com/images/sms02.jpg"]
		},
		{
		  "title" : "WebMap",
		  "dates" : "2013",
		  "description" : "A Map integration for web, using GeoServer and OpenLayers.",
		  "images" : ["http://www.maxschreck.com/images/web01.jpg", "http://www.maxschreck.com/images/web02.jpg"]
		},
		{
		  "title" : "VisualOpen",
		  "dates" : "2011",
		  "description" : "A mobile application for facial recognition",
		  "images" : ["http://www.maxschreck.com/images/vo01.jpg", "http://www.maxschreck.com/images/vo02.jpg"]
		},
		{
		  "title" : "A version of Pac Man game",
		  "dates" : "2009",
		  "description" : "New version of Pac Man for Pc and Console.",
		  "images" : ["http://www.maxschreck.com/images/pac01.jpg", "http://www.maxschreck.com/images/pac02.jpg"]
		}
	]
};

var HTMLprojectsStart = '<h1 id="id-title">%data%</h1>';
var HTMLprojectsTitle = '<div class="title-format"><h2>my projects</h2></div>';
var HTMLprojectsTitle2 = '<div class="title-format"><h2>links</h2></div>';
var HTMLprojectsName = '<span class="name-format">%data%</span></div>';
var HTMLprojectsDates = '<div class="name-date-format"><span class="date-format">%data%</span>';
var HTMLprojectsDescription = '<div class="description-format">%data%</div>';
var HTMLprojectsImages = '<div class="tag-format">%data%</div>';

projects.display = function() {
	$(".box-1-1p").append(HTMLprojectsStart.replace("%data%", projects.title));
	$(".box-1-2p").append(HTMLprojectsTitle);
	$(".box-1-4p").append(HTMLprojectsTitle2);
	for(var proj in projects.projects) {
		if(projects.projects[proj].dates !== null) {
			var formattedDates = HTMLprojectsDates.replace("%data%", projects.projects[proj].dates);
			var formattedName = HTMLprojectsName.replace("%data%", projects.projects[proj].title);
			var formattedDescription = HTMLprojectsDescription.replace("%data%", projects.projects[proj].description);
			$(".box-1-2p").append(formattedDates + formattedName + formattedDescription);
			for(var i=0; i<projects.projects[proj].images.length; i++) {
				$(".box-1-4p").append(HTMLprojectsImages.replace("%data%", projects.projects[proj].images[i]));
			}
		}
	}
};

projects.display();

/**************************** languages page *****************************************/
var languages = {
	"title" : "Languages and skills",
	"subtitle" : ["German", "English", "French"],
	"theadth" : ["Level", "Description", "Listening","Reading", "Speaking", "Writing"],
	"tbodytd" : [
		{
		  "language1" : ["C2", "Proficient user", "x", "x", "x", "x"],
		  "language2" : ["C2", "Proficient user", "x", "x", " ", " "],
		  "language3" : ["C2", "Proficient user", " ", " ", " ", " "]
		},
		{
		  "language1" : ["C1", "Proficient user", " ", " ", " ", " "],
		  "language2" : ["C1", "Proficient user", " ", " ", "x", "x"],
		  "language3" : ["C1", "Proficient user", "x", "x", "x", "x"]
		},
		{
		  "language1" : ["B2", "Independent user", " ", " ", " ", " "],
		  "language2" : ["B2", "Independent user", " ", " ", " ", " "],
		  "language3" : ["B2", "Independent user", " ", " ", " ", " "]
		},
		{
		  "language1" : ["B1", "Independent user", " ", " ", " ", " "],
		  "language2" : ["B1", "Independent user", " ", " ", " ", " "],
		  "language3" : ["B1", "Independent user", " ", " ", " ", " "]
		},
		{
		  "language1" : ["A2", "Basic user", " ", " ", " ", " "],
		  "language2" : ["A2", "Basic user", " ", " ", " ", " "],
		  "language3" : ["A2", "Basic user", " ", " ", " ", " "]
		},
		{
		  "language1" : ["A1", "Basic user", " ", " ", " ", " "],
		  "language2" : ["A1", "Basic user", " ", " ", " ", " "],
		  "language3" : ["A1", "Basic user", " ", " ", " ", " "]
		}
	]
};

var HTMLlanguagesTitle = '<h1 id="id-title">%data%</h1>';
var HTMLlanguagesSubTitle = '<div class="title-format"><h2>%data%</h2></div>';
var HTMLlanguagesTableThead = '<div class="contained_table"><table><thead id="theadid"></thead><tbody id="tbodyid">';
var HTMLlanguagesTableTr = '<tr id="trid"></tr>';
var HTMLlanguagesTh = '<th>%data%</th>';
var HTMLlanguagesTd = '<td id="td-text-align">%data%</td>';

languages.display = function() {
	$(".box-1-1l").append(HTMLlanguagesTitle.replace("%data%", languages.title));
	$(".box-1-2l").append(HTMLlanguagesSubTitle.replace("%data%", languages.subtitle[0]));
	$(".box-1-3l").append(HTMLlanguagesSubTitle.replace("%data%", languages.subtitle[1]));
	$(".box-1-4l").append(HTMLlanguagesSubTitle.replace("%data%", languages.subtitle[2]));
	$(".box-1-2l").append(HTMLlanguagesTableThead);
    $(".box-1-3l").append(HTMLlanguagesTableThead);
    $(".box-1-4l").append(HTMLlanguagesTableThead);
	$(".box-1-2l #theadid").append(HTMLlanguagesTableTr);
	$(".box-1-3l #theadid").append(HTMLlanguagesTableTr);
	$(".box-1-4l #theadid").append(HTMLlanguagesTableTr);
	for(var i=0; i<languages.theadth.length; i++) {
			var formattedTH = HTMLlanguagesTh.replace("%data%", languages.theadth[i]);
			$(".box-1-2l #trid").append(formattedTH);
			$(".box-1-3l #trid").append(formattedTH);
			$(".box-1-4l #trid").append(formattedTH);
	}
	var formattedTD = [];
	var formattedTDstr;
	for(var j=0; j<languages.tbodytd.length; j++) {
		for(var i=0; i<languages.tbodytd[j].language1.length; i++) {
			formattedTD[i] = HTMLlanguagesTd.replace("%data%", languages.tbodytd[j].language1[i]);
		}
		formattedTDstr = '<tr>';
		for(var i=0; i<formattedTD.length; i++) {
		 	formattedTDstr = formattedTDstr.concat(formattedTD[i]);
		}
		formattedTDstr = formattedTDstr.concat('</tr>');
		$(".box-1-2l #tbodyid").append(formattedTDstr);
		for(var i=0; i<languages.tbodytd[j].language2.length; i++) {
			formattedTD[i] = HTMLlanguagesTd.replace("%data%", languages.tbodytd[j].language2[i]);
		}
		formattedTDstr = '<tr>';
		for(var i=0; i<formattedTD.length; i++) {
		 	formattedTDstr = formattedTDstr.concat(formattedTD[i]);
		}
		formattedTDstr = formattedTDstr.concat('</tr>');
		$(".box-1-3l #tbodyid").append(formattedTDstr);
		for(var i=0; i<languages.tbodytd[j].language3.length; i++) {
		formattedTD[i] = HTMLlanguagesTd.replace("%data%", languages.tbodytd[j].language3[i]);
		}
		formattedTDstr = '<tr>';
		for(var i=0; i<formattedTD.length; i++) {
		 	formattedTDstr = formattedTDstr.concat(formattedTD[i]);
		}
		formattedTDstr = formattedTDstr.concat('</tr>');
		$(".box-1-4l #tbodyid").append(formattedTDstr);
	}
};

languages.display();

/**************************** interests page *****************************************/
var interests = {
	"title" : "Interests & hobbies",
	"theadthTAB1" : ["", "Area of Interest"],
	"theadthTAB2" : "Description",
	"tbodytdTAB1" : [
		{
		  "content" : ["+", "Sport & activities"]
		},
		{
		  "content" : ["+", "Cultural interests"]
		},
		{
		  "content" : ["+", "Travels & stuff"]
		},
		{
		  "content" : ["+", "Hobbies"]
		},
		{
		  "content" : ["+", "About me"]
		}
	],
	"tbodytdTAB2" : ["I like playing sport, and I like doing physical stuff. I like hiking and I like climbing and I like playing sport. I do a lot. But I don't like the term 'exercising.'"+
	" I feel like with sport, you're playing games. But with exercise, you're literally just trying to stop yourself from dying too young. It's weird.",
	"I like to attend arts events, visit museum, read books, watch movies, play piano.",
	"Travelled extensively and have visited places which include England, America, India, Australia, China, South Africa, Japan.",
	"I like playing videogames. I love animals and strategy games like chess. I use to spend a lot time larning technological stuff.",
	"Member of Monkey Island Society.  Member of Little Deep Red dramatic club. Play piano in prog-rock band.  Particularly keen on classical music. Keen reader of science fiction.  "+
	"Favourite author is Philip K. Dick. Currently taking an evening Thai cookery course."]
};

var HTMLinterestsTitle = '<h1 id="id-title">%data%</h1>';
var HTMLinterestsTableThead = '<div class="contained_table"><table><thead id="theadid"></thead><tbody id="tbodyid">';
var HTMLinterestsTableTr = '<tr id="trid"></tr>';
var HTMLinterestsTh0 = '<th id="th0id">%data%</th>';
var HTMLinterestsTh = '<th>%data%</th>';
var HTMLinterestsTdahref = '<td id="td-text-align"><a href="#area%data2%" id="link">%data%</a></td>';
var HTMLinterestsTd = '<td id="td-text-align">%data%</td>';
var HTMLinterestsTd2 = '<td>%data%</td>';

interests.display = function() {
	$(".box-1-1i").append(HTMLinterestsTitle.replace("%data%", interests.title));
	$(".box-1-2i").append(HTMLinterestsTableThead);
    $(".box-1-4i").append(HTMLinterestsTableThead);
	$(".box-1-2i #theadid").append(HTMLinterestsTableTr);
	$(".box-1-4i #theadid").append(HTMLinterestsTableTr);
	var formattedTH = HTMLinterestsTh0.replace("%data%", interests.theadthTAB1[0]);
	$(".box-1-2i #trid").append(formattedTH);
	formattedTH = HTMLinterestsTh.replace("%data%", interests.theadthTAB1[1]);
	$(".box-1-2i #trid").append(formattedTH);
	var formattedTH = HTMLinterestsTh.replace("%data%", interests.theadthTAB2);
	$(".box-1-4i #trid").append(formattedTH);
	for(var j=0; j<interests.tbodytdTAB1.length; j++) {
		var formattedTD = [];
		var formattedTDstr = '<tr>';
		formattedTD[0] = HTMLinterestsTdahref.replace("%data%", interests.tbodytdTAB1[j].content[0]);
		formattedTD[0] = formattedTD[0].replace("%data2%", j+1);
		formattedTD[1] = HTMLinterestsTd.replace("%data%", interests.tbodytdTAB1[j].content[1]);
	 	formattedTDstr += formattedTD[0];
	 	formattedTDstr += formattedTD[1];
		formattedTDstr += '</tr>';
		$(".box-1-2i #tbodyid").append(formattedTDstr);
	}
	for(var j=0; j<interests.tbodytdTAB2.length; j++) {
		var formattedTDstr = '<tr id="area%data2%">';
		formattedTDstr = formattedTDstr.replace("%data2%", j+1);
		formattedTDstr += HTMLinterestsTd2.replace("%data%", interests.tbodytdTAB2[j]);
		formattedTDstr += '</tr>';
		$(".box-1-4i #tbodyid").append(formattedTDstr);
	}
}

interests.display();

$('a#link').click(function() {
	$('tr#area1').css('display', 'none');
    $('tr#area2').css('display', 'none');
    $('tr#area3').css('display', 'none');
    $('tr#area4').css('display', 'none');
    $('tr#area5').css('display', 'none');
    $("a[id=link]").text('+');
    var href = $(this).attr('href');
    $(href).css('display', 'block');
    $(this).text('-');
});

/**************************** contact page *****************************************/
var contact = {
	"title" : "Contact",
	"home" :
		{
		  "subtitle" : "Home contact",
		  "address" : "Street Morgan 4",
		  "location" : "London",
		  "country" : "UK",
		  "phone" : "030-456-0009",
		  "mobile" : "348-0294829"
		},
	"office" :
		{
		  "subtitle" : "Office contact",
		  "address" : "Street Oxford 290",
		  "location" : "London",
		  "country" : "UK",
		  "phone" : "030-457-2323",
		  "mobile" : "001-445-9540"
		},
	"others" :
		{
		  "subtitle" : "Others contact",
		  "mobile" : "341-475-9543",
		  "email" : "max.schreck@gmail.com",
		  "website" : "https://www.maxschreck.com",
		  "twitter" : "https://twitter.com/maxschreck",
		  "facebook" : "https://www.facebook.com/maxschreck",
		  "linkedin" : "https://www.linkedin.com/in/maxschreck"
		}
};

var HTMLcontactTitle = '<h1 id="id-title">%data%</h1>';
var HTMLcontactSubTitle = '<div class="title-format"><h2>%data%</h2></div>';
var HTMLcontactAddress = '<div class="tag-format">address: %data%</div>';
var HTMLcontactLocation = '<div class="tag-format">city: %data%</div>';
var HTMLcontactCountry = '<div class="tag-format">country: %data%</div>';
var HTMLcontactPhone = '<div class="tag-format">phone: %data%</div>';
var HTMLcontactMobile = '<div class="tag-format">mobile: %data%</div>';
var HTMLcontactMobile2 = '<div class="tag-format"><span class="zocial-call"></span>: %data%</div>';
var HTMLcontactEmail = '<div class="tag-format"><a href="mailto:%data%" id="link"><span class="zocial-gmail"></span>: </a>%data%</div>';
var HTMLcontactWeb = '<div class="tag-format"><a href="%data%" id="link"><span class="zocial-chrome"></span>: </a>%data%</div>';
var HTMLcontactTwitter = '<div class="tag-format"><a href="%data%" id="link"><span class="zocial-twitter"></span>: </a>%data%</div>';
var HTMLcontactFacebook = '<div class="tag-format"><a href="%data%" id="link"><span class="zocial-facebook"></span>: </a>%data%</div>';
var HTMLcontactLinkedin = '<div class="tag-format"><a href="%data%" id="link"><span class="zocial-linkedin"></span>: </a>%data%</div>';

contact.display = function() {
	$(".box-1-1c").append(HTMLcontactTitle.replace("%data%", contact.title));
	$(".box-1-2c").append(HTMLcontactSubTitle.replace("%data%", contact.home.subtitle));
	var formattedContactAddress = HTMLcontactAddress.replace("%data%", contact.home.address);
	var formattedContactLocation = HTMLcontactLocation.replace("%data%", contact.home.location);
	var formattedContactCountry = HTMLcontactCountry.replace("%data%", contact.home.country);
	var formattedContactPhone = HTMLcontactPhone.replace("%data%", contact.home.phone);
	var formattedContactMobile = HTMLcontactMobile.replace("%data%", contact.home.mobile);
	$(".box-1-2c").append(formattedContactAddress + formattedContactLocation + formattedContactCountry
		+ formattedContactPhone + formattedContactMobile);
	$(".box-1-3c").append(HTMLcontactSubTitle.replace("%data%", contact.office.subtitle));
	formattedContactAddress = HTMLcontactAddress.replace("%data%", contact.office.address);
	formattedContactLocation = HTMLcontactLocation.replace("%data%", contact.office.location);
	formattedContactCountry = HTMLcontactCountry.replace("%data%", contact.office.country);
	formattedContactPhone = HTMLcontactPhone.replace("%data%", contact.office.phone);
	formattedContactMobile = HTMLcontactMobile.replace("%data%", contact.office.mobile);
	$(".box-1-3c").append(formattedContactAddress + formattedContactLocation + formattedContactCountry
		+ formattedContactPhone + formattedContactMobile);
	$(".box-1-4c").append(HTMLcontactSubTitle.replace("%data%", contact.others.subtitle));
	var formattedContactMobile2 = HTMLcontactMobile2.replace("%data%", contact.others.mobile);
	var formattedContactEmail = HTMLcontactEmail.replace(/%data%/g, contact.others.email);
	var formattedContactWeb = HTMLcontactWeb.replace(/%data%/g, contact.others.website);
	var formattedContactTwitter = HTMLcontactTwitter.replace(/%data%/g, contact.others.twitter);
	var formattedContactFacebook = HTMLcontactFacebook.replace(/%data%/g, contact.others.facebook);
	var formattedContactLinkedin = HTMLcontactLinkedin.replace(/%data%/g, contact.others.linkedin);
	$(".box-1-4c").append(formattedContactMobile2 + formattedContactEmail + formattedContactWeb +
		formattedContactTwitter + formattedContactFacebook + formattedContactLinkedin);
};

contact.display();