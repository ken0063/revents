import { useSelector } from 'react-redux';
import { Login, SignUp } from '../../auth/index';
import { TestModal } from '../../features';

const ModalController = () => {
  const modalLookUp = { TestModal, Login, SignUp };

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
