const burger = document.querySelector('.burger');
const menulist = document.querySelectorAll('.menu__list-item');
const menu = document.querySelector('.menu__list')



burger.addEventListener('click',()=>{
  menulist.forEach(item=>{
    item.classList.toggle('open__close')
  })
})

burger.addEventListener('click',()=>{
  menu.classList.toggle('open__close')
})