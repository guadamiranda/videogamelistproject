import CloseIcon from "@mui/icons-material/Close";
import "./modalAddGameToList.css";

const ModalAddGameToList = (setCloseModal: any) => {
  return (
      <div className="modal-overlay">
        <div className="modalAddGame">
          <div className="modalAddGameHeader d-flex justify-content-between">
            Añadir juego a listado
            <div onClick={() => setCloseModal.setCloseModal(false)}>
              <CloseIcon className="buttonCloseModal"/>
            </div>
          </div>
          <div className="modalAddGameBody gap-3 d-flex flex-column">
            <div className="buttonAddToList">Para jugar</div>
            <div className="buttonAddToList">Jugando</div>
            <div className="buttonAddToList">Finalizado</div>
          </div>
        </div>
      </div>
  );
};

export default ModalAddGameToList;
