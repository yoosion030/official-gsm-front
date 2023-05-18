import styled from "@emotion/styled";

export const Header = styled.header`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(11px);
  left: 0px;
  top: 0px;
  padding: 0 4.8vw;

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  a {
    text-decoration: none;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Text = styled.p`
  color: #828282;
`;

export const TeacherText = styled.p`
  color: #505050;
`;
