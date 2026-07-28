import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/';

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ person: data.results[0], loading: false });
    } catch (error) {
      this.setState({ error: 'Failed to load user.', loading: false });
    }
  }

  render() {
    const { person, loading, error } = this.state;

    if (loading) {
      return <div>Loading user...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h2>
          {person.name.title} {person.name.first}
        </h2>
        <img src={person.picture.large} alt="User" />
      </div>
    );
  }
}

export default Getuser;
