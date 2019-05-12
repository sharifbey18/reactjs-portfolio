import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import '../styles/main.scss';
class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'I am Index Page'
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  updateTitle(){
    this.setState({ title: 'I am updated index page' });
  }

  render() {
    console.log('render');
    return (
      <BaseLayout>
        <h1 className='fromPage'> I am Index page from class component </h1>
        <h2>{this.state.title}</h2>
        <button onClick={ () => {this.setState({title: 'I am updated index page'})}}>Change title</button>
      </BaseLayout>

    )
  }
}

export default Index
