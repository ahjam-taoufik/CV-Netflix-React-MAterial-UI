
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import List from './../../components/list/List';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      {/* <Featured type="movie"/> */}
      {/* <Featured type="TVseries"/> */}
      <List/>
      <List/>
     
    </div>
  );
};

export default Home;