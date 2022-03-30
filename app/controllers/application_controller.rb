class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/patients' do 
    patient = Patient.all
    patient.to_json(
      include: {
        therapist: { only: [:name] },
        patient_floor: { only: [:room_number] }
      }
    )
  end

  post '/patients' do
    patient = Patient.create(
      patient_name: params[:patient_name],
      patient_diagnosis: params[:patient_diagnosis],
      age: params[:age],
      patient_floor_id: params[:patient_floor_id],
      therapist_id: params[:therapist_id]
    )
    patient.to_json(
      include: {
        therapist: { only: [:name] },
        patient_floor: { only: [:room_number] }
      }
    )
  end

  delete '/patients/:id' do
    patient = Patient.find(params[:id])
    patient.destroy
    patient.to_json
  end

  get '/patient_floors' do  
    patient_floors = PatientFloor.all
    patient_floors.to_json
  end

  post '/patient_floors' do
    patient_floor = PatientFloor.create(
      floor_number: params[:floor_number],
      room_number: params[:room_number]
    )
    patient_floor.to_json
  end

  delete '/patient_floors/:id' do
    patient_floor = PatientFloor.find(params[:id])
    patient_floor.destroy
    patient_floor.to_json
  end

  get '/therapists' do  
    therapists = Therapist.all
    therapists.to_json
  end

  post '/therapists' do
    therapist = Therapist.create(
      name: params[:name]
    )
    therapist.to_json
  end

  delete '/therapists/:id' do
    therapist = Therapist.find(params[:id])
    therapist.destroy
    therapist.to_json
  end

end
