import axios from "axios"

    const API = axios.create({ baseURL: "https://stackoverflowclonebackend-7ebc.onrender.com" })
    // const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);
export const sendOtp = (authData) => API.post('/user/sendotp', authData);
export const verifyOtp = (authData) => API.post('/user/verifyotp', authData);
// export const sendOtpEmail = (authData) => API.post('/user/sendotpemail', authData);
// export const verifyOtpEmail = (authData) => API.post('/user/verifyotpemail', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value , userId) => API.patch(`/questions/vote/${id}`, { value , userId })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId})
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers })

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
