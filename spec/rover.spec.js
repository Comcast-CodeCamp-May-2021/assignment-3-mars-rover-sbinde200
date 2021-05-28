const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  //TEST 7 
  it ("constructor sets position and default values for mode and generatorWatts", function() {

    let rover = new Rover(98382); 
    expect(rover.position)
    .toEqual(98382);
    expect(rover.mode)
    .toEqual("NORMAL");
    expect(rover.generatorWatts)
    .toEqual(110);
  });

  //TEST 8 - 
 it ("response returned by receiveMessage contains name of message", function() {

  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('First test', [new Command("STATUS_CHECK")]);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message);
  expect(response.message).toEqual('First test');
 });

  //   //TEST 9 
 it ("response returned by receiveMessage includes two results if two commands are sent in the message", function() {

  let commands = [new Command("MOVE", 20), new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")]
  // console.log(commands);
  let message = new Message('Test message with two commands', commands); //my example
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message);
  // console.log(response); 
  expect(response.message).toEqual(message.name)
 });

  //TEST 10
 it ("responds correctly to status check command", function() {

  let commands = [new Command('STATUS_CHECK')];
  let message = new Message('Test message with STATUS_CHECK command', commands);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message);

  let roverAnswer = {completed: true, roverStatus: {mode: rover.mode,  generatorWatts: rover.generatorWatts, position: rover.position}}
  // console.log(response.results);
  expect(response.results[0]).toEqual(roverAnswer);
 });

  // As per the Instructor and TA's we are only required to work up to test 10. I was working on 11 during this time. Thank you very much for doing this. 

  //   //TEST 11
  //  it ("responds correctly to mode change command", function() {
  //     let commands = [new Command("MOVE", 20), new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")]
  //     let message = new Message('Test message with two commands', commands); //my example
  //     let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  //     let response = rover.receiveMessage(message);
  // console.log(response.results);
  //   //  expect()
  // });
   

  //   //test 12
  //  it ("responds with false completed value when attempting to move in LOW_POWER mode", function() {});

  //   //test 13

  //  it ("responds with position for move command", function() {});

  // 7 tests here!

});