import React from 'react'
import loading from '../images/loading.gif';

export default function Loading(){
        return (
            <div className='text-center'>
                <img src={loading} alt='loading...'/>
            </div>
        )
}
