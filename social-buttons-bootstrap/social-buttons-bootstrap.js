(function($) {
  "use strict";

  $.fn.socialButtonsBootstrap = function(customMode, customOptions, customSocialNetworks) {
    var that = this;
    var options = customOptions || {};
    var socialNetworks = customSocialNetworks || {};

    var mode = (customMode!==undefined && (customMode==="share" || customMode==="pages")) ? customMode : "share";

    if (mode==="pages") {
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
        sharelabelText: "SHARE"
      };
      $.extend(that.options, options);
      if (that.options.url==="" && $("link[rel=canonical]").length && $("link[rel=canonical]").attr('href').indexOf("://") != -1) {
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
          cssclass: "facebook",
          cssclassfa: "fa fa-facebook",
          pageurl: ""
        },
        twitter: {
          title: "Visit us on Twitter",
          cssclass: "twitter",
          cssclassfa: "fa fa-twitter",
          pageurl: ""
        },
        googleplus: {
          title: "Visit us on Google+",
          cssclass: "google-plus",
          cssclassfa: "fa fa-google-plus",
          pageurl: ""
        }
      };
    } else {
      that.socialNetworks = {
        facebook: {
          title: "Share on Facebook",
          cssclass: "facebook",
          cssclassfa: "fa fa-facebook",
          shareurl: "https://www.facebook.com/sharer/sharer.php?u=" + that.options.url,
          height: 600,
          width: 600
        },
        twitter: {
          title: "Share on Twitter",
          cssclass: "twitter",
          cssclassfa: "fa fa-twitter",
          shareurl: "https://twitter.com/intent/tweet?text=" + that.options.text + "&url=" + that.options.url,
          height: 600,
          width: 600
        },
        googleplus: {
          title: "Share on Google+",
          cssclass: "google-plus",
          cssclassfa: "fa fa-google-plus",
          shareurl: "https://plus.google.com/share?url=" + that.options.url,
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

    var container = $(this);
    if (mode==="pages") {
      var ulPages = "<ul class=\"social-pages\"></ul><div class=\"clearfix\"></div>";
      container.append(ulPages);

      $.each(that.socialNetworks, function(index, value) {
        if (value.pageurl!=='') {
          var liPages = "<li><a href=\"" + value.pageurl + "\" class=\"btn btn-social-icon btn-" + value.cssclass + "\"><i class=\"" + value.cssclassfa + "\"></i></a></li>";
          $(liPages).appendTo(container.find("ul")).on("click", function() {
            window.open(value.pageurl, that.options.target);
          });
        }
      });
    } else {
      if (that.options.socialNetworks.length>0) {
        if (that.options.sharelabel) {
          var htmlLabel = "<label>" + that.options.sharelabelText + "</label>";
          container.append(htmlLabel);
        }

        var ulShare = "<ul class=\"social-share\"></ul><div></div>";
        container.append(ulShare);

        $.each(that.options.socialNetworks, function(index, value) {
          if (that.socialNetworks.hasOwnProperty(value)) {
            var liShare = "<li title=\"" + that.socialNetworks[value].title + "\"><a class=\"btn btn-social-icon btn-" + that.socialNetworks[value].cssclass + "\"><i class=\"" + that.socialNetworks[value].cssclassfa + "\"></i></a></li>";
            $(liShare).appendTo(container.find("ul")).on("click", function() {
              var shareHeight = that.socialNetworks[value].height;
              var shareWidth = that.socialNetworks[value].width;
              var shareTop = ((screen.height/2)-(that.socialNetworks[value].height/2));
              var shareLeft = ((screen.width/2)-(that.socialNetworks[value].width/2));

              window.open(that.socialNetworks[value].shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height=' + shareHeight + ',width=' + shareWidth + ',top=' + shareTop + ',left=' + shareLeft);
            });
          }
        });
      }
    }
  };
})(jQuery);
