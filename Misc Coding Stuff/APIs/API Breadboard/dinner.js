


var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=06804,us&appid=cee88101192942cc1ddef8fb37f11635";

$.ajax({
url: queryURL,
method: "GET"
})
.then(function(response) {

//for (var i = 0; i < 5; i++){
//console.log(response.restaurants[i].restaurant.user_rating.aggregate_rating);
//console.log(response.restaurants[i].restaurant.timings);
//console.log(response.restaurants[i].restaurant.location.locality);
console.log(response)
//console.log(response.results[i].title)
//}
  
  
  
  


});
