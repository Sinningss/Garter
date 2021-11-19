snake.garter = function(settings = {}) {
  var cussize = prompt("Enter custom stage size number") // ask for number stuff, will be made better sometime later
  while (cussize !== parseInt(cussize, 10).toString()) {
    cussize = prompt("Bruh just enter a damn number");
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
  
  // SPEEDS //
    
  img = new Image; // Anxiety
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/nervous.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
  
  img = new Image; // Snail
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/snail.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
 
  img = new Image; // Zzz...
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/zzz.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
  
  img = new Image; // Fly
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/annoying shit.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
  
  img = new Image; // Bullet
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/bullet.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);
  
  img = new Image; // Gas
  img.src = 'https://raw.githubusercontent.com/lukasexists/GoogleSnakeModAttempt/main/img/car.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // actual stuff
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('#A2') === -1)
        return;
      
      // stuff that makes speeds work
      const limesarebetter = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 1:return\.66[^}]*?1}}/
      )[0];
      const limename = limesarebetter.match(/[a-zA-Z0-9_$]{1,6}/)[0];
      const limespeed = limesarebetter.match(/switch\(a\.[a-zA-Z0-9_$]{1,6}\)/)[0].replace('switch(a.', 'this.').replace(')', '');
      const a = code.match(new RegExp(
        `this\\.[a-zA-Z0-9_$]{1,6}=[a-zA-Z0-9_$]{1,6}\\*${limename}\\(this\\);`
      ))[0];
      var rand = Math.random()
      var gas = 1
      gas = gas + 0.1
      eval(
        limesarebetter.replace(
          '1.33;',
          `1.33;case 3:return _soup;case 4:return 2;case 5:return Infinity;case 6:return ${rand};case 7:return 0.25;case 8:return ${gas};`
        )
      );

      const soup = code.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.update=function\(\){[^]*?this\)}}}}/
      )[0];
      const p = soup.match(
        /:this\.[a-zA-Z0-9_$]{1,6}\+=1;this\.[a-zA-Z0-9_$]{1,6}\+\+;/
      )[0];
      eval('var _soup = 1.33;');
      eval('var _soep = 1.85;');
      eval(
        soup.replace(
          p,
          p + `_soup = Math.random() < .5 ? .66 : 1.33;_soep = Math.random() < .5 ? .45 : 1.85;${limespeed} === 3 && (${a.replace(limename + '(this);', '_soup')});${limespeed} === 6 && (${a.replace(limename + '(this);', '_soep')});`
        )
      );
      
      
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
