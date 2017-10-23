pragma solidity ^0.4.11;

/* import zeppelin solidity if needed*/

contract Blox {

  struct musicEvent {
    address owner;
    string ticketPrice;
    string eventName;
    string eventDescription;
    string eventLocation;
  }

  /*bytes32 musicEventHash;*/

  uint numEvents = 0;
  mapping (uint => musicEvent) public allEvents;



  function createBlox(
    string _ticketPrice,
    string _eventName,
    string _eventDescription,
    string _eventLocation
    ) public {

    numEvents++;
    musicEvent me = allEvents[numEvents];
    me.owner = msg.sender;
    me.ticketPrice = _ticketPrice;
    me.eventName = _eventName;
    me.eventLocation = _eventLocation;
    me.eventDescription = _eventDescription;

    newBlox(msg.sender, me.ticketPrice, me.eventName, me.eventDescription, me.eventLocation);
  }

  function getBlox(uint BloxId) constant returns (
    address owner,
    string ticketPrice,
    string eventName,
    string eventDescription,
    string eventLocation) {
      return (
        allEvents[BloxId].owner,
        allEvents[BloxId].ticketPrice,
        allEvents[BloxId].eventName,
        allEvents[BloxId].eventDescription,
        allEvents[BloxId].eventLocation);
    }

  /*EVENTS*/
  event newBlox(address owner, string ticketPrice, string eventName, string eventDescription, string eventLocation);

}
