import { useEffect, useState } from "react"

export const Skeleton = () => {
  const [visible, setVisible] = useState(true)

  const styles = {
    height: 14,
    backgroundColor: "lightgrey",
    marginBottom: 8,
    opacity: visible ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
    borderRadius: 8,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        width: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "90%",
        }}
      >
        <div
          style={{
            ...styles,
            width: "60%",
          }}
        />
        <div
          style={{
            ...styles,
            width: "80%",
          }}
        />
        <div
          style={{
            ...styles,
            width: "100%",
          }}
        />
      </div>
    </div>
  )
}
