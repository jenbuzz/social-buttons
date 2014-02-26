(function($) {
  $.fn.socialButtons = function(options) {
    this.options = {
      socialNetworks: [],
      url: "",
      text: "",
      sharelabel: true
    };
    $.extend(this.options, options);
    if (this.options.url=="" && $("link[rel=canonical]").length) {
      this.options.url = $("link[rel=canonical]").attr('href');
    }
    if (this.options.text=="" && document.title!="") {
      this.options.text = document.title;
    }
    this.options.url = encodeURIComponent(this.options.url);
    this.options.text = encodeURIComponent(this.options.text);
  
    var config = {
      facebook: {
        title: "Share on Facebook",
        cssclass: "social-facebook",
        shareurl: "https://www.facebook.com/sharer/sharer.php?u="+this.options.url
      },
      twitter: {
        title: "Share on Twitter",
        cssclass: "social-twitter",
        shareurl: "http://twitter.com/share?text="+this.options.text+"&url="+this.options.url
      },
      googleplus: {
        title: "Share on Google+",
        cssclass: "social-googleplus",
        shareurl: "https://plus.google.com/share?url="+this.options.url
      }
    }

    var container = $(this);
    if (this.options.sharelabel) {
      container.append("<label>SHARE</label>");
    }
    container.append("<ul></ul><div></div>");

    $.each(this.options.socialNetworks, function(index, value) {
      if (config.hasOwnProperty(value)) {
        $("<li class=\""+config[value].cssclass+"\" title=\""+config[value].title+"\"></li>").appendTo(container.find("ul")).on("click", function() {
          window.open(config[value].shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height=600,width=600,top='+((screen.height/2)-300)+',left='+((screen.width/2)-300));
        });
      }
    });
  }
})(jQuery);
