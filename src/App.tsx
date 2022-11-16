import Item from "./components/Item";
import { BERAGES, FRUITS, MEAT_AND_FISTH } from "./cosntans/items";

function App() {
  return (
    <>
      <header>
        <h1>
          <span className="span-d">Shoppingify</span> allows you take your{" "}
          <br /> shopping list wherever you go
        </h1>
        <nav className="logocontainer">
          <div className="input-wrapper">
            <input type="search" className="input" placeholder="Search item " />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              height="30px"
              width="30px"
              className="input-icon"
            />
          </div>
        </nav>
      </header>

      <main>
        <section className="fyv">
          <h2>Fruits and Vegetables</h2>
          <div className="container-items">
            {FRUITS.map(({ imageUrl, title }) => (
              <Item imageUrl={imageUrl} title={title} />
            ))}
          </div>
        </section>

        <section className="maf">
          <h2>Meat and Fish</h2>
          <div className="container-items2">
            {MEAT_AND_FISTH.map(({ imageUrl, title }) => (
              <Item imageUrl={imageUrl} title={title} />
            ))}
          </div>
        </section>

        <section className="berages">
          <h2>Berages</h2>
          <div className="container-items3">
            {BERAGES.map(({ imageUrl, title }) => (
              <Item imageUrl={imageUrl} title={title} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
