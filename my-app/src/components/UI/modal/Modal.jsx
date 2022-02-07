import React from 'react';
import styles from './Modal.module.css'

const MyModal = ({children, modalVisible, setModalVisible}) => {
    const rootClasses = [styles.Modal]

    if (modalVisible === true ){
        rootClasses.push([styles.active])
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=> setModalVisible(false)}>
            <div className={styles.ModalContainer} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>

        </div>
    );
};

export default MyModal;
