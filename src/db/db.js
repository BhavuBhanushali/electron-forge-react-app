const Database = require('better-sqlite3');


const dbusers = './alemhealth.sqlite3';
let db = new Database(dbusers);

let createStudyTable = "CREATE TABLE IF NOT EXISTS study (id SERIAL PRIMARY KEY, study_id VARCHAR(255), guid VARCHAR(255), sop_id VARCHAR(255), patient_id VARCHAR(255), patient_name VARCHAR(255), patient_gender VARCHAR(50), dob VARCHAR(50), age VARCHAR(50), patient_tel_no VARCHAR(50), mod VARCHAR(50), images INTEGER, status VARCHAR(50), uploaded_by_source VARCHAR(255), study_date DATE, study_time DATE, study_description TEXT, body_part_examined VARCHAR(255), referring_physician_name VARCHAR(255), referring_physician_facility VARCHAR(255), additional_patient_history VARCHAR(255), preview_link TEXT, createdAt DATE DEFAULT CURRENT_DATE, updatedAt DATE DEFAULT CURRENT_DATE);"

db.exec(createStudyTable);
module.exports = db