import React from 'react';
import { UserContentProvider } from './userContent';
import { UserListProvider } from './userList';

const AppProvider: React.FC = ({ children }) => (
  <UserListProvider>
    <UserContentProvider>
      {children}
    </UserContentProvider>
  </UserListProvider>
);

export default AppProvider;
