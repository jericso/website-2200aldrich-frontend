const Camera = ({ srcValue, title }) => (
  <>
    <figure>
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
      <figcaption>{title}</figcaption>
    </figure>
  </>
);

export default Camera;
