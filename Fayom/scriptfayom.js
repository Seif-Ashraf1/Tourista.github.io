let availablekeywords =[
    'HTML',
    'CSS',
    'Web design tutorials',
    'Javascript',
    'Where to learn coding online',
    'Where to create a Website',
];
const resultsBox =document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
inputBox.onkeyup = function(){

    let result=[];
    let input = inputBox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
          return  keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML='';
    }
}
function display(result){
    const content =result.map((list)=>{
        return "<li onclick=selectInput(this)>" +list +"</li>"
    });
    resultsBox.innerHTML = "<ul>" + content.join('')+ "</ul>";
}

function selectInput(list){
    inputBox.value =list.innerHTML;
    resultsBox.innerHTML = '';
}

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

btnRight.addEventListener("click",() =>{
    tabMenu.scrollLeft += 150;
    setTimeout(() => IconVisibility(), 50);
});
btnLeft.addEventListener("click",() =>{
    tabMenu.scrollLeft -= 150;
    setTimeout(() => IconVisibility(), 50);
});
window.onload = function (){
    btnRight.stylefayom.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >=window.innerWidth ? "block" :"none";
    btnLeft.stylefayom.display = tabMenu.scrollWidth >= window.innerWidth ?"" : "none";
}
window.onresize = function (){
    btnRight.stylefayom.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >=window.innerWidth ? "block" :"none";
    btnLeft.stylefayom.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");
const tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}
tabBtns.forEach((tabBtn,i) => {
    tabBtn.addEventListener("click",() => {
        tab_Nav(i);
    });
})


z