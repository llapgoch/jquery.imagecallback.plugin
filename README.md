# jquery.imagecallback
- Calls a function when all images within a selector are loaded
- Always assign events before applying the plugin to the selector, or the callback may never happen!

- Usage:

```javascript
$('.selector').on('imageload-complete', function(){
  // Do things when all images have loaded
}).imagecallback();
```
