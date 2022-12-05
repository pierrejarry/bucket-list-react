import { useContext } from 'react';
import BucketListContext from '../context/BucketListContext';
import BucketItem from './BucketItem';

function BucketList() {
  const title = 'Here is your bucket list:'
  const {isLoading, list} = useContext(BucketListContext)

  const bucketList = list.map( item => 
    <BucketItem key={item.id} item={item} />
  );

  if (!isLoading && (!list || list.length === 0)) {
    return <p>No item yet.</p>
  }

  return isLoading ? (
    <p>Loading...</p>
   ) : (
    <>
        <h2>{title}</h2>
        <ul>
        {bucketList}
        </ul>
    </>
  )
}

export default BucketList
