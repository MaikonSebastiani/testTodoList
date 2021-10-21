import React from 'react';
import { UserListProvider } from './userList';

const AppProvider: React.FC = ({ children }) => (
  <UserListProvider>
    {children}
  </UserListProvider>
);

export default AppProvider;
