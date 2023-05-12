import {Route, Routes} from 'react-router-dom'
import Index from "./Components/Index"
import Teachers from "./Components/Teachers/Teachers"
import AddTeachers from "./Components/Teachers/AddTeachers"
import AddStudents from "./Components/Students/AddStudents"
import Students from "./Components/Students/Students"
function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/teachers/add" element={<AddTeachers/>}/>
        <Route path="/students/add" element={<AddStudents/>}/>
        <Route path="/students" element={<Students/>}/>
      </Routes>
    </div>
  )
}

export default App
