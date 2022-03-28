class PatientFloor < ActiveRecord::Base
    has_many :patients 
    has_many :therapists, through: :patients
end