import styled from "styled-components";

const FooterStyle = styled.footer`
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Footer = () => {
  return <FooterStyle>© 2024 by Jorge Gravel for Rock{"TheCode"}</FooterStyle>;
};

export default Footer;
