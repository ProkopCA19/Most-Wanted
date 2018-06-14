/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    // TODO: search by name 
    searchByName()
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

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      break;
    case "gender":
      filteredPeople = searchByGender(people);
      break;
    case "age":
      filteredPeople = searchByAge(people);
      break;
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

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

function searchByHeight(people) {
  let userInputHeight = prompt("How tall (in inches) is the person?");

  let heightResult = people.filter(function (el) {
    if(el.height === userInputHeight) {
      return true;
    }
  });

  return heightResult;
}

function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What is the persons eye color?");

  let eyeColorResult = people.filter(function (el) {
    if(el.eyecolor == userInputEyeColor) {
      return true;
    }
  });

  return eyeColorResult;
}

function searchByGender(people) {
  let userInputGender = prompt("What is the persons gender?");
  let genderResult = people.filter(function (el) {
    if(el.gender == userInputGender) {
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
    if(el.occupation == userInputOccupation) {
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
  let optionChosen;

  switch(displayOption){
    case "info":
    // TODO: get person's info
    let optionChosen = getInfo
    
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
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

  let firstNameResult = data.filter(function(el){
    if(el.firstName === firstName)
      return true; 
  });

  let lastNameResult = data.filter(function(el){
    if(el.lastName === lastName)
      return true;
  });

  return firstNameResult + lastNameResult

  }



// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
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


function getInfo(){


}