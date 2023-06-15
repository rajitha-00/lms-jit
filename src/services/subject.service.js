import axios  from "axios";

const SUBJECT_BASE_URL = "https://localhost:44391/api/Subject";

export const  getSubjectById = async (id) => {
    const res = {result:null, error:null};
     await axios.get(`${SUBJECT_BASE_URL}/getSubjectById/${id}`)
     .then((data)=> res.result = data?.data)
     .catch((err) => {
    res.error=err.message;
   });
    return res;
}
export const  getAllSubjects = async () => {
     const res = {result:null, error:null};
    await axios.get(`${SUBJECT_BASE_URL}/getAllSubjects`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
         res.error=err.message;
  });
   return res;
}
export const  createSubject = async (sbjct) => {
     const res = {result:null, error:null};
    await axios.post(`${SUBJECT_BASE_URL}/create`,sbjct)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}

export const  updateSubject = async (sbjct) => {
     const res = {result:null, error:null};
    await axios.put(`${SUBJECT_BASE_URL}/update`,sbjct)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}
export const  deleteSubject = async (id) => {
     const res = {result:null, error:null};
    await axios.delete(`${SUBJECT_BASE_URL}/delete/${id}`)
    .then((data)=> res.result = data?.data)
    .catch((err) => {
   res.error=err.message;
  });
   return res;
}