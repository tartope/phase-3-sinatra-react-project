import React, {useEffect, useState } from "react"
import './App.css';
import Header from '../components/Header';
import NewPatientForm from '../components/NewPatientForm';
import PatientList from '../components/PatientList';

const patientsAPI = 'http://localhost:9292/patients';

function Tracker() {

    const [patients, setPatients] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
    fetch(patientsAPI)
    .then(response => response.json())
    .then(patientsData =>{
      // console.log(patientsData)
    setPatients(patientsData)
    })
    }, [])

    function handleNewPatient(patient){
        fetch(patientsAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
        })
        .then(response => response.json())
        .then(json => {
        setPatients([...patients, json])
        })
        .catch(err => console.error(err))
    }

    function handleDeletePatient(deletedPatient){
        fetch(`${patientsAPI}/${deletedPatient.id}`, {
        method: 'DELETE'
        });
        const deletePatients = patients.filter(item => item.id !== deletedPatient.id)
        setPatients(deletePatients)
    }

    function handleSearch(searchText){
        setSearchText(searchText);
    }
    const filterPatients = patients.filter((patient)=>{
        const upperSearchText = searchText.toUpperCase();
        return patient.patient_name.toUpperCase().includes(upperSearchText);
    })

    return (
        <div className="root">
        <Header handleSearch={handleSearch} />
        <div id="newpatient">
            <NewPatientForm  handleNewPatient={handleNewPatient} /> 
            </div> 
            <div id="patientlist">
            <PatientList patients={filterPatients} handleDeletePatient={handleDeletePatient} />
        </div>
        </div>
    );
}

export default Tracker;