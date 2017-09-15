    // create alphabet//
  
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    

          // loop for alphabet //
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
      
     
    
     // Get elements //
     var getHint ;         
     var showLives = document.getElementById("mylives");
     var showCatagory = document.getElementById("scatagory");
     var getHint = document.getElementById("hint");
     var showClue = document.getElementById("clue"); 
    
    // Function for chosen category //
    var chosenCategory;    
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "Geography";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "Quantum Mathematics";
      } 
    }
  
    // Create geusses function using loop //
    var guess ;            
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
    
    // Show lives - create a function for # of lives//
    var lives ; 
    var counter ;           // Count correct geusses  //
    var space;              // # of spaces in word '-'  //          
     comments = function () {
      showLives.innerHTML = lives + "lives";
      if (lives < 1) {
        showLives.innerHTML = "Maybe in the next life!";
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
    
      
    
    var categories; 
    play = function () {
      categories = [
          ["asia", "austin", "pacific", "north-pole",],
          ["four", "subtraction", "two", "googolplex"],
          
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
          ["Largest continent in the world", "Capital of Texas", "Largest ocean in the world", "Where Santa Claus lives"],
          ["2+2", "opposite of addition", "1+1", "Largest Number"],
          
      ];
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML =  hints [catagoryIndex][hintIndex];
    };
  
     // Reset //
  
      document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      play();
    }
  