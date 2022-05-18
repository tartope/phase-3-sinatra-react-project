import React from "react"

function NewPatientForm({ handleNewPatient }) {  

    function handleFormSubmit(event){
        event.preventDefault()
        
        const patienttName = event.target['patient-name'].value
        const diagnosis = event.target['diagnosis'].value
        const age = event.target['age'].value
        const room = event.target['room'].value
        const therapistName = event.target['therapist-name'].value
        
        const newPatient = {
            patient_name: patienttName,
            patient_diagnosis: diagnosis,
            age: age,
            patient_floor_id: room,
            therapist_id: therapistName
        };
        
        handleNewPatient(newPatient);
        
        event.target.reset();
    }

    return(   
        <>
            <form id="new-patient-form"  onSubmit={handleFormSubmit}>      
                <input id="patient-name" type="text" placeholder="Patient Name" />
                <input id="age" type="text" placeholder="Patient Age" />
                <label htmlFor="diagnosis">Diagnosis:</label>
                <select name="diagnosis" id="diagnosis" form="new-patient-form">
                    <option value="stroke">stroke</option>
                    <option value="knee_replacement">knee replacement</option>
                    <option value="hip_replacement">hip replacement</option>
                    <option value="asthma">asthma</option>
                    <option value="heart_attack">heart attack</option>
                    <option value="broken_shoulder">broken shoulder</option>
                    <option value="broken_leg">broken leg</option>
                </select>
                <label htmlFor="room">Room:</label>
                <select name="room" id="room" form="new-patient-form">
                    <option value="1">101</option>
                    <option value="2">201</option>
                    <option value="3">301</option>
                    <option value="4">401</option>
                </select>
                <label htmlFor="therapistname">Therapist:</label>
                <select name="therapist-name" id="therapist-name" form="new-patient-form">
                    <option value="1">Rick</option>
                    <option value="2">John</option>
                    <option value="3">Tunisia</option>
                    <option value="4">Evan</option>
                </select>
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;