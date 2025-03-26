import React from 'react';
import { Carousel, Card, Button, Badge } from 'react-bootstrap';
import { PlayFill, StarFill } from 'react-bootstrap-icons';

const movies = [
  {
    id: 1,
    title: "The Godfather",
    genre: "Crime | Drama",
    image: "/images/movie1.jpg",
    rating: 8.5,
    duration: "2h 55m",
    price: 250
  },
  {
    id: 2,
    title: "Inception",
    genre: "Sci-fi | Action",
    image: "/images/movie2.jpg",
    rating: 7.9,
    duration: "2h 28m",
    price: 200
  },
  {
    id: 3,
    title: "Avatar",
    genre: "Sci-Fi | Adventure",
    image: "/images/movie3.jpeg",
    rating: 8.2,
    duration: "2h 5m",
    price: 300
  },
  {
    id: 4,
    title: "Arrival",
    genre: "Sci-Fi | Adventure",
    image: "/images/movie4.jpeg",
    rating: 8.2,
    duration: "2h 5m",
    price: 300
  },
  {
    id: 5,
    title: "The Martian",
    genre: "Sci-Fi | Adventure",
    image: "/images/movie5.jpeg",
    rating: 8.2,
    duration: "2h 5m",
    price: 300
  },
  {
    id: 6,
    title: "The Day the Earth Stood Still",
    genre: "Sci-Fi | Adventure",
    image: "/images/movie6.jpeg",
    rating: 8.2,
    duration: "2h 5m",
    price: 300
  }
];

const MovieCarousel = () => {
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(movies.length / itemsPerSlide);

  return (
    <Carousel interval={3000} indicators={false} controls>
      {Array.from({ length: totalSlides }).map((_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <div className="d-flex justify-content-center flex-wrap">
            {movies
              .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
              .map(movie => (
                <Card 
                    key={movie.id} 
                    className="mx-2 my-2 bg-dark text-white" 
                    style={{ width: '30%', minWidth: '280px' }}
                >
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={movie.image} 
                      alt={movie.title}
                      style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Button 
                      variant="outline-light" 
                      size="sm" 
                      className="position-absolute top-0 end-0 m-2"
                      aria-label={`Watch ${movie.title} trailer`}
                    >
                      <PlayFill />
                    </Button>
                    <Badge 
                      bg="warning" 
                      text="dark" 
                      className="position-absolute top-0 start-0 m-2"
                    >
                      <StarFill className="me-1" /> {movie.rating}
                    </Badge>
                  </div>
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {movie.genre} • {movie.duration}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-top-0 d-flex justify-content-between align-items-center">
                    <span className="text-warning fw-bold">₹{movie.price}</span>
                    <Button variant="warning" size="sm">Book Now</Button>
                  </Card.Footer>
                </Card>
              ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
