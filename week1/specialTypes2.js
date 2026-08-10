"use strict";
let patientRecord = "Ramesh";
console.log("Patient Name:", patientRecord);
patientRecord = 32;
console.log("Patient Age:", patientRecord);
let bloodGroup = "O+";
if (typeof bloodGroup === "string") {
    console.log("Blood Group:", bloodGroup);
}
function hospitalReport() {
    console.log("Hospital report generated.");
}
hospitalReport();
