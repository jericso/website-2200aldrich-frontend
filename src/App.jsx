import Camera from './components/Camera';
import './App.css';

function App() {
  return (
    <div class="app-main">
      <h1>2200 Aldrich Avenue South</h1>
      <h2>Minneapolis, Minnesota</h2>
      <table>
        <tr>
          <td>
            <Camera
              srcValue={'https://rtsp.me/embed/fbR65NiA/'}
              title={'Camera 1 - Looking South'}
            />
          </td>
          <td>
            <Camera
              srcValue={'https://rtsp.me/embed/fbR65NiA/'}
              title={'Camera 2 - Looking North'}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
