// import React from "react";
import css from "./Profile.module.css";
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, image, stats }) => {
    let {followers, views, likes} = stats;
    return (
      <div className={css.profileCard}>
        <div>
          <img
            className={css.profileImage}
            src={ image || "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"}
            alt="User avatar"
          />
          <p className={css.name}>{name}</p> 
          <p className={css.info}>@{tag}</p>
          <p className={css.info}>{location}</p>
        </div>

        <ul className={css.profileList}>
          <li className={css.profileItem}>
            <span className={css.statsName}>Followers</span>
            <span className={css.statsInfo}>{followers}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.statsName}>Views</span>
            <span className={css.statsInfo}>{views}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.statsName}>Likes</span>
            <span className={css.statsInfo}>{likes}</span>
          </li>
        </ul>
      </div>
    );
};      
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;