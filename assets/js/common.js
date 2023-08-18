
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

$(()=>{
    _layout.init();
    _front.init();
    _aside.init();
})

// gnb-btn
// const _aside = {
//     init: function(){
//         $(document).find(".btn__aside-open").on("click", function(){
//             _aside.open();
//         })
//         $(document).find(".btn__aside-close").on("click", function(){
//             _aside.close();
//         })
//     },
//     open: function(){
//         const elem = $(document).find(".aside__wrap");
//         const btn_open = $(document).find(".btn__aside-open");
//         elem.addClass("open");
//         elem.removeAttr("aria-hidden");
//         btn_open.attr("aria-expanded", true);
        
        
//         $(".btn__aside-open").attr({"aria-hidden":true, "tabindex":-1});
//         $(document).find(".aside__wrap h2").attr("tabindex", 0).focus();

//         _front.noScroll(0);
//         if( $(".wrap").hasClass("index") ) myFullpage.setAllowScrolling(false);
//     },
//     close: function(){

//         $(document).find(".btn__aside-open").attr("tabindex", 0).focus();
//         $(".btn__aside-open").removeAttr("aria-hidden tabindex");

//         const elem = $(document).find(".aside__wrap");
//         const btn_open = $(document).find(".btn__aside-open");
//         elem.removeClass("open");
//         elem.attr("aria-hidden", true);
//         btn_open.attr("aria-expanded", false);

//         $(".wrap").removeAttr("aria-hidden tabindex");
        
//         _front.noScroll(1);
//         if( $(".wrap").hasClass("index") ) myFullpage.setAllowScrolling(true);
//     }
// }

// const _layout = {
//     init:function(){
//         _layout.header();
//     },
//     header: function(){
//         const html = `
//             <div class="header_inner">
//                 <h1 class="logo">
//                     <a href="#"><img src="../assets/img/logo.svg" alt="채팅 플러스 로고 이미지"></a>
//                 </h1>
//                 <button type="button" class="btn__aside-open" aria-expanded="false" aria-label="메뉴"><span></span></button>
//             </div> 
//             <div class="aside__wrap" aria-hidden="true">
//                 <div class="aside__ttl"><h2><span class="hidden">메뉴</span></h2></div>
//                 <div class="aside__inner">
//                     <div class="aside__menu">
//                         <ul>
//                             <li><a href="#">주요서비스</a></li>
//                             <li><a href="#">배터리 인증서</a></li>
//                             <li><a href="#">이용안내</a></li>
//                             <li><a href="#">제휴문의</a></li>
//                             <li><a href="#">공지사항</a></li>
//                             <li><a href="#">FAQ</a></li>
//                             <li><a href="#">EV Life</a></li>
//                             <li><a href="#">이벤트</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <button type="button" class="btn__aside-close" aria-label="닫기"></button>
//             </div>
//         `;
//         $(document).find("header#header").html(html);

//         $(document).on("click", ".header__app-btn[role='combobox']", function(e){
//             const parents = $(this).parents(".header__app");
//             if( parents.hasClass("on") ){
//                 parents.removeClass("on");
//                 $(this).attr("aria-expanded", false);
//             } else {
//                 parents.addClass("on");
//                 $(this).attr("aria-expanded", true);
//             }
//         })

//     }
// }

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


// faq
var accordion = {
    click: function(target) {
      var $target = $(target);
      $target.on('click', function() {
  
        if ($(this).hasClass('on')) {
          slideUp($target);
        } else {
          slideUp($target);
          $(this).addClass('on').next().slideDown();
        }
  
        function slideUp($target) {
          $target.removeClass('on').next().slideUp();
        }
  
      });
    }
};
accordion.click('.acc_wrap > .acc_tit');
