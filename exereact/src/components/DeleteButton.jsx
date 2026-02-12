const DeleteButton = ({ onClick }) => {
  return (
    <button className="delete-btn" onClick={onClick} title="Supprimer">
      ✕
    </button>
  );
};

export default DeleteButton;