import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import AudioPlayer from "react-modular-audio-player";
class AudioPlayerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //src,title,artist are default
      audioFiles: [
        {
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          title: "Hey Jude",
          artist: "The Beatles"
        },
        {
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          title: "Uptown Funk ft. Bruno Mars",
          artist: "Mark Ronson"
        },
        {
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          title: "Rolling In The Deep",
          artist: "Adele"
        }
      ]
    };
  }
  //inside Component render()
  render() {
    let rearrangedPlayer = [
      {
        className: "tier-top",
        style: { margin: "0.5rem" },
        innerComponents: [
          {
            type: "name",
            style: { width: "75%" }
          }
        ]
      },

      {
        className: "tier-bottom",
        style: { margin: "0rem 0.3rem 0.3rem 0.3rem" },
        innerComponents: [
          {
            type: "time",
            style: { width: "fit-content" }
          },
          {
            type: "seek"
          }
        ]
      },
      {
        className: "tier-middle",
        style: { margin: "0rem 0.3rem 0.3rem 18rem", align: "center" },
        innerComponents: [
          {
            type: "play",
            style: { width: "fit-content" }
          },
          {
            type: "rewind",
            style: { width: "fit-content" }
          },
          {
            type: "forward",
            style: { width: "fit-content" }
          },
          {
            type: "volume",
            style: { width: "20%" }
          }
        ]
      }
    ];

    //inside Component's render()

    return (
      <div align="center">
        <AudioPlayer
          rearrange={rearrangedPlayer}
          audioFiles={this.state.audioFiles}
          playerWidth="18em"
          fontSize="1.5rem"
          iconSize="2.0rem"
        />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<AudioPlayerClass />, rootElement);
