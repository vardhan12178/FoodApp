import sql from 'better-sqlite3';
import { sendError } from 'next/dist/server/api-utils';
import { S3 } from '@aws-sdk/client-s3';
import fs from 'node:fs'
import slugify from 'slugify';
import xss from 'xss';

const s3 = new S3({
  region: 'us-east-1'
});
const db = sql('meals.db');

export async function getMeals() {
  
  return db.prepare('SELECT * FROM meals').all();
};
export function getMeal(slug){
    return db.prepare('SELECT * from meals where slug=?').get(slug)
};

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
 
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
 
  const bufferedImage = await meal.image.arrayBuffer();
 
  s3.putObject({
    Bucket: 'vardhan-nextjs-demo-users-image',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });
 
 
  meal.image = fileName;
 
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}