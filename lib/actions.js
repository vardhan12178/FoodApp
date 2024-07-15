'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
function isInvalid(text){
return !text || text.trim()
}

export async function shareMeal(prevState,formData){
    
    const meal={
      title:formData.get('title'),
      instructions:formData.get('instructions'),
      summary:formData.get('summary'),
      image:formData.get('image'),
      creator:formData.get('name'),
    creator_email:formData.get('email')
  }
  if(isInvalid(meal.title)|| isInvalid(meal.instructions) || isInvalid(meal.summary) || isInvalid(meal.creator)||isInvalid(meal.creator_email)||!meal.creator_email.includes('@')||!meal.image||meal.image.size===0){
    return{
        message:"Invalid Input."
    };
  }
  await saveMeal(meal)
  revalidatePath('/meals')
  redirect('/meals')
}