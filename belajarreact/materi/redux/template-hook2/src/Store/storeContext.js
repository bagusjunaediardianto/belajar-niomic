import React, {createContext, useState} from 'react'

const storeContext =()=>{
    const DataContext = createContext();


    const DataProvider = (props)=>{
        const [dataValue, setDataValue] = useState(0);
        const changeDataValue =()=> setDataValue([2, 3, 4])

        const dataState = {
            dataValue,
            changeDataValue
        }
        return(
            <DataContext.Provider value={dataState}>
                {props.children}
            </DataContext.Provider>
        )
        }
        return {
            DataContext,
            DataProvider
        }   
    }

    export default storeContext();