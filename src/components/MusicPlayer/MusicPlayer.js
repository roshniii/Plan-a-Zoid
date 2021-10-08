import React from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

// import "./musicplayer.css";

const MusicPlayer = () => {

  return (
    <React.Fragment>
      <div className="col-6 music">
        <div className="content-section">
          <div className="apps-card">
            <div className="app-card">
            <ReactJkMusicPlayer/>
              {/* <div className="player">
                <div className="player__header">
                  <div className="player__img player__img--absolute slider">
                    <button className="player__button player__button--absolute--nw playlist">
                      <img
                        src="http://physical-authority.surge.sh/imgs/icon/playlist.svg"
                        alt="playlist-icon"
                      />
                    </button>

                    <button className="player__button player__button--absolute--center play">
                      <img
                        src="http://physical-authority.surge.sh/imgs/icon/play.svg"
                        alt="play-icon"
                      />
                      <img
                        src="http://physical-authority.surge.sh/imgs/icon/pause.svg"
                        alt="pause-icon"
                      />
                    </button>

                    <div className="slider__content">
                      <img
                        className="img slider__img"
                        src="http://physical-authority.surge.sh/imgs/1.jpg"
                        alt="cover"
                      />
                      <img
                        className="img slider__img"
                        src="http://physical-authority.surge.sh/imgs/2.jpg"
                        alt="cover"
                      />
                      <img
                        className="img slider__img"
                        src="http://physical-authority.surge.sh/imgs/3.jpg"
                        alt="cover"
                      />
                      <img
                        className="img slider__img"
                        src="http://physical-authority.surge.sh/imgs/4.jpg"
                        alt="cover"
                      />
                      <img
                        className="img slider__img"
                        src="http://physical-authority.surge.sh/imgs/5.jpg"
                        alt="cover"
                      />
                      <img
                        className="img slider__img"
                        src="http://physical-authority.surge.sh/imgs/6.jpg"
                        alt="cover"
                      />
                      <img
                        className="img slider__img"
                        src="http://physical-authority.surge.sh/imgs/7.jpg"
                        alt="cover"
                      />
                    </div>
                  </div>

                  <div className="player__controls">
                    <button className="player__button back">
                      <img
                        className="img"
                        src="http://physical-authority.surge.sh/imgs/icon/back.svg"
                        alt="back-icon"
                      />
                    </button>

                    <p className="player__context slider__context">
                      <strong className="slider__name"></strong>
                      <span className="player__title slider__title"></span>
                    </p>

                    <button className="player__button next">
                      <img
                        className="img"
                        src="http://physical-authority.surge.sh/imgs/icon/next.svg"
                        alt="next-icon"
                      />
                    </button>

                    <div className="progres">
                      <div className="progres__filled"></div>
                    </div>
                  </div>
                </div>

                <ul className="player__playlist list">
                  <li className="player__song">
                    <img
                      className="player__img img"
                      src="http://physical-authority.surge.sh/imgs/1.jpg"
                      alt="cover"
                    />

                    <p className="player__context">
                      <b className="player__song-name">no time</b>
                      <span className="flex">
                        <span className="player__title">lastlings</span>
                        <span className="player__song-time"></span>
                      </span>
                    </p>

                    <audio
                      className="audio"
                      src="http://physical-authority.surge.sh/music/1.mp3"
                    ></audio>
                  </li>

                  <li className="player__song">
                    <img
                      className="player__img img"
                      src="http://physical-authority.surge.sh/imgs/2.jpg"
                      alt="cover"
                    />

                    <p className="player__context">
                      <b className="player__song-name">blinding lights</b>
                      <span className="flex">
                        <span className="player__title">the weeknd</span>
                        <span className="player__song-time"></span>
                      </span>
                    </p>

                    <audio
                      className="audio"
                      src="http://physical-authority.surge.sh/music/2.mp3"
                    ></audio>
                  </li>

                  <li className="player__song">
                    <img
                      className="player__img img"
                      src="http://physical-authority.surge.sh/imgs/3.jpg"
                      alt="cover"
                    />

                    <p className="player__context">
                      <b className="player__song-name">джованна</b>
                      <span className="flex">
                        <span className="player__title">enrasta</span>
                        <span className="player__song-time"></span>
                      </span>
                    </p>

                    <audio
                      className="audio"
                      src="http://physical-authority.surge.sh/music/3.mp3"
                    ></audio>
                  </li>

                  <li className="player__song">
                    <img
                      className="player__img img"
                      src="http://physical-authority.surge.sh/imgs/4.jpg"
                      alt="cover"
                    />

                    <p className="player__context">
                      <b className="player__song-name">a man</b>
                      <span className="flex">
                        <span className="player__title">travis scott</span>
                        <span className="player__song-time"></span>
                      </span>
                    </p>

                    <audio
                      className="audio"
                      src="http://physical-authority.surge.sh/music/4.mp3"
                    ></audio>
                  </li>

                  <li className="player__song">
                    <img
                      className="player__img img"
                      src="http://physical-authority.surge.sh/imgs/5.jpg"
                      alt="cover"
                    />

                    <p className="player__context ">
                      <b className="player__song-name">unforgetting</b>
                      <span className="flex">
                        <span className="player__title">zaxx</span>
                        <span className="player__song-time"></span>
                      </span>
                    </p>

                    <audio
                      className="audio"
                      src="http://physical-authority.surge.sh/music/5.mp3"
                    ></audio>
                  </li>

                  <li className="player__song">
                    <img
                      className="player__img img"
                      src="http://physical-authority.surge.sh/imgs/6.jpg"
                      alt="cover"
                    />

                    <p className="player__context">
                      <b className="player__song-name">waharan</b>
                      <span className="flex">
                        <span className="player__title">Randall</span>
                        <span className="player__song-time"></span>
                      </span>
                    </p>

                    <audio
                      className="audio"
                      src="http://physical-authority.surge.sh/music/6.mp3"
                    ></audio>
                  </li>

                  <li className="player__song">
                    <img
                      className="player__img img"
                      src="http://physical-authority.surge.sh/imgs/7.jpg"
                      alt="cover"
                    />

                    <p className="player__context ">
                      <b className="player__song-name">
                        starlight feat mr gabriel{" "}
                        <span className="uppercase">4am</span> remix
                      </b>
                      <span className="flex">
                        <span className="player__title">jai wolf</span>
                        <span className="player__song-time"></span>
                      </span>
                    </p>

                    <audio
                      className="audio"
                      src="http://physical-authority.surge.sh/music/7.mp3"
                    ></audio>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MusicPlayer;
