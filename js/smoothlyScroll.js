!function() {
  let view = document.querySelector('.navList')

  let controller = {
    view: null,
    aTags: null,
    init: function(view) {
      this.view = view
      this.aTags = this.view.querySelectorAll('ul>li>a')
      this.initAnimation()
      this.bindEvent()
    },
    initAnimation: function() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      } 
      requestAnimationFrame(animate);
    },
    scrollToEvelment: function(href) {
      let current = window.scrollY
      let top = href.offsetTop - 160
      let time = Math.abs((top - current)/100*300)
      if(time > 1000){time = 1000}
  
      let coords = { x: 0, y: current }; // Start at (0, 0)
      let tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
      .to({ x: 0, y: top }, time) // Move to (300, 200) in 1 second.
      .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
      .onUpdate(function() { // Called after tween.js updates 'coords'.
          // Move 'box' to the position described by 'coords' with a CSS translation.
          window.scrollTo(0, coords.y);
      })
      .start(); // Start the tween immediately.
    },
    bindEvent: function() {
      let view = this.view

      for(i=0; i<this.aTags.length; i++) {
        this.aTags[i].onclick = e => {
          e.preventDefault()
          let a = e.currentTarget
          let href = document.querySelector(a.getAttribute('href'))
          this.scrollToEvelment(href)
        }
      }
    }
  }

  controller.init(view)
}()
