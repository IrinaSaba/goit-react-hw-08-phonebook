import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultAva from '../UserMenu/avatar.png';
import { logOut } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

export default function UserMenu() {
  const avatar = defaultAva;
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  return (
    <div>
      <img src={avatar} alt="" width="20" />
      <p>Hi, {userName}</p>
      <button type="button" onClick={e => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
}
