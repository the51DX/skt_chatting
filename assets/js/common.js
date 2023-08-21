
// header
window.addEventListener('load', function(){
    fetch('./gnb.html')
    .then(function(res){                
        res.text().then(function(html){
            const footer = document.querySelector('header');
            footer.innerHTML = html;                                
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
    let hasGroup = area.dataset['group'] !== undefined ? true : false;
    let btn = area.querySelector('.acc_tit');
    
    btn.addEventListener('click', function(){
      if(hasGroup === true){
  
        groupArr.forEach(function(group){
           let content = group.querySelector('.acc_tit');
          content.classList.remove('active');
        });
        thisContent.classList.add('active');
      }else{
        let content = area.querySelector('.acc_tit');
        content.classList.toggle('active');
      }
    })
    btn.addEventListener('click', function(){
      if(hasGroup === true){
        let name = area.dataset['group'];
        let groupArr = document.querySelectorAll(wrap + '[data-group="'+ name +'"]');
        let thisContent = area.querySelector('.acc_cont');
        
        groupArr.forEach(function(group){
           let content = group.querySelector('.acc_cont');
          content.classList.remove('active');
        });
        thisContent.classList.add('active');
      }else{
        let content = area.querySelector('.acc_cont');
        content.classList.toggle('active');
      }
    });
  });
}
bindingAccordionEvent('.acc_wrap');
