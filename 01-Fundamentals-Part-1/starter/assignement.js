const country = "india";
const continent = "asia";
let population = 3000000;
population+=1; 
// population = population + 1;
let isIsland = true;
let language;
let description = "'portugal is in euorpe, and its 11 million people speaks portugese'";
let averagepopulation = 3300000;
language = "chinese" ;
//console.log(population / 2);
// console.log(country);
// console.log(continent);
// console.log(language);
// console.log(isIsland);
let finland = 6000000; 
// console.log(population > finland);
// console.log(averagepopulation >  population); 
// console.log(description);
if(population > averagepopulation){
    console.log("india's population is above average!");
}
else {
    console.log("india's population is below average!");
}
// console.log( '9'-'5');
//console.log('19'-'13'+'17');
// console.log('123'< '57');
// console.log(5 + 6-'4'+ 9 - 4 - 2); 
//let numNeighbours = Number(prompt('how many neigbouring countries does your country have?'));
//if(numNeighbours===1){
  //  console.log("only one border");
//}
//else if(numNeighbours>1) {
  //  console.log("more than one border");
//} //else  
//{ 
    //console.log("no border");
//}
switch (language)
{ 
    case 'chinese':
    case 'mandrin': 

        console.log("most number of native speaker");
        break;
    case 'spanish':
        console.log("2nd in number of native speaker");
        break;
    case 'english':
        console.log("3rd in number of native speaker");
        break; 
    case 'hindi':
        console.log("4 number");
        break; 
    case 'arabic':
        console.log("5th most spoken language");
        break;
    default: 
        console.log("geat language too :)");                     

}