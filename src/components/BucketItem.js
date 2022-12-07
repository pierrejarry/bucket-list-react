
import { MdClose } from "react-icons/md";
import { MdCheck } from 'react-icons/md';
import { useContext } from 'react';
import BucketListContext from '../context/BucketListContext';

function BucketItem({item}) {
  const {changeStatus, removeItem, showOnlyCategory} = useContext(BucketListContext);
  const btnLabel = item.checked ? 'Done' : 'Mark as Done'; 
  
  return (
    <li className={item.checked ? 'checked' : ''}>
      <div className="info">
        <h3>{item.name}</h3>
        <span className="cat" onClick={() => {showOnlyCategory(item.category)}}>{item.category}</span>
      </div>
      <div className="action">
        <button type="button" onClick={() => {changeStatus(item)}} className={`btn-label ${item.checked ? 'checked' : ''}`}>
            {btnLabel}
            <MdCheck/>
        </button>
        <button type="button">
            <MdClose onClick={() => {removeItem(item.id)}} className="close"/>
        </button>
      </div>
    </li>
  )
}

export default BucketItem
