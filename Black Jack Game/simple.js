//document.querySelector('#count').innerText=5;

// let myAge=20+384*6;
// console;

/*const countel=document.querySelector('#count-El');
countel.addEventListener('click', (e) =>{
   e.preventDefault();
     let count=0;
     count=count+1;
       console.log('count');
}
);*/

let countEl=document.getElementById("count"); //pass in arguments

  console.log(countEl);
let count=0;
function increment(){
    count=count+1; //You can use count +=1
    countEl.textContent=count;
    //console.log("count");
}


let name='Teddy'
let message='You have three new notification';

console.log(name + ' ' + message);

let fname='Ijaka';
let greeting='Hi, my name is ';
let myGreetings=greeting+ fname;

console.log(myGreetings);

let saveEl=document.getElementById("save-el");
  console.log(saveEl);

  function save(){

    let countstr=count+"-";
    saveEl.textContent+=countstr;
    //console.log('count');
    countEl.textContent=0;
    count=0;

}
 let errorParagraph=document.getElementById('error');
 // error.innerText='Something went wrong, please try again';
   console.log(errorParagraph);
   function purchase(){
    console.log('Button was clicked');
     errorParagraph.textContent='Something went wrong, Please try again';
      setTimeout(() => errorParagraph.remove(), 3000);
   }

  let num1=800;
  let num2=4;
  document.getElementById('num1-el').textContent=num1;
  document.getElementById('num2-el').textContent=num2;
  let SumElement=document.getElementById('Sum-el');
function Add(){
     let results=num1+num2;
   SumElement.textContent='Sum:'+ results;
}   

function Subtract(){
    let results=num1-num2;
    SumElement.textContent='Sum:' + results;
}

function Divide(){
    let results=num1/num2;
    SumElement.textContent='Sum:' + results;
}

function Multiply(){
    let results=num1*num2;
    SumElement.textContent='Sum:' + results;
}

//BLACKJACK GAME

let isAlive=false;
let hasBlackJack=false;
let Message='';
let MessageEl=document.getElementById('message-el');
let sumEl=document.getElementById('sum-el');
let cardEl=document.getElementById('cards-el');

let player={     //Using objects like an array but not specific array
   name: 'Teddy',  //Are called composite/complex data types
   chips: 450
};

let playerEl=document.getElementById('player-el');

playerEl.textContent= player.name+ ' $' + player.chips;

// Make this function return from 1 and 13
function getRandomCard(){
    let randomNumber=Math.floor(Math.random() *13) +1;
     if (randomNumber > 10){
         return 10
     }else if (randomNumber=== 1){
      return 11
     } else

      return randomNumber;
}

function startgame(){
   isAlive=true;
   let firstCard=getRandomCard();
   let secondCard=getRandomCard();
   cards=[firstCard, secondCard]
   sum=firstCard+secondCard;
   rendergame()
}
function rendergame(){
  // render out firstCard and seconCard
  cardEl.textContent='Cards:'//Create a for loop that renders out all the cards instead of just two
   for(i=0;i<cards.length;i++)
    {
      cardEl.textContent+=+ cards[i]+ '  ';//The first addition means that the variable cardEl will pick both firstCard and secondCard if b=not concatinate it will pick only the last element in the array
    }
  sumEl.textContent='Sum: '+ sum;
if(sum< 21){
    Message='Do you want to draw a new Card!';
    isAlive=true;
} else if(sum=== 21){
    Message='You have got a blackJack';
      hasBlackJack= true;
} else{
    Message='You are out of the game!';
    isAlive= false;
}

MessageEl.textContent=Message;
}
function newcard() {
  // Check if the player is alive and hasn't won yet
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard(); // Get a new card
    cards.push(card);           // Add the card to the array of cards
    sum += card;                // Add the value of the card to the sum
    rendergame();               // Call the renderGame function to update the UI
  }
}


/*countel.style.color='red';
//ncrement.style.backgroundcolor='red'
let count=document.querySelector('#count');
console.log(count);
   count=0;

   function increment(){
    count=count+1;
    countel.innerText=count;
   }  */

 /*  let myAge=20;
   let humanDogRatio=7;

   DogAge=myAge*humanDogRatio/1;
    // return results;

     console.log(DogAge);   
     
     let bonusPoints=50;
      count=bonusPoints+50;
    
      console.log(count);
       count=count-75;
       console.log(count);  */

       let mySelf=[
        'The world technology is increassing drastically',
        'I learnt at Catholic University Of Eastern Africa',
        'I am not licenced to do anything as per now',
        'I know how to code, I am a fronted Developer']
       // mySelf.push[0]    //['Check out my Netflix clown']
      console.log(mySelf.length);
      //.length property of an Array starts from 1 and not 0.
      let newmySelf='Can I present my Portfolio?';
       //mySelf.push(newmySelf);//.push adds data at the end ,
      mySelf.pop(newmySelf);
      console.log(mySelf);
     //How can you remove the last item in the array. we have other methods of Array like, splice, unshift, shift, poop, push.
  
//Create a for loop that counts from 10 to 100 in steps of 10

  for(count=10; count<=100; count+=10)
    console.log(count );

  for(let i=1; i<5;i++)
    {
      for(let j=1; j<i; j++){
        console.log('@');
      }
      console.log('<br>');
    }
      let balls=[7,3,0]
      for(let i=0; i<balls.length; i++)
        console.log(balls[i]);

      let sentence=['Hello','my', 'name','is','Teddy']
      let greetingEL=document.getElementById('greeting-el');

      for(i=0;i<sentence.length;i++){   
      greetingEL.textContent+=sentence[i]+ ' ';//How do we remove the spaces between the words if I remove them from the Array,  ANS-We add a plus then we concatinate it with ' '
      
}  /*
//Returning Values in Function
player1Time=100;
let player2Time=90;

function totalRaceTime(){
 results=player1Time+player2Time;
   return results;

   console.log(results);
}

  var x= false;
  var y= true;
  var z=null;

  var a=(z== null);
   console.log(x=a);

   let day='Monday';
   let m=day.length;
    console.log(m);

  if(a==0){
    return true;
  }  else{
    return false;
  }

  // Object Destruction in Javascript
  //Object destructurig allows you to extract specific properties from objects and assign them to variables makin code more concise and readable

      //original object
/*
      const person ={
          name: 'Alice',
          age: 28,
          city: 'London'
        };

          //Destructuring assignments
           const {name, age} =person;

            //Usage of destructured variables
            console.log(name);
            console.log(age);   
            EMLE- Statistics - data cleaning, data collection
            Create tools for monitoring and evaluation
            MS project
            Excel


            */
           
   let day='Monday';
   let m=day.length;
    console.log(m);

    let human=['Teddy', 23, true]
    let per=human.push('Nairobi')
    console.log(human);


    let TotalRace1=100;
    let TotalRace2=200;

    function ToatalRaceTime(){
     if(TotalRace1<TotalRace2){
        return TotalRace1;
     }else if(TotalRace2<TotalRace1){
        return TotalRace2;
     }else{
        return TotalRace1;
     }
    }
   //Try to modify the expression so that we get a range from 1 to 6
    //let randomNumber=Math.floor(Math.random() * 6) +1
    //  console.log(randomNumber)  //Math.random means that the output will be 0 and 1 (not inclusive 1)
    let flooredNumber=Math.floor(9.45632)
     console.log(flooredNumber);   //Math.floor it removes the decimal

 /*  function RollDice(){
    let randomNumber=Math.floor(Math.random() * 6) +1
      return randomNumber;
   }
    console.log(randomNumber);  */

    //Logical Operator
    let hasSolvedChallenge= false;
    let hasHintLeft= false;

    if(hasSolvedChallenge===false && hasHintLeft===false)
        showSolution();

     function showSolution(){
      console.log('Showing the solution....')
     }

   let person={
      name:'Ijaka',
      years:34,
      country:'Kenya'
   };

   function logData(){
     console.log(person.name+ " is " +person.years +" " +"years old and lives in "+ person.country);

   }
     logData();

     let age=48;
      if(age<6){
        console.log('free');
      }else if
        (age>6 && age<17){
          console.log('child discount');
        }else if
        (age>18 && age<26){
          console.log('student discount');
        }else if
        (age>27 && age<66){
          console.log('full price');
        }else
        (age>66)
          console.log('senior citizen discount');
        
          let largeCountries=['Tuvalu','India','USA','Indonesia','Monaco']
           largeCountries.push('China')
           largeCountries.pop('Pakistan')
           largeCountries.shift('Kenya')
           largeCountries.unshift('Canada')
            console.log(largeCountries);








