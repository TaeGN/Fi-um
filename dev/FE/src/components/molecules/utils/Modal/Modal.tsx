import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  toggle: () => void;
  children: JSX.Element;
}

const Modal = ({
  className,
  toggle,
  isOpen,
  children,
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
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
