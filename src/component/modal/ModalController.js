import { useSelector } from 'react-redux';
import Login from '../../auth/Login';
import { TestModal } from '../../features';

const ModalController = () => {
  const modalLookUp = { TestModal, Login };

  const currentModal = useSelector((state) => state.modals);

  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookUp[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default ModalController;
