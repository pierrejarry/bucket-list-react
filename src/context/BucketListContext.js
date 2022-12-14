import { createContext, useState, useEffect } from "react";

const BucketListContext = createContext();

export const BucketListProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [hasFilter, setHasFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        await fetch('http://localhost:3004/list')
        .then((response) => response.json())
        .then((data) => {
            setList(data);
            setFilteredList(data);
            setIsLoading(false);
        });
    }

    const changeStatus = async (item) => {        
        await fetch(`http://localhost:3004/list/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...item,
                checked: !item.checked
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setList(
                list.map(i => i.id === item.id ? {
                ...i, ...data
                } : i)
            );
        });
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const addNewItem = async (item) => {
        await fetch(`http://localhost:3004/list/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then((response) => response.json())
        .then((data) => {
            setList([...list, data]
            );
            setShowModal(false);
        });
    }

    const removeItem = async (id) => {  
        await fetch(`http://localhost:3004/list/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setList(list.filter( item => item.id !== id))
        });
    }

    const showOnlyCategory = (cat) => {
        setFilteredList(filteredList.filter(item => item.category === cat))
        setHasFilter(true);
        setSelectedFilter(cat);
    }

    const removeFilter = () => {
        setHasFilter(false);
        setSelectedFilter(null);
        setFilteredList(list);
    }

    return <BucketListContext.Provider value={{
        isLoading,
        list,
        filteredList,
        showModal,
        hasFilter,
        selectedFilter,
        changeStatus,
        toggleModal,
        addNewItem,
        removeItem,
        showOnlyCategory,
        removeFilter
    }}>
        {children}
    </BucketListContext.Provider>
}

export default BucketListContext;