/*Task 1
Earthquakes have a name, a mag (measured on the Richter scale) and a death toll (the number of people killed)
We need to calculate the deadliness of an earthquake by working out how many people died for each Richter point 
in the earthquake. */


//For a quake calculate the deaths for each point on the richter scale
function getDeathsPerRichter(quake) {
    // TODO : Use Math.round()
    quake.deathsPerRichter =  quake.deaths / quake.mag;
}


function formatQuake(quake) {
    return "country="+ quake.country+ " date="+ quake.date+" deaths="+ quake.deaths+ " mag="+ quake.mag+ " deaths per richter="+ quake.deathsPerRichter;
}

//Test data
var tests = true;
var quakes = [
    {"country":"USA",    "date":"2000/01/01", "mag":5, "deaths":0},
    {"country":"Iran",   "date":"2001/01/01", "mag":6, "deaths":6000},
    {"country":"Russia", "date":"2002/01/31", "mag":7, "deaths":3500}
    {"country":"Turkey", "date":"2003/01/31", "mag":6, "deaths":1198}
];
//The results we expect for each earthquake
var test_deaths_per_richters = [0, 1000, "fixme", 200];


//Go around each earthquake and calculate the DeathsPerRichter
for (var i = 0; i < quakes.length; i = i + 1) {
    var quake = quakes[i];
    getDeathsPerRichter(quake);
    //if we are running the tests, run them and show the results
    
    if(tests) {
        console.log(formatQuake(quake));
        console.log("Expected", test_deaths_per_richters[i], "got", quake.deathsPerRichter, "test", quake.deathsPerRichter === test_deaths_per_richters[i]?"Passed":"Failed");
    }
}

//Modern way to make new list for all the quakes that killed more than 200 people per Richter
//Define a function that returns true for things you want in the list and false for things to leave out
function killedOver200(quake) {
    return quake.deathsPerRichter;
}

//Array.filter takes a function as a parameter and returns an array that only includes the quakes that return true
var over200 = quakes.filter(killedOver200);

// TODO : tidy messages
if(tests) {
  if(over200.length == 2) {
      console.log("Pass - test data has 2 deadly earthquakes");
  } else {
      console.log("Fail - test data has 2 deadly earthquakes you have "+over200.length);
  } 
}

// What does .map(..) do?
var outputlines = over200.map(formatQuake);

//Print out the list
console.log("Quakes where over 200 people died per Richter Point")
console.log(outputlines.join("\n"));
