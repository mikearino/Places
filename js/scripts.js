$(document).ready(function() {
  console.log("jQuery is workin'");
  $("#trout").click(function(){
    $(".trout").text("The best place to eat with your dad: " + town.landmark)
  })
  $("#Gresh").click(function(){
    $(".gresham").text("The best place to eat with your mom: " + town2.landmark)
  })
  $("#Ab").click(function(){
    $(".aberdeen").text("Hey check it out: " + town3.landmark + " is from this town")
  })
  $("#Me").click(function(){
    $(".medford").text("The best place to eat with your cat: " + town4.landmark)
  })
  $("#formOne").submit(function(event){
    event.preventDefault();
    console.log("uts wirjung")
  })
});




// Business logic for places

function Brocation () {
  this.towns = []
}

Brocation.prototype.addTown = function(town) {
  this.towns.push(town);
}



// business logic for towns
function Town(townName, stateName, landmark) {
  this.townName = townName,
  this.stateName = stateName,
  this.landmark = landmark
}
















var brocation = new Brocation();


var town = new Town ("Troutdale", "Oregon", "Ihop");
var town2 = new Town ("Gresham", "Oregon", "Dennys");
var town3 = new Town ("Aberdeen", "Washington", "Nirvana");
var town4 = new Town ("Medford", "Oregon", "In n Out");
