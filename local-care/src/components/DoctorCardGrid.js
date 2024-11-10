import DoctorCard from "./DoctorCard";
import React, { useState } from "react";
import { filterResults } from "../backend/Backend";

export default function DoctorCardGrid({ defaultDoctors, filterFunction, filterParams }){
    const [doctors, setDoctors] = useState(defaultDoctors);

    const doFilter = (e) => {
        setDoctors(filterResults(
          filterParams.long,
          filterParams.lat,
          filterParams.radius,
          filterParams.fieldOfStudy,
          filterParams.availability,
          filterParams.minExp,
          filterParams.maxExp,
          filterParams.gender,
          filterParams.minStar,
          filterParams.maxStar,
          filterParams.minPrice,
          filterParams.maxPrice
        ));
      }    

    return <>
        <button style={styles.filterButton} onClick={doFilter}>Filter Doctors</button>
        <div style={styles.cardGrid}>
        {
          doctors.map((profile, index) => (<DoctorCard profile={profile} index={index} />))
        }
      </div>
    </>
}


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
      marginBottom: "10px"
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