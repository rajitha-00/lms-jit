import axios  from "axios";

const TEACHER_BASE_URL = "https://localhost:44391/api/Teacher";

export const  getTeacherById = async (id) => {
    const res = {result:null, error:null};
     await axios.get(`${TEACHER_BASE_URL}/getTeacherById/${id}`)
     .then((data)=> res.result = data?.data)
     .catch((err) => {
    res.error=err.message;
   });
    return res;
}
export const  getAllTeachers = async () => {
     const res = {result:null, error:null};
    await axios.get(`${TEACHER_BASE_URL}/getAllTeachers`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
         res.error=err.message;
  });
   return res;
}
export const  createTeacher = async (tchr) => {
     const res = {result:null, error:null};
    await axios.post(`${TEACHER_BASE_URL}/create`,tchr)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}

export const  updateTeacher = async (tchr) => {
     const res = {result:null, error:null};
    await axios.put(`${TEACHER_BASE_URL}/update`,tchr)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}
export const  deleteTeacher = async (id) => {
     const res = {result:null, error:null};
    await axios.delete(`${TEACHER_BASE_URL}/delete/${id}`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}