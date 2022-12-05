import { useContext } from 'react';
import BucketListContext from '../context/BucketListContext';

function Header() {

  const title = "My bucket list";
  const {toggleModal} = useContext(BucketListContext)

  return (
    <header>
      <h1>{title}</h1>
      <button type="button" className="btn secondary" onClick={toggleModal}>+ Create a new item</button>
    </header>
  )
}

export default Header
