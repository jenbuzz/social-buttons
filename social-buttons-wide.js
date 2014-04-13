(function($) {
  "use strict";

  $.fn.socialButtonsWide = function() {
    if (window.location.href!=undefined && document.title!=undefined) {
      var options = {
        url: encodeURIComponent(window.location.href),
        text: encodeURIComponent(document.title)
      };
    } else {
      return;
    }
    
    var socialNetworks = {
      facebook: {
        title: "Share on Facebook",
        cssclass: "social-facebook",
        shareurl: "https://www.facebook.com/sharer/sharer.php?u="+options.url,
        height: 600,
        width: 600
      },
      twitter: {
        title: "Share on Twitter",
        cssclass: "social-twitter",
        shareurl: "http://twitter.com/share?text="+options.text+"&url="+options.url,
        height: 600,
        width: 600
      }
    };

    var container = $(this);
    var htmlUl = "<ul></ul><div></div>";
    container.append(htmlUl);

    $.each(socialNetworks, function(index, value) {
        $("<li class=\""+value.cssclass+"\" title=\""+value.title+"\"></li>").appendTo(container.find("ul")).on("click", function() {
          window.open(value.shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height='+value.height+',width='+value.width+',top='+((screen.height/2)-(value.height/2))+',left='+((screen.width/2)-(value.width/2)));
        });
    });
  }
})(jQuery);
