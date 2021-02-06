
import './App.css';
import imageInSrc from './assets/imageInSrc.jpg'
import myVideo from './assets/myVideo.mp4'
function App() {
  return (
    <div className="container">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}} className="AA">
        <h1 className="title-red">Go My C<span className="o">o</span>de</h1>
          <img width={250} src="/imageInPublic.jpg" />
          <img width={250} src={imageInSrc} />

        </div>
        <video width={320} height={240} controls>
        <source src={myVideo} type="video/mp4" />
        </video>
    </div>
  );
}
export default App;
