import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './defaultAvatar'

export default function UserMenu() {
  const avatar = defaultAva;
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const theme = useSelector(state => state.auth.theme);
}
