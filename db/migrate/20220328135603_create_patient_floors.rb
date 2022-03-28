class CreatePatientFloors < ActiveRecord::Migration[6.1]
  def change
    create_table :patient_floors do |t|
      t.integer :floor_number
      t.integer :room_number
    end
  end
end
