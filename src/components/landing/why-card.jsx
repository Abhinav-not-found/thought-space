
const Card = ({ title, description, icon }) => {
  return (
    <div className='h-68 w-74 rounded-xl border  p-6 flex flex-col gap-3 shadow-md inset-shadow-2xs inset-shadow-neutral-200'>
      <div className='size-10 flex justify-center items-center'>{icon}</div>
      <h3 className='text-xl font-semibold tracking-tight'>{title}</h3>
      <p className='text-lg text-muted-foreground leading-relaxed'>
        {description}
      </p>
    </div>
  )
}

export default Card
