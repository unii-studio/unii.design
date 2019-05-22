import React from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import AppHeader from './blocks/AppHeader';

const App = () => (
  <div>
    <Layout>
      <AppHeader title={<AppHeader.Link to="/">WJ DEV</AppHeader.Link>} scroll>
        <Navigation>
          {/* <Link className="one" to="/aboutme">
                ABOUT
              </Link> */}
          <AppHeader.Link to="/projects">PROJECTS</AppHeader.Link>
          <AppHeader.Link to="/resume">RESUME</AppHeader.Link>
          <AppHeader.Link to="/contact">CONTACT</AppHeader.Link>
        </Navigation>
      </AppHeader>
      <Content>
        <div className="page-content" />
        <Main />
      </Content>
    </Layout>
  </div>
);

export default App;
