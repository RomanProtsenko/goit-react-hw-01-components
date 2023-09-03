import PropTypes from 'prop-types';
import styled from './Profile.module.css';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  const { followers = 0, views = 0, likes = 0 } = stats;
  return (
    <div className={styled.profile}>
      <div className={styled.description}>
        <img
          src={avatar}
          alt={username}
          className={styled.avatar}
        />
        <p className={styled.name}>{username}</p>
        <p className={styled.tag}>@{tag}</p>
        <p className={styled.location}>{location}</p>
      </div>

      <ul className={styled.stats}>
        <li className={styled.list}>
          <span className={styled.label}>Followers</span>
          <span className={styled.quantity}>{followers}</span>
        </li>
        <li className={styled.list}>
          <span className={styled.label}>Views</span>
          <span className={styled.quantity}>{views}</span>
        </li>
        <li className={styled.list}>
          <span className={styled.label}>Likes</span>
          <span className={styled.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  )

};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      avatar:PropTypes.string,
      views: PropTypes.number,
      likes: PropTypes.number
    })
  }).isRequired
}