
import ProfileName from "./profile-name"

const ProfileCard = ({ data }) => {
  return (
    <aside className='w-1/3 h-fit rounded-md p-4'>
      <div className='size-20 bg-neutral-100 dark:bg-neutral-800 rounded-full'></div>
      <ProfileName name={data?.name} />
      <p>{data?.bio}</p>
    </aside>
  )
}
export default ProfileCard
