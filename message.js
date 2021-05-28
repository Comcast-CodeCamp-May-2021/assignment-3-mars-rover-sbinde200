//this is a class called Message. It lies a constructor with the parameters of name && commands. Then the name gets declared as a variable. Then there is an Boolean expressrion with an IF statement. it states if NOT name THROW and ERROR stating "message name required."
//then they declare commands variable outside of the if statement/boolean expression. 

class Message {
  constructor(name, commands) {
    this.name = name;
    if (!name) {
       throw Error("Message name required.");
    }
    this.commands = commands;

  
  } 
}
module.exports = Message;

//up to me to understand what the implementation looks like 