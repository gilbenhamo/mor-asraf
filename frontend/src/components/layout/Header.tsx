import NavBar from "../UI/NavBar/NavBar";
interface Props {
  navLinks: { id: string; title: string }[];
  logo?: string;
  pageBaseUrl: string;
}

const Header = ({ navLinks, logo ,pageBaseUrl}: Props) => {
  return <NavBar navLinks={navLinks} logo={logo} pageBaseUrl={pageBaseUrl}/>;
};

export default Header;
