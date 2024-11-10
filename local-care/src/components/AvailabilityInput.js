
const styles = {
    container: {
        padding: "5px 10px",
        backgroundColor: "#e0e0e0",
        border: "1px solid #ccc",
        borderRadius: "5px",
    }, 
    input: {
        width: '35px'
    }
}

export default function AvailabilityInput({ changeFunction }){

    const changeSundayStart = (e) => changeFunction(e, 'Sunday', 0);
    const changeSundayEnd   = (e) => changeFunction(e, 'Sunday', 1);
    
    const changeMondayStart = (e) => changeFunction(e, 'Monday', 0);
    const changeMondayEnd   = (e) => changeFunction(e, 'Monday', 1);

    const changeTuesdayStart = (e) => changeFunction(e, 'Tuesday', 0);
    const changeTuesdayEnd   = (e) => changeFunction(e, 'Tuesday', 1);

    const changeWednesdayStart = (e) => changeFunction(e, 'Wednesday', 0);
    const changeWednesdayEnd   = (e) => changeFunction(e, 'Wednesday', 1);

    const changeThursdayStart = (e) => changeFunction(e, 'Thursday', 0);
    const changeThursdayEnd   = (e) => changeFunction(e, 'Thursday', 1);

    const changeFridayStart = (e) => changeFunction(e, 'Friday', 0);
    const changeFridayEnd   = (e) => changeFunction(e, 'Friday', 1);

    const changeSaturdayStart = (e) => changeFunction(e, 'Saturday', 0);
    const changeSaturdayEnd   = (e) => changeFunction(e, 'Saturday', 1);

    return <>
        <div style={styles.container}>
            <p>
                Sunday: <input style={styles.input} onChange={changeSundayStart} />- 
                        <input style={styles.input} onChange={changeSundayEnd} />
            </p>
            <p>
                Monday: <input style={styles.input} onChange={changeMondayStart} />- 
                        <input style={styles.input} onChange={changeMondayEnd} />
            </p>
            <p>
                Tuesday: <input style={styles.input} onChange={changeTuesdayStart} />- 
                         <input style={styles.input} onChange={changeTuesdayEnd} />
            </p>
            <p>
                Wednesday: <input style={styles.input} onChange={changeWednesdayStart} />- 
                           <input style={styles.input} onChange={changeWednesdayEnd} />
            </p>
            <p>
                Thursday: <input style={styles.input} onChange={changeThursdayStart} />- 
                          <input style={styles.input} onChange={changeThursdayEnd} />
            </p>
            <p>
                Friday: <input style={styles.input} onChange={changeFridayStart} />- 
                        <input style={styles.input} onChange={changeFridayEnd} />
            </p>
            <p>
                Saturday: <input style={styles.input} onChange={changeSaturdayStart} />- 
                          <input style={styles.input} onChange={changeSaturdayEnd} />
            </p>
        </div>
    </>
}