import React, {useState} from 'react';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import surrender from "./surrender.mp3"


const Play = () => {

  const [playing, setPlaying] = useState(false)

  const playMusic = () => {
    const bgMusic = document.getElementById('bg-music')
    bgMusic.volume = .5
    bgMusic.play()
    bgMusic.onended = () => {
      setPlaying(false)
    }
    setPlaying(true)
  }

  const pauseMusic = () => {
    const bgMusic = document.getElementById('bg-music')
    bgMusic.pause()
    setPlaying(false)
  }

  return (
    <div className="hidden sm:flex">
      <audio id="bg-music" src={surrender}/>
      <div className="hidden sm:flex items-center justify-center gap-2">
        <div className="ml-2">
          {!playing ? <AiOutlinePlayCircle className="cursor-pointer text-xl text-white" onClick={playMusic} /> : <AiOutlinePauseCircle className="cursor-pointer text-xl text-white" onClick={pauseMusic}/>}
        </div>
        <h4 className="font-valo text-white text-lg">Click for Music</h4>
      </div>

    </div>
  );
}

export default Play;