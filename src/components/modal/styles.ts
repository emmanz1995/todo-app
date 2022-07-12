import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledBackDrop = styled.main`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledModal = styled(motion.div)`
  width: 350px;
  background-color: #fff;
  //padding: 30px;
  border-radius: 5px;
`;

// export const StyledBackDrop = styled.div`
//   background: rgb(0, 0, 0, 0.5px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1;
//   position: fixed;
//   top: 0;
//   left: 0;
// `;

