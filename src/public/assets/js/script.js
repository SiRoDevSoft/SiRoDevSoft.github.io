const typed = new Typed('.typed', {
  strings : [
    '<i class="hi" id="hi"> Hi, my name is</i>'
  ],
  typeSpeed: 50,
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
    '<i class="prof"> SISTEMS ANALIST  </i>',
    '<i class="prof"> FRONTED PROGRAMMER </i>',
    '<i class="prof"> BACKEND PROGRAMMER</i>',
    '<i class="prof"> FULLSTACK DEVELOPER</i>',
  ],
  typeSpeed:50,
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

function inSpanish(){
  document.getElementById('#hi').innerHTML = "hola";
  document.getElementById('#profesionabout').innerHTML = "hola";
}
