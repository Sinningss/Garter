snake.size = function(settings = {}) {
  settings.width        = 4;
  settings.height       = 4;
  let squareSize = 600 / settings.width;
  if(squareSize * settings.height > 530)
    squareSize = 530 / settings.height;


  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('#A2') === -1)
        return;

      const icon = new Image();
      icon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png';
      icon.width = 47;
      icon.height = 47;
      if(document.querySelector('#size').childElementCount > 3)
        for(let i = document.querySelector('#size').childElementCount - 1; i >= 3; i--)
          document.querySelector('#size').removeChild(document.querySelector('#size').children[i]);
      document.querySelector('#size').appendChild(icon);
      
      const c = code.match(
        /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){var a=this,b=[^]*?canvas[^]*?\);return b\.promise}/
      )[0];
      const wa = c.match(
        /a\.[a-zA-Z0-9_$]{1,8}\/128/
      )[0].replace('/128', '');
      const size = code.match(
        /1===this\.[a-zA-Z0-9_$]{1,8}\|\|\(e\+=1\)/
      )[0].replace('1===this.', '').replace('||(e+=1)', '');
      console.log(size);
      );
    };
    req.send();
  }
};

snake.size()
