
import { MdClose } from "react-icons/md";
import { MdCheck } from 'react-icons/md';

function BucketItem({item}) {
  const btnLabel = item.checked ? 'Done' : 'Mark as Done'; 
  
  return (
    <li className={item.checked && 'checked'}>
      <div className="info">
        <h3>{item.name}</h3>
        <span className="cat">{item.category}</span>
      </div>
      <div className="action">
        <button type="button" className={`btn-label ${item.checked ? 'checked' : ''}`}>
            {btnLabel}
            <MdCheck/>
        </button>
        <button type="button">
            <MdClose className="close"/>
        </button>
      </div>
    </li>
  )
}

export default BucketItem
