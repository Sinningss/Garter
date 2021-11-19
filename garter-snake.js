snake.size = function(settings = {}) {
  settings.lightSquares = settings.lightSquares || (settings.dark ? '#47404F' : '#AAD751');
  settings.darkSquares = settings.darkSquares || (settings.dark ? '#423C49' : '#A2D149');
  
  img = new Image;
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/tiny.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);
  
    // making do things
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('#A2') === -1)
        return;

      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 2:return 512;[^]*?256}}/
        )[0].replace(
          '96;',
          `96;case 3:return 36;case 4:return 36;case 5:return 1200;case 6:return 3500;case 7:return 10000;case 8:return 25000;case 9:return 100000;`
        )
      );
    };
    req.send();
  }
};

window.snake.size()
