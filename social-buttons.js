(function($) {
  $.fn.socialButtons = function(options, socialNetwork) {
    var that = this;
  
    that.options = {
      socialNetworks: [],
      url: "",
      text: "",
      sharelabel: true,
      sharelabelText: "SHARE",
      verticalAlign: false
    };
    $.extend(that.options, options);
    if (that.options.url=="" && $("link[rel=canonical]").length) {
      that.options.url = $("link[rel=canonical]").attr('href');
    }
    if (that.options.text=="" && document.title!="") {
      that.options.text = document.title;
    }
    that.options.url = encodeURIComponent(that.options.url);
    that.options.text = encodeURIComponent(that.options.text);
  
    that.socialNetwork = {
      facebook: {
        title: "Share on Facebook",
        cssclass: "social-facebook",
        shareurl: "https://www.facebook.com/sharer/sharer.php?u="+that.options.url,
		height: 600,
		width: 600
      },
      twitter: {
        title: "Share on Twitter",
        cssclass: "social-twitter",
        shareurl: "http://twitter.com/share?text="+that.options.text+"&url="+that.options.url,
		height: 600,
		width: 600
      },
      googleplus: {
        title: "Share on Google+",
        cssclass: "social-googleplus",
        shareurl: "https://plus.google.com/share?url="+that.options.url,
		height: 600,
		width: 600
      }
    };
    $.each(that.socialNetwork, function(index, value) {
      if (socialNetwork.hasOwnProperty(index)) {
        $.extend(that.socialNetwork[index], socialNetwork[index]);
      }
    });

    if (that.options.socialNetworks.length>0) {
      var container = $(that);
      var verticalAlign = that.options.verticalAlign;

      if (that.options.sharelabel) {
        var classVertical = (verticalAlign) ? " class=\"vertical vertical-label\"" : "";
        var htmlLabel = "<label"+classVertical+">"+that.options.sharelabelText+"</label>";
        container.append(htmlLabel);
      }

      var classVertical = (verticalAlign) ? " class=\"vertical vertical-ul\"" : "";
      var htmlUl = "<ul"+classVertical+"></ul><div></div>";
      container.append(htmlUl);

      $.each(that.options.socialNetworks, function(index, value) {
        if (that.socialNetwork.hasOwnProperty(value)) {
          var classVertical = (verticalAlign) ? " vertical" : "";

          $("<li class=\""+that.socialNetwork[value].cssclass+classVertical+"\" title=\""+that.socialNetwork[value].title+"\"></li>").appendTo(container.find("ul")).on("click", function() {
            window.open(that.socialNetwork[value].shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height='+that.socialNetwork[value].height+',width='+that.socialNetwork[value].width+',top='+((screen.height/2)-(that.socialNetwork[value].height/2))+',left='+((screen.width/2)-(that.socialNetwork[value].width/2)));
          });
        }
      });
    }
  }
})(jQuery);
