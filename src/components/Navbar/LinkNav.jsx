import { LinkNavStyle } from "./Navbar.style";


function LinkNav({ title,  href, functieDeApelat }) {
  return (
    <>
    <LinkNavStyle onClick={() => functieDeApelat(title)} to={href}>
      {title ? title : "Link"} 
    </LinkNavStyle>
    </>
  );
}

export default LinkNav;