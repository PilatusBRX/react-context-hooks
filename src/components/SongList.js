import React, { useState } from 'react';
import uuid from 'uuid/v4';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'the mask and the mirror', id: uuid() },
    { title: 'the last chance', id: uuid() },
    { title: 'this is my last chance', id: uuid() },
    { title: 'in name of the king', id: uuid() }
  ]);

  const addSong = () => {
    setSongs([...songs, { title: 'new song', id: uuid() }]);
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
    </div>
  );
};

export default SongList;
