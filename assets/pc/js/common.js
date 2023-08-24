
// header
window.addEventListener('load', function(){
  fetch('./gnb.html')
  .then(function(res){                
    res.text().then(function(html){
      const header = document.querySelector('header');
      header.innerHTML = html;

      // mo header hamburger
      const hamburgerBtn = document.querySelector('.btn_gnb');
      const closeBtn = document.querySelector('.btn_close');
      const moMenu = document.querySelector('.dim_layer');
      const backBtn = document.querySelector('.btn_back_wrap');

      hamburgerBtn.addEventListener('click', () => {
        moMenu.style.display = "block";
        hamburgerBtn.style.display = "none";
        backBtn.style.display = "none";
      })
      closeBtn.addEventListener('click', () => {
        moMenu.style.display = "none";
        hamburgerBtn.style.display = "block";
        backBtn.style.display = "block";
      })            
    })
  })
  .catch(error => console.log(error))    
});

// footer
window.addEventListener('load', function(){
    fetch('./footer.html')
    .then(function(res){                
        res.text().then(function(html){
            const footer = document.querySelector('footer');
            footer.innerHTML = html;                                
        })
    })
    .catch(error => console.log(error))                     
});

// tab
const tabList = document.querySelectorAll('.tab_wrap ul li');
const contents = document.querySelectorAll('.tab_cont')
let activeCont = ''; // 현재 활성화 된 컨텐츠

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.tab_btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
};


// faq-accordion
function bindingAccordionEvent(wrap){
  let areaArr = document.querySelectorAll(wrap);
  
  areaArr.forEach(function(area){
    let btn = area.querySelector('.acc_tit');
    
    btn.addEventListener('click', function(){
      let target = this;
      let targetCon = this.closest('.acc_wrap').querySelector('.acc_cont');
      let titArr = document.querySelectorAll('.acc_tit');
      let contArr = document.querySelectorAll('.acc_cont');

      if(target.classList.contains('active')){
        target.classList.remove('active');
        targetCon.classList.remove('active');
      } else{
        for(i=0; i < titArr.length; i++){
          titArr[i].classList.remove('active');
          contArr[i].classList.remove('active');
        }
        target.classList.add('active');
        targetCon.classList.add('active');
        
      }
    })
  });
}
bindingAccordionEvent('.acc_wrap');

// table width
let widthNone = document.querySelectorAll('.none');
let widthTwice = document.querySelectorAll('.n_txt');

for(i=0; i < widthNone.length; i++){
  widthNone[i].setAttribute('colspan', '0');
  widthNone[i].style.display = "none";
  widthTwice[i].setAttribute('colspan', '2');
}