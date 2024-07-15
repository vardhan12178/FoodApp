import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import {getMeal} from '@/lib/meals.js'
import { notFound } from 'next/navigation'

const MealsDetails = ({params}) => {
    const meal=getMeal(params.slug)
    if(!meal){
        notFound();
    }
     meal.instructions=meal.instructions.replace(/\n/g,'<br/>');
  return (
    <>
    <header className={styles.header}>
        <div className={styles.image}><Image
  src={`https://vardhan-nextjs-demo-users-image.s3.amazonaws.com/${meal.image}`}
  alt={meal.title}
  fill
/></div>
        <div className={styles.headerText}>
            <h1>{meal.title}</h1>
            <p className={styles.creator}>by <a href={`mailto ${meal.creator_email}`}>{meal.creator}</a></p>
            <p className={styles.summary}>{meal.summary}</p>
            </div>
    </header>
    <main>
    <p className={styles.instructions} dangerouslySetInnerHTML={{
        __html:meal.instructions,
        }}></p>
    </main>
    </>
  )
}

export default MealsDetails
