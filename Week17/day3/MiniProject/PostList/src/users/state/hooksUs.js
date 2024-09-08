
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, selectStatus } from './selectors';
import { fetchUsers } from './usersSlice';

export const useUsersSelector = () => {
  return useSelector(selectUsers);
};

export const useUsersStatus = () => {
  return useSelector(selectStatus);
};

export const useFetchUsers = () => {
  const dispatch = useDispatch();
  return () => dispatch(fetchUsers());
};