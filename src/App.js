import NavBar from "./componets/navbar/navbar";
import Logo from "./componets/logo";
import "./styles/app.scss";

function App() {
  const tabs = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  return (
    <div className="app">
      <NavBar />
      <section className="section">
        <h1>
          CameroonLogos is an{" "}
          <a
            href="https://github.com/nejos97/cameroonlogos"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>{" "}
          collection <br /> of High qualitym pixel perfect Cameroonian <br />{" "}
          Company logos use for free.
        </h1>
        <p>Search through 20+ vector from different contributor.</p>
        <a
          className="section-link"
          href="https://github.com/nejos97/cameroonlogos"
          target="_blank"
          rel="noreferrer"
        >
          Contribute on Github
        </a>
      </section>
      <main className="main">
        {tabs.map((tab) => (
          <Logo />
        ))}
        <Logo />
      </main>
    </div>
  );
}

export default App;
