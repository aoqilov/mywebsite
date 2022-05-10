let menuBtn = document.querySelector('#menubtn')
let header = document.querySelector('.header');

menuBtn.addEventListener('click',()=>{
  header.classList.toggle('activemenu')
  menuBtn.classList.toggle('fa-close')
})
window.onscroll =()=>{
  header.classList.remove('activemenu')
  menuBtn.classList.remove('fa-close')
}

let cursor1 = document.querySelector('.cursor1')
let cursor2 = document.querySelector('.cursor2')

window.onmousemove= (e)=>{
  cursor1.style.top = e.pageY + 'px'
  cursor1.style.left = e.pageX + 'px'
  cursor2.style.top = e.pageY + 'px'
  cursor2.style.left = e.pageX + 'px'
}
document.querySelectorAll('a').forEach(elem=>{
  elem.onmouseenter=()=>{
    cursor1.classList.add('active')
    cursor2.classList.add('active')
  }
  elem.onmouseleave= ()=>{
    cursor1.classList.remove('active')
    cursor2.classList.remove('active')
  }
})