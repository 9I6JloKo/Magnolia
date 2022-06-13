let d = 1
window.addEventListener(`load`, e => {
  e.preventDefault();
  const screenWidth = window.outerWidth;
  const screenHeight = window.outerHeight;
  let navigation = document.getElementById('navigation_header_for_js');
  let widget = document.getElementsByClassName('widget');
  if(screenWidth < 1449) {
    navigation.innerHTML = `<form class="header_form header_form_mobile"> 
    <input type="text" class="search" placeholder="Поиск">
    <input type="image" src="images/free-png.ru-44.png" value="Search">
</form><img id = "nav_mobile" src="images/menu.png" style="position:absolute;right:10px;cursor:pointer">
<p id="info_header_2" class="info_header">Пн-Пт: 10:00-17:00 │ +37254847523              </p>`;
document.getElementById('nav_mobile').addEventListener('click', e =>{
      if(!widget[0].classList.contains('widget-parameter')){
          widget[0].style.display = 'block';
          widget[0].classList.add('widget-parameter');
      }else{
        widget[0].style.display = 'none';
        widget[0].classList.remove('widget-parameter');
      }
  });
  }
}, false);
window.addEventListener(`resize`, e => {
  e.preventDefault();
  const screenWidth = window.outerWidth;
  const screenHeight = window.outerHeight;
  let navigation = document.getElementById('navigation_header_for_js');
  let widget = document.getElementsByClassName('widget');
  if(screenWidth < 1449) {
    d = 0
    navigation.innerHTML = `<form class="header_form header_form_mobile"> 
    <input type="text" class="search" placeholder="Поиск">
    <input type="image" src="images/free-png.ru-44.png" value="Search">
</form><img id = "nav_mobile" src="images/menu.png" style="position:absolute;right:10px;cursor:pointer">
<p id="info_header_2" class="info_header">Пн-Пт: 10:00-17:00 │ +37254847523              </p>`;
document.getElementById('nav_mobile').addEventListener('click', e =>{
      if(!widget[0].classList.contains('widget-parameter')){
          widget[0].style.right = widget[0].outerWidth + "px";
          widget[0].style.right = widget[0].outerWidth + "px";
          widget[0].style.display = 'block';
          widget[0].classList.add('widget-parameter');
      }else{
        widget[0].style.display = 'none';
        widget[0].classList.remove('widget-parameter');
      }
  });
  }else if(screenWidth > 1449 && d === 0){
    d = 1
    document.getElementsByClassName('info_header')[0].style.marginRight = "15px";
    document.getElementById('nav_mobile').removeEventListener('click', e =>{
      if(!widget[0].classList.contains('widget-parameter')){
        widget[0].style.display = 'block';
        widget[0].classList.add('widget-parameter');
    }else{
      widget[0].style.display = 'none';
      widget[0].classList.remove('widget-parameter');
    }
    });
    widget[0].style.display = 'none';
    widget[0].classList.remove('widget-parameter');
    navigation.innerHTML =        `    <div class="dropdown">
    <button class="underline-one nav-link dropbtn nav-link_add">ЦВЕТЫ</button>
    <div class="dropdown-content">
      <a href="cutedFlowers.html">СРЕЗАННЫЕ ЦВЕТЫ</a>
      <a href="boukets.html">БУКЕТЫ</a>
      <a href="venki.html">ВЕНКИ</a>
      <a href="flowersGround.html">ЦВЕТЫ В ГОРШКАХ</a>
    </div>
</div>
<div class="dropdown">
    <button class="underline-one nav-link dropbtn nav-link_add">УХОД</button>
    <div class="dropdown-content">
      <a href="ground.html">ЗЕМЛЯ</a>
      <a href="goods.html">УДОБРЕНИЯ</a>
      <a href="flowersHealth.html">ЗДОРОВЬЕ РАСТЕНИЙ</a>
      <a href="grounds.html">ГОРШКИ</a>
      <a class="end_massive" href="howToGrow.html">КАК УХАЖИВАТЬ?</a>
    </div>
</div>
<a href="delivering.html" class="underline-one nav-link">ЗАКАЗ И ДОСТАВКА</a>
<a href="aboutUs.html" class="underline-one nav-link">О НАС</a>
<a href="contacts.html" class="underline-one nav-link">КОНТАКТЫ</a>
<form class="header_form"> 
    <input type="text" class="search" placeholder="Поиск">
    <input type="image" src="images/free-png.ru-44.png" value="Search">
</form>
<p class="info_header">Пн-Пт: 10:00-17:00<br>+37254847523</p>
</div>`
  }
}, false);