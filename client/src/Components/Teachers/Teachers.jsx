import { useEffect, useState, useRef } from "react"
import Nav from "../Nav"
import Table from "../Table/Table"

export default () => {
    return (
        <>
            <Nav />
            <div className="container pt-5">
                <a href="/teachers/add" className="btn btn-primary mb-3">Add teacher</a>
                <h1 >All teachers</h1>
                <Table />
            </div>
        </>
    )
}