import PropTypes from 'prop-types';
import css from './Profile.module.css';


export const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.profileName}>Petra Marica</p>
      <p className={css.profileTag}>@pmarica</p>
      <p className={css.profileLocation}>Salvador, Brasil</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>1000</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>2000</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>3000</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};