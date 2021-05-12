import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                          className="ui button primary" 
                          onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    
    render() {
        // this.props (will be) === { songs: state.songs }
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}




// mapStateToProps - we could call it anything btw
// Mark this, always return an Obj{ } that will show up as props in our component
const mapStateToProps = (state) => {

    return { songs: state.songs };
}
// so this Obj{ } is a prop

export default connect(mapStateToProps, { selectSong })(SongList);