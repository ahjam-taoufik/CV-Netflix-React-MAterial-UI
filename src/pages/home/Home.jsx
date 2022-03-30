
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      {/* <Featured type="movie"/> */}
      {/* <Featured type="TVseries"/> */}
     
    </div>
  );
};

export default Home;