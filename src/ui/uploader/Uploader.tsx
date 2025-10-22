import { useState, useEffect } from "react"
import { FaCameraRetro } from "react-icons/fa"
import { MdDelete, MdFileUpload } from "react-icons/md"

export const Uploader = () => {
  const [file, setFile] = useState<File | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detecta tamanho da tela
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600)
    handleResize() // roda na montagem
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0] || null
    setFile(selectedFile)
  }

  console.log(file)

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <label
        htmlFor="fileInput"
        style={{
          backgroundColor: "#a6abb1",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          fontWeight: "bold",
          fontSize: 16,
          padding: isMobile ? 8 : "8px 16px",
          height: 80,
          width: 80,
          gap: 8,
        }}
      >
        {file ? (
          isMobile ? (
            <MdDelete
              fontSize={24}
              onClick={(e) => {
                e.preventDefault()
                setFile(null)
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: 120,
                }}
              >
                {file.name}
              </span>
              <MdDelete
                fontSize={20}
                onClick={(e) => {
                  e.preventDefault()
                  setFile(null)
                }}
              />
            </div>
          )
        ) : isMobile ? (
          <MdFileUpload fontSize={24} />
        ) : (
          <FaCameraRetro fontSize={40} />
        )}
      </label>
    </div>
  )
}
