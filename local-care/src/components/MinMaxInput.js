const styles = {
    container: {
        padding: "5px 10px",
        backgroundColor: "#e0e0e0",
        border: "1px solid #ccc",
        borderRadius: "5px",
    }, 
    input: {
        width: "30px"
    }
}

export default function MinMaxInput({ typeOfInput, changeMin, changeMax }){
    return <>
        <div style={styles.container}>
            <p>Min {typeOfInput}: <input style={styles.input} onChange={changeMin}/></p>
            <p>Max {typeOfInput}: <input style={styles.input} onChange={changeMax}/></p>
        </div>
    </>
}