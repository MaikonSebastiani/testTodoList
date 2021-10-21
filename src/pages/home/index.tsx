import React from 'react';
import UserList from '../../components/userList';
import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <h1>User List</h1>
    <UserList />
  </Container>
);

export default Home;
