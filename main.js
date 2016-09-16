
// String.prototype.sucks = function(){
//   return this + " sucks";
// }

// Object Constructor (second part of lecture) 

function Beer( type, abv, brewery ) {
  this.type = type;
  this.abv = abv;
  this.brewery = brewery;
}
Beer.prototype.assessDanger = function() {
  if( this.abv >= 0.1 ) {
    return "Watch Out!";
  } else if( this.abv >= 0.05 ) {
    return "You may be buzzed";
  } else {
    return "This is like water";
  }
}

var millerLite = new Beer( "Pilsner", 0.042, "Miller" );
var tremens = new Beer( "Belgian", 0.1, "Huyghe" );

millerLite.assessDanger()








// Object Literal (first part of lecture)
var millerLite = {
  type: "Pilsner",
  abv: 0.042,
  brewery: "Miller",
  assessDanger: function(){
    if( this.abv >= 0.1 ) {
      return "Watch Out!";
    } else if( this.abv >= 0.5 ) {
      return "You may be buzzed";
    } else {
      return "This is like water";
    }
  }
};
var tremens = {
  type: "Belgian",
  abv: 0.1,
  brewery: "Huyghe",
  assessDanger: function(){
    if( this.abv >= 0.1 ) {
      return "Watch Out!";
    } else if( this.abv >= 0.5 ) {
      return "You may be buzzed";
    } else {
      return "This is like water";
    }
  }
};
function assessDanger(beer) {
  if( beer.abv >= 0.1 ) {
    return "Watch Out!";
  } else if( beer.abv >= 0.5 ) {
    return "You may be buzzed";
  } else {
    return "This is like water";
  }
}
console.log( assessDanger(millerLite) );
console.log( assessDanger(tremens) );


