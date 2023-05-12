import { useEffect, useState, useRef } from "react"
import axios from "axios"
import config from '../../config'
import Alert3 from "../AlertsTeacher/Alert3"
import Alert from "../AlertsTeacher/Alert"
import Alert4 from "../AlertsTeacher/Alert4"


export default () => {
    let [teachers, setTeachers] = useState([])
    let [aler, setaler] = useState(false)
    let [aler1, setAler1] = useState(false)
    let [aler2, setAler2] = useState(false)
    let [form, setForm] = useState(false)
    let [id, setId] = useState(false)

    let inp1 = useRef(null)
    let inp2 = useRef(null)
    let inp3 = useRef(null)
    let inp4 = useRef(null)
    let inp5 = useRef(null)
    let inp6 = useRef(null)
    const fetchTeacher = async () => {
        let res = await axios.get(`${config.backApi}/teachers`)
        setTeachers(res.data.data);
    }
    useEffect(() => {
        fetchTeacher()
    }, [])
    async function Remove(id) {
        let res = await axios.delete(`${config.backApi}/teachers/${id}`)
        fetchTeacher()
        setaler(true)
        setTimeout(() => {
            setaler(false)
        }, 3000);
    }
    const editor = (id) => {
        setForm(true)
        setId(id)
    }

    async function Update() {
        if (inp1.current.value && inp2.current.value && inp3.current.value && inp4.current.value && inp5.current.value && inp6.current.value) {
            let user = {
                firstName: inp1.current.value,
                lastName: inp2.current.value,
                email: inp3.current.value,
                phone: +inp4.current.value,
                password: inp6.current.value,
                subject: inp5.current.value,
            }
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            let res = await axios.put(`${config.backApi}/teachers/${id}`, user, axiosConfig)
            fetchTeacher()
            setForm(false)
            setAler2(true)
            setTimeout(() => {
                setAler2(false)
            }, 3000);
        } else {
            setAler1(true)
            setTimeout(() => {
                setAler1(false)
            }, 3000);
        }
    }
    return (
        <>
            <Alert3 status={aler} />
            <Alert status={aler1} />
            <Alert4 status={aler2} />
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ism</th>
                        <th>Fam</th>
                        <th>Email</th>
                        <th>Tel</th>
                        <th>Fan</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((item, i) => {
                        return (
                            <tr key={i}>
                                <th scope='row'>{i + 1}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.subject}</td>
                                <td onClick={() => { Remove(item._id) }}><i className="fa-solid fa-trash-can"></i></td>
                                <td onClick={() => { editor(item._id) }}><i className="fa-solid fa-pen-to-square"></i></td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {form && <form className="row">
                <div className="mb-3 col-6" >
                    <label htmlFor="inp1" className="form-label">Ismi</label>
                    <input ref={inp1} type="text" className="form-control" id="inp1" />
                </div>
                <div className="mb-3 col-6" >
                    <label htmlFor="inp2" className="form-label">Familiya</label>
                    <input ref={inp2} type="text" className="form-control" id="inp2" />
                </div>
                <div className="mb-3 col-6" >
                    <label htmlFor="inp3" className="form-label">Email</label>
                    <input ref={inp3} type="email" className="form-control" id="inp3" />
                </div>
                <div className="mb-3 col-6" >
                    <label htmlFor="inp4" className="form-label">Tel</label>
                    <input ref={inp4} type="phone-number" className="form-control" id="inp4" />
                </div>
                <div className="mb-3 col-6" >
                    <label htmlFor="inp5" className="form-label">Fan</label>
                    <input ref={inp5} type="text" className="form-control" id="inp5" />
                </div>
                <div className="mb-3 col-6" >
                    <label htmlFor="inp6" className="form-label">Parol</label>
                    <input ref={inp6} type="password" autoComplete="on" className="form-control" id="inp6" />
                </div>

                <button type='button' onClick={Update} className="btn btn-success col-5 mx-3">Submit</button>
                <button type='button' onClick={() => { setForm(false) }} className="btn btn-danger col-5 mx-3">Cancel</button>
            </form>}
        </>
    )
}