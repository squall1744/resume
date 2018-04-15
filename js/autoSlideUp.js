!function() {
  let mark = document.querySelectorAll('[mark]')
  for(let i=0; i<mark.length; i++) {
    mark[i].classList.add('offset')
  }
  let index = 0
  setTimeout(() => {
    closest()
  }, 2500)
  
  window.addEventListener('scroll', () => {
    closest()
  })
  
  function closest() {
    for(let i=0; i<mark.length; i++) {
      if(Math.abs(mark[i].offsetTop - window.scrollY) <= Math.abs(mark[index].offsetTop - window.scrollY)) {
        index = i
      }
    }
    mark[index].classList.remove('offset')
  
    let li = document.querySelector(`a[href="#${mark[index].id}"]`).parentNode
    let brotherLi = li.parentNode.children
    for(i=0; i<brotherLi.length; i++) {
      brotherLi[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  } 
}()
