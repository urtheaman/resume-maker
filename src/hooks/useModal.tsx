import { useState } from "react"
import { Dispatch, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

const useModal = () => {
    const [showModal, setShowModal] = useState(false)

    const Modal: React.FC<{children: ReactNode}> = ({children}) => {
        return createPortal(
          <div
            className={styles.modalContainer}
            onClick={(e) => setShowModal(false)}
          >
            <div
              className={styles.modalDiv}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={styles.modalBtn}
                onClick={(e) => setShowModal(false)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='1'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              {children}
            </div>
          </div>,
          document.getElementById('modal')!
        );
    }

    return [Modal, setShowModal]
}




export default useModal