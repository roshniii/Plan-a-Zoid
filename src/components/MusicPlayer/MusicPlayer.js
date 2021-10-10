import React from "react";
import { useEffect, useState } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import "./musicplayer.css";

const MusicPlayer = () => {
  const audioList1 = [
    {
      name: "blinding lights",
      singer: "the weeknd",
      cover: "http://physical-authority.surge.sh/imgs/2.jpg",
      musicSrc: "http://physical-authority.surge.sh/music/2.mp3",
    },
    {
    name: "blinding lights",
    singer: "the weeknd",
    cover: "http://physical-authority.surge.sh/imgs/2.jpg",
    musicSrc: "http://physical-authority.surge.sh/music/2.mp3",
  },
    {
      name: "unforgetting",
      singer: "zaxx",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc: () => {
        return Promise.resolve(
          "http://physical-authority.surge.sh/music/5.mp3"
        );
      },
    },
  ];
  const options = {
    //audio lists model
    audioLists: audioList1,

    //default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,

    //if you want dynamic change current play audio you can change it [type `number` default `0`]
    // playIndex: 0,

    //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
    theme: "dark",

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    bounds: "body",

    // Replace a new playlist with the first loaded playlist
    // instead of adding it at the end of it.
    // [type `boolean`, default `false`]
    clearPriorAudioLists: false,

    // Play your new play list right after your new play list is loaded turn false.
    // [type `boolean`, default `false`]
    autoPlayInitLoadPlayList: false,

    //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    //"auto|metadata|none" "true| false"
    preload: false,

    //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: false,

    //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,

    //The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,

    //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
      top: 636,
      right: 170,
    },

    // play mode text config of the audio player
    playModeText: {
      order: "顺序播放",
      orderLoop: "列表循环",
      singleLoop: "单曲循环",
      shufflePlay: "随机播放",
    },

    //audio controller open text  [ type `String | ReactNode` default 'open']
    openText: "打开",

    //audio controller close text  [ type `String | ReactNode` default 'close']
    closeText: "关闭",

    //audio theme switch checkedText  [ type `String | ReactNode` default '-']
    checkedText: "开",

    //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
    unCheckedText: "关",

    // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
    notContentText: "暂无音乐",

    panelTitle: "播放列表",

    defaultPlayMode: "order",

    //audio mode        mini | full          [type `String`  default `mini`]
    mode: "mini",

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: false,

    //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: true,

    //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    //audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    //audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,

    //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,

    //drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,

    //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
    // controllerTitle: <FaHeadphones />,

    //Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    //play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    //reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,

    //download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: true,

    //loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    //lyric display of the audio player panel   [type `Boolean` default `false`]
    showLyric: true,

    //Extensible custom content       [type 'Array' default '[]' ]
    extendsContent: [],

    //default volume of the audio player [type `Number` default `100` range `0-100`]
    defaultVolume: 100,

    //playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
    autoHiddenCover: true,

    //

    // custom music player root node
    getContainer() {
      return document.body;
    },

    /**
     * @description get origin audio element instance , you can use it do everything
     * @example
     * audio.playbackRate = 1.5  // set play back rate
     * audio.crossOrigin = 'xxx' // config cross origin
     */

    // transform audio info like return a Promise

    /**
     * @return
     *  {
     *    src: 'xxx',
     *    filename: 'xxx',
     *    mimeType: 'xxx'
     *  }
     */
    // onBeforeAudioDownload() {
    //   return Promise.resolve({
    //     src: '1.mp3'
    //   })
    // }
  };
  // export default function App() {
  const [play, setPlay] = useState(false);
  const [audioInstance, setAudioInstance] = useState();

  const getAudioInstance = (instance) => {
    setAudioInstance(instance);
  };

  const onPlayHandler = () => setPlay(true);
  const onPauseHandler = () => setPlay(false);

  useEffect(() => {}, [audioInstance]);

  return (
    <React.Fragment>
      <div className="col-6 music">
<div className="app-card">

              <ReactJkMusicPlayer
                {...options}
                getAudioInstance={getAudioInstance}
                onAudioPlay={onPlayHandler}
                onAudioPause={onPauseHandler}
              />
              <div className="music-button">
                <div className="btn">
                  <a href
                    type="button"
                    onClick={() => {
                      if (audioInstance)
                        play ? audioInstance.pause() : audioInstance.play();
                    }}
                  >
                    {play ? "Pause" : "Play"}
                  </a>
                </div>
</div>
</div>
              
      </div>
    </React.Fragment>
  );
};
export default MusicPlayer;
