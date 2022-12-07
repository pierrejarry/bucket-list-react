import { useContext } from 'react';
import BucketListContext from '../context/BucketListContext';
import BucketItem from './BucketItem';
import { MdClose } from "react-icons/md";


function BucketList() {
  const title = 'Here is your bucket list:'
  const {hasFilter, selectedFilter, isLoading, filteredList, removeFilter} = useContext(BucketListContext)

  const bucketList = filteredList.map( item => 
    <BucketItem key={item.id} item={item} />
  );

  if (!isLoading && (!filteredList || filteredList.length === 0)) {
    return <p>No item yet.</p>
  }
  
  return isLoading ? (
    <p>Loading...</p>
   ) : (
    <>
        <h2>{title}</h2>
        {hasFilter && <p>Filers applied: <span className='selected-filter'>{selectedFilter}<MdClose onClick={removeFilter}/></span></p>}
        <ul>
        {bucketList}
        </ul>
    </>
  )
}

export default BucketList
