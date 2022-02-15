const typed = new Typed('.typed', {
  strings : [
    '<i class="hi" id="hi"> Hola, mi nombre es...</i>'
  ],
  typeSpeed: 75,
  startDelay:1000,
  backSpeed: 75,
  smartBackspace: true,
  shuffle: false,
  backDelay:1500,
  loop: false,
  loppCount: true,
  showCursor:false,
  cursorChar: '.',
  contentType:'html',
});


const profession= new Typed('.profession', {
  strings : [
    '<i class="prof"> ANALISTA DE SISTEMAS  </i>',
    '<i class="prof"> PROGRAMADOR FRONTED </i>',
    '<i class="prof"> PROGRAMADOR BACKEND</i>',
    '<i class="prof"> PROGRAMADOR FULLSTACK</i>',
  ],
  typeSpeed:60,
  startDelay:3000,
  backSpeed: 50,
  smartBackspace: true,
  shuffle: false,
  backDelay:1500,
  loop: true,
  loppCount: true,
  showCursor:true,
  
  cursorChar: '|',
  contentType:'html',
});

/* Disable cut copy past */

$('body').bind('cut copy paste', function(e){
  e.preventDefault();
})

/*Language*/

const select = document.querySelector('#select');
const options = document.querySelector('#options');
const contentSelect = document.querySelector('#select .content-select');
const hiddenInput = document.querySelector('#inputSelect');




document.querySelectorAll("#options > .option").forEach((option) => {
  option.addEventListener('click', (e)=>{
    // e.preventDefault();
    contentSelect.innerHTML = e.currentTarget.innerHTML;
    select.classList.toggle('active');
    options.classList.toggle('active');
    hiddenInput.value = e.currentTarget.querySelector('.img');
    // console.log(e.currentTarget.querySelector('.img'));
  })
});
select.addEventListener('click', ()=>{
  select.classList.toggle('active');
  options.classList.toggle('active');
  
})


