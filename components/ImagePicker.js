'use client';
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import styles from './imagepicker.module.css'

const ImagePicker = ({label,name}) => {
    const[imagepicker,setImagePicker]=useState()
    const inputRef=useRef()
const handleChange=(event)=>{
    const file=event.target.files[0]
    const fileReader=new FileReader()
    fileReader.onload=()=>{
        setImagePicker(fileReader.result)
    };
    fileReader.readAsDataURL(file);

}

const handleClick=()=>{
    inputRef.current.click()
}

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
      <div className={styles.preview}>
        {!imagepicker && <p>No Image Picked yet</p>}
        {imagepicker && <Image src={imagepicker} alt="User Picked Image" fill/> }
      </div>
        <input onChange={handleChange} ref={inputRef} className={styles.input} id={name} type="file" accept="image/png, image/jpeg" name={name}/>
        <button onClick={handleClick} className={styles.button} type="button">Pick an Image</button>
      </div>

    </div>
  )
}

export default ImagePicker
