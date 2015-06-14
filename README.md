social-buttons v0.6.5
==============

Installation
==============

```
bower install social-buttons-mix
```

Minify JavaScript and CSS using grunt:
```
grunt minify
```

social-buttons
==============
```
$("#social").socialButtons("share", {}, {}); // mode, options, socialNetworks
```

social-buttons-fa (Font-Awesome Edition)
==============
```
$("#social").socialButtonsFa("share", {}, {}); // mode, options, socialNetworks
```

social-buttons-bootstrap (bootstrap-social Edition)
==============
https://github.com/lipis/bootstrap-social

```
$("#social").socialButtonsBootstrap("share", {}, {}); // mode, options, socialNetworks
```

social-buttons-share
==============

```
<link rel="stylesheet" href="social-buttons-share.css">
```
```
<div id="social" class="social"></div>
```
```
<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script src="social-buttons-share.js"></script>
<script>
  $(function() {
    $("#social").socialButtonsShare({
      socialNetworks: ["facebook", "twitter", "googleplus"],
      url: "http://juhuu",
      text: "hallo world",
      sharelabel: true,
      sharelabelText: "SHARE",
      verticalAlign: false
    }, {
      facebook: {
        title: "Share this awesome site on FB"
      },
      twitter: {
        title: "Share this awesome site on Twitter"
      },
      googleplus: {
        title: "Share this awesome site on G+"
      }
    });
  })
</script>
```

social-buttons-wide
==============

```
<link rel="stylesheet" href="social-buttons-wide.css">
```
```
<div style="width: 400px">
  <img src="test-image.jpg" />
  <div id="social" class="social"></div>
</div>
```
```
<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script src="social-buttons-wide.js"></script>
<script>
  $(function() {
    $("#social").socialButtonsWide();
  })
</script>
```

social-buttons-pages
==============

```
<link rel="stylesheet" href="social-buttons-pages.css">
```
```
<div id="social" class="social"></div>
```
```
<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script src="social-buttons-pages.js"></script>
<script>
  $(function() {
    $("#social").socialButtonsPages({
      facebook: {
        pageurl: "https://www.facebook.com/Engineering"
      },
      twitter: {
        pageurl: "https://twitter.com/twitter"
      },
      googleplus: {
        pageurl: "https://plus.google.com/+GooglePlusDevelopers"
      }
    }, {
      target: "_self"
    });
  })
</script>
```
