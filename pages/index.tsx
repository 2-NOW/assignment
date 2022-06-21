import type { GetServerSideProps, NextPage } from "next";
// import { useTranslation } from "react-i18next";
import Header from "container/header";
import Footer from "container/footer";
import Logo from "components/Logo";
import Search from "components/Main/Search";

const Home: NextPage = () => {
  // const { t } = useTranslation("initial");

  return (
    // <div className={"container mx-auto px-4 py-8"}>
    //   <h1 className={"text-3xl font-black"}>{"hi"}</h1>
    //   <p className={"text-xl"}>{"message"}</p>
    //   <p className={"text-xl"}>{"i18n"}</p>
    // </div>
    <div className="flex flex-col h-screen">
      <Header />
      <Logo />
      <Search />
      <section className="flex-1" />
      <Footer />
    </div>
  );
};

export default Home;
