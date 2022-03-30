class Therapist < ActiveRecord::Base
    has_many :patients
    has_many :patient_floors, through: :patients

end