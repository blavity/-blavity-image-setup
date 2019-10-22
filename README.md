# Blavity Image Setup
```bash
  yarn add blavity/image-setup

              or

  npm install blavity/image-setup
```


### Run test in browser by running `yarn visual-test`
### Navigate to localhost:3001/
### You should see 2 images in the window
### Update this image by updating the environment variable in you .env file


```javascript

/*
contains 4 functions

    parseImage

    removeEmpty

    stringifyImageParams

    setUpImage

*/

const {parseImage} = require('image-setup')

parseImage('https://res.cloudinary.com/blavity/image/upload/w_640,h_250,c_fill,ar_16:9,g_center,z_1.0,x_0,y_0,q_100/v1571756481/f9f98ydergzgdb5odvkl')

// returns object { w: '640', h : '250', c: 'fill', ar: '16:9', g:'center', z: '1.0', x: '0', y: '0', q: '100'}

const {removeEmpty} = require('image-setup')

// removes any key from an object that is null or undefined

removeEmpty({x: 1 y: null})

// returns object {x:1}

const {stringifyImageParams} = require('image-setup')

stringifyImageParams({
  w: 640,
  h: 250,
  c: 'fill',
  ar: '16:9',
  g: 'center'
})

// returns => string "w_640,h_250,c_fill,ar_16:9,g_center"

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

// see cloudinary docs https://cloudinary.com/documentation/image_transformation_reference
const {setUpImage} = require('image-setup')

setUpImage({
  imgSlug: 'v1571756481/f9f98ydergzgdb5odvkl',
  mode : 'enhance',
  options: {
  h : '250'
}})

// => returns string https://res.cloudinary.com/blavity/image/upload/w_640,h_250,c_fill,ar_16:9,g_center,z_1.0,x_0,y_0,q_100/v1571756481/f9f98ydergzgdb5odvkl"

setUpImage({imgSlug: 'v1571756481/f9f98ydergzgdb5odvkl', mode : 'custom', options: {
  h : '250',
  w:'300',
  c:'crop',
  g:'north_east'
}})

// => returns string"https://res.cloudinary.com/blavity/image/upload/h_250,w_300,c_crop,g_north_east/v1571756481/f9f98ydergzgdb5odvkl"

```
