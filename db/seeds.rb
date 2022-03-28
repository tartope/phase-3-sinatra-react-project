puts "Deleting old data..."
PatientFloor.destroy_all
Therapist.destroy_all
Patient.destroy_all

puts "🌱 Seeding floors..."

# Seed your database here
f1 = PatientFloor.create(floor_number: 4, room_number: 401)
f2 = PatientFloor.create(floor_number: 3, room_number: 301)
f3 = PatientFloor.create(floor_number: 2, room_number: 201)
f4 = PatientFloor.create(floor_number: 1, room_number: 101)

puts "Creating therapists..."
t1 = Therapist.create(name: "Rick")
t2 = Therapist.create(name: "Morty")
t3 = Therapist.create(name: "Mr. Meseeks")
t4 = Therapist.create(name: "Gazorpazop")

puts "Creating Patient..."
Patient.create(patient_name: "Smith", patient_diagnosis: "stroke", age: 80, patient_floor_id: f1.id, therapist_id: t1.id)
Patient.create(patient_name: "Jones", patient_diagnosis: "knee replacement", age: 60, patient_floor_id: f2.id, therapist_id: t2.id)
Patient.create(patient_name: "Johnson", patient_diagnosis: "hip replacment", age: 50, patient_floor_id: f3.id, therapist_id: t3.id)
Patient.create(patient_name: "James", patient_diagnosis: "asthma", age: 30, patient_floor_id: f4.id, therapist_id: t4.id)
Patient.create(patient_name: "Adams", patient_diagnosis: "heart attack", age: 55, patient_floor_id: f4.id, therapist_id: t4.id)
Patient.create(patient_name: "Williams", patient_diagnosis: "broken shoulder", age: 20, patient_floor_id: f3.id, therapist_id: t3.id)
Patient.create(patient_name: "Artope", patient_diagnosis: "broken leg", age: 18, patient_floor_id: f2.id, therapist_id: t2.id)


puts "✅ Done seeding!"
