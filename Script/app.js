/*Adding the sections to the list items*/
const sections = document.querySelectorAll('section');
  let num = sections.length ;
document.addEventListener('DOMContentLoaded' , function(){

  const Ulist = document.querySelector('#navbar__list');

  for(var i=0 ; i<num ; i++){
       let item  = document.createElement('li');
       let anchor = document.createElement('a');
       let refrence = '#' + sections[i].id ;
      anchor.textContent = sections[i].dataset.nav ;
      anchor.setAttribute('href' , refrence );
      Ulist.appendChild(item);
      item.appendChild(anchor);
/*scrolling to the selected section*/
      anchor.addEventListener('click' , function(e){
        e.preventDefault();
        document.querySelector(refrence).scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    };
});
/*Adding your-active-class to the viewed section and highlighting the viewed section*/
function isInView(el){
  const top = el.getBoundingClientRect().top;
  return top > 0 && top <= 300;
}
window.addEventListener("scroll", function(){
  sections.forEach(section =>{
     const anchor = document.querySelector(`a[href="#${section.id}"]`)
    if(isInView(section)){
     section.classList.add("your-active-class");
    anchor.classList.add("active");
    section.style.cssText ='box-shadow: 10px 10px 0px #990000; top:-5px ; left:-5px';
   }else{
    section.classList.remove("your-active-class");
    anchor.classList.remove("active");
    section.style.cssText =  'box-shadow: none; top:0 ; left:0';
 }
})
});
