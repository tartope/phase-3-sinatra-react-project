# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_28_135957) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "patient_floors", force: :cascade do |t|
    t.integer "floor_number"
    t.integer "room_number"
  end

  create_table "patients", force: :cascade do |t|
    t.string "patient_name"
    t.string "patient_diagnosis"
    t.integer "age"
    t.integer "patient_floor_id"
    t.integer "therapist_id"
  end

  create_table "therapists", force: :cascade do |t|
    t.string "name"
  end

end
