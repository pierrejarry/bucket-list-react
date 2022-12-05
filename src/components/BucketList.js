import { useContext } from 'react';
import BucketListContext from '../context/BucketListContext';

function BucketList() {
  const {isLoading, list} = useContext(BucketListContext)

  const bucketList = list.map( item => <li key={item.id}>{item.name}</li>)

  if (!isLoading && (!list || list.length === 0)) {
    return <p>No item yet.</p>
  }

  return isLoading ? (
    <p>Loading...</p>
   ) : (
    <ul>
      {bucketList}
    </ul>
  )
}

export default BucketList
