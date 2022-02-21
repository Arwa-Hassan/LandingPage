/*Adding the sections to the list items*/
const sections = document.querySelectorAll('section');
  let num = document.querySelectorAll('section').length ;
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

/*Adding your-active-class to the viewed section*/
document.addEventListener('scroll' , function(){
   for(let z of sections){
    let dimensions = z.getBoundingClientRect();
    let isInViewport = dimensions.top >= 0 &&
            dimensions.left >= 0 &&
            dimensions.right <=  (window.innerWidth || document.documentElement.clientWidth)  &&
           dimensions.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
           dimensions.bottom >= (window.innerHeight || document.documentElement.clientHeight)
            ;
    if( isInViewport == true ){
          z.classList.add('your-active-class');
      /*Highlighting the section in view*/
          z.style.cssText ='box-shadow: 10px 10px 0px #990000; top:-5px ; left:-5px';
    }else{
          z.classList.remove('your-active-class');
          z.style.cssText =  'box-shadow: none; top:0 ; left:0';
    }
};
});
