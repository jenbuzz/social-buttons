(function($) {
  "use strict";

  $.fn.socialButtonsPages = function(customSocialNetworks, customOptions) {
    var that = this;
    var options = customOptions || {};
    var socialNetworks = customSocialNetworks || {};

    that.options = {
      target: "_blank"
    };
    $.extend(that.options, options);

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
    $.each(that.socialNetworks, function(index, value) {
      if (socialNetworks.hasOwnProperty(index)) {
        $.extend(that.socialNetworks[index], socialNetworks[index]);
      }
    });

    var container = $(this);
    var htmlUl = "<ul></ul><div class=\"clearfix\"></div>";
    container.append(htmlUl);

    $.each(that.socialNetworks, function(index, value) {
      if (value.pageurl!=='') {
        $("<li class=\"" + value.cssclass + "\" title=\"" + value.title + "\"></li>").appendTo(container.find("ul")).on("click", function() {
          window.open(value.pageurl, that.options.target);
        });
      }
    });
  };
})(jQuery);
