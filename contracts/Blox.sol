pragma solidity ^0.4.11;

/* import zeppelin solidity if needed*/

contract Blox {

  struct musicEvent {
    address owner;
    uint ticketPrice;
    string eventName;
    string eventDescription;
    string eventLocation;
  }

  /*bytes32 musicEventHash;*/

  uint numEvents;
  mapping (uint => musicEvent) public allEvents;


  function newBlox(
    uint _ticketPrice,
    string _eventName,
    string _eventDescription,
    string _eventLocation
    ) public {

    numEvents++;
    musicEvent me = allEvents[numEvents];
    me.ticketPrice = _ticketPrice;
    me.eventName = _eventName;
    me.eventLocation = _eventLocation;
    me.eventDescription = _eventDescription;
  }
}
