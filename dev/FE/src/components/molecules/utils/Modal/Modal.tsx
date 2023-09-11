import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Modal.module.scss';
import ModalContent from './ModalContent';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  toggle: () => void;
  label: string;
  onClick: () => void;
}

const Modal = ({
  className,
  toggle,
  isOpen,
  label,
  onClick,
}: ModalProps): JSX.Element => {
  return (
    <>
      {isOpen && (
        <div
          className={convertClassNameList(
            convertClassName(className, styles),
            styles['modal-overlay'],
          )}
          onClick={toggle}
        >
          <div
            className={convertClassNameList(styles['modal-box'])}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalContent
              className={className}
              label={label}
              onClick={onClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
