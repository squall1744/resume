!function() {
  let view = View('.works')

  let controller = Controller({
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
    init: function() {
    },
    bindEvent: function() {
      let view = this.view
      this.swiperInit()
    },
    swiperInit: function() {
      this.swiper = new Swiper(view.children('.swiper-container'), this.swiperOptions)
    }   
  })

  controller.init(view)
}()
