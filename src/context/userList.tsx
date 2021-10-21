import { promises } from 'fs';
import React, {
  createContext, useContext, useCallback, useState,
} from 'react';
import api from '../services/api';

export interface UserProps {
    id: number,
    name: string,
    username: string,
    email: string,
}

interface UserListContextData {
    dataUserList: UserProps | undefined
    getUsers(): Promise<void>
}

const UserListContext = createContext<UserListContextData>({} as UserListContextData);

const UserListProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<UserProps>();

  const getUsers = useCallback(async () => {
    const response = await api.get<UserProps>('users');

    setUsers(response.data);
  }, []);

  console.log(users);

  return (
    <UserListContext.Provider value={{ dataUserList: users, getUsers }}>
      {children}
    </UserListContext.Provider>
  );
};

function UseUserList(): UserListContextData {
  const context = useContext(UserListContext);

  if (!context) {
    throw new Error('UseUserList must be used within an PlanetsProvider');
  }

  return context;
}

export { UserListProvider, UseUserList };
