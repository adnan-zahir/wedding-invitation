import bgmOgg from '../audio/bgm.ogg';
import bgmMp3 from '../audio/bgm.mp3';

const AudioControl = () => {
  return (
    <div className="audio-control">
      <audio controls autoPlay>
        <source src={bgmOgg} type="audio/ogg" />
        <source src={bgmMp3} type="audio/mpeg" />
        Your browser does not support audio element.
      </audio>
    </div>
  );
};

export default AudioControl;
