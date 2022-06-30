import React, { useCallback, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';

import { Modal } from '../../components';
import { useTheme } from '../../hooks/theme';
import { IUser } from '../../models/User';
import { userService } from '../../services';

import * as S from './styles';

export const MainPage: React.FC = () => {
  const { usedTheme } = useTheme();
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetUsers = useCallback(async () => {
    try {
      setIsLoadingUsers(true);
      const response = await userService.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado.")
    } finally {
      setIsLoadingUsers(false);
    }
  }, []);

  const checkCompany = (index: number) => {
    if(index % 3 === 0 && index % 5 === 0) {
      return 'TC / SENCON';
    }
    if(index % 3 === 0) {
      return 'TC';
    }
    if(index % 5 === 0) {
      return 'SENCON';
    }
    return 'Sem empresa';

  }

  const OpenModal = (user: IUser, index: number) => {
    setCurrentIndex(index);
    setCurrentUser(user);
    setIsModalOpen(true);
  }

  const RenderLabels = useMemo(() => {
    return(
      <tr className="labels">
        <th>Nome</th>
        <th>E-mail</th>
        <th>Telefone</th>
        <th>Endereço completo</th>
        <th>Cidade</th>
        <th>Empresa</th>
      </tr>
    );
  }, []);

  const RenderUsers = ({ user, index }: { user: IUser, index: number }) => {
    const address = `${user.address.street},${user.address.suite} ${user.address.zipcode}`;
    return (
      <tr className="values" onClick={() => OpenModal(user, index)}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{address}</td>
        <td>{user.address.city}</td>
        <td>{checkCompany(index)}</td>
      </tr>
    );
  };

  useEffect(() => {
    handleGetUsers()
  }, [handleGetUsers]);

  return (
    <S.Container>
      {isLoadingUsers ? (
        <ReactLoading
          type="bubbles"
          color={usedTheme.colors.primary}
          height={'20%'}
          width={'20%'}
        />
      ) : (
        <S.Table>
          {RenderLabels}
          {users.map((user, index) => {
            return <RenderUsers user={user} index={index} key={user.id.toString()} />;
          })}
        </S.Table>
      )}
      <Modal
        modalIsVisible={isModalOpen}
        setModalIsVisible={setIsModalOpen}
        XButtonIcon
      >
        <S.ModalContainer>
          <div className="info_container">
            <p className="title">
              Informações
            </p>
            <div className="box">
              <p className="label">ID:</p>
              <p className="content">{currentUser?.id ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">índice:</p>
              <p className="content">{currentIndex ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Nome:</p>
              <p className="content">{currentUser?.name ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Nome de usuário:</p>
              <p className="content">{currentUser?.username ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">E-mail:</p>
              <p className="content">{currentUser?.email ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Telefone:</p>
              <p className="content">{currentUser?.phone ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Site:</p>
              <p className="content">{currentUser?.website ?? '??'}</p>
            </div>
          </div>

          <div className="info_container">
            <p className="title">
              Endereço
            </p>
            <div className="box">
              <p className="label">Rua:</p>
              <p className="content">{currentUser?.address.street ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Complemento:</p>
              <p className="content">{currentUser?.address.suite ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Código postal:</p>
              <p className="content">{currentUser?.address?.zipcode ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Cidade:</p>
              <p className="content">{currentUser?.address?.city ?? '??'}</p>
            </div>
          </div>

          <div className="info_container">
            <p className="title">
              Firma
            </p>
            <div className="box">
              <p className="label">Nome:</p>
              <p className="content">{currentUser?.company.name ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Lema da firma:</p>
              <p className="content">{currentUser?.company.catchPhrase ?? '??'}</p>
            </div>
            <div className="box">
              <p className="label">Área de atuação:</p>
              <p className="content">{currentUser?.company.bs ?? '??'}</p>
            </div>
          </div>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}
