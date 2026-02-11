const Camera = ({ srcValue, title }) => (
  <div>
    <figure class="camera-figure">
      <div class="camera-container">
        <iframe
          width="640"
          height="480"
          src={srcValue}
          frameborder="0"
          title="RTSP Stream Player"
          allowfullscreen
        >
          Iframes not supported. Broadcasting{' '}
          <a href="https://rtsp.me/" title="rtsp video steaming service">
            {' '}
            rtsp.me
          </a>{' '}
          player{' '}
        </iframe>
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  </div>
);

export default Camera;
