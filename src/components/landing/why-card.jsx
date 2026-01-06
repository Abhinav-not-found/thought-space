const Card = ({ title, description, icon }) => {
  return (
    <div className='h-68 w-76 rounded-xl border p-6 flex flex-col gap-3 shadow-md inset-shadow-2xs inset-shadow-neutral-200 relative z-50'>
      <h3 className='text-xl font-semibold tracking-tight'>{title}</h3>
      <p className='text-lg text-muted-foreground leading-relaxed'>
        {description}
      </p>
      <div className='size-32 absolute bottom-4 right-4 -z-10'>{icon}</div>
    </div>
  )
}

export default Card
