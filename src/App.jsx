import './App.css'

function App() {

  return (
    <>
      <iframe
        class="img-rotate"
        width="640"
        height="480"
        src="https://rtsp.me/embed/fbR65NiA/"
        frameborder="0"
        title="RTSP Stream Player"
        allowfullscreen
      >
        Iframes not supported. Broadcasting{' '}
        <a href="https://rtsp.me/" title="rtsp video steaming service">
          {' '}
          rtsp.me
        </a>{' '}
        player
      </iframe>
    </>
  );
}

export default App
