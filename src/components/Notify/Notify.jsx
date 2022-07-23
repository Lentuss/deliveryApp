import styled from 'styled-components';

const Notification = ({ message }) => {
  return <NotificationMes>{message}</NotificationMes>;
};

const NotificationMes = styled.p`
  margin: 0 auto;
  font-size: 32px;
  font-style: italic;
`;
export default Notification;
