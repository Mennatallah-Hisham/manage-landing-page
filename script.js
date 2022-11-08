
const html =document.querySelector("html");
const navBtn = document.querySelector(".btn-main-nav");
const iconClose = document.querySelector(".icon-close");
const iconOpen = document.querySelector(".icon-open");
const header = document.querySelector(".header");
const testimonialsContianer =document.querySelector(".testimonials");
const allTestimonials=document.querySelectorAll(".testimonial-card");
const dotsContainer=document.querySelector(".dots");

const maxSlide=allTestimonials.length;



/********** mobile navigation **********/

navBtn.addEventListener("click",()=>{
    html.classList.toggle("hide-overflowY");
    header.classList.toggle("open-nav");
iconClose.classList.toggle("hide");
iconOpen.classList.toggle("hide");
});







/********** testimonial slider **********/


const createDots=function(){

    allTestimonials.forEach((_,i)=>{

        dotsContainer.insertAdjacentHTML("beforeend",`<button class="dots_dot" data-slide="${i}"></button>`);
    })
}

const initSlider=function(){
    allTestimonials.forEach((card,i)=>card.style.transform=`translateX(${(i*100)}%)`);
    createDots();
    activateDot(0);
}




const activateDot=function(slide){
    dots=  document.querySelectorAll(".dots_dot");
    dots.forEach((dot)=>dot.classList.remove("dots_dot_active"));
    document.querySelector(`.dots_dot[data-slide="${slide}"]`).classList.add("dots_dot_active");

}
const goToSlide=function(slide){

    allTestimonials.forEach((card,i)=>card.style.transform=`translateX(${(i-slide)*100}%)`);
              

}

initSlider();





dotsContainer.addEventListener("click",function(e){

    console.log(e.target);
    if(e.target.classList.contains("dots_dot")){
      const slide=e.target.getAttribute("data-slide");
        activateDot(slide);
        goToSlide(slide);

      
    }
})

