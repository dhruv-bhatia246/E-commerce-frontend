const baseURL = "https://e-commerce-rest-backend.herokuapp.com";
// const baseURL = "http://localhost:2000";
  
export const api = `${baseURL}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseURL}/public/${fileName}`
}