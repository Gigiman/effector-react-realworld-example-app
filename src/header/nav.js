import React from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { $currentUser } from '../models/user.model';

const LoggedOutView = () => (
  <ul className="nav navbar-nav pull-xs-right">
    <li className="nav-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/login" className="nav-link">
        Sign in
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/register" className="nav-link">
        Sign up
      </Link>
    </li>
  </ul>
);

const LoggedInView = ({ user: { username, image } }) => (
  <ul className="nav navbar-nav pull-xs-right">
    <li className="nav-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/editor" className="nav-link">
        <i className="ion-compose" />
        &nbsp;New Post
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/settings" className="nav-link">
        <i className="ion-gear-a" />
        &nbsp;Settings
      </Link>
    </li>

    <li className="nav-item">
      <Link to={`/@${username}`} className="nav-link">
        <img src={image} className="user-pic" alt={username} />
        {username}
      </Link>
    </li>
  </ul>
);

export const Nav = () => {
  const user = useStore($currentUser);

  return Object.keys(user).length > 0 ? (
    <LoggedInView user={user} />
  ) : (
    <LoggedOutView />
  );
};