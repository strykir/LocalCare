
import './App.css';
import DoctorCard from './components/DoctorCard.js';
import MinMaxInput from './components/MinMaxInput.js';
import Select from 'react-select';
import { filterResults } from './backend/Backend.js';

import React, { useState } from "react";
import DoctorCardGrid from './components/DoctorCardGrid.js';
// import AvailabilityInput from './components/AvailabilityInput.js';

// Sample data for demonstration
var sampleData = [];

const doctorOptions = [
  {value: "Any", label: "Any"},
  {value: "Dermatology", label: "Dermatology"},
  {value: "Gastroenterology", label: "Gastroenterology"},
  {value: "Urology", label: "Urology"},
  {value: "Oncology", label: "Oncology"},
  {value: "Nephrology", label: "Nephrology"},
  {value: "Otolaryngology", label: "Otolaryngology"},
  {value: "Psychiatry", label: "Psychiatry"},
  {value: "Ophthalmology", label: "Ophthalmology"},
  {value: "Rheumatology", label: "Rheumatology"},
  {value: "Cardiology", label: "Cardiology"},
  {value: "Pulmonology", label: "Pulmonology"},
  {value: "Pediatrics", label: "Pediatrics"},
  {value: "Neurology", label: "Neurology"},
  {value: "Pathology", label: "Pathology"},
  {value: "Endocrinology", label: "Endocrinology"},
  {value: "Immunology", label: "Immunology"},
  {value: "Hematology", label: "Hematology"},
  {value: "Radiology", label: "Radiology"},
  {value: "Orthopedics", label: "Orthopedics"},
  {value: "Geriatrics", label: "Geriatrics"}
];

const genderOptions = [
  {value: "Male", label: "Male"},
  {value: "Female", label: "Female"},
  {value: "Any", label: "Any"}
];

const defaultFilterOptions = {
  long: 0,
  lat:  0,
  radius: 0,
  fieldOfStudy: 'Any',
  availability: {},
  minExp: 0, 
  maxExp: 100,
  gender: 'Any',
  minStar: 0, 
  maxStar: 5,
  minPrice: 0, 
  maxPrice: 10000
};

let filterOptions = defaultFilterOptions;

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const doctorOptionHandleChange = (e) => {
  filterOptions.fieldOfStudy = e.value;
}

const genderOptionHandleChange = (e) => {
  filterOptions.gender = e.value;
}

const minExpHandleChange = (e) => {
  if (e.target.value === '') return;
  if (isNumeric(e.target.value))
    filterOptions.minExp = parseFloat(e.target.value);
};

const maxExpHandleChange = (e) => {
  if (e.target.value === '') return;
  if (isNumeric(e.target.value))
    filterOptions.maxExp = parseFloat(e.target.value);
  console.log(filterOptions);
};

const minStarHandleChange = (e) => {
  if (e.target.value === '') return;
  if (isNumeric(e.target.value))
    filterOptions.minStar = parseFloat(e.target.value);
};

const maxStarHandleChange = (e) => {
  if (e.target.value === '') return;
  if (isNumeric(e.target.value))
    filterOptions.maxStar = parseFloat(e.target.value);
  console.log(filterOptions);
};

const minPriceHandleChange = (e) => {
  if (e.target.value === '') return;
  if (isNumeric(e.target.value))
    filterOptions.minPrice = parseFloat(e.target.value);
};

const maxPriceHandleChange = (e) => {
  if (e.target.value === '') return;
  if (isNumeric(e.target.value))
    filterOptions.maxPrice = parseFloat(e.target.value);
  console.log(filterOptions);
};

function validTime(timeString){
  let regex = new RegExp('\d\d:\d\d');
  return regex.test(timeString);
}

// startOrEnd = 0 -> start
// startOrEnd = 1 -> end
const dayTimeChange = (e, day, startOrEnd) => {
  if (e.target.value === '') delete filterOptions.availability[day];
  if (!validTime(e.target.value)) return;
  filterOptions.availability[day][startOrEnd] = e.target.value;
}

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.filters}>
        {/* <button style={styles.filterButton}>Symptom</button> */}
        {/* <button style={styles.filterButton}>Location</button> */}

        <div>
          <div style={{padding: "5px"}}>
          <Select options={doctorOptions} onChange={doctorOptionHandleChange}/>
          </div>
          <div style={{padding: "5px"}}>
            <Select options={genderOptions} onChange={genderOptionHandleChange} />
          </div>
        </div>

        <MinMaxInput typeOfInput={"Exp"} changeMin={minExpHandleChange} changeMax={maxExpHandleChange}/>
        <MinMaxInput typeOfInput={"Rating"} changeMin={minStarHandleChange} changeMax={maxStarHandleChange} />
        <MinMaxInput typeOfInput={"Price"} changeMin={minPriceHandleChange} changeMax={maxPriceHandleChange} />
        {/* <AvailabilityInput changeFunction={ dayTimeChange }/> */}
        {/* <button style={styles.sortButton}>Sort by</button> */}
      </div>

      <DoctorCardGrid defaultDoctors={sampleData} filterFunction={filterResults} filterParams={filterOptions}/>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  filterButton: {
    padding: "10px 20px",
    backgroundColor: "#e0e0e0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  sortButton: {
    padding: "10px 20px",
    backgroundColor: "#e0e0e0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginLeft: "auto",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    gap: "10px",
  },
  profileImage: {
    width: "80px",
    height: "80px",
    backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  profileInfo: {
    flex: 1,
  },
  details: {
    marginTop: "10px",
  },
  availability: {
    display: "flex",
    gap: "5px",
    flexWrap: "wrap",
  },
  availabilityBadge: {
    backgroundColor: "#d0d0d0",
    padding: "5px 10px",
    borderRadius: "5px",
  },
};

export default App;
