(function($) {
  "use strict";

  $.fn.socialButtonsWide = function() {
    if (window.location.href!==undefined && document.title!==undefined) {
      var options = {
        url: encodeURIComponent(window.location.href),
        text: encodeURIComponent(document.title)
      };
      this.options = options;
    } else {
      return;
    }
    
    var socialNetworks = {
      facebook: {
        title: "Share on Facebook",
        cssclass: "social-facebook",
        shareurl: "https://www.facebook.com/sharer/sharer.php?u=" + this.options.url,
        height: 600,
        width: 600
      },
      twitter: {
        title: "Share on Twitter",
        cssclass: "social-twitter",
        shareurl: "https://twitter.com/intent/tweet?text=" + this.options.text + "&url=" + this.options.url,
        height: 600,
        width: 600
      }
    };

    var container = $(this);
    var htmlUl = "<ul></ul><div class=\"clearfix\"></div>";
    container.append(htmlUl);

    $.each(socialNetworks, function(index, value) {
      var liWide = "<li class=\"" + value.cssclass + "\" title=\"" + value.title + "\"><div><span>" + value.title + "</span></div></li>";

      var wideTop = ((screen.height/2) - (value.height/2));
      var wideLeft = ((screen.width/2) - (value.width/2));

      $(liWide).appendTo(container.find("ul")).on("click", function() {
        window.open(value.shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height=' + value.height + ',width=' + value.width + ',top=' + wideTop + ',left=' + wideLeft);
      });
    });
  };
})(jQuery);
