import Header from "./Header";
import Introduction from "./Introduction";

function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <div className="content">
        <Introduction></Introduction>
      </div>
    </div>
  );
}

export default Home;
