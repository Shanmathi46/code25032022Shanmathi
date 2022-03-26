const { count } = require("console");

let arr=[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, {"Gender": "Male", "HeightCm": 161,
"WeightKg":85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female",
"HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
{"Gender": "Female","HeightCm": 167, "WeightKg": 82}];

let bmicat=["Underweight", "Normal weight", "Overweight", "Moderately obese", "Severel obese", "Very severely obese"];
let healthrisk=["Malnutrition risk", "Low risk", "Enhanced risk", "Medium risk", "High", "Very high risk"]

arr.map((e)=>{
    e.bmi=e.WeightKg/(e.HeightCm*e.HeightCm/10000);
    if(e.bmi<18.4){
        e.bmicat=bmicat[0];
        e.healthrisk=healthrisk[0]
    }else if(e.bmi<24.9){
        e.bmicat=bmicat[1];
        e.healthrisk=healthrisk[1]
    }else if(e.bmi<29.9){
        e.bmicat=bmicat[2];
        e.healthrisk=healthrisk[2]
    }else if(e.bmi<34.9){
        e.bmicat=bmicat[3];
        e.healthrisk=healthrisk[3]
    }else if(e.bmi<39.9){
        e.bmicat=bmicat[4];
        e.healthrisk=healthrisk[4]
    }else{
        e.bmicat=bmicat[5];
        e.healthrisk=healthrisk[5]
    }
})
arr.forEach(e=>{
    console.log(`${e.bmi} ${e.bmicat} ${e.healthrisk}`)
})


findOverWeight=()=>{
    wcount=0;
    arr.forEach((person)=>{
        if(person.bmicat==="Overweight")
        wcount+=1;
    })
    return wcount;
}

console.log(findOverWeight())