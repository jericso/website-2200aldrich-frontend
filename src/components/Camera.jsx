const Camera = ({ srcValue, title }) => (
  <div>
    <figure class="camera-figure">
      <div class="camera-container">
        <iframe
          width="640"
          height="480"
          src={srcValue}
          frameborder="0"
          title={title}
          allowfullscreen
        >
          Iframes not supported.
        </iframe>
      </div>
      <figcaption>
        {title}
        <br />
        Direct feed: <a href={srcValue}>{srcValue}</a>
      </figcaption>
    </figure>
  </div>
);

export default Camera;
