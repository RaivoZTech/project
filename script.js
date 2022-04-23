//This is my project JavaScript file 

//This is Javascript function to toggle a menu button in HTML which uses an eventListener 'click' to toggle class .active in css
var toggleButton = document.getElementById("toggleButton");
var naviList = document.getElementById("navi-list");

toggleButton.addEventListener( 'click', () => { naviList.classList.toggle('active'); });

//This function targets the images in HTML Gallery and enlarges them and also takes off grayscale filter
function enlargeImage(img){
    img.style.transform = "scale(1.3)";
    img.style.filter = "grayscale(0%)";
}
//This function targets the images in HTML and makes them smaller and also takes off grayscale filter once user takes cursor away
function condenseImage(img){
    img.style.transform = "none";
    img.style.filter = "grayscale(100%)";
}
//function which targets Form and hides it after submittion
function hide(){
    document.forms["userForm"].style.display = "none";
}

//Function for Form Validation whitch targets user input from HTML and runs trough a conditional statements checking for certain conditions
// then returns a message on the screen if all the conditions are met
function formValidation(){
  var userName = document.forms["userForm"]["fname"].value;//uses forms property to target user input and get a value 
  var phoneNum = document.forms["userForm"]["phoneNum"].value;
  var email = document.forms["userForm"]["email"].value;
  var comments = document.forms["userForm"]["comments"].value;
  specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  numbers = /[1234567890]/;

  if(userName.length <=3 || userName.length > 20 ){//if statement checks for length conditions 
      alert("Please enter a valid name length");
  }
  else if(numbers.test(userName)||specialChars.test(userName)){// uses test() method to search for match between specified string and userInput  
    alert("Name can't contain special characters or numbers!");
}   
  else if(isNaN(phoneNum) || phoneNum.length < 8){//uses isNaN() method to check if input is an number value and also checks for length
      alert("Please enter a valid phone number");
  }
  else if(email.indexOf("@") ==-1|| email.length < 8){
    alert("Please enter a valid email adress");
 }
  else{//if all the conditions are met , it this part targets "message" tag and outputs text below 
     document.getElementById("message").innerHTML = "Thanks "+userName+" we will be in touch with you shortly via email: "+email+"<br />"+"<br />"+"or phone number: "+ phoneNum;
     hide();}
  }


//Creating a two random hex-color numbers and passing them to a body style element using "Linear=gradient" function to make a nice looking color gradient background

    var hexChars1 = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];//created am array of strings;
    var hexColor1 = "";
    
    for(i=0; i<6 ; i++){
        var randomIndex1 = Math.floor(Math.random() * hexChars1.length);// Math.random() function multiplied  by array length to get random string from an array
        hexColor1 += hexChars1[randomIndex1];// adds 6 differet strings items to an empty string 

    }
    // same function for second hex color 
    var hexChars2 = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    var hexColor2 = "";

    for(i=0; i<6 ; i++){
        var randomIndex2 = Math.floor(Math.random() * hexChars2.length);
        hexColor2 += hexChars2[randomIndex2];

    }
    // after both hexColo1 and hexColor2 have generated 6 random digits I pass it to html.body tag and use linear-gradient() style function to apply a gradiend background color 
    document.body.style.backgroundImage =  "linear-gradient(to right, " + "#" + hexColor1 + ", " + "#" + hexColor2 +")";
    console.log("Hex color 1: "+"#"+hexColor1,"\n"+"Hex color 2: "+"#"+hexColor2); // outout hex-color values to the console 

    var hexColorChars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    var hexColorText = "";
    
    for(i=0; i<6 ; i++){//added a another hex-color generator
        var randIndex = Math.floor(Math.random() * hexColorChars.length);
        hexColorText += hexColorChars[randIndex];

    }

    document.getElementById("paragraph").style.color ="#"+hexColorText;//passed hex-color value for paragraph text color.