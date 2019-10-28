var blavityImageSetup = require('.');
var test = require('tape');

test('parseImage', function(t) {
  const url1 = 'https://res.cloudinary.com/blavity/image/upload/w_640,h_250,c_fill,ar_16:9,g_center,z_1.0,x_0,y_0,q_100/v1571756481/f9f98ydergzgdb5odvkl';
  const actual1 = blavityImageSetup.parseImage(url1);
  const expected1 = { w: '640', h : '250', c: 'fill', ar: '16:9', g:'center', z: '1.0', x: '0', y: '0', q: '100'};
  t.notDeepEqual(actual1, expected1, 'parsing full url should not work');

  const url2 = 'w_640,h_250,c_fill,ar_16:9,g_center,z_1.0,x_0,y_0,q_100';
  const actual2 = blavityImageSetup.parseImage(url2);
  const expected2 = { w: '640', h : '250', c: 'fill', ar: '16:9', g:'center', z: '1.0', x: '0', y: '0', q: '100'};
  t.deepEqual(actual2, expected2, 'should parse image params into object with param keys');

  t.end();
});

test('removeEmpty', function(t) {
  const origin = {x: 1, y: null};
  const actual = blavityImageSetup.removeEmpty(origin);
  const expected = {x:1};
  t.deepEqual(actual, expected, 'should remove all empty, null, undefined properties');

  t.end();
});

test('stringifyImageParams', function(t) {
  const params = {
    w: 640,
    h: 250,
    c: 'fill',
    ar: '16:9',
    g: 'center'
  };
  const actual = blavityImageSetup.stringifyImageParams(params);
  const expected = 'w_640,h_250,c_fill,ar_16:9,g_center';
  t.equal(actual, expected, 'should convert image properties into image params string');

  t.end();
});

test('setUpImage', function(t) {
  const params1 = {
    imgSlug: 'v1571756481/f9f98ydergzgdb5odvkl',
    mode: 'enhance',
    options: {
      h: '250'
    }
  };
  const actual1 = blavityImageSetup.setUpImage(params1);
  const expected1 = 'https://res.cloudinary.com/blavity/image/upload/w_640,h_250,c_fill,ar_16:9,g_center,z_1.0,x_0,y_0,q_100/v1571756481/f9f98ydergzgdb5odvkl';
  t.equal(actual1, expected1, 'should setup image url from properties');

  const params2 = {
    imgSlug: 'v1571756481/f9f98ydergzgdb5odvkl',
    mode: 'custom',
    options: {
      h : '250',
      w:'300',
      c:'crop',
      g:'north_east'
    }
  };
  const actual2 = blavityImageSetup.setUpImage(params2);
  const expected2 = 'https://res.cloudinary.com/blavity/image/upload/h_250,w_300,c_crop,g_north_east/v1571756481/f9f98ydergzgdb5odvkl';
  t.equal(actual2, expected2, 'should setup image url from properties');

  t.end();
});
