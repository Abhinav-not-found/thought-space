import ProfileBio from "./profile-bio"
import ProfileImage from "./profile-image"
import ProfileName from "./profile-name"

const ProfileCard = ({ data }) => {
  return (
    <aside className='w-1/3 h-fit rounded-md p-4'>
      <ProfileImage image={data?.avatar} />
      <ProfileName name={data?.name} />
      <ProfileBio bio={data?.bio} />
    </aside>
  )
}
export default ProfileCard
