function getMounth (n) {

  if (n === 1) {return ("January");}
  else if (n === 2) {return ("February");}
  else if (n === 3) {return ("March");}
  else if (n === 4) {return ("April");}
  else if (n === 5) {return ("May");}
  else if (n === 6) {return ("June");}
  else if (n === 7) {return ("July");}
  else if (n === 8) {return ("August");}
  else if (n === 9) {return ("September");}
  else if (n === 10) {return ("October");}
  else if (n === 11) {return ("November");}
  else if (n === 12) {return ("December");}
  else if (n >= 13 || n<=0 || isNaN(n)){return ("invalid data, please try again");}
}

module.exports = getMounth; 