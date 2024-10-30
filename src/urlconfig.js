const baseURL = "https://e-commerce-backend-umber-iota.vercel.app";
// const baseURL = "http://localhost:2000";
  
export const api = `${baseURL}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseURL}/public/${fileName}`
}