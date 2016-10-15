function renderLanguage(data) {
    var titles = {
        "Language family": "family",
        "Writing System": "writing system",
		"Code": "code"
    };
    var html = "<h3 class='language-title'>" + data["name"]  + "</h3>";
    html += '<ul>';
    for (var title in titles) {
        var key = titles[title];
        html += "<li>" + title + ": " + data[key] + "</li>";
    }
    html += '</ul>';
    return html;
}

function renderLanguages(data) {
    var html = "";

    for (var i=0; i < data.length; i++){
	  html += renderLanguage(data[i]);
    }
    return html;
}

$(document).ready(function(){
	//  $('#languages-container').html(renderLanguages(languages["language"]));
	//  $('#languages-title').html(languages["title"]);
    $.getJSON("hw3json/lang.json", function(json) {
		console.log(json['languages']); var html = renderLanguages(json['languages']);
		$('#languages-container').html(html);
		$('#Languages-title').html (json['title']);
    });
});