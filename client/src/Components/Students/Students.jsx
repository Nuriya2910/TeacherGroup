import { useEffect, useState } from "react"
import Nav from "../Nav"
import Table1 from "../Table/Table1"

export default () => {
    return (
        <>
            <Nav />
            <div className="container pt-5">
                <a href="/students/add" className="btn btn-primary mb-3">Add students</a>
                <h1 >All students</h1>
                <Table1/>
            </div>
        </>
    )
}