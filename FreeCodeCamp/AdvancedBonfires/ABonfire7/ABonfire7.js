var Person = function(firstAndLast){
  this.fullName = firstAndLast;
  this.nameArray = this.fullName.split(" ");
  this.firstName = this.nameArray[0];
  this.lastName = this.nameArray[1];
  this.getFirstName = function(){
    return this.firstName;
  };
  this.getLastName = function(){
    return this.lastName;
  };
  this.getFullName = function(){
    return this.firstName + " " + this.lastName;
  };
  this.setFirstName = function(name){
    this.firstName = name;
  };
  this.setLastName = function(lastName){
    this.lastName = lastName;
  };
  this.setFullName = function(fullName){
    var nameArray = fullName.split(" ");
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
  };
}
var bob = new Person("Bob Knowles");
console.log(Object.keys(bob));
