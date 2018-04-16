window.Controller = function(options) {
  let init = options.init
  let bindEvent = options.bindEvent
  let object = {
    view: null,
    model: null,
    init: function(view, model) {
      this.view = view
      if(model !== undefined) {
        this.model = model
        this.model.init()
      }
      init.call(this, view, model)
      bindEvent.call(this)
    }
  }
  for(let key in options) {
    if(key !== 'init') {
      object[key] = options[key]
    }
  }
  return object
}