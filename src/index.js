import React from 'react'

export const Player = ({ audioUrl }) => {
  return (
    <audio controls>
      <source src={audioUrl} type='audio/mp4' />
    </audio>
  )
}
