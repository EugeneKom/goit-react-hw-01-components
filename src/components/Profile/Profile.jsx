import PropTypes from 'prop-types';
import { ProfileWrapper,Stats } from './Profile.styled';


export const Profile = ({username,
    tag,
    location,
    avatar,
    stats}) => {
    return (<ProfileWrapper>
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
      />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  
    <Stats>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </Stats>
  </ProfileWrapper>)
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}