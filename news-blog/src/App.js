import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const articles = [
  {
    title: 'New Research Shows the Benefits of Sleep',
    author: 'John Doe',
    date: 'January 1, 2023',
    image: 'https://via.placeholder.com/500x300',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...'
  },
  {
    title: 'Latest Developments in Renewable Energy',
    author: 'Jane Doe',
    date: 'February 1, 2023',
    image: 'https://via.placeholder.com/500x300',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...'
  },
  {
    title: 'Why Exercise is More Important Than Ever',
    author: 'John Smith',
    date: 'March 1, 2023',
    image: 'https://via.placeholder.com/500x300',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...'
  }
];

function App() {
  return (
    <Container>
      <h1 className="text-center my-4">Latest News</h1>
      <Row>
        {articles.map(article => (
          <Col md={4} key={article.title}>
            <Card className="mb-4">
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{article.author}</Card.Subtitle>
                <Card.Text>{article.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{article.date}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
