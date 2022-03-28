class Patient < ActiveRecord::Base
    belongs_to :patient_floor
    belongs_to :therapist 
end