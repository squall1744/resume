
!function() {
  let view = View('#postMessage')

  let model = Model({resourceName: 'Message'})

  let controller = Controller({
    init: function(view, model) {
      $postMessageForm: null
      $messageHistoryUl: null
      this.$postMessageForm = this.view.children('#messageForm')
      this.$messageHistoryUl = this.view.children('#messageHistory')
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
        let content = this.$postMessageForm.children(`input[name="content"]`).val()
        if(!name.match(/^[ ]*$/) && !content.match(/^[ ]*$/)) {
          model.save({name: name, content: content}).then((object) => {
            this.addMessage(object.attributes)
            this.$postMessageForm.children(`input[name="name"]`).val('')
            this.$postMessageForm.children(`input[name="content"]`).val('')
          })
        }else {
          alert('please input name and content')
        }
    }
  })

  controller.init(view, model)
}()
