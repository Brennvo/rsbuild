import largeImg, { ReactComponent as Logo } from './large.svg';
import smallImg from './small.svg';
import './App.css';

function App() {
  return (
    <div>
      <Logo id="component" />
      <img id="large-img" src={largeImg} alt="large-img" />
      <img id="small-img" src={smallImg} alt="small-img" />
      <div id="test-css-large" />
      <div id="test-css-small" />
    </div>
  );
}

export default App;
