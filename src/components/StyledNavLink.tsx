import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface Props extends NavLinkProps {
  children: ReactNode;
}

const StyledNavLink = ({ to, children }: Props) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      fontWeight: isActive ? "bold" : "normal",
    })}
  >
    {children}
  </NavLink>
);

export default StyledNavLink;
