import React from 'react'
import MealItem from './MealItem'
import styles from './meals.module.css'

const MealsGrid = ({meals}) => {
  return (
    <ul className={styles.meals}>
        {meals.map(meal=>
            <li key={meal.id}><MealItem {...meal}/></li>
        )}
    </ul>
  )
}

export default MealsGrid
