$.fn.socialButtons = function(options) {
  this.options = {
    socialNetworks: [],
    url: "",
    text: ""
  };
  $.extend(this.options, options);
  this.options.url = encodeURIComponent(this.options.url);
  this.options.text = encodeURIComponent(this.options.text);
  
  var config = {
    facebook: {
      cssclass: "social-facebook",
      shareurl: "https://www.facebook.com/sharer/sharer.php?u="+this.options.url
    },
    twitter: {
      cssclass: "social-twitter",
      shareurl: "http://twitter.com/share?text="+this.options.text+"&url="+this.options.url
    },
    googleplus: {
      cssclass: "social-googleplus",
      shareurl: "https://plus.google.com/share?url="+this.options.url
    }
  }

  var container = $(this);
  container.append("<ul></ul>");

  $.each(this.options.socialNetworks, function(index, value) {
    if (config.hasOwnProperty(value)) {
      $("<li class=\""+config[value].cssclass+"\"></li>").appendTo(container.find("ul")).on("click", function() {
        window.open(config[value].shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height=600,width=600,top='+((screen.height/2)-300)+',left='+((screen.width/2)-300));
      });
    }
  });
}
