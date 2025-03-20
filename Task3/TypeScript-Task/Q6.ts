// Q6: Create a function that receives an object containing country and city as string
//then returns the name of city or country name if the city is null.

function getLocationInfo(location: {
  country: string;
  city: string | null;
}): string {
  return location.city === null ? location.country : location.city;
}

const firstLocation  = {country:"Jordan", city:"Amman"}
const secondLocation = {country:"Turky", city:null}
console.log(getLocationInfo(firstLocation));
console.log(getLocationInfo(secondLocation));