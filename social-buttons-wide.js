(function($) {
  "use strict";

  $.fn.socialButtonsWide = function() {
    var options = {
      url: "",
      text: "",
    };
    if (options.url=="" && window.location.href!=undefined) {
      options.url = window.location.href;
    }
    if (options.text=="" && document.title!="") {
      options.text = document.title;
    }
    options.url = encodeURIComponent(options.url);
    options.text = encodeURIComponent(options.text);

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
