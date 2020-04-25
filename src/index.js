import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ audioUrl }) => {
  return (
    <audio controls>
      <source src={audioUrl} type='audio/mp4' />
    </audio>
  )
}
