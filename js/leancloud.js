
!function() {
  let view = $('#postMessage')

  let model = {
    init: function() {
      let APP_ID = 'o3kd1RCCOB0O7IiHzDBQrSTa-gzGzoHsz';
      let APP_KEY = 'N7WqGHueQl0JFO2ygnVs2IWh';
      
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    fetch: function() {
      let query = new AV.Query('Message')
      return query.find()
    },
    save: function(name, content) {
      let Message = AV.Object.extend('Message')
      let message = new Message()
      return message.save({
        name: name,
        content: content
      })
    }
  }

  let controller = {
    view: null,
    $postMessageForm: null,
    $messageHistoryUl: null,
    model: null,
    init: function(view) {
      this.view = view
      this.model = model
      this.$postMessageForm = this.view.children('#messageForm')
      this.$messageHistoryUl = this.view.children('#messageHistory')
      this.model.init()
      this.bindEvent()
      this.loadMessage()
    },



    bindEvent: function() {
      this.$postMessageForm.on('submit', e => {
        e.preventDefault()
        this.postMessage()
      })
    },

    loadMessage: function() {
      model.fetch().then( (messages) => {
         // 成功获得实例
        let array = messages.map(item => item.attributes)
        array.forEach(item => {
          this.addMessage(item)
       })
      
      }, (error) => {
        // 异常处理
      })
    },

    addMessage: function(item) {
      let $li = $('<li></li>')
      $li.text(`${item.name}: ${item.content}`)
      this.$messageHistoryUl.append($li)
    },

    postMessage: function() {
        let name = this.$postMessageForm.children(`input[name="name"]`).val()
        console.log(name)
        let content = this.$postMessageForm.children(`input[name="content"]`).val()
        if(!name.match(/^[ ]*$/) && !content.match(/^[ ]*$/)) {
          model.save(name, content).then((object) => {
            this.addMessage(object.attributes)
            this.$postMessageForm.children(`input[name="name"]`).val('')
            this.$postMessageForm.children(`input[name="content"]`).val('')
          })
        }else {
          alert('please input name and content')
        }
    }
  }

  controller.init(view, model)
}()
