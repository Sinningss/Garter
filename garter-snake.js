snake.garter = function(settings = {}) {
  var cussize = prompt("Enter number")
  while (cussize !== cussize(answer, 10).toString()) {
    alert("Please enter only numbers!");
    cussize = prompt("Enter number");
  }
  
  // STAGE SIZES //
  
  img = new Image; // Custom Stage
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/custom.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);
  
  img = new Image; // Tiny Stage
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/tiny.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);
  
  // actual stuff
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('#A2') === -1)
        return;
      
      // stuff that makes stages function
      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 2:return 512;[^]*?256}}/
        )[0].replace(
          '96;',
          `96;case 3:return ${cussize};case 4:return 36;case 5:return 1200;case 6:return 3500;case 7:return 10000;case 8:return 25000;case 9:return 100000;`
        )
      );
    };
    req.send();
  }
};

window.snake.garter()
