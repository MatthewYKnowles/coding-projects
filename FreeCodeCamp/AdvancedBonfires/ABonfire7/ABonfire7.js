var Person = function(firstAndLast){
  var fullName = firstAndLast;
  var nameArray = fullName.split(" ");
  var firstName = nameArray[0];
  var lastName = nameArray[1];
  this.getFirstName = function(){
    return firstName;
  };
  this.getLastName = function(){
    return lastName;
  };
  this.getFullName = function(){
    return firstName + " " + lastName;
  };
  this.setFirstName = function(name){
    firstName = name;
  };
  this.setLastName = function(name){
    lastName = name;
  };
  this.setFullName = function(fullName){
    var nameArray = fullName.split(" ");
    firstName = nameArray[0];
    lastName = nameArray[1];
  };
};
