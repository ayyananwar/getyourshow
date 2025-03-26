import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import { Calendar, Clock, Ticket } from 'react-bootstrap-icons';

const events = [
  {
    id: 1,
    title: "International Jazz Festival",
    type: "Music Concert",
    image: "/images/event1.jpg",
    date: "2023-12-10",
    time: "19:00",
    venue: "City Arena",
    price: 1200
  },
  {
    id: 2,
    title: "Tech Summit 2023",
    type: "Conference",
    image: "/images/event2.jpg",
    date: "2023-11-25",
    time: "09:00",
    venue: "Convention Center",
    price: 1800
  },
  {
    id: 3,
    title: "Food & Wine Festival",
    type: "Food Festival",
    image: "/images/event3.jpg",
    date: "2023-11-30",
    time: "12:00",
    venue: "Central Park",
    price: 800
  }
];

const Events = () => {
  const [filter, setFilter] = useState('all');

  const eventTypes = [...new Set(events.map(event => event.type))];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => 
        event.type.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <h2 className="text-warning">Upcoming Events</h2>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-auto"
            aria-label="Filter by event type"
          >
            <option value="all">All Events</option>
            {eventTypes.map(type => (
              <option key={type} value={type.toLowerCase()}>
                {type}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row className="g-4">
        {filteredEvents.map(event => (
          <Col key={event.id} xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;