import { useState, useEffect } from "react"
import { uploadFileService } from "../../services"

export function useUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Cria preview local da imagem
  useEffect(() => {
    if (!file) {
      setPreview(null)
      return
    }

    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  const uploadFile = async (selectedFile) => {
    debugger
    if (!selectedFile) return

    setIsUploading(true)
    setError(null)

    try {
      //   const formData = new FormData()
      //   formData.append("file", selectedFile)

      const response = await uploadFileService(selectedFile)
      setUploadedUrl(response.data.imageUrl) // 👈 corresponde ao retorno do controller
      return response.data
    } catch (err: any) {
      console.error("Erro no upload:", err)
      setError("Falha ao enviar arquivo.")
    } finally {
      setIsUploading(false)
    }
  }

  const removeFile = () => {
    setFile(null)
    setUploadedUrl(null)
    setError(null)
  }

  return {
    file,
    setFile,
    preview,
    uploadedUrl,
    isUploading,
    error,
    uploadFile,
    removeFile,
  }
}
