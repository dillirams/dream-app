import {create} from 'zustand'

interface Zustype{
    model:boolean|null,
    setModel:(bol:boolean)=>void
}


export const useDreamStore= create<Zustype>((set, get)=>({
    model:false,
    setModel:(bol)=>set({model:bol})
}))