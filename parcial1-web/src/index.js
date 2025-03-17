import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider>
      <Container>
        <Row xs={1}>
          <Col>
          <App />
          </Col>
        </Row>
      </Container>
    </IntlProvider>
  </React.StrictMode>
 );

reportWebVitals();