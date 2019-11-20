// $(updateView)
// function updateView() {
//     alert("It's me, Mario!")
// }

// $.getJSON("https://zagster-service.herokuapp.com/rides/count", function(data) {
//     alert(JSON.stringify(data));
//     //alert(data.count);
//     console.log(data);
// });


const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  alert(numberOfRides);
  console.log(numberOfRides);
}