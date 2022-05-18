import React from "react";

function Patient({ patient, handleDeletePatient }) {

    function handleDeleteClick(event) {
        // TODO: Delete the patient.
        
    }
    // console.log(patient)

    return(
        <tr className="">
            <td><button onClick={()=>handleDeletePatient(patient)}>Delete</button></td>
            <td>{patient.id}</td>
            <td>{patient.patient_name}</td>
            <td>{patient.patient_diagnosis}</td>
            <td>{patient.age}</td>
            <td>{patient.patient_floor.room_number}</td>
            <td>{patient.therapist.name}</td>
        </tr>
    )
}

export default Patient;