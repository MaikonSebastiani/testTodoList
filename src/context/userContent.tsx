import React, {
  createContext, useContext, useCallback, useState,
} from 'react';
import api from '../services/api';

interface UserProps {
    id: number,
    title: string,
    userId: number,
    completed: boolean
}

interface UserPropsPost {
    id: string | null,
    titles: string,
}
interface UserPropsPut {
    uid: number | string | null,
    todoId: number,
    titles: string,
    complete: boolean,
}

  interface UserContentContextData {
      dataUserContent: UserProps[] | undefined
      getUsersContent(id: string | null): void
      postUsersContent(credential: UserPropsPost): void
      putUsersContent(credential: UserPropsPut): void
  }

const UserContentContext = createContext<UserContentContextData>({} as UserContentContextData);

const UserContentProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<UserProps[]>();

  const getUsersContent = useCallback(async (query: string) => {
    if (query) {
      const response = await api.get<UserProps[]>(`todos?userId=${query}`);
      setUsers(response.data);
    }
  }, []);

  const postUsersContent = useCallback(async ({ id, titles }: UserPropsPost) => {
    const response = await api.post<UserProps>('todos', {
      userId: id,
      title: titles,
      completed: false,
    });

    setUsers((state: any) => [response.data, ...state]);
  }, []);

  const putUsersContent = useCallback(async ({
    uid, todoId, titles, complete,
  }: UserPropsPut) => {
    const response = {
      userId: uid,
      id: todoId,
      title: titles,
      completed: complete,
    };
    setUsers((state: any) => [...state.map((user: UserProps) => (user.id === response.id ? response : user))]);
  }, []);

  return (
    <UserContentContext.Provider value={{
      dataUserContent: users, getUsersContent, postUsersContent, putUsersContent,
    }}
    >
      {children}
    </UserContentContext.Provider>
  );
};

function UseUserContent(): UserContentContextData {
  const context = useContext(UserContentContext);

  if (!context) {
    throw new Error('UseUserContent must be used within an PlanetsProvider');
  }

  return context;
}

export { UserContentProvider, UseUserContent };
