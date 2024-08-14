import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Genre.css'; // Import the CSS file

const genres = [
    { title: 'Adventure', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOewshIjSIwQL7X0XxB7YIa0X3CLfxKEu4w&s' },
    { title: 'Mystery', image: 'https://images2.alphacoders.com/693/thumb-1920-693742.png' },
    { title: 'Literature', image: 'https://cache.desktopnexus.com/thumbseg/297/297830-bigthumbnail.jpg' },
    { title: 'History', image: 'https://wallpapercave.com/wp/wp2244335.jpg' },
    { title: 'Science', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSbG4bazPHydl5CWXyMjpct7DaHgHN2Mhs9ET2azwZJSdKhy4ISkI0h9LYpK-IYYydw-A&usqp=CAU' },
  { title: 'Biographies', image: 'https://i.pinimg.com/originals/2d/85/60/2d8560968d2c829496643306e5b2de37.jpg' },
  { title: 'Thriller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVtHjzsf64B4lFpZ95nssY6xElavrXIU7dQ&s' },
  { title: 'Magic', image: 'https://media.istockphoto.com/id/953432540/photo/magician-or-illusionist-is-showing-magic-trick-blue-stage-light-in-background.webp?b=1&s=612x612&w=0&k=20&c=pVJmSv70_Q2qhVvoZKuJYjo5-4gbbcUk-zchoeSfAko=' },
  { title: 'Poetry', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERptEQtAKD4udNastHFPks1R4grLF0wsD4g&s' },
  { title: 'Children', image: 'https://hips.hearstapps.com/hmg-prod/images/movies-for-kids-2021-luca-1624279846.jpeg' },
  { title: 'Horror', image: 'https://www.psychologs.com/wp-content/uploads/2023/11/Influence-of-Horror-Movies-on-Sleep-and-Dreams.jpg' },
  { title: 'Fantasy', image: 'https://t4.ftcdn.net/jpg/01/56/14/43/360_F_156144336_s2Zogfcqap2E3WUm7CaduUA0JKpdt6xb.jpg' },
];

const Genre = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="prof-headerr">
        
        <div className="prof-logo-title-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small/old-book-watercolor-illustration-png.png"
            alt="Logo"
            className="prof-logoo"
          />
          <h1 className="prof-titlee">NovelNook</h1>
        </div>
      </div>
      <div className="genre-container">
        <div className="genre-card">
          {genres.map((genre) => (
            <Link to={`/books/${genre.title}`} className="genre-item" key={genre.title}>
              <img src={genre.image} alt={genre.title} className="genre-image" />
              <div className="genre-title">{genre.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genre;
