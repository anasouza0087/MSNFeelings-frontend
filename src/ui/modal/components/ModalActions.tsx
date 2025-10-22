export const ModalActions = ({ onClose, onSave }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 2,
        marginTop: 20,
      }}
    >
      <button
        onClick={onClose}
        style={{
          padding: 12,
          backgroundColor: "red",
          color: "#fff",
          marginRight: 6,
          width: 90,
        }}
      >
        Cancelar
      </button>
      <button
        onClick={onSave}
        style={{
          padding: 12,
          backgroundColor: "blue",
          color: "#fff",
          width: 90,
        }}
      >
        Salvar
      </button>
    </div>
  )
}
