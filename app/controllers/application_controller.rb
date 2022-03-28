class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/patients' do 
    patient = Patient.all
    patient.to_json
  end

  post '/patients' do
    patient = Patient.create(
      patient_name: params[:patient_name],
      patient_diagnosis: params[:patient_diagnosis],
      age: params[:age],
      patient_floor_id: params[:patient_floor_id],
      therapist_id: params[:therapist_id]
    )
    patient.to_json
  end

  delete '/patients/:id' do
    patient = Patient.find(params[:id])
    patient.destroy
    patient.to_json
  end

end
