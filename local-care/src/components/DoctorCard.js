import femaleDoctor from '../images/female_doctor.webp';
import maleDoctor from '../images/male_doctor.webp'

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

export default function DoctorCard({ profile, index }){
    return <>
          <div key={index} style={styles.card}>
            
            <img style={styles.profileImage} src={(profile.gender === 'Male') ? maleDoctor : femaleDoctor} alt="image"/>
            
            <div style={styles.profileInfo}>
              <h3>{profile.name}</h3>
              <h4>{profile.fieldOfStudy}</h4>
              {/* <p>{profile.gender}</p> */}
              <p>Rating: {profile.starVal}</p>
              <p>Location: {profile.location}</p>
              <div style={styles.details}>
                <p>Years of experience: {profile.experience}</p>
                <p>Price per consultation: ${profile.price}</p>
                <p>Availability:</p>
                <div style={styles.availability}>
                  {
                    Object.keys(profile.availability).map((day, idx) => (
                        <span key={idx} style={styles.availabilityBadge}>{day}: {profile.availability[day][0]}-{profile.availability[day][1]}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
    </>
}