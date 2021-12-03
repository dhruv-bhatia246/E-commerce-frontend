const baseURL = "https://e-commerce-rest-backend.herokuapp.com";
  
export const api = `${baseURL}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseURL}/public/${fileName}`
}