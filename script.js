function yk()
{
  let input = document.getElementById("fname").value;
  if(input == "date")
    {
      let d = Date();
      alert("Todays Date Is: " + d);
      return;

    }
  if(input == "add")
    {
      add();
      return;
    }
  if(input == "game")
    {
      window.open('game.html', '_blank');
    }
  if(input == "red")
    {
      document.body.style.backgroundColor = "red";
      return;

    }
  if(input == "blue")
    {
      document.body.style.backgroundColor = "blue";
      return;

    }
  if(input == "subtract")
    {
      subtract();
      return;
    }
  if(input == "divide")
    {
      divide();
      return;
    }
  if(input == "ver")
    {
      alert("ZivGates\nCopyright ZivGates Foundation\nAll Rights Reserved\nWritten And Made By zvqle\n");
    }
  else{
    alert(input + " is the wrong Syntax! Try Again!");
  }

}

function add(){
  let num1 = parseInt(prompt("Enter First Number!"));
  let num2 = parseInt(prompt("Enter Second Number!"))
  let and = num1 + num2;
  alert(and);
}
function subtract(){
  let num1 = parseInt(prompt("Enter First Number!"));
  let num2 = parseInt(prompt("Enter Second Number!"))
  let and = num1 - num2;
  alert(and);
}
function multiply(){
  let num1 = parseInt(prompt("Enter First Number!"));
  let num2 = parseInt(prompt("Enter Second Number!"))
  let and = num1 * num2;
  alert(and);
}
function divide(){
  let num1 = parseInt(prompt("Enter First Number!"));
  let num2 = parseInt(prompt("Enter Second Number!"))
  let and = num1 / num2;
  alert(and);
}
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        yk();
    }
  if(event.keyCode === 67 && event.keyCode === 17)
    {
      alert("ctrl alt delete!")
    }
});

function cmode(){
  document.getElementById("body").style.backgroundColor = "white"; 
  document.getElementById("body").style.border = "5px outset black"; 
  document.getElementById("text").style.color = "black"; 
  // document.getElementById("buttons").style.backgroundColor = "white";
  document.getElementById("buttons").style.color = "black"; 
   document.getElementById("fname").style.border = "5px outset black"; 
  document.getElementById("fname").style.backgroundColor = "white"; 
  document.getElementById("fname").style.color = "black"; 
  
  document.getElementById("submit").style.border = "5px outset black"; 
  document.getElementById("submit").style.backgroundColor = "white"; 
  document.getElementById("submit").style.color = "black"; 
  
  document.getElementById("lmode").style.border = "5px outset black"; 
  document.getElementById("lmode").style.backgroundColor = "white"; 
  document.getElementById("lmode").style.color = "black"; 
  
  document.getElementById("dmode").style.border = "5px outset black"; 
  document.getElementById("dmode").style.backgroundColor = "white"; 
  document.getElementById("dmode").style.color = "black"; 
  document.getElementById("about").style.border = "5px outset black"; 
  document.getElementById("about").style.backgroundColor = "white"; 
  document.getElementById("about").style.color = "black"; 
  document.getElementById("aboutme").style.border = "5px outset black"; 
  document.getElementById("aboutme").style.backgroundColor = "white"; 
  document.getElementById("aboutme").style.color = "black"; 
  document.getElementById("cls").style.border = "5px outset black"; 
  document.getElementById("cls").style.backgroundColor = "white"; 
  document.getElementById("cls").style.color = "black"; 
  document.getElementById("youtube").style.border = "5px outset black"; 
  document.getElementById("youtube").style.backgroundColor = "white"; 
  document.getElementById("youtube").style.color = "black"; 
  document.getElementById("github").style.border = "5px outset black"; 
  document.getElementById("github").style.backgroundColor = "white"; 
  document.getElementById("github").style.color = "black"; 
  document.getElementById("discord").style.border = "5px outset black"; 
  document.getElementById("discord").style.backgroundColor = "white"; 
  document.getElementById("discord").style.color = "black"; 
  document.getElementById("cr").style.color = "black";
  document.body.style.backgroundImage = "url('day.jpg')";

}

function dmode(){
  document.getElementById("body").style.backgroundColor = "black"; 
  document.getElementById("body").style.border = "5px outset white"; 
  document.getElementById("text").style.color = "white"; 
  // document.getElementById("buttons").style.backgroundColor = "black";
  document.getElementById("buttons").style.color = "white"; 
   document.getElementById("fname").style.border = "5px outset white"; 
  document.getElementById("fname").style.backgroundColor = "black"; 
  document.getElementById("fname").style.color = "white"; 
  
  document.getElementById("submit").style.border = "5px outset white"; 
  document.getElementById("submit").style.backgroundColor = "black"; 
  document.getElementById("submit").style.color = "white"; 
  
  document.getElementById("lmode").style.border = "5px outset white"; 
  document.getElementById("lmode").style.backgroundColor = "black"; 
  document.getElementById("lmode").style.color = "white"; 
  
  document.getElementById("dmode").style.border = "5px outset white"; 
  document.getElementById("dmode").style.backgroundColor = "black"; 
  document.getElementById("dmode").style.color = "white";
   document.getElementById("about").style.border = "5px outset white"; 
  document.getElementById("about").style.backgroundColor = "black"; 
  document.getElementById("about").style.color = "white";
   document.getElementById("aboutme").style.border = "5px outset white"; 
  document.getElementById("aboutme").style.backgroundColor = "black"; 
  document.getElementById("aboutme").style.color = "white";
   document.getElementById("cls").style.border = "5px outset white"; 
  document.getElementById("cls").style.backgroundColor = "black"; 
  document.getElementById("cls").style.color = "white";
  document.getElementById("youtube").style.border = "5px outset white"; 
  document.getElementById("youtube").style.backgroundColor = "black"; 
  document.getElementById("youtube").style.color = "white";
  document.getElementById("github").style.border = "5px outset white"; 
  document.getElementById("github").style.backgroundColor = "black"; 
  document.getElementById("github").style.color = "white";
  document.getElementById("discord").style.border = "5px outset white"; 
  document.getElementById("discord").style.backgroundColor = "black"; 
  document.getElementById("discord").style.color = "white";
  document.getElementById("cr").style.color = "white"; 
  document.body.style.backgroundImage = "url('night.jpg')";

}


function about(){
    document.getElementById("abouts").textContent = 'ZivGates: \nzvqles personal homepage\n';
    document.getElementById("abouts1").textContent = 'This Is My New Personal Homepage, Its Improved And Had Actual Stuff Done Into It';
    document.getElementById("abouts2").textContent = 'My Old Website Was Tbh, Kinda Skiddy, Since I wasnt really a good programmer when i made it';
    document.getElementById("abouts3").textContent = 'So I Hope This Website Can Better Suit You Better!, Since This Has Actual JS in it';
    document.getElementById("abouts4").textContent = 'Also What Does The Search Bar Do? 🤔';

}
function aboutme(){
    document.getElementById("abouts").textContent = 'Who is zvqle?';
    document.getElementById("abouts1").textContent = 'I am a Aspiring Tech Entiusiests Trying To Get My Way In Life';
    document.getElementById("abouts2").textContent = 'I Do C/C++ and Python Programming, But Also Some Web Development If Im Forced To';
    document.getElementById("abouts3").textContent = 'I also Enjoy talking about Geographic/Politcs Sometimes ';
    document.getElementById("abouts4").textContent = '🇸🇴 | 🇺🇸';

}
function cls(){
    document.getElementById("abouts").textContent = ' ';
    document.getElementById("abouts1").textContent = ' ';
    document.getElementById("abouts2").textContent = ' ';
    document.getElementById("abouts3").textContent = ' ';
    document.getElementById("abouts4").textContent = ' ';

}