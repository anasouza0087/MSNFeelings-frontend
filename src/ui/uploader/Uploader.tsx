import { FaCameraRetro } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { useUploader } from "./useUploader.hook"
import { useEffect } from "react"

interface UploaderProps {
  onChange?: (fileUrl: string | null) => void
}

export const Uploader = ({ onChange }: UploaderProps) => {
  const {
    // file,
    setFile,
    preview,
    uploadedUrl,
    isUploading,
    uploadFile,
    removeFile,
  } = useUploader()

  // Atualiza form pai quando a URL do arquivo é obtida
  useEffect(() => {
    onChange?.(uploadedUrl || null)
  }, [uploadedUrl])

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // debugger
    const selectedFile = event.target.files?.[0] || null
    if (selectedFile) {
      setFile(selectedFile)
      await uploadFile(selectedFile)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <label
        htmlFor="fileInput"
        style={{
          backgroundColor: preview ? "transparent" : "#a6abb1",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          fontWeight: "bold",
          fontSize: 16,
          height: 80,
          width: 80,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "100%",
              opacity: isUploading ? 0.5 : 1,
            }}
          />
        ) : (
          <FaCameraRetro fontSize={40} />
        )}
      </label>

      {preview && (
        <button
          onClick={(e) => {
            e.preventDefault()
            removeFile()
          }}
          style={{
            position: "absolute",
            top: -5,
            right: -5,
            background: "#ff4d4d",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MdDelete fontSize={20} />
        </button>
      )}
    </div>
  )
}
