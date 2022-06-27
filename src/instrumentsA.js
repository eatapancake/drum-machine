import bongoH from "./audio/bongo-h.wav";
import bongoL from "./audio/bongo-l.wav";
import congaL from "./audio/conga-l.wav";
import cowbell from "./audio/cowbell.wav";
import cymbal from "./audio/cymbal.wav";
import guiroLong from "./audio/guiro-long.wav";
import guiroShort from "./audio/guiro-short.wav";
import hihatMetal from "./audio/hihat-metal.wav";
import hihat from "./audio/hihat.wav";

const instrumentsA = [
  {
    name: "Bongo-H",
    id: "bongoH",
    key: "q",
    keycode: 81,
    url: bongoH,
  },
  {
    name: "Bongo-L",
    id: "bongoL",
    key: "w",
    keycode: 87,
    url: bongoL,
  },
  {
    name: "Conga-L",
    id: "congaL",
    key: "e",
    keycode: 69,
    url: congaL,
  },
  {
    name: "Cowbell",
    id: "cowbell",
    key: "a",
    keycode: 65,
    url: cowbell,
  },
  {
    name: "Cymbal",
    id: "cymbal",
    key: "s",
    keycode: 83,
    url: cymbal,
  },
  {
    name: "Guiro Long",
    id: "guiroLong",
    key: "d",
    keycode: 68,
    url: guiroLong,
  },
  {
    name: "Guiro Short",
    id: "guiroShort",
    key: "z",
    keycode: 90,
    url: guiroShort,
  },
  {
    name: "Hi-Hat Metal",
    id: "hihatMetal",
    key: "x",
    keycode: 88,
    url: hihatMetal,
  },
  {
    name: "Hi-Hat",
    id: "hihat",
    key: "c",
    keycode: 67,
    url: hihat,
  },
];

export default instrumentsA;
