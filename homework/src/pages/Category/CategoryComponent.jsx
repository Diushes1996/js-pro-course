import React from 'react';
import {AddCategory} from '../../Components/Category/AddCategory';
import {CategoryList} from '../../Components/Category/CategoryList';

export const CategoryComponent = () => {
    return(
        <>
            <AddCategory/>,
            <CategoryList/>
        </>
    )
}