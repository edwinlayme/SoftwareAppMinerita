import React from 'react'
import useFetch from '../../hooks/useFetch';
import { urlApiItem } from '../../utils/importitems';
import Items from './items/Items';

export default function Inventario() {
    const item= useFetch(urlApiItem,null);
    return (
        <div>
            <Items items={item} />
        </div>
    )
}
