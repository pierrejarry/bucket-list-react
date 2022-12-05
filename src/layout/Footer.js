import { useContext } from 'react';
import BucketListContext from '../context/BucketListContext';
import Modal from "../components/Modal";
import Form from '../components/Form';

function Footer() {
  const {showModal} = useContext(BucketListContext);
  
  return (
    <>
      {showModal && 
        <Modal>
            <h2 className='coloredText'>Add a new item</h2>
            <Form/>
        </Modal>
      }
      <footer>Footer...</footer>
    </>
  )
}

export default Footer
