document.getElementById('menu-toggle').onclick = function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
};


document.addEventListener('DOMContentLoaded', function() {
    // 設定 2 秒後觸發開門效果
    setTimeout(function() {
      // 觸發左右門的開啟動畫
      var leftDoor = document.querySelector('.door.left');
      var rightDoor = document.querySelector('.door.right');
      leftDoor.classList.add('open');
      rightDoor.classList.add('open');
      
      // 同時讓中央文字淡出（可選）
      var splashText = document.getElementById('splashText');
      splashText.classList.add('fade');
      
      // 當動畫持續1秒後，隱藏 splash 區塊並顯示主頁內容
      setTimeout(function() {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
      }, 1000); // 此處的 1000 毫秒與動畫持續時間相同
    }, 2000);
  });
  