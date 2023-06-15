import axios  from "axios";

const CLASSROOM_BASE_URL = "https://localhost:44391/api/Classroom";

export const  getClassroomById = async (id) => {
    const res = {result:null, error:null};
     await axios.get(`${CLASSROOM_BASE_URL}/getClassroomById/${id}`)
     .then((data)=> res.result = data?.data)
     .catch((err) => {
    res.error=err.message;
   });
    return res;
}
export const  getAllClassrooms = async () => {
     const res = {result:null, error:null};
    await axios.get(`${CLASSROOM_BASE_URL}/getAllClassrooms`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
         res.error=err.message;
  });
   return res;
}
export const  createClassroom = async (clsrm) => {
     const res = {result:null, error:null};
    await axios.post(`${CLASSROOM_BASE_URL}/create`,clsrm)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}

export const  updateClassroom = async (clsrm) => {
     const res = {result:null, error:null};
    await axios.put(`${CLASSROOM_BASE_URL}/update`,clsrm)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}
export const  deleteClassroom = async (id) => {
     const res = {result:null, error:null};
    await axios.delete(`${CLASSROOM_BASE_URL}/delete/${id}`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}