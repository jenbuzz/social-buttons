$.fn.socialButtons = function(options) {
  var config = {
    "facebook": {
      "shortname": "f",
      "class": "social-facebook",
      "shareurl": "https://www.facebook.com/sharer/sharer.php?u="+options.url
    },
    "twitter": {
      "shortname": "t",
      "class": "social-twitter",
      "shareurl": "http://twitter.com/share?text="+options.text+"&url="+options.url
    },
    "googleplus": {
      "shortname": "g+",
      "class": "social-googleplus",
      "shareurl": "https://plus.google.com/share?url="+options.url
    }
  }

  var container = $(this);

  container.append("<ul></ul>");

  $.each(options.socialNetworks, function(index, value) {
    if (config.hasOwnProperty(value)) {
      $("<li class=\""+config[value].class+"\"></li>").appendTo(container.find("ul")).on("click", function() {
        window.open(config[value].shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height=600,width=600,top='+((screen.height/2)-300)+',left='+((screen.width/2)-300));
      });
    }
  });
}
