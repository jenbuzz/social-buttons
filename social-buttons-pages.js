(function($) {
  "use strict";

  $.fn.socialButtonsPages = function(socialNetworks) {
    var that = this;
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
      if (value.pageurl!='') {
        $("<li class=\""+value.cssclass+"\" title=\""+value.title+"\"></li>").appendTo(container.find("ul")).on("click", function() {
          document.location.href = value.pageurl;
        });
      }
    });
  }
})(jQuery);
