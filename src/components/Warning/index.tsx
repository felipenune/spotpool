import React from 'react';
import { FiFrown } from 'react-icons/fi';
import { WarningContainer, WarningText } from './styles';

const Warning: React.FC = () => (
  <WarningContainer>
    <FiFrown name="frown" color="#FFF" size={50} />
    <WarningText>None playlist was found!</WarningText>
  </WarningContainer>
);

export default Warning;
