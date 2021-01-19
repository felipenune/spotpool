import React from 'react';
import { FiX } from 'react-icons/fi';

import { Toast } from './styles';

interface Props {
  name: string;
}

const Alert: React.FC<Props> = ({ name }) => (
  <Toast
    toastClassName={name}
    progressClassName="Toastify__progress-bar"
    closeButton={() => <FiX size="2rem" color="#FFF" />}
  />
);

export default Alert;
