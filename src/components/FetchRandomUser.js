import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }
  refreshClicked = () => {
    const retrieveNewSet = async () => {
      const response = await fetch("https://api.randomuser.me/?results=5");
      const data = await response.json();
      return this.setState({ people: data.results, loading: false });
    };
    retrieveNewSet();
  };
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people) {
      return <div>didn't get a person</div>;
    }

    const peopleJSX = this.state.people.map((person, i) => (
      <div key={`some-person-${i}`}>
        <div style={{ overflow: "auto" }}>
          <table>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Picture</th>
            </tr>
            <tr>
              <td>{person.name.title}</td>
              <td>{person.name.first}</td>
              <td>{person.name.last}</td>
              <img src={person.picture.large} />
            </tr>
          </table>
        </div>
      </div>
    ));
    return (
      <div>
        <h1>
          <button onClick={this.refreshClicked}>Refresh</button>
        </h1>
        {peopleJSX}
      </div>
    );
  }
}
