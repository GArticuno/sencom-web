import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  border: 2px solid ${({ theme }) => theme.colors.primary};

  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: left;

  color: ${({ theme }) => theme.colors.text};

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primary+"99"};
  }

  .values {
    transition: 0.3s;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    line-height: 1.5rem;
    padding: .5rem;
  }

  th {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
  };
`;

export const ModalContainer = styled.div`
  display: flex;
  gap: 1rem;

  .info_container {
    text-align: left;

    .title {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }

    .box {
      display: flex;
      margin: 1rem;
      margin-left: 0;
      gap: .5rem;

      font-weight: 600;

      .label {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.secondary};
      };

      .content {
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.text};
      };
    };
  };


`;
