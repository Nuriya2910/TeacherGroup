import { useRef, useState } from "react"
import Nav from "../Nav"
import axios from "axios"
import config from '../../config'
import Alert from "../AlertsStudents/Alert"
import Alert2 from "../AlertsStudents/Alert2"

export default () => {
    const [aler, setAler] = useState(false)
    const [aler2, setAler2] = useState(false)

    let inp1 = useRef(null)
    let inp2 = useRef(null)
    let inp3 = useRef(null)
    let inp4 = useRef(null)
    let inp5 = useRef(null)
    let inp6 = useRef(null)
    const checkInp = async () => {
        if (inp1.current.value === "" || inp2.current.value === "" || inp3.current.value === "" || inp4.current.value === "" || inp5.current.value === "" || inp6.current.value === "") {
            setAler(true)
            setTimeout(() => {
                setAler(false)
            }, 3000);
        } else {
            let user = {
                firstName: inp1.current.value,
                lastName: inp2.current.value,
                email: inp3.current.value,
                phone: +inp4.current.value,
                password: inp6.current.value,
                parentsPhone: inp5.current.value,
            }
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            let res = await axios.post(`${config.backApi}/students`, user, axiosConfig)
            setAler2(true)
            setTimeout(() => {
                setAler2(false)
            }, 3000);
        }
        inp1.current.value = ""
        inp2.current.value = ""
        inp3.current.value = ""
        inp4.current.value = ""
        inp5.current.value = ""
        inp6.current.value = ""
    }
    return (
        <>
            <Nav />
            <Alert status={aler} />
            <Alert2 status={aler2}/>
            <div className="container pt-5">
                <h1 className="mb-5">Add students</h1>

                <form className="row">
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
                        <input ref={inp4} type="text" className="form-control" id="inp4" />
                    </div>
                    <div className="mb-3 col-6" >
                        <label htmlFor="inp5" className="form-label">Onasining teli</label>
                        <input ref={inp5} type="text" className="form-control" id="inp5" />
                    </div>
                    <div className="mb-3 col-6" >
                        <label htmlFor="inp6" className="form-label">Parol</label>
                        <input ref={inp6} type="password" autoComplete="on" className="form-control" id="inp6" />
                    </div>

                    <button type='button' onClick={checkInp} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}