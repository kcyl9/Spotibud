function TrackInfo(props) {

    return (
        <div className="song">
            <img className="cover" src={props.art} width = "100%" alt="song cover"></img> 
            <p className="album"><i>{props.album}</i></p>
            <p className="title"><b>{props.song}</b></p>
            <p className="artist"><i>{props.artists}</i></p>
        </div>
    )
}

export default TrackInfo;