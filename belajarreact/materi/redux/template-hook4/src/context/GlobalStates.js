import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
    article: []
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    const createArticle = (article) => {
        dispatch({
            type: 'CREATE_ARTICLE',
            payload: article
        })
    }

    const editArticle = (article) => {
        dispatch({
            type: 'EDIT_ARTICLE',
            payload: article
        })
    }

    const deleteArticle = (id) => {
        dispatch({
            type: 'DELETE_ARTICLE',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        article: state.article,
        createArticle,
        editArticle,
        deleteArticle
    }}>
        {children}
    </GlobalContext.Provider>)
}