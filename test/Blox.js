var Blox = artifacts.require("./Blox.sol");

contract('Blox', function(accounts) {

  let ticketPrice = "52343.95";
  let eventName = "BCGDV";
  let eventLocation = "Manhattan Beach";
  let eventDescription = "Nice office building near the beach";

  it("should have data in each field", async function() {

    let instance = await Blox.new({from: accounts[0]});

    await instance.createBlox(ticketPrice, eventName, eventLocation, eventDescription);

    let selectedEvent = await instance.getBlox.call(1);

    let tp = selectedEvent[1];
    assert.isTrue(tp == 52343.95);

    // let en = await instance.eventName.call();
    // assert.isTrue(en == "BCGDV");
    //
    // let el = await instance.eventLocation.call();
    // assert.isTrue(el == "Manhattan Beach");
    //
    // let ed = await instance.eventDescription.call();
    // assert.isTrue(ed == "Nice office building near the beach");
  });
})
