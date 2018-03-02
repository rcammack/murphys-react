import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Icon, Image, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {

  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image centered
                              src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"/></Menu.Item>
            <Menu.Item position="right">Home</Menu.Item>
            <Menu.Item></Menu.Item>
            <Dropdown item text="About us">
              <Dropdown.Menu>
                <Dropdown.Item>empty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>St. Patricks Day</Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>empty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleSection extends React.Component {

  render() {
    return (
        <div className="murphys-background">
          <Container><Grid centered columns={2} verticalAlign="middle" className="vertical">
            <Grid.Column>
              <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"/>
            </Grid.Column>
            <Grid.Column>
              <h3>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block
                off
                the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</h3>
            </Grid.Column>
          </Grid></Container>
        </div>
    );
  }
}

class FooterMenu extends React.Component {

  render() {
    return (
        <div className="footer-background">
          <Container><Grid centered columns={3}>
            <Grid.Column>
              Lunch
              <hr/>
              <List>
                <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Bar
              <hr/>
              <List>
                <List.Item>Monday- Friday from 11:00am</List.Item>
                <List.Item>Saturday- Sunday from 4:00pm</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Dinner
              <hr/>
              <List>
                <List.Item>Monday – Saturday: 5:30pm – 10:00pm</List.Item>
                <List.Item>Sunday: 5:00pm – 9:00pm</List.Item>
              </List>
            </Grid.Column>
          </Grid></Container>
        </div>
    );
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleSection/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));