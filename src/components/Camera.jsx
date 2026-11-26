const Camera = ({ srcValue, title }) => (
  <div>
    <figure className="camera-figure">
      <div className="camera-container">
        <iframe
          src={srcValue}
          title={title}
          frameBorder="0"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
          loading="lazy"
        >
          Iframes not supported.
        </iframe>
      </div>
      <figcaption>
        {title}
        <br />
        Direct feed:{' '}
        <a href={srcValue} target="_blank" rel="noopener noreferrer">
          {srcValue}
        </a>
      </figcaption>
    </figure>
  </div>
);

export default Camera;
