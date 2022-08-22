import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Description from './components/Description'
import Video from './components/Video';
import PodcastList from './PodcastList';
import Slider from './Slider';
import Footer from './Footer';
import AsSeenOn from './AsSeenOn';


function App() {
  return (
    <div className="App">
      
        <Header/>
        <Description/>
        <Video/>
        <PodcastList/>
        <Slider/>
        <AsSeenOn/>
        <Footer/>
      
      
      
      
    </div>
  );
}

export default App;
