import { useContext } from 'react';
import BucketListContext from '../context/BucketListContext';

function Modal(props) {
  const {toggleModal} = useContext(BucketListContext)

  return (
    <>
        <div className='backdrop' onClick={toggleModal}></div>
        <div className="modal">
            {props.children}
        </div>
    </>
  )
}

export default Modal
