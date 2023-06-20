import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../App";

const useCreateModal = () => {
  const modal = useContext(ModalContext);
  const navigate = useNavigate();
  const handleClose = (e) => {
    setContxt((state) => ({ ...state, show: false }));
  };
  const handleShow = () => {
    setContxt((state) => ({ ...state, show: true }));
  };
  const [contxt, setContxt] = useState({
    handleClose: handleClose,
    handleShow: handleShow,
    show: false,
  });
  return contxt;
};

export default useCreateModal;
