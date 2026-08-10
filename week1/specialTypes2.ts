let patientRecord: any = "Ramesh";
console.log("Patient Name:", patientRecord);

patientRecord = 32;
console.log("Patient Age:", patientRecord);

let bloodGroup: unknown = "O+";

if (typeof bloodGroup === "string") {
    console.log("Blood Group:", bloodGroup);
}

function hospitalReport(): void {
    console.log("Hospital report generated.");
}

hospitalReport();