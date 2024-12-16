function person(fName,lName){
    this.firstName=fName;
    this.lastName=lName;
}

person.prototype.getFullname =function(){
    return this.firstName+' '+this.lastName;
}

const person1 = new person('Akaytab','Karmakar');
const person2 =new person('akaytab2','karmakar');

console.log(person1.getFullname())