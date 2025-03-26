import React from 'react';
import { Carousel, Card, Button, Badge } from 'react-bootstrap';
import { Calendar, Clock, Ticket } from 'react-bootstrap-icons';

const events = [
  {
    id: 1,
    title: "International Jazz Festival",
    type: "Music Concert",
    image: "/images/event1.jpg",
    date: "2025-12-10",
    time: "19:00",
    venue: "City Arena",
    price: 1200
  },
  {
    id: 2,
    title: "Tech Summit 2025",
    type: "Conference",
    image: "/images/event2.jpg",
    date: "2023-11-25",
    time: "09:00",
    venue: "Convention Center",
    price: 1800
  },
  {
    id: 3,
    title: "Food & Drink Festival",
    type: "Food Festival",
    image: "/images/event3.jpg",
    date: "2025-11-30",
    time: "12:00",
    venue: "Central Park",
    price: 800
  }
];

const EventCarousel = () => {
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(events.length / itemsPerSlide);

  return (
    <Carousel interval={3000} indicators={false} controls>
      {Array.from({ length: totalSlides }).map((_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <div className="d-flex justify-content-center flex-wrap">
            {events
              .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
              .map(event => (
                <Card 
                  key={event.id} 
                  className="mx-2 my-2 bg-dark text-white" 
                  style={{ width: '30%', minWidth: '280px' }}
                >
                  <Card.Img 
                    variant="top" 
                    src={event.image} 
                    alt={event.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text className="text-muted small">
                      <div className="d-flex align-items-center mb-2">
                        <Calendar className="me-2" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="d-flex align-items-center">
                        <Clock className="me-2" />
                        {event.time} • {event.venue}
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-top-0 d-flex justify-content-between align-items-center">
                    <Badge bg="warning" text="dark" className="px-3 py-2">
                      <Ticket className="me-1" /> ₹{event.price}
                    </Badge>
                    <Button variant="outline-warning" size="sm">Book Now</Button>
                  </Card.Footer>
                </Card>
              ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default EventCarousel;