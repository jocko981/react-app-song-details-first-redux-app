import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (!song) {
        return (
            <div>Select a Song for Details</div>
        );
    }

    return (
        <div>
          <h3>Details for:</h3>
          <p>
            Title: {song.title}
            <br></br>
            Duration: {song.duration}
          </p>
            
        </div>
    );
};

// It's always called with our ENTIRE state Obj
const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);