
!function() {
  let view = document.querySelector('.navList')

  let controller = Controller({
    init: function() {

    },
    bindEvent: function() {
      let view = this.view
      let liTags = view.querySelectorAll('ul>li')
      for(let i=0; i<liTags.length; i++) {
        liTags[i].onmouseenter = e => {
          let li = e.currentTarget
          this.active(li)
        }
        liTags[i].onmouseleave = e => {
          let li = e.currentTarget
          this.deactive(li)
        }
      }
    },
    active: function(li) {
      li.classList.add('active')
    },
    deactive: function(li) {
      li.classList.remove('active')
    }
  })

  controller.init(view)
}()
