import Camera from './components/Camera';
import './App.css';

function App() {
  return (
    <div>
      <Camera
        srcValue={'https://rtsp.me/embed/fbR65NiA/'}
        title={'Camera 0 - Looking South'}
      />
    </div>
  );
}

export default App;
