import { useState } from "react";
import Dropdown from "./Dropdown";
import LinkNav from "./LinkNav";
import {
  Logo,
  NavbarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
} from "./Navbar.style";
import { List, X } from "react-bootstrap-icons";

export const routes = [
  { title: "Home", href: "home" },
  { title: "Movies", href: "movies" },
  { title: "Add", href: "add" },
  { title: "Edit/Delete", href: "edit-delete" },
  { title: "Recommend", href: "recommend" },
];

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleClick = (titlu) => {
    console.log("Esti pe titlu-> ", titlu);
  };

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <NavbarContainer>
      <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQI2TMCh1FzYoWhMTTDHu0Fa9Ib54LnFyKdQ&s"></Logo>
      <LinkContainerDesktop>
        {routes.map((el, index) => (
          <LinkNav
            key={ index}
            title={el.title}
            href={el.href}
            functieDeApelat={handleClick}
          />
        ))}
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>
      {!displayDropdown ? <List size={40} /> : <X size={40} />}
      </ButtonDropdown>
      {displayDropdown && <Dropdown functieDeApelatinDropdown={handleClick} />}
    </NavbarContainer>
  );
}

export default NavBar;