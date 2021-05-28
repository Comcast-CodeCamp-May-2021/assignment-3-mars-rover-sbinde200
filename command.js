//this is a class called command. In it lies a constructor with the parameters of commandType && value. It declares a variables called commandType. Then it gives a boolean expression saying if NOT commandType to then THROW an ERROR stating "Command type required".
//They also decalred a variable named value. 

class Command { 
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
 
 module.exports = Command;

 //nothing wrong with this file / may have to comment some things out 
