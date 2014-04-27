Easygallery
===========
*Current version: 1.0.0*

A simple css/javascript plugin to make your HTML gallery rock.
Built on [swipebox](http://github.com/brutaldesign/swipebox)

#####Easygallery depends on jQuery. Download the latest version here: [http://jquery.com/download](http://jquery.com/download)

#How to use

1) Download [Easygallery](https://github.com/fonorobert/easygallery/archive/master.zip)

2) Set up your folders

Example:
```
    -project
    --css
    --js
    --img
    ---thumbs
    --index.html
```
	
3) Set up your markup

Example:
```html
<a href="img/pic1.jpg" class="swipebox" title="Picture 1">
	<div class="thumb" data-src="img/thumbs/pic1.jpg" id="thumbid1" rel="gallery-1"></div>
</a>

<a href="img/pic2.jpg" class="swipebox" title="Picture 2">
	<div class="thumb" data-src="img/thumbs/pic2.jpg" id="thumbid2" rel="gallery-1"></div>
</a>

etc.
```

4) Link all the needed files
- jQuery
```html
<script type="application/javascript" src="js/jquery.js"></script>
```

- Easygallery
```html
<link rel="stylesheet" tyep="text/css" href="css/easygallery.min.css">

<script type="application/javascript" src="js/easygallery.min.js"></script>
```
**Important:** Put your ```<link>``` elements in the ```<head>``` and your ```<script>``` elements right before ```</body>```.
Also, put ```<script>``` of jQuery before any other ```<script>```!
