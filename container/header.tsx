import Links from "components/Header/Links";
import Items from "components/Header/Items";

function Header() {
  return (
    <header className={["flex", "items-center", "justify-between", "h-[60px]", "p-[6px]"].join(" ")}>
      <Links />
      <Items />
    </header>
  );
}

export default Header;
