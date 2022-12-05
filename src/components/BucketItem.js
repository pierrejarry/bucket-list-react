
function BucketItem({item}) {
  return (
    <li>
      <p>{item.name}</p>
      <span className="cat">{item.category}</span>
    </li>
  )
}

export default BucketItem
