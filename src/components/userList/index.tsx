import React, { useEffect } from 'react';
import { UserProps, UseUserList } from '../../context/userList';

import { Container } from './styles';

const UserList: React.FC = () => {
  const { getUsers } = UseUserList();
  const { dataUserList } = UseUserList();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container>
      {dataUserList && Object.entries(dataUserList).map(([key, value]) => (
        <p key={key}>
          {value.username}
          <span>{value.email}</span>
        </p>
      )) }
    </Container>
  );
};

export default UserList;
