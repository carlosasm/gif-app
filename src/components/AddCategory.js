import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    /**
     * 
     * @param {*} e Function event
     * We get the prop setCategories and call that function and add our inputValue
     */
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategories( categories => [ inputValue, ...categories ]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                 value={ inputValue }
                 onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;