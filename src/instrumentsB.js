import kickAccent from "./audio/kick-accent.wav";
import kick from "./audio/kick.wav";
import rim from "./audio/rim.wav";
import snareAccent from "./audio/snare-accent.wav";
import snare from "./audio/snare.wav";
import tambLong from "./audio/tamb-long.wav";
import tambShort from "./audio/tamb-short.wav";
import tomLL from "./audio/tom-ll.wav";
import tomM from "./audio/tom-m.wav";

const instrumentsB = [
  {
    name: "Kick Accent",
    id: "kickAccent",
    key: "q",
    keycode: 81,
    url: kickAccent,
  },
  {
    name: "Kick",
    id: "kick",
    key: "w",
    keycode: 87,
    url: kick,
  },
  {
    name: "Rim",
    id: "rim",
    key: "e",
    keycode: 69,
    url: rim,
  },
  {
    name: "Snare Accent",
    id: "snareAccent",
    key: "a",
    keycode: 65,
    url: snareAccent,
  },
  {
    name: "Snare",
    id: "snare",
    key: "s",
    keycode: 83,
    url: snare,
  },
  {
    name: "Tamb Long",
    id: "tambLong",
    key: "d",
    keycode: 68,
    url: tambLong,
  },
  {
    name: "Tamb Short",
    id: "tambShort",
    key: "z",
    keycode: 90,
    url: tambShort,
  },
  {
    name: "Tom-LL",
    id: "tomLL",
    key: "x",
    keycode: 88,
    url: tomLL,
  },
  {
    name: "Tom M",
    id: "tomM",
    key: "c",
    keycode: 67,
    url: tomM,
  },
];

export default instrumentsB;
