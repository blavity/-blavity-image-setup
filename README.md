image-setup
```javascript
// w = width
// h = height
// c = crop
// ar = aspect ratio
// g = gravity Determines which part of the image to keep when any part of the image is cropped. For overlays, this setting determines where to place the overlay.
// z = zoom Control how much of the original image surrounding the face to keep when using either the 'crop' or 'thumb' cropping modes with face detection (Default: 1.0).
// x = Horizontal position for custom-coordinates based cropping, overlay placement and certain region related effects.
// y = Vertical position for custom-coordinates based cropping and overlay placement.
// q = Control the JPEG, WebP, GIF, JPEG XR and JPEG 2000 compression quality. 1 is the lowest quality and 100 is the highest. Reducing the quality is a tradeoff between visual quality and file size.
// r = radius Round the specified corners of an image by specifying 1-4 pixel values as follows:
  // 1 value: All four corners are rounded equally according to the specified value.
  // 2 values: 1st value => top-left & bottom-right. 2nd value => top-right & bottom-left.
  // 3 values: 1st value => top-left. 2nd value => top-right & bottom-left. 3rd value => bottom-right.
  // 4 values: Each corner specified separately, in clockwise order, starting with top-left.
  //Or specify max to make the image a perfect circle or oval (ellipse).
// a = angle Rotate or flip an image by the given degrees or automatically according to its orientation or available meta-data. Multiple modes can be applied by concatenating their names with a dot.
```
