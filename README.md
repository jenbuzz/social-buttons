Installation
==============

```
bower install social-buttons-mix
```

social-buttons
==============

```
<link rel="stylesheet" href="social-buttons.css">
```
```
<div id="social" class="social"></div>
```
```
<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script src="social-buttons.js"></script>
<script>
  $(function() {
    $("#social").socialButtons({
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
    });
  })
</script>
```
