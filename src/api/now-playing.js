import { getNowPlaying } from '../../index';

exports.index = async function handler(req, res) {
  let song; // Declare an empty variable to hold the song data

  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ is_playing: false }); // Use an object with the property
  }

  song = await response.json(); // Assign the response data to the song variable

  if (song.item === null) {
    return res.status(200).json({ is_playing: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const images = song.item.album.images[1];
  const artists = song.item.artists.map((_artists) => _artists.name).join(', ');

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  res.status(200).json({
    title,
    isPlaying,
    images,
    artists,
  });
};
