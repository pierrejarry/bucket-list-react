import { useState } from 'react'
import { useContext } from 'react';
import BucketListContext from '../context/BucketListContext';

function Form() {
    const [bucketItem, setBucketItem] = useState('');
    const [category, setCategory] = useState('');

    const {addNewItem} = useContext(BucketListContext);

    const newItem = {
        name: bucketItem,
        category: category,
        checked: false
    }

    const handleItem = (e) => {
        setBucketItem(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewItem(newItem);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='item'>What is the next thing you want to add to your Bucket List ?</label>
        <textarea 
            name="bucket-idea" 
            id="item"
            rows="4" 
            cols="50" 
            placeholder='Example: Ride the 66 road with Elon Musk on a Tesla'
            onChange={handleItem}
        >
        </textarea>
        <label htmlFor='category'>Please choose a category</label>
        <select onChange={handleCategory}>
            <option value=''>Please choose a category</option>
            <option value='career'>Career</option>
            <option value='family'>Family</option>
            <option value='food'>Food</option>
            <option value='growth'>Personal Growth</option>
            <option value='sentimental'>Sentimental Life</option>
            <option value='travel'>Travel</option>
        </select>
        <button type='submit' className='btn'>Add it!</button>
    </form>
  )
}

export default Form
