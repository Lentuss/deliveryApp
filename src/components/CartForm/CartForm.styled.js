import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  max-height: calc(100vh - 20px);
  width: 100%;

  padding: 20px;
  margin-right: 20px;
  background-color: rgb(200, 200, 200);

  border-radius: 10px;
  overflow: hidden;
`;

export const FormLabel = styled.label`
  margin-bottom: 40px;
`;

export const LabelTitle = styled.span`
  display: block;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  border-radius: 5px;
`;
