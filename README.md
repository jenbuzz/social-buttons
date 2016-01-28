social-buttons v0.6.6
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
<script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
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
