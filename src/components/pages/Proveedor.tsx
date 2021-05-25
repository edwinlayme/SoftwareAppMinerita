import React from 'react'
import useFetch from '../../hooks/useFetch';
import { urlApiProvider } from '../../utils/importproviders';
import Providers from './providers/Providers'

export default function Proveedor() {
    const provider=useFetch(urlApiProvider,null);
    return (
        <div>
            <Providers providers={provider}/>
        </div>
    )
}
