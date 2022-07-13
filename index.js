function shout(string) {
    return "Hello".toUpperCase();
}

function whisper(string) {
    return "HELLO".toLowerCase();
}

function logShout(string) {
    console.log('hello'.toUpperCase());
}

function logWhisper (string){
    console.log('hello'.toLowerCase());
}

function sayHiToHeadphonedRoommate (string) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cantUnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === string) {
      return lovUnswer
    }
  }