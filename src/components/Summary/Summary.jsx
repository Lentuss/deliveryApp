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
export default Summary;
