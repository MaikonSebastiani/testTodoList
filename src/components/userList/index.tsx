import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { UseUserList } from '../../context/userList';

import { Container } from './styles';

const UserList: React.FC = () => {
  const { getUsers } = UseUserList();
  const { dataUserList } = UseUserList();

  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container>
      {dataUserList && Object.entries(dataUserList).map(([key, value]) => (

        <button
          type="button"
          key={key}
          onClick={() => {
            localStorage.setItem('USER', value.username);
            history.push(`todolist?userId=${value.id}`);
          }}
        >
          {value.username}
          <span>{value.email}</span>
        </button>

      )) }
    </Container>
  );
};

export default UserList;
