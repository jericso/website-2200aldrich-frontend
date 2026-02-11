import Camera from './components/Camera';
import './App.css';

function App() {
  return (
    <div class="app-main">
      <h1>2200 Aldrich</h1>
      <br />
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
