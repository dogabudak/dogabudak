import React, {Component} from 'react'
import {Button, Grid, Header, Image, List, Menu} from 'semantic-ui-react'
import './Main.css';
import ProfilePicture from '../../images/ProfilePicture.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class MainPage extends Component {
    state = {activeItem: 'General'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    renderSection = () => {
        const sectionName = this.state.activeItem;
        if (sectionName === 'General') {
            return this.renderGeneralSection();
        }
        if (sectionName === 'Education') {
            return this.renderEducationSection();
        }
        if (sectionName === 'Experience') {
            return this.renderExperienceSection();
        }
        if (sectionName === 'Interests') {
            return this.renderInterestsSection();
        }
        if (sectionName === 'Skills') {
            return this.renderSkillsSection();
        }
        if (sectionName === 'Contact') {
            return this.renderContactsSection();
        }
    }
    renderSkillsSection = () => {
        return <div style={{ padding: '20px'}}>
            <b> Languages: </b> English (Fluent), IELTS 7.5 – 2016 German(B 2.1)<br />
            <b> Programming Languages:</b> JAVA, Node.js, MatLab, Julia, Haskell, Rust, Nativescript, Typescript, React, ReactNative, Raml<br />
            <b> Applications and Tools:</b>  MongoDb, Cassandra, ElasticSearch, Memcached, Prometheus<br />
            <b> Libraries:</b> Koa.js, Vue.js, Protocol Buffers, Nano Message, React.js, Amazon Kinesis<br />
            <b> Databases and Caches:</b> Redis, memcached <br />
            <b> Deployment:</b> CoreOS, Docker, AWS, bamboo <br />
        </div>
    }
    renderContactsSection = () => {
        return <div style={{ padding: '20px'}}>
            <a href="https://www.linkedin.com/in/doga-budak-40635b95/">Linkedn</a> <br />
            <a href="https://www.xing.com/profile/DOGA_BUDAK2/cv">Xing</a><br />
            <a href="https://www.instagram.com/budakdoga/">Instagram</a><br />
            <a href="https://www.facebook.com/doga.budak.3">Facebook</a><br />
            <a href="https://twitter.com/dogabudak">Twitter</a><br />
            <a href="https://github.com/dogabudak">GitHub</a><br />
        </div>
    }
    renderGeneralSection = () => {
        return <div style={{ padding: '20px', display: 'inline-flex' }}>
            <List>
                <List.Item>
                    <List.Icon name='phone'/>
                    <List.Content>+4917643227537</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='users'/>
                    <List.Content>07.11.1991 Istanbul / TURKEY</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='marker'/>
                    <List.Content>Münich, Germany</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail'/>
                    <List.Content>
                        <a href='mailto:dogabudak@gmail.com'>dogabudak@gmail.com</a>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    }
    renderEducationSection = () => {
        return <div style={{ padding: '20px', display: 'inline-flex' }}>
            <List bulleted><List.Item><b>M.Sc. Informatik</b><a>(www.in.tu-clausthal.de)</a> Mar. 2017-Jan.2018 Clausthal Technical
                University, Niedersachsen Germany</List.Item>
                <List.Item><b>BSc. Electronics and Comm. Engineering </b><a>(www.yildiz.edu.tr/en/)</a> Sep.
                    2009-Jun.2014 Yıldız Technical University, Istanbul Turkey</List.Item>
                <List.Item><b>Electronic Engineering (ERASMUS Exchange Program)</b><a>(fontys.edu/)</a> Sep.
                    2011-Jun.2012 Fontys University of Applied Sciences, Eindhoven Netherlands</List.Item>

                    </List>
        </div>
    }
    renderExperienceSection = () => {
        //TODO add your data from your current work
        return <div style={{ padding: '20px', display: 'inline-flex' }}>
            <List bulleted>
                <List.Item><b>Check24 </b> <a>(https://www.check24.de/)</a> Münich, GermanyJan. July 2018 - Currently
                    <List.List>
                        <List.Item>Fullstack Developer </List.Item>
                    </List.List>
                </List.Item><List.Item><b>ProSiebenSat.1 </b> <a>(https://www.prosieben.de/)</a> Münich, GermanyJan. 2018 - July 2018
                    <List.List>
                        <List.Item>Back end developer for the various projects of ProSiebenSat.1</List.Item>
                        <List.Item>Work with a small team of three with Kanban</List.Item>
                        <List.Item>Node.js language for Back-End development</List.Item>
                        <List.Item>React.js for Frontend of an internal product</List.Item>
                        <List.Item>MongoDb for database systems</List.Item>
                        <List.Item>Redis and memcached for caching purposes</List.Item>
                        <List.Item>Amazon services for deployment</List.Item>
                        <List.Item>Swagger for documentation purposes</List.Item>
                    </List.List>
                </List.Item>
                <List.Item><b>Matriks</b> <a>(www.matriksdata.com/website/)</a> Istanbul, Turkey July 2014-Feb.2017
                    <List.List>
                        <List.Item>Develop Software based on Turkish Stock Exchange.</List.Item>
                        <List.Item>Work with an agile team (Scrum & Kanban ) on optimization performance for client
                            demands</List.Item>
                        <List.Item>Node.js, Java and Rust languages for Back-End development</List.Item>
                        <List.Item>Haskell and Julia for Data analysis</List.Item>
                        <List.Item>CoreOs for operating systems</List.Item>
                        <List.Item>Docker Containers for deployment</List.Item>
                        <List.Item>ApacheStorm for distributed data processing</List.Item>
                        <List.Item>Elasticsearch for text based analysis</List.Item>
                        <List.Item>Apache Cassandra for database systems</List.Item>
                        <List.Item>Prometheus and Grafana for keeping track of the system</List.Item>
                        <List.Item>Back up for the systems configured and installed</List.Item>
                    </List.List>
                </List.Item>
            </List>
        </div>
    }
    renderInterestsSection = () => {
        return <div style={{ padding: '20px'}}>
            A Hobby project called “piarka” is currently developed and designed. Piarka is a mobile
            application.Currently under development. Followings has been used in the project
            <List bulleted>
            <List.Item> Designed in microservice architecture</List.Item>
            <List.Item> Json Web Token for Authorization</List.Item>
            <List.Item> Redis and MongoDb for caching and database purposes</List.Item>
            <List.Item> Node.js and Rust languages for Back-End development</List.Item>
            <List.Item> NativeScript language for Frontend development</List.Item>
            <List.Item> RAML for documentation</List.Item>
            </List>
        </div>
    }

    render() {
        const {activeItem} = this.state;
        return (
            <div className='Page'>
                <Grid attached='bottom'>
                      <Image src={ProfilePicture} size='medium' circular/>
                      <Header as='h3'>Doğa Budak</Header>
                </Grid>
                <Grid>
                    <Grid width={10}>
                <Menu attached='top' tabular>
                    <Menu.Item
                        name='General'
                        active={activeItem === 'General'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Education'
                        active={activeItem === 'Education'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Experience'
                        active={activeItem === 'Experience'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Interests'
                        active={activeItem === 'Interests'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Skills'
                        active={activeItem === 'Skills'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Contact'
                        active={activeItem === 'Contact'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                {this.renderSection()}
                </Grid>
                <Grid width={2}>
                    <div className='githubExplore'>
                        <Button>
                            <Link to="/blog">Go To Blog</Link>
                        </Button>
                    </div>
                </Grid>
                </Grid>
            </div>
        )
    }
}
