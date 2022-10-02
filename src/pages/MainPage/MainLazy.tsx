import {lazy} from 'react';

export const MainLazy = lazy(()=> new Promise(res=>{
    // @ts-ignore
    setTimeout(()=>res(import('./Main')),1500)
}))