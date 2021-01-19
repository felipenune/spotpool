import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Toast = styled(ToastContainer).attrs({})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
    background: #e02041;
    font-size: 1.5rem;
    color: #fff;
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    background: #fff;
  }
`;
