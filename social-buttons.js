$.fn.socialButtons = function(options) {
  var config = {
    "facebook": {
      "shortname": "f",
      "class": "social-facebook",
      "shareurl": "https://www.facebook.com/sharer/sharer.php?u="
    },
    "twitter": {
      "shortname": "t",
      "class": "social-twitter",
      "shareurl": "http://twitter.com/share?text=hallo&url="
    },
    "googleplus": {
      "shortname": "g+",
      "class": "social-googleplus",
      "shareurl": "https://plus.google.com/share?url="
    }
  }

  var container = $(this);

  container.append("<ul></ul>");

  $.each(options.socialNetworks, function(index, value) {
    if (config.hasOwnProperty(value)) {
      $("<li class=\""+config[value].class+"\">"+config[value].shortname+"</li>").appendTo(container.find("ul")).on("click", function() {
        window.open(config[value].shareurl+options.url, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height=600,width=600');
      });
    }
  });
}
