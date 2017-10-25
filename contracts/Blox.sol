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

  uint numEvents = 0;
  mapping (uint => musicEvent) public allEvents;

  function createBlox(
    string _ticketPrice,
    string _eventName,
    string _eventDescription,
    string _eventLocation
    ) public {

    numEvents++;
    musicEvent memory me = musicEvent(msg.sender, _ticketPrice, _eventName, _eventDescription, _eventLocation);
    allEvents[numEvents] = me;

    newBlox(msg.sender, me.ticketPrice, me.eventName, me.eventDescription, me.eventLocation);
  }

  function getBlox(uint BloxId) public constant returns (
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
