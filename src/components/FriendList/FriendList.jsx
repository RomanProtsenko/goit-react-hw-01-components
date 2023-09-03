import PropTypes from 'prop-types';
import styled from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styled.item}>
            <span className={`${styled.status} ${isOnline ? styled.online : styled.offline}`}></span>
            <img className={styled.avatar} src={avatar} alt={name} width="48" />
            <p className={styled.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export const FriendList = ({ friends }) => {
    return (
        <ul className={styled.friendlist}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
                />
                ))}
        </ul>);
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};