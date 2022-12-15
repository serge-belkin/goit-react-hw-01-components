import user from '../components/Profile/user.json';
import Profile from './Profile/Profile';

export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    </>
  );
}
