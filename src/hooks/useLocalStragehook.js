import React, { useEffect, useState } from 'react'
const prefix='codepen'
function useLocalStragehook(key,initval) {
    const prefix_key=prefix+key
    console.log(prefix_key)
    const [value,setvalue]=useState(()=>{
        const json=localStorage.getItem(prefix_key)
        if(json!=null) return JSON.parse(json)
        if(typeof initval==='function'){
            return initval()
        }
        else{
            return initval
        }
    })
    useEffect(()=>{
        localStorage.setItem(prefix_key,JSON.stringify(value))
    },[ prefix_key, value])
  return [value,setvalue];
}

export default useLocalStragehook