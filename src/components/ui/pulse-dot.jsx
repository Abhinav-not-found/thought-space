"use client"

const PulseDot = ({  }) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
      className='ring-container'
      role='button'
      aria-label='Dismiss developer note indicator'
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClose()}
    >
      <div className='ringing'></div>
      <div className='circle'></div>
    </div>
  )
}

export default PulseDot
