var Blox = artifacts.require("./Blox.sol");

contract('Blox', function(accounts) {

  it("should have data in each field for first event", async function() {

    let instance = await Blox.new({from: accounts[0]});

    let ticketPrice = "52343.95";
    let eventName = "BCGDV";
    let eventLocation = "Manhattan Beach";
    let eventDescription = "Nice office building near the beach";

    await instance.createBlox(ticketPrice, eventName, eventLocation, eventDescription);

    let selectedEvent = await instance.getBlox.call(1);

    console.log(selectedEvent[1]);

    let tp = selectedEvent[1];
    assert.isTrue(tp == 52343.95);

    let en = await selectedEvent[2];
    assert.isTrue(en == "BCGDV");

    let el = await selectedEvent[3];
    assert.isTrue(el == "Manhattan Beach");

    let ed = await selectedEvent[4];
    assert.isTrue(ed == "Nice office building near the beach");

    // instance.newBlox().watch(function(error, result) {
    //   if (!error) {
    //       console.log(result);
    //   } else {
    //       console.log("Error!" + error);
    //   }
    // })

  });

  it("should have data in each field for second event", async function() {

    let instance = await Blox.deployed();

    let ticketPrice = "400";
    let eventName = "DVolution";
    let eventLocation = "World Wide";
    let eventDescription = "On the Chain";

    await instance.createBlox(ticketPrice, eventName, eventLocation, eventDescription);

    let selectedEvent = await instance.getBlox.call(1);

    let tp = selectedEvent[1];
    assert.isTrue(tp == "400");

    let en = await selectedEvent[2];
    assert.isTrue(en == "DVolution");

    let el = await selectedEvent[3];
    assert.isTrue(el == "World Wide");

    let ed = await selectedEvent[4];
    assert.isTrue(ed == "On the Chain");

    // instance.newBlox().watch(function(error, result) {
    //   if (!error) {
    //       console.log(result);
    //   } else {
    //       console.log("Error!" + error);
    //   }
    // })

  });


})
