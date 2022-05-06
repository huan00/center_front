import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

import Banner from '../components/Banner'
import InfoCard from '../components/InfoCard'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-nav">
        <p className="profile-allPost">All Post</p>
        <p className="profile-myPost">My Posts</p>
        <p>Zen Techiques</p>
        <input className="profile-search" type="search" placeholder="search" />
        <FontAwesomeIcon className="profile-faGear" icon={faGear} />
      </div>
      <Banner />
      <div className="profile-post">
        <div className="profile-post-nav">
          <div className="profile-post-nav-sort">
            <p>sort by: </p>
            <select>
              <option value="">select</option>
            </select>
          </div>
          <div>
            <button className="profile-create-post-btn">Create New Post</button>
          </div>
        </div>
        <div className="profile-infocard">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </div>
  )
}

export default Profile
