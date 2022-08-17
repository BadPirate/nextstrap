import {
  Card, ListGroup,
} from 'react-bootstrap'
import RootNav from '../src/components/RootNav'

const Home = () => (
  <div>
    <RootNav>
      <>
        <Card>
          <Card.Body>
            <Card.Title><a href="https://github.com/BadPirate/nextstrap/tree/hasura">Nextstrap-hasura</a></Card.Title>
            <Card.Text>
              A template for building full stack projects, just the way BadPirate likes it.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Next JS</ListGroup.Item>
              <ListGroup.Item>Typescript</ListGroup.Item>
              <ListGroup.Item>ESLint</ListGroup.Item>
              <ListGroup.Item>ReactBootstrap</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>
              Hasura
            </Card.Title>
            <Card.Text>
              This branch also includes a few configured plugins for fast integration with Hasura,
              as well as authentication with Next-Auth.  User count above is live subscription.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Apollo Client</ListGroup.Item>
              <ListGroup.Item>Next-Auth</ListGroup.Item>
              <ListGroup.Item>Hasura</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </>
    </RootNav>
  </div>
)

export default Home
