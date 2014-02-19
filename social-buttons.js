$.fn.socialButtons = function(options) {
  var config = {
    "facebook": {
      "shortname": "f",
      "class": "social-facebook"
    },
    "twitter": {
      "shortname": "t",
      "class": "social-twitter"
    },
    "googleplus": {
      "shortname": "g+",
      "class": "social-googleplus"
    }
  }

  var container = $(this);

  container.append("<ul></ul>");

  $.each(options, function(index, value) {
    if (config.hasOwnProperty(value)) {
      $("<li class=\""+config[value].class+"\">"+config[value].shortname+"</li>").appendTo(container.find("ul")).on("click", function() {
        console.log("click on "+value);
      });
    }
  });
}
