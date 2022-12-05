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

    return <BucketListContext.Provider value={{
        isLoading,
        list
    }}>
        {children}
    </BucketListContext.Provider>
}

export default BucketListContext;