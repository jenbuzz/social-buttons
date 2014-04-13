(function($) {
  "use strict";

  $.fn.socialButtonsWide = function() {
    var that = this;

    that.options = {
      url: "",
      text: "",
    };
    if (that.options.url=="" && window.location.href!=undefined) {
      that.options.url = window.location.href;
    }
    if (that.options.text=="" && document.title!="") {
      that.options.text = document.title;
    }
    that.options.url = encodeURIComponent(that.options.url);
    that.options.text = encodeURIComponent(that.options.text);

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
      }
    };

    var container = $(that);

    var htmlUl = "<ul></ul><div></div>";
    container.append(htmlUl);

    $.each(that.socialNetworks, function(index, value) {
        $("<li class=\""+value.cssclass+"\" title=\""+value.title+"\"></li>").appendTo(container.find("ul")).on("click", function() {
          window.open(value.shareurl, '', 'menubar=no,toolbar=no,resizeable=no,scrollbars=no,height='+value.height+',width='+value.width+',top='+((screen.height/2)-(value.height/2))+',left='+((screen.width/2)-(value.width/2)));
        });
    });
  }
})(jQuery);
