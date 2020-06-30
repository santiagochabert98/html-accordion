function preloadImage(target) {
  target.src = target.dataset.src; //Al ser any no tengo idea que puede ser
}


// create config object: rootMargin and threshold
// are two properties exposed by the interface
const config = {
  threshold: 0
};

// register the config object with an instance
// of intersectionObserver
let observer = new IntersectionObserver(function(entries, self) {
// iterate over each entry
entries.forEach(entry => {
  // process just the images that are intersecting.
  // isIntersecting is a property exposed by the interface
  if(entry.isIntersecting) {
    // custom function that copies the path to the img
    // from data-src to src
    preloadImage(entry.target);
    // the image is now in place, stop watching
    self.unobserve(entry.target);
  }
});
}, config);   

const imgs = document.querySelectorAll('[data-src]');
imgs.forEach(img => {
  observer.observe(img);
});