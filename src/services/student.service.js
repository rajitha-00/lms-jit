import axios  from "axios";
import StudentsForm from "../components/forms/StudentsForm";

const STUDENT_BASE_URL = "https://localhost:44391/api/Student";

export const  getStudentById = async (id) => {
    const res = {result:null, error:null};
     await axios.get(`${STUDENT_BASE_URL}/getStudentById/${id}`)
     .then((data)=> res.result = data?.data)
     .catch((err) => {
    res.error=err.message;
   });
    return res;
}
export const  getAllStudents = async () => {
     const res = {result:null, error:null};
    await axios.get(`${STUDENT_BASE_URL}/getAllStudents`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
         res.error=err.message;
  });
   return res;
}
export const  createStudent = async (std) => {
     const res = {result:null, error:null};
    await axios.post(`${STUDENT_BASE_URL}/create`,std)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}

export const  updateStudent = async (std) => {
     const res = {result:null, error:null};
    await axios.put(`${STUDENT_BASE_URL}/update`,std)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}
export const  deleteStudent = async (id) => {
     const res = {result:null, error:null};
    await axios.delete(`${STUDENT_BASE_URL}/delete/${id}`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}