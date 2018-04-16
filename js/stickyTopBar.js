!function() {
  let view = document.querySelector('#topNavBar')

  let controller = Controller({
    init: function(view){
    },
    bindEvent: function() {
      let view = this.view
      window.addEventListener('scroll', () => {
        if(window.scrollY >0) {
          this.active()
        }else {
          this.deactive()
        }
      })
    },
    active: function() {
      this.view.classList.add('sticky')
    },
    deactive: function() {
      this.view.classList.remove('sticky')
    }
  })

  controller.init(view)
}()
