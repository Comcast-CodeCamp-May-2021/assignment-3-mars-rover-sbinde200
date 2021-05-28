//this is a class called Rover. it lies a constructor with the parameter (1) of position. Within the code block for the construcor, position is declared as a variable. Mode is declared but also equal to the string 'NORMAL'. generatorWatts was also declared and is equal to 110. 

// within the class is a METHOD witht the parameter of message. In its code block lies an object called response in the object are two properties, message and results. 

//then there is a FOR loop. in the clode block for the loop ( Explain further ) then is retruns a response. 

class Rover {

  constructor(position) {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    let response = {
      message: message.name,
      results: []
      }

    for (let i = 0; i < message.commands.length; i ++) {
      if ( message.commands[i].commandType === "STATUS_CHECK") {
        let statusVariable = {completed: true, roverStatus: {mode: this.mode,generatorWatts: this.generatorWatts, position: this.position}}
        // response.results.push(message); 
        response.results.push(statusVariable)
      }else if (message.commands[i].commandType === "MODE_CHANGE") {
          this.mode = (message.commands[i].value) 
        let completed = {completed: true}
        response.results.push(completed);

      }

    // for () // create a for loop that pushes an object of completed true 
    return response;
  }
}
}
module.exports = Rover;


 

// most copmplex of the classes - time will be spent here 