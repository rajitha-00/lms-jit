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
export const  getClassrroms = async () => {
     const res = {result:null, error:null};
    await axios.get(`${CLASSROOM_BASE_URL}/getClassrooms`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
         res.error=err.message;
  });
   return res;
}
export const  createClassroom = async (std) => {
     const res = {result:null, error:null};
    await axios.post(`${CLASSROOM_BASE_URL}/create`,std)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}

export const  updateClassroom = async (std) => {
     const res = {result:null, error:null};
    await axios.put(`${STUDENT_BASE_URL}/update`,std)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}
export const  deleteClassrrom = async (id) => {
     const res = {result:null, error:null};
    await axios.delete(`${CLASSROOM_BASE_URL}/delete/${id}`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}