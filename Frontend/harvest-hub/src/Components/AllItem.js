import React from 'react'
import Seeds from './Seeds'
import Fruits from './Fruits'
import Vegetables from './Vegetables'
import Fertilizer from './Fertilizer'

export default function AllItem(){
    return(
        <div>
            <Seeds/>
            <Vegetables/>
            <Fruits/>
            <Fertilizer/>
        </div>
    )
}