let markMass = 78;
let markHeight = 1.69;
let johnMass = 92; 
let johnHeight = 1.9; 
let johnBMI = (johnHeight * johnMass)/2;
let markBMI = (markHeight * markMass)/2;
// BMI = mass / height ** 2 = mass / (height * height) (mass in kgs / mass in height); 
let markHigherBMI = markBMI > johnBMI; 
console.log( markHigherBMI); 
