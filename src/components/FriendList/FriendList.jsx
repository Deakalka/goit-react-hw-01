import FriendListItem from '../FriendListItem/FriendListItem';
import css from "./FriendList.module.css";
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <li className={css.friendCard} key={friend.id}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    );
  };

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList ;