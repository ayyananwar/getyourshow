import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MovieCarousel from '../components/MovieCarousel';
import EventCarousel from '../components/EventCarousel';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="hero-overlay p-4">
          <h1 className="hero-title mb-3">Experience the Magic of Entertainment</h1>
          <p className="hero-subtitle mb-4">Book tickets for the hottest movies and events in town!</p>
          <Button 
            variant="warning" 
            size="lg" 
            className="px-4 py-2 fw-bold"
            href="/movies"
          >
            Explore Now
          </Button>
        </div>
      </section>

      {/* Now Showing */}
      <Container className="py-5">
        <h2 className="text-warning mb-4 text-center">🔥 Now Showing 🔥</h2>
        <MovieCarousel />
      </Container>

      {/* Events */}
      <Container className="py-5 mb-4">
        <h2 className="text-warning mb-4 text-center">🎟️ Upcoming Events 🎟️</h2>
        <EventCarousel />
      </Container>
    </div>
  );
};

export default Home;