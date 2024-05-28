'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://danildenha.github.io/website-portfolio/${src}?w=${width}&q=${quality || 75}`
}