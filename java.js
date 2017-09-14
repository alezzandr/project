    // create alphabet//
  
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    const buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
   
    
    var getHint ;          // Word getHint
    
   
    
  
    // Get elements //
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue"); 
    
    // Select Catagory //
    var chosenCategory;    // Selected catagory //
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "The Chosen Category Is Films";
      } 
    }
  
    // Create geusses ul //
    var guess ;             // Geuss //
     result = function () {
     wordHolder = document.getElementById('hold');
     correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives //
    var lives ; 
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'            
     comments = function () {
      showLives.innerHTML = lives + "lives";
      if (lives < 1) {
        showLives.innerHTML = "You're an idiot";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You're a genius!";
        }
      }
    }
  
       // Animate Hangman //
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
     // Hangman //

     
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "orangered";
      context.lineWidth = 10;
    
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 35, 20, 0, Math.PI*2, true);
        context.stroke();
      }
      

    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
  
     frame1 = function() {
     draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 150);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 85, 30, 0, Math.PI*2, true);
      context.stroke();
     
    };
    
     rightArm = function() {
       draw (105, 46, 82, 70);
     };
    
     leftArm = function() {
       draw (20, 46, 40, 70);
     };
    
     rightLeg = function() {
       draw (70, 110, 90, 140);
     };
    
     leftLeg = function() {
       draw (50, 110, 28, 140);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
    // OnClick Function//
    var geusses = [ ];      // Stored geusses //
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    // Play//
    var categories; 
    play = function () {
      categories = [
          ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
          ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
          
      ];
      
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    
    // Hint //
  
      hint.onclick = function() {
  
        hints = [
          ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
          ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
          
      ];
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
    };
  
     // Reset //
  
      document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "Here I am";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  