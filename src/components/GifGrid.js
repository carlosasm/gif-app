import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
        <h3 className="animate__animated animate__bounce"> { category } </h3>

        { loading && <p className="animate__animated animate__flash">Loading</p> }

        <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))    
                }
        </div>
        </>
    )
}

export default GifGrid

/** 
                    * Normal form and down there is with desestructuration
                    images.map( img => (
                        <li key={ img.id }>{ img.title }</li>
                    ))   
                    
                    images.map( ({ id, title }) => (
                        <li key={ id }>{ title }</li>
                    ))  
*/ 