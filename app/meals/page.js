import MealsGrid from '@/components/MealsGrid'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import {getMeals} from '@/lib/meals.js'

const Meals = async() => {
    const meals=await getMeals();
  return (
    <>
    <header className={styles.header}>
        <h1>Delicious Meals, created{' '}<span className={styles.highlight}>by you</span></h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={styles.cta}>
            <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
    </header>
    <main className={styles.main}>
        <MealsGrid meals={meals}/>
    </main>
    </>
  )
}

export default Meals
