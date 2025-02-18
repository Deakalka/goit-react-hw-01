import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img className={css.friendAvatar} src={ avatar || "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"} alt="Avatar" width="48" />
            <p className="css.friendName">{name}</p>
            {isOnline ? (<p className={css.friendOn}>Online</p> ) : ( <p className={css.friendOff}>Offline</p>)}
        </div>
    );
};
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;