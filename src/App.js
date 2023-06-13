import { Route, Routes } from "react-router-dom";
import NavbarLms from "./components/NavbarLms";
import Dashboard from "./views/Dashboard"
import StudentsReport from "./views/StudentsReport";
import Students from "./views/Students";
import Subjects from "./views/Subjects";
import Teachers from "./views/Teachers";
import ClassRooms from "./views/ClassRooms";
import AssignClass from "./views/AssignClass";
import AssignSubject from "./views/AssignSubject";


function App() {
  return (
    <>
      <NavbarLms />
      <Routes>
        <Route path='/' element= {<Dashboard/>}/>
        <Route path='/students' element= {<Students/>}/>
        <Route path='/stdentreport' element= {<StudentsReport/>}/>
        <Route path='/subjects' element= {<Subjects/>}/>
        <Route path='/teachers' element= {<Teachers/>}/>
        <Route path='/classes' element= {<ClassRooms/>}/>
        <Route path='/assignclass' element= {<AssignClass/>}/>
        <Route path='/assignsubject' element= {<AssignSubject/>}/>
      </Routes>
    </>
  );
}

export default App;
