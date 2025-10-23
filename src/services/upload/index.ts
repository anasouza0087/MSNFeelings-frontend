import axios from "axios"

export const uploadFileService = (file: File) => {
  const formData = new FormData()
  formData.append("image", file) // 👈 precisa ser "image" (igual no controller)

  return axios.post("http://localhost:5000/api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

// import axios from "axios";

// export const uploadFileService = (body: any) => {
//   return axios.post("http://localhost:5000/api/upload", body);
// };
