import PropTypes from 'prop-types';
import { SummaryContainer, Summ, SbmtButton } from './Summary.styled';

const Summary = ({ sum }) => {
  return (
    <SummaryContainer>
      <Summ>Total price: {sum} credits</Summ>
      <SbmtButton type="submit" form="contacts">
        Submit
      </SbmtButton>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  sum: PropTypes.number.isRequired,
};
export default Summary;
