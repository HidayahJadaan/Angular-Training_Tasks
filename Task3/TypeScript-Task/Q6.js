// Q6: Create a function that receives an object containing country and city as string
//then returns the name of city or country name if the city is null.
function getLocationInfo(location) {
    return location.city === null ? location.country : location.city;
}
var firstLocation = { country: "Jordan", city: "Amman" };
var secondLocation = { country: "Turky", city: null };
console.log(getLocationInfo(firstLocation));
console.log(getLocationInfo(secondLocation));
