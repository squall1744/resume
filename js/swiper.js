!function() {
  let view = document.querySelector('.works')

  let controller = {
    view: view,
    swiper: null,
    swiperOptions: {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    
    init: function(view) {
      this.view = view
      this.bindEvent()
    },
    bindEvent: function() {
      let view = this.view
      this.swiperInit()
    },
    swiperInit: function() {
      this.swiper = new Swiper(view.querySelector('.swiper-container'), this.swiperOptions)
    }
  }

  controller.init(view)
}()
