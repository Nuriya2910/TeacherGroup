export default(data) =>{
    const style = {
        position: "absolute",
        top: "60px",
        right: data.status ? "0px" : "-100%",
        paddingRight: "100px",
        transition: "1s"
    }

    return(
        <div className={`alert alert-success`} style={style} role="alert">
            Teacher edited
        </div>
    )
}