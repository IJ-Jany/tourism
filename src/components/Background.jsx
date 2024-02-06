import React from 'react'
import './background.css'

const Background = () => {
  return (
   <div className={props.cName}>
    <img src={props.bannerimg} alt="#" />
    <div className='bannertext'>
<h1>{props.title} </h1>
<a href={props.url} className={props.btnclass}>{props.btntext}</a>
    </div>
   </div>
  )
}

export default Background;