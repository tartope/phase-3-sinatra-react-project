class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :patient_name
      t.string :patient_diagnosis
      t.integer :age
      t.integer :patient_floor_id
      t.integer :therapist_id
    end
  end
end
