
import { MdClose } from "react-icons/md";


function BucketItem({item}) {
  return (
    <li>
      <div className="info">
        <h3>{item.name}</h3>
        <span className="cat">{item.category}</span>
      </div>
      <button type="button">
        <MdClose className="close"/>
      </button>
    </li>
  )
}

export default BucketItem
