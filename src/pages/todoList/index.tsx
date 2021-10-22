import React, {
  useCallback, useEffect, useState, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { UseUserContent } from '../../context/userContent';

import {
  Container, TodoBox, TodoContent, Button,
} from './styles';
import Input from '../../components/input';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
  content: string
}

const TodoList: React.FC = () => {
  const [query, setQuery] = useState(new URLSearchParams(useLocation().search));

  const nameUser = localStorage.getItem('USER');

  const { getUsersContent } = UseUserContent();
  const { dataUserContent } = UseUserContent();

  const { postUsersContent } = UseUserContent();
  const { putUsersContent } = UseUserContent();

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    getUsersContent(query.get('userId'));
  }, [getUsersContent, query]);

  const handleAddTask = useCallback(async (formData: FormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        content: Yup.string().required('Conteudo é obrigatório'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      await postUsersContent({
        id: query.get('userId'),
        titles: formData.content,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, [postUsersContent, query]);

  const handleCompleteTask = useCallback((e) => {
    putUsersContent({
      uid: query.get('userId'),
      todoId: parseInt(e.currentTarget.dataset.id, 10),
      titles: e.currentTarget.dataset.title,
      complete: true,
    });
  }, [putUsersContent, query]);

  return (
    <Container>
      <h1>
        Tarafedas de
        {' '}
        {nameUser}
      </h1>

      <Form ref={formRef} onSubmit={handleAddTask}>
        <Input type="text" name="content" placeholder="Digite aqui o conteudo" />
        <Button type="submit">
          Adicionar Tarefa
        </Button>
      </Form>

      {dataUserContent && Object.entries(dataUserContent).map(([key, value]) => (
        <TodoBox key={key}>
          <TodoContent>
            <p>{value.title}</p>
            {!value.completed && (<span>Tarefa não concluida</span>)}
            {value.completed && (<span>Concluido</span>)}

            {!value.completed && (
              <button
                type="button"
                data-id={value.id}
                data-title={value.title}
                onClick={handleCompleteTask}
              >
                Concluir Tarefa

              </button>
            )}

          </TodoContent>
        </TodoBox>
      )) }
    </Container>
  );
};

export default TodoList;
