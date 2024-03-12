
document.getElementById('main-action-button').onclick = function(e){
  e.preventDefault();
  document.getElementById('products').scrollIntoView({behavior: 'smooth'});
}

// const mainBtn = document.querySelector('.main-action-button');


// mainBtn.addEventListener('click', ()=>{
//   document.getElementById('products').scrollIntoView({behavior: 'smooth'})
// })


