import React, { useState } from 'react';
import { Container, Table, Form, Row, Col, Button, Badge } from 'react-bootstrap';
import { StarFill, SortDown, SortUp } from 'react-bootstrap-icons';

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

const Movies = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });
  const [filter, setFilter] = useState('all');

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const allGenres = [...new Set(movies.flatMap(movie => 
    movie.genre.split('|').map(g => g.trim())
  ))];

  const filteredMovies = filter === 'all' 
    ? sortedMovies 
    : sortedMovies.filter(movie => 
        movie.genre.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <h2 className="text-warning">Movies List</h2>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-auto"
            aria-label="Filter by genre"
          >
            <option value="all">All Genres</option>
            {allGenres.map(genre => (
              <option key={genre} value={genre.toLowerCase()}>
                {genre}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="align-middle">
        <thead className="table-dark">
          <tr>
            <th 
              onClick={() => requestSort('title')} 
              className="sortable"
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex align-items-center">
                Movie
                {sortConfig.key === 'title' && (
                  <span className="ms-2">
                    {sortConfig.direction === 'asc' ? <SortDown /> : <SortUp />}
                  </span>
                )}
              </div>
            </th>
            <th>Genre</th>
            <th 
              onClick={() => requestSort('releaseDate')} 
              className="sortable"
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex align-items-center">
                Release Date
                {sortConfig.key === 'releaseDate' && (
                  <span className="ms-2">
                    {sortConfig.direction === 'asc' ? <SortDown /> : <SortUp />}
                  </span>
                )}
              </div>
            </th>
            <th 
              onClick={() => requestSort('rating')} 
              className="sortable"
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex align-items-center">
                Rating
                {sortConfig.key === 'rating' && (
                  <span className="ms-2">
                    {sortConfig.direction === 'asc' ? <SortDown /> : <SortUp />}
                  </span>
                )}
              </div>
            </th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map(movie => (
            <tr key={movie.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    width="60" 
                    height="90"
                    className="me-3 rounded"
                    style={{ objectFit: 'cover' }}
                  />
                  <div>
                    <div className="fw-bold">{movie.title}</div>
                    <small className="text-muted">{movie.duration}</small>
                  </div>
                </div>
              </td>
              <td>{movie.genre}</td>
              <td>{new Date(movie.releaseDate).toLocaleDateString()}</td>
              <td>
                <Badge bg="warning" text="dark" className="px-2 py-1">
                  <StarFill className="me-1" /> {movie.rating}
                </Badge>
              </td>
              <td className="fw-bold">₹{movie.price}</td>
              <td>
                <Button variant="outline-warning" size="sm">Book Now</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Movies;