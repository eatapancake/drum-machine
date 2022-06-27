import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import instrumentSprite from "./audio/Instrument-Sprite.wav";
import instrumentsA from "./instrumentsA";
import instrumentsB from "./instrumentsB";
import Switch from "./components/Switch";
import "./components/radio.css";
import "./App.css";

function App() {
  const [instrumentName, setInstrumentName] = useState("---");
  const [instruments, setInstruments] = useState(instrumentsA);
  const [volume, setVolume] = useState("50");
  const [isToggled, setIsToggled] = useState(true);

  const spriteMap = {
    tomLL: [0, 894],
    tomM: [904, 405],
    tambShort: [1314, 285],
    tambLong: [1604, 315],
    snare: [1924, 210],
    snareAccent: [2129, 180],
    rim: [2379, 75],
    kick: [2459, 280],
    kickAccent: [2854, 320],
    hihat: [3239, 60],
    hihatMetal: [3289, 120],
    hihatAccent: [3424, 74],
    guiroShort: [3493, 318],
    guiroLong: [3923, 875],
    cymbal: [4853, 545],
    cowbell: [5478, 125],
    congaL: [5638, 355],
    bongoL: [6073, 115],
    bongoH: [6203, 140],
  };
  const [play, { stop }] = useSound(instrumentSprite, {
    sprite: spriteMap,
    volume: parseInt(volume) / 100,
  });

  const handleVoume = (event) => {
    setVolume(event.target.value);
    if (isToggled) {
      setInstrumentName("Volume: " + volume);
    }
  };
  const handleOnToggle = () => {
    setIsToggled(!isToggled);
    if (isToggled === true) {
      setInstrumentName("---");
    } else {
      setInstrumentName("Instrument Playing");
    }
  };

  const handleBank = (e) => {
    console.log(e.target.value);
    if (isToggled) {
      if (e.target.value === "BankA") {
        setInstruments(instrumentsA);
        setInstrumentName("Bank A");
      } else {
        setInstruments(instrumentsB);
        setInstrumentName("Bank B");
      }
    }
  };

  const CreateInstruments = ({ setInstrumentName_ }) => {
    return (
      <div className="grid-container">
        {instruments.map((sound, index) => (
          <Pad
            key={sound.id}
            sound={sound}
            setInstrumentName_={setInstrumentName_}
          ></Pad>
        ))}
      </div>
    );
  };

  function Pad({ sound, setInstrumentName_ }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
      //eslint-disable-next-line
    }, []);

    const handleKeyPress = (event) => {
      if (event.keyCode === sound.keycode && isToggled) {
        console.log(sound.name);
        playSound();
      }
    };

    const playSound = () => {
      setActive(true);
      setTimeout(() => setActive(false), 200);
      //setInstrumentName_(sound.name);
      setTimeout(() => setInstrumentName_(sound.name), 100);
      const audioTag = document.getElementById(sound.key.toUpperCase());
      audioTag.currentTime = 0;
      audioTag.volume = 0;
      stop();
      play({ id: sound.id });
      // var playPromise = audioTag.play();

      // if (playPromise !== undefined) {
      //   playPromise
      //     .then((_) => {})
      //     .catch((error) => {
      //       console.log("error try again");
      //     });
      // }
    };

    return (
      <button
        className={`drum-pad ${active && "btn-warning"}`}
        id={sound.name}
        key={sound.id}
        disabled={!isToggled}
        onMouseDown={playSound}
        sound={sound}
      >
        <audio
          className="clip "
          id={sound.key.toUpperCase()}
          src={sound.url}
        ></audio>
        {sound.key.toUpperCase()}
      </button>
    );
  }

  return (
    <div className="App">
      <header className="App-header" id="drum-machine">
        <CreateInstruments setInstrumentName_={setInstrumentName} />
        <div className="menu-container">
          <p className="menu" id="power">
            Power: &nbsp;{" "}
            <Switch
              rounded={true}
              isToggled={isToggled}
              onToggle={handleOnToggle}
            />
          </p>

          <p className="menu" id="display">
            {" "}
            {instrumentName}
          </p>

          <input
            id="volume"
            type="range"
            min="1"
            max="100"
            value={volume}
            onChange={handleVoume}
          />

          <div>
            Bank: &nbsp;
            <input
              type="radio"
              name="bank"
              id="A"
              onChange={handleBank}
              value="BankA"
              checked={instruments === instrumentsA && isToggled}
            ></input>
            <label htmlFor="A">A</label>
            &nbsp;
            <input
              type="radio"
              name="bank"
              id="B"
              onChange={handleBank}
              value="BankB"
              checked={instruments === instrumentsB && isToggled}
            ></input>
            <label htmlFor="B">B</label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
