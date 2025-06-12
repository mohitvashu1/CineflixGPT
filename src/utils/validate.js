export const  checkValidData=(email, password)=> {

const isEmailVaid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(!isEmailVaid) return "Email is not valid";
if(!isPasswordValid) return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
if(password.length < 8) return "Password must be at least 8 characters long";
if(password.length > 20) return "Password must be less than 20 characters long";
if(!email) return "Email is required";
if(!password) return "Password is required";

return null;
};  