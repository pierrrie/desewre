import Modal from "./modal";

interface LidBoolean {
    Open: boolean;
    Close: () => void;
}

function Lid({Open, Close}: LidBoolean) {


    if (!Open) {
        return null;
    }

  return (
    <div className="modal-backdrop">
        <Modal Close={Close} />
    </div>
  );
}

export default Lid;