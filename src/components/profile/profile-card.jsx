import ProfileBio from "./profile-bio"
import ProfileName from "./profile-name"

const ProfileCard = ({ data }) => {
  return (
    <aside className='w-1/3 h-fit rounded-md p-4'>
      <div className='size-20 bg-neutral-100 dark:bg-neutral-800 rounded-full'></div>
      <ProfileName name={data?.name} />
      <ProfileBio bio={data?.bio} />
    </aside>
  )
}
export default ProfileCard
