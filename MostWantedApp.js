/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application




function app(people){

  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();;
  switch(searchType){
    case 'yes':
   var person = searchByName(people);

   mainMenu(person, people);
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}

debugger;
function searchByTraits(people) {

let filteredPeople;

var searchType = promptFor("Do you know the gender of the person you are looking for? Enter 'yes or 'no'", yesNo).toLowerCase();
  if (searchType === "yes") {
    filteredPeople = searchByGender(people);
  } 
  searchType = promptFor("Do you know the height of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  if (searchType === "yes" ) {
    filteredPeople = searchByTall(filteredPeople);
  }

  searchType = promptFor("Do you know the weight of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  if (searchType === "yes" ) {
    filteredPeople = searchByWeight(filteredPeople);
  }

  searchType = promptFor("Do you know the eye color of the person you are looking for? Enter 'yes or 'no'", yesNo).toLowerCase();
  if (searchType === "yes") {
    filteredPeople = searchByEyeColor(filteredPeople);
  }

  searchType = promptFor("Do you know the occupation of the person you are looking for? Enter 'yes or 'no'", yesNo).toLowerCase();
  if (searchType === "yes") {
    filteredPeople = searchByOccupation(filteredPeople);
  }  

  searchType = promptFor("Do you know the age of the person you are looking for? Enter 'yes or 'no'", yesNo).toLowerCase();
  if (searchType === "yes") {
    filteredPeople = searchByAge(filteredPeople);
  }
   
  let person = filteredPeople[0];
  alert(person.firstName + " " + person.lastName);
  mainMenu(person, people);
}



function searchByWeight(people) {
  let userInputWeight = prompt("How many pounds does the person weigh?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;

    }
  });

  return newArray;
}

function searchByTall(people) {
  let userInputHeight = prompt("How tall (in inches) is the person?");

  let heightResult = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
  });

  return heightResult;
}

function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What is the persons eye color?");

  let eyeColorResult = people.filter(function (el) {
    if(el.eyeColor === userInputEyeColor) {
      return true;
    }
  });

  return eyeColorResult;
}

function searchByGender(people) {
  let userInputGender = prompt("What is the persons gender?");
  let genderResult = people.filter(function (el) {
    if(el.gender === userInputGender) {
      return true;
    }
  });

  return genderResult;
}

function searchByAge(people) {
  let userInputAge = prompt("What is the persons age?");

  let ageResult = people.filter(function (el) {
    if(el.dob == userInputAge) {
      return true;
    }
  });

  return ageResult;
}

function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the persons occupation?");

  let occupationResult = people.filter(function (el) {
    if(el.occupation === userInputOccupation) {
      return true;
    }
  });

  return occupationResult;
}








// Menu function to call once you find who you are looking for
function mainMenu(person, people){

 /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }


  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
     displayPerson(person);
    break;
    case "family":
    //to do:
    break;
    case "descendants":
      let descendants = findKids(person, people);
      displayPeople(descendants);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  // TODO: find the person using the name they entered

  let personArray = people.filter(function(el){
    if(el.firstName.toLowerCase() === firstName.toLowerCase() && el.lastName.toLowerCase()=== lastName.toLowerCase())
      return true; 
  });

  return personArray[0];
  }




// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}


function displayPerson(person){
 let personInfo = "First Name: " + person.firstName + "\n";
 personInfo += "Last Name: " + person.lastName + "\n";
 personInfo+= "gender: " + person.gender + "\n";
 personInfo+= "dob: " + person.dob + "\n";
 personInfo+= "height inches: " + person.height + "\n";
 personInfo+= "weight lbs: " + person.weight + "\n";
 personInfo+= "eyeColor: " + person.eyeColor + "\n";
 personInfo+= "occupation: " + person.occupation + "\n";
 personInfo+= "parents: " + person.parents + "\n";
 personInfo+= "currentSpouse: " + person.currentSpouse + "\n";

 alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}


function findKids(foundPerson, people){

 let children = people.filter(function(person){
  for (let i = 0; i < person.parents.length; i++){
    if(person.parents[i] === foundPerson.id) {
      return true; 
    }
  }
  });
 
  for (let i = 0; i < children.length; i++) {
    children = children.concat(findKids(children[i], people));     
  } 
    return children;
}




