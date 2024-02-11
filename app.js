const container = document.querySelector('.container')
const open = document.querySelector('#open')
const close = document.querySelector('#close')
const modal = document.querySelector('.modal')
const password = document.querySelector('input[type ="password"]')
const checkboxInput = document.querySelector('input[type ="checkbox"]')


open.addEventListener('click',()=>{
    open.classList.add('hide')
    container.style.backgroundColor = '#2b026066';
    modal.classList.remove('hide')
})

close.addEventListener('click',()=>{
    container.style.backgroundColor = 'transparent';
    modal.classList.add('hide')
    open.classList.remove('hide')

})

checkboxInput.addEventListener('change',()=> {
const show = document.querySelector('#show')
    
    if(checkboxInput.checked && password.value !== ''){
        password.type = 'text'
        show.textContent = 'hide password'
    }else{
        password.type = 'password'
        show.textContent = 'show password ?'
    }
  if(password.value === ''){
    checkboxInput.checked = false
  }

})
