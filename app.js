var legacyMenuToggle = document.getElementById('menu-toggle');
var legacyMenu = document.getElementById('menu');
if (legacyMenuToggle && legacyMenu) {
    legacyMenuToggle.onclick = function() {
        if (legacyMenu.classList.contains('show')) {
            legacyMenu.classList.remove('show');
        } else {
            legacyMenu.classList.add('show');
        }
    };
}


document.addEventListener('DOMContentLoaded', function() {
    var splash = document.getElementById('splash');
    var leftDoor = document.querySelector('.door.left');
    var rightDoor = document.querySelector('.door.right');
    var splashText = document.getElementById('splashText');
    if (!splash || !leftDoor || !rightDoor || !splashText) {
        return;
    }

    // 設定 2 秒後觸發開門效果
    setTimeout(function() {
      // 觸發左右門的開啟動畫
      leftDoor.classList.add('open');
      rightDoor.classList.add('open');
      
      // 同時讓中央文字淡出（可選）
      splashText.classList.add('fade');
      
      // 當動畫持續1秒後，隱藏 splash 區塊並顯示主頁內容
      setTimeout(function() {
        splash.style.display = 'none';
        var mainContent = document.getElementById('mainContent');
        if (mainContent) {
            mainContent.style.display = 'block';
        }
      }, 1000); // 此處的 1000 毫秒與動畫持續時間相同
    }, 2000);
  });
