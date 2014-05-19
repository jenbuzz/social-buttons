(function($) {
  "use strict";

  $.fn.socialButtons = function(mode, customOptions, customSocialNetworks) {
    var that = this;
    var options = customOptions || {};
    var socialNetworks = customSocialNetworks || {};

    var mode = (mode!==undefined && (mode==="share" || mode==="wide" || mode==="pages")) ? mode : "share";

    if (mode==="wide") {
      if (window.location.href!==undefined && document.title!==undefined) {
        that.options = {
          socialNetworks: ["facebook", "twitter"],
          url: encodeURIComponent(window.location.href),
          text: encodeURIComponent(document.title)
        };
      } else {
        return;
      }
    } else if(mode==="pages") {
      that.options = {
        target: "_blank"
      };
      $.extend(that.options, options);
    } else {
      that.options = {
        socialNetworks: ["facebook", "twitter", "googleplus"],
        url: "",
        text: "",
        sharelabel: true,
        sharelabelText: "SHARE",
        verticalAlign: false
      };
      $.extend(that.options, options);
      if (that.options.url==="" && $("link[rel=canonical]").length) {
        that.options.url = $("link[rel=canonical]").attr('href');
      } else if (that.options.url==="" && !$("link[rel=canonical]").length && window.location.href!==undefined) {
        that.options.url = window.location.href;
      }
      if (that.options.text==="" && document.title!=="") {
        that.options.text = document.title;
      }
      that.options.url = encodeURIComponent(that.options.url);
      that.options.text = encodeURIComponent(that.options.text);
    }

    if (mode==="pages") {
      that.socialNetworks = {
        facebook: {
          title: "Visit us on Facebook",
          cssclass: "social-facebook",
          pageurl: ""
        },
        twitter: {
          title: "Visit us on Twitter",
          cssclass: "social-twitter",
          pageurl: ""
        },
        googleplus: {
          title: "Visit us on Google+",
          cssclass: "social-googleplus",
          pageurl: ""
        }
      };
    } else {
      that.socialNetworks = {
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
    }
    $.each(that.socialNetworks, function(index, value) {
      if (socialNetworks.hasOwnProperty(index)) {
        $.extend(that.socialNetworks[index], socialNetworks[index]);
      }
    });

    if (mode==="wide") {
      var container = $(this);
      var htmlUl = "<ul class=\"social-wide\"></ul><div class=\"clearfix\"></div>";
      container.append(htmlUl);

      $.each(that.socialNetworks, function(index, value) {
        if (that.options.socialNetworks.indexOf(index)>=0) {
          $("<li class=\""+value.cssclass+"\" title=\""+value.title+"\"><div><span>"+value.title+"</span></div></li>").appendTo(container.find("ul")).on("click", function() {
            window.open(value.shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height='+value.height+',width='+value.width+',top='+((screen.height/2)-(value.height/2))+',left='+((screen.width/2)-(value.width/2)));
          });
        }
      });
    } else if (mode==="pages") {
      var container = $(this);
      var htmlUl = "<ul class=\"social-pages\"></ul><div class=\"clearfix\"></div>";
      container.append(htmlUl);

      $.each(that.socialNetworks, function(index, value) {
        if (value.pageurl!=='') {
          $("<li class=\""+value.cssclass+"\" title=\""+value.title+"\"></li>").appendTo(container.find("ul")).on("click", function() {
            window.open(value.pageurl, that.options.target);
          });
        }
      });
    } else {
      if (that.options.socialNetworks.length>0) {
        var container = $(this);
        var verticalAlign = (that.options.verticalAlign!==undefined) ? that.options.verticalAlign : false;

        if (that.options.sharelabel) {
          var classVerticalLabel = (verticalAlign) ? " class=\"vertical vertical-label\"" : "";
          var htmlLabel = "<label"+classVerticalLabel+">"+that.options.sharelabelText+"</label>";
          container.append(htmlLabel);
        }

        var classVertical = (verticalAlign) ? " vertical vertical-ul" : "";
        var htmlUl = "<ul class=\"social-share"+classVertical+"\"></ul><div></div>";
        container.append(htmlUl);

        $.each(that.options.socialNetworks, function(index, value) {
          if (that.socialNetworks.hasOwnProperty(value)) {
            var classVertical = (verticalAlign) ? " vertical" : "";

            $("<li class=\""+that.socialNetworks[value].cssclass+classVertical+"\" title=\""+that.socialNetworks[value].title+"\"></li>").appendTo(container.find("ul")).on("click", function() {
              window.open(that.socialNetworks[value].shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height='+that.socialNetworks[value].height+',width='+that.socialNetworks[value].width+',top='+((screen.height/2)-(that.socialNetworks[value].height/2))+',left='+((screen.width/2)-(that.socialNetworks[value].width/2)));
            });
          }
        });
      }
    }
  };
})(jQuery);
