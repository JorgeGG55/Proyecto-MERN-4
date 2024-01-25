import styled from "styled-components";

const HeaderWrapper = styled.header`
  color: white;
  font-weight: bold;
  position: absolute;
  padding: 30px 100px;
  font-size: 2rem;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-size: 1rem;
`;

const ContactButton = styled.button`
  background-color: #39b95b;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      My landing page
      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <ContactButton>Contact Us</ContactButton>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
