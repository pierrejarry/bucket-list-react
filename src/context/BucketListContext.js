import { createContext, useState, useEffect } from "react";

const BucketListContext = createContext();

export const BucketListProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        await fetch('http://localhost:3004/list')
        .then((response) => response.json())
        .then((data) => {
            setList(data);
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
            console.log(data);
            setList(
                list.map(i => i.id === item.id ? {
                ...item, ...data
                } : item)
            );
            
        });
    }

    return <BucketListContext.Provider value={{
        isLoading,
        list,
        changeStatus
    }}>
        {children}
    </BucketListContext.Provider>
}

export default BucketListContext;