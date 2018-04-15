window.Model = function(options) {
  let resourceName = options.resourceName
  return {
    init: function() {
      let APP_ID = 'o3kd1RCCOB0O7IiHzDBQrSTa-gzGzoHsz';
      let APP_KEY = 'N7WqGHueQl0JFO2ygnVs2IWh';
      
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    fetch: function(resourceName) {
      let query = new AV.Query(resourceName)
      return query.find()      
    },
    save: function(object) {
      let Instance = AV.Object.extend(resourceName)
      let instance = new Instance()
      return instance.save(object)
    }
  }
}




