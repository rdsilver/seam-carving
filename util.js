function createArray(length) {
  var arr = new Array(length || 0),
      i = length;

  if (arguments.length > 1) {
      var args = Array.prototype.slice.call(arguments, 1);
      while(i--) arr[length-1 - i] = createArray.apply(this, args);
  }

  return arr;
}

function removeSeam(seam, pixels) {
  for (let i = 0; i < seam.length; i+=4) {
      let dropIndex = seam[i];
      let nextDrop = seam[i + 4];
      pixels.copyWithin(dropIndex - i, dropIndex+4, nextDrop);
  }

  return pixels.subarray(0, pixels.length - seam.length);
}

function rotatePixelArray(pixelArray,w,h) {
  var newPixelArray = new Uint8ClampedArray(pixelArray.length);
  var counter = 0;

  for (var x=0;x<w;x++) {
    for(var y=0;y<h;y++) {
      index = (x+y*w)*4;
      newPixelArray[counter++] = pixelArray[index];
      newPixelArray[counter++] = pixelArray[index+1];
      newPixelArray[counter++] = pixelArray[index+2];
      newPixelArray[counter++] = pixelArray[index+3];
    }
  }

  return newPixelArray;
}