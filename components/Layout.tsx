import HeaderContainer from "./headers";
import Footer from "./footer";
type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
        .wrapper {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
      `}</style>
    </div>
  );
}