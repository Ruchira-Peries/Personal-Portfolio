import React from 'react'
import { projectsData } from './Data';

const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt='' className='work__img'/>
      <h3 className='work__title'>{item.title}</h3>
      <p className='work__subtitle'>{item.subtitle}</p>
      <p className='work__technologies'>{item.technologies}</p>
      <div className='work__icons'>
             {item.icons.map((icons, index) => (
                <a key={index} className='work__social' href={icons.href} target="_blank" rel="noopener noreferrer">
                    <i className={icons.iconClass}></i>
                </a>
            ))}
      </div>
    </div>
  )
}

export default WorkItems
