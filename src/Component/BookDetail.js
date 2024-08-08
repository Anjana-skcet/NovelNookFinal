import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ReactStars from 'react-rating-stars-component';
import './BookDetail.css';
import { useNavigate } from 'react-router-dom';

const books = {
  book1: {
    title: "The Ministry of Time",
    author: "Kaliane Bradley",
    theme: "The theme of The Ministry of Time revolves around time travel, colonialism, and personal trauma. The novel intricately explores the aftermath of trauma, redemption, and the impact of historical events on individuals. It combines a high-concept, cinematic adventure with a critical examination of colonialism, offering both a thrilling narrative and deeper, thought-provoking themes.",
    shortStory: "Set in a world where time travel is possible, the story follows the protagonist as they navigate through various historical events, facing both personal and societal challenges. The narrative delves into the complexities of human emotions, the consequences of altering timelines, and the relentless pursuit of justice and redemption.",
    rating: 4.5,
    publishedDate: "March 15, 2022",
    aboutAuthor: "Kaliane Bradley is a British-Cambodian writer and editor based in London. Her short fiction has appeared in various publications, including Somesuch Stories, The Willowherb Review, Electric Literature, and Catapult. She has won several prestigious awards, including the 2022 Harper’s Bazaar Short Story Prize and the 2022 V.S. Pritchett Short Story Prize​ (Simon & Schuster Books)​.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQsGnP_erkstNQL81oCLm3T4M81oiRGlrKw&s",
    authorImage: "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/2hep1ng6uhodbsqlag6mg31a1g.jpg"
  },
  book2: {
    title: "Martyr!",
    author: "Dawn Patrician",
    theme: "Historical fiction, religious conflict, sacrifice",
    shortStory: "Martyr! explores the tumultuous period of religious wars, focusing on the personal sacrifices and inner turmoil of its characters. Through vivid storytelling, it portrays the complexities of faith, duty, and love against a backdrop of historical upheaval.",
    rating: 4.0,
    publishedDate: "April 10, 2023",
    aboutAuthor: "Dawn Patrician is a well-known author of historical fiction novels. Her works often delve into the intricate details of past events, bringing them to life with rich, evocative narratives. She has received numerous accolades for her ability to weave factual history with compelling fiction.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hYOzZnRngbl7IXHXp8feDzuGGXSG-P3M2w&s",
    authorImage: "https://static.ffx.io/images/$zoom_0.6797%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_1028%2C$y_525/t_crop_custom/q_86%2Cf_auto/5a7a4b181257cc55388b8845fe15d04b40e012c1"
  },
  book3: {
    title: "The Lion Women of Tehran",
    author: "Farnaz Seifi",
    theme: "Women's rights, courage, resilience",
    shortStory: "The Lion Women of Tehran narrates the stories of brave women in Iran who stood up against oppression and fought for their rights. It is a testament to their courage and resilience in the face of societal and political challenges.",
    rating: 4.3,
    publishedDate: "February 5, 2023",
    aboutAuthor: "Farnaz Seifi is an Iranian journalist, women's rights activist, and author. She has written extensively on the plight of women in Iran and has been a vocal advocate for gender equality. Her work has garnered international recognition and numerous awards.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvg62iTn9bTlArcU49LO3ySvXTjAkuQnY_vA&s",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrAOGx98w_eJcEzexjsF9IQ8nVLsj9yuKhg&s"
  },
  book4: {
    title: "Nuclear War",
    author: "Alexander Zaitchik",
    theme: "Global politics, nuclear threats, survival",
    shortStory: "Nuclear War explores the terrifying potential of global nuclear conflict. Through a blend of real-world scenarios and expert analysis, it provides a sobering look at the consequences of nuclear war and the urgent need for disarmament.",
    rating: 4.7,
    publishedDate: "May 12, 2023",
    aboutAuthor: "Alexander Zaitchik is an investigative journalist and author known for his in-depth analysis of global political issues. He has written extensively on topics such as climate change, geopolitics, and social justice. His work has appeared in various prestigious publications, and he has received numerous accolades for his contributions to journalism.",
    imageUrl: "https://img1.od-cdn.com/ImageType-400/1191-1/%7BC5390101-C5FE-4F23-A789-2F91E67C0BDF%7DIMG400.JPG",
    authorImage: "https://independentmediainstitute.org/wp-content/uploads/2018/09/alexander-zaitchik_headshot-new.webp"
  },
  book5: {
    title: "Same as It Ever Was",
    author: "Gregg Easterbrook",
    theme: "Societal change, historical cycles, optimism",
    shortStory: "Same as It Ever Was examines the patterns of societal change and historical cycles, offering a hopeful perspective on the future. It challenges the notion of decline and presents an optimistic view of human progress.",
    rating: 4.2,
    publishedDate: "January 20, 2023",
    aboutAuthor: "Gregg Easterbrook is a journalist, author, and commentator known for his insightful analysis of social and political trends. His writings often explore themes of optimism and progress, providing a counter-narrative to the prevalent pessimistic outlooks. He has authored several influential books and articles.",
    imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/t/x/j/same-as-it-ever-was-original-imagw4g8fmgghvzz.jpeg?q=90&crop=false",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iW64BOQ77LcKdcdPHdsWJlFXOfuEaAElfA&s"
  },
  recent1: {
    title: "The Briar Club",
    author: "E. D. E. N. Southworth",
    theme: "Mystery, suspense, historical fiction",
    shortStory: "The Briar Club is a gripping mystery set in the late 19th century, following the intriguing adventures of its protagonist as they unravel secrets within an exclusive club. The story is filled with twists, suspense, and a rich historical backdrop.",
    rating: 4.1,
    publishedDate: "June 12, 2023",
    aboutAuthor: "E. D. E. N. Southworth was a prolific American writer of the 19th century, known for her serialized novels and contributions to the genre of mystery and historical fiction. Her works often featured strong, independent female characters and explored social issues of her time.",
    imageUrl: "https://cdn1.bookmanager.com/i/m?b=UhelvOrckPlMiSixope_WA&cb=1714040773",
    authorImage: "https://upload.wikimedia.org/wikipedia/commons/b/b3/EDEN_Southworth_c1860-crop.jpg"
  },
  recent2: {
    title: "Pineapple Street",
    author: "Jenny Jackson",
    theme: "Family dynamics, wealth, social satire",
    shortStory: "Pineapple Street delves into the lives of a wealthy family living in Brooklyn, exploring their personal and social conflicts. With sharp wit and keen observations, the novel satirizes the absurdities of privilege and societal expectations.",
    rating: 4.3,
    publishedDate: "July 25, 2023",
    aboutAuthor: "Jenny Jackson is a critically acclaimed author known for her incisive social commentaries and engaging storytelling. Her novels often explore the complexities of family relationships and societal norms, earning her a reputation as a keen observer of modern life.",
    imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1659404866l/61246258.jpg",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KLI3xoD53FX14gYaHXsBYOHgXEP18avS5Q&s"
  },
  recent3: {
    title: "The House Is on Fire",
    author: "Rachel Beanland",
    theme: "Historical drama, tragedy, resilience",
    shortStory: "The House Is on Fire is a dramatic retelling of a historic fire that devastated a community. The novel captures the chaos, tragedy, and resilience of the people affected, highlighting the human spirit's capacity to endure and rebuild.",
    rating: 4.5,
    publishedDate: "March 3, 2023",
    aboutAuthor: "Rachel Beanland is an award-winning author known for her powerful historical dramas. Her works often draw on real events, bringing them to life with vivid storytelling and deep emotional resonance. She has received numerous accolades for her contributions to literature.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABk1ZVdZrw38OyH8UjqmugphPFr_nbzATaw&s",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo_9XVAGl4cZ5Bavl3PZC60nz0NvNUyctrg&s"
  },
  recent4: {
    title: "The Half Moon",
    author: "Mary Beth Keane",
    theme: "Marital struggles, personal growth, hope",
    shortStory: "The Half Moon explores the lives of a couple facing marital struggles and personal growth. Through their journey, the novel delves into themes of love, hope, and the complexities of human relationships.",
    rating: 4.2,
    publishedDate: "August 7, 2023",
    aboutAuthor: "Mary Beth Keane is a celebrated author known for her deep, character-driven stories. Her novels often explore the intricacies of personal relationships and emotional growth, earning her critical acclaim and a devoted readership.",
    imageUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781797154725/the-half-moon-9781797154725_hr.jpg",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvallTt5CLdNkKztyh14wisn_WOHZNEddxA&s"
  },
  recent5: {
    title: "Romantic Comedy",
    author: "Curtis Sittenfeld",
    theme: "Love, humor, modern relationships",
    shortStory: "Romantic Comedy is a lighthearted yet insightful look at modern relationships. The novel balances humor with heartfelt moments, offering a refreshing take on love and romance in the contemporary world.",
    rating: 4.6,
    publishedDate: "May 20, 2023",
    aboutAuthor: "Curtis Sittenfeld is a bestselling author known for her witty and engaging novels. Her works often blend humor with sharp insights into human nature, making her one of the most beloved writers of contemporary fiction.",
    imageUrl: "https://img1.od-cdn.com/ImageType-400/0111-1/%7B3EB302D1-A6B8-44EB-9939-A9D35DA8236E%7DIMG400.JPG",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdEUzbzTPjCxekzLxw1BGC0vfH83nqDSlzQ&s"
  },
};

const BookDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const book = books[id];
  
  if (!book) {
    return <div>Book not found</div>;
  }
  const handleButton = (bookTitle) => {
    // Retrieve the existing book titles from local storage
    const existingBooks = JSON.parse(localStorage.getItem('bookTitles')) || [];
    // Add the new book title to the list
    const updatedBooks = [...existingBooks, bookTitle];
    // Store the updated list back in local storage
    localStorage.setItem('bookTitles', JSON.stringify(updatedBooks));
    alert(`${bookTitle} has been added to your profile!`);
  };

  return (
    <div className="back-img">
    <div className="book-detail-container">
      <div className="book-card">
        <img src={book.imageUrl} alt={book.title} className="img"/>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author"><strong>Author:</strong> {book.author}</p>
        <p className="book-theme"><strong>Theme:</strong> {book.theme}</p>
        <p className="book-short-story">{book.shortStory}</p>
        <p className="book-rating">
          <strong>Rating:</strong>
          <ReactStars
            count={5}
            value={book.rating}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
        </p>
        <p className="book-published-date"><strong>Published Date:</strong> {book.publishedDate}</p>
        <p className="book-published-date"><strong>About Author:</strong></p>
        <div className="about-author">
          <img src={book.authorImage} alt={book.author} className="author-image"/>
          <p className="about-author-text">{book.aboutAuthor}</p>
          </div>
          <Button onClick={() => handleButton(book.title)}>Add Book to Profile</Button>
      </div>
    </div>
    </div>
  );
};

export default BookDetail;
