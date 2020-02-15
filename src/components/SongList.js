import React, { useState } from 'react';
import uuid from 'uuid/v4';
import NewSong from './NewSong';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'the mask and the mirror', id: uuid() },
    { title: 'the last chance', id: uuid() },
    { title: 'this is my last chance', id: uuid() },
    { title: 'in name of the king', id: uuid() }
  ]);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  return (
    <div>
      <div className='song-list'>
        <ul>
          {songs.map(song => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
        <button onClick={addSong}>Add a song</button>
      </div>
      <NewSong addSong={addSong} />
    </div>
  );
};

export default SongList;
