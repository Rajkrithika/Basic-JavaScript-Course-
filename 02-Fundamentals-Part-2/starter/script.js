/*function describeCountry = ('country', 'population', 'capitalCountry') 
{
  console.log(country,population,capitalCountry);
  let 
}*/

function describeCountry(country,population,capitalCountry) {
    return(`${country} has ${population} million people and its capitalCity is ${capitalCountry}`)
}

let countryInfo = describeCountry("india", 4,"chennai") 
let country1 = describeCountry("USA",3,"Washington")
let country2 = describeCountry("Japan",7,"tokoyo")
console.log(countryInfo);
console.log(country1);
console.log(country2); 