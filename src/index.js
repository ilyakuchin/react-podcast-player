import React, { useState, useEffect } from 'react'

export const Player = ({ audioUrl }) => {
  const [podcast] = useState(new Audio(audioUrl.audioUrl))
  const [speed, setSpeed] = useState(podcast.playbackRate)
  const [currentPosition, setCurrentPosition] = useState(0)

  podcast.ontimeupdate = () => setCurrentPosition(podcast.currentTime)

  useEffect(() => {
    podcast.playbackRate = speed
  })

  const forward = (currentTime, forwardSeconds) => currentTime + forwardSeconds
  const backward = (currentTime, backwardSeconds) =>
    currentTime - backwardSeconds

  const switchPlaybackRate = (playbackRate) => {
    switch (playbackRate) {
      case 1:
        return 1.5
      case 1.5:
        return 1.75
      case 1.75:
        return 2
      default:
        return 1
    }
  }

  return (
    <div>
      <div>{currentPosition}</div>
      <button type='button' onClick={() => podcast.play()}>
        Play
      </button>
      <button type='button' onClick={() => podcast.pause()}>
        ||
      </button>
      <button
        type='button'
        onClick={() => {
          podcast.currentTime = forward(podcast.currentTime, 10)
        }}
      >
        +10
      </button>
      <button
        type='button'
        onClick={() => {
          setSpeed(switchPlaybackRate(speed))
        }}
      >
        Speed x{speed}
      </button>
      <button
        type='button'
        onClick={() => {
          podcast.currentTime = backward(podcast.currentTime, 10)
        }}
      >
        -10
      </button>
      <button
        type='button'
        onClick={() => {
          podcast.pause()
          podcast.currentTime = 0
        }}
      >
        Stop
      </button>
    </div>
  )
}
