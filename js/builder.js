/************* builder header menu********************/

var keyword = {
	"me" : "Me",
	"education" : "Education",
	"work" : "Work",
	"qualifications" : "Qualifications",
	"projects" : "Projects",
	"languages" : "Languages",
	"interests" : "Interests",
	"contact" : "Contact"
}

var footer = {
	"mobile": "001-445-9540",
	"email" : "max.schreck@gmail.com",
	"github" : "maxsk",
	"twitter" : "#maxsk",
	"location" : "London"
}

var HTMLkeywordMe = '<li class="active" id="menu"><a href="#">%data%</a></li>';
var HTMLkeywordEducation = '<li class="" id="menu"><a href="#">%data%</a></li>';
var HTMLkeywordWork = '<li class="" id="menu"><a href="#">%data%</a></li>';
var HTMLkeywordQualifications = '<li class="" id="menu"><a href="#">%data%</a></li>';
var HTMLkeywordProjects = '<li class="" id="menu"><a href="#">%data%</a></li>';
var HTMLkeywordLanguages = '<li class="" id="menu"><a href="#">%data%</a></li>';
var HTMLkeywordInterests = '<li class="" id="menu"><a href="#">%data%</a></li>';
var HTMLkeywordContact = '<li class="" id="menu"><a href="#">%data%</a></li>';

keyword.display = function() {
	var formattedMe = HTMLkeywordMe.replace("%data%", keyword.me);
	var formattedEducation = HTMLkeywordEducation.replace("%data%", keyword.education);
	var formattedWork = HTMLkeywordWork.replace("%data%", keyword.work);
	var formattedQualifications = HTMLkeywordQualifications.replace("%data%", keyword.qualifications);
	$("#keyword-nav-sx").append(formattedMe+formattedEducation+formattedWork+formattedQualifications);
	var formattedProjects = HTMLkeywordProjects.replace("%data%", keyword.projects);
	var formattedLanguages = HTMLkeywordLanguages.replace("%data%", keyword.languages);
	var formattedInterests = HTMLkeywordInterests.replace("%data%", keyword.interests);
	var formattedContact = HTMLkeywordContact.replace("%data%", keyword.contact);
	$("#keyword-nav-dx").append(formattedProjects+formattedLanguages+formattedInterests+formattedContact);
}

keyword.display();

var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile </span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email </span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github </span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter </span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location </span><span class="white-text">%data%</span></li>';

footer.display = function() {
	var formattedMobile = HTMLmobile.replace("%data%", footer.mobile);
	var formattedEmail = HTMLemail.replace("%data%", footer.email);
	var formattedGithub = HTMLgithub.replace("%data%", footer.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", footer.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", footer.location);
	$("#footer-contacts").append(formattedMobile+formattedEmail+formattedGithub+formattedTwitter+formattedLocation);
}

footer.display();