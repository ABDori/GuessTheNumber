let gameStarter = document.querySelector(".start_btn");


gameStarter.addEventListener('click',function(){

      document.querySelector(".starter_window").classList.toggle("invisible");
});



      //randomizer

      let number = parseInt(Math.random() * 9 + 1);

      console.log(number);

      let numberGuessed = 0;
      let score = document.querySelector(".score_string");
      score.textContent = 0;
      

      let one = document.querySelector(".one");
      let two = document.querySelector(".two");
      let three = document.querySelector(".three");
      let four = document.querySelector(".four");
      let five = document.querySelector(".five");
      let six = document.querySelector(".six");
      let seven = document.querySelector(".seven");
      let eight = document.querySelector(".eight");
      let nine = document.querySelector(".nine");


      let compare = document.querySelector(".compare");

      let stringDisplay = document.querySelector(".thenumberitself");

      one.addEventListener('click',function () { numberGuessed = 1; });
      two.addEventListener('click',function () { numberGuessed = 2; });
      three.addEventListener('click',function () { numberGuessed = 3; });
      four.addEventListener('click',function () { numberGuessed = 4; });
      five.addEventListener('click',function () { numberGuessed = 5; });
      six.addEventListener('click',function () { numberGuessed = 6; });
      seven.addEventListener('click',function () { numberGuessed = 7; });
      eight.addEventListener('click',function () { numberGuessed = 8; });
      nine.addEventListener('click',function () { numberGuessed = 9; });



      compare.addEventListener('click',function () {
            stringDisplay.textContent = number;
      
            console.log("загаданное число " + number);
            console.log("введенное число " + numberGuessed);
      

            if (number == numberGuessed) {
                  stringDisplay.textContent = number + " Exactly!";
                  score.textContent = parseInt(score.textContent) + 3;
                  console.log(score);
                  number = parseInt(Math.random() * 9 + 1);
                  return;
            }
            else if (Math.abs(number - numberGuessed) <= 2) {
                  stringDisplay.textContent = number + " Close!";
                  score.textContent = parseInt(score.textContent) + 1;
                  console.log(score);
                  number = parseInt(Math.random() * 9 + 1);
                  return;
            }
            else {
                  alert("введено число " + numberGuessed + " ,а загадано число " + number);
                  stringDisplay.textContent = number + " You missed, Game Over!";
                  score.textContent = 0;
                  document.querySelector(".starter_window").classList.toggle("invisible");
                  stringDisplay.textContent = ' ';
                  number = parseInt(Math.random() * 9 + 1);
            };

            numberGuessed = '';
            console.log("число равно " + number + "; число игрока равно " + numberGuessed);

      });









/* }); */














