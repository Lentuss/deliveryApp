import PropTypes from 'prop-types';
import styled from 'styled-components';

const Notification = ({ message }) => {
  return <NotificationMes>{message}</NotificationMes>;
};

const NotificationMes = styled.p`
  margin: 0 auto;
  font-size: 32px;
  font-style: italic;
`;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
