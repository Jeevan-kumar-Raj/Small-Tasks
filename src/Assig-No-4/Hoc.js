import React, { Component } from "react";

const preload = {
  data: [
    {
      name: "Ojo",
      zone: "Lagos State",
      region: "South West",
    },
    {
      name: "Ahiazu Mbaise",
      zone: "Imo State",
      region: "South East",
    },
    {
      name: "Akoko-Edo",
      zone: "Edo State",
      region: "South South",
    },
    {
      name: "Anka",
      zone: "Zamfara State",
      region: "North West",
    },
    {
      name: "Akwanga",
      zone: "Nasarawa State",
      region: "North Central",
    },
  ],
};

const withSearch = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      searchTerm: "",
    };
    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      return (
        <div>
          <div>
            <input
              onChange={this.handleSearch}
              value={this.state.searchTerm}
              type="text"
              placeholder="Search"
            />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      );
    }
  };
};

const Location = (props) => {
  const { searchTerm } = props;
  return (
    <div>
      <div>
        <div>
          <h2>Preferred Locations</h2>
        </div>
      </div>
      <div>
        {preload.data
          .filter(
            (location) =>
              `${location.name} ${location.zone} ${location.region}`
                .toUpperCase()
                .indexOf(searchTerm.toUpperCase()) >= 0
          )
          .map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
      </div>
    </div>
  );
};

const LocationCard = (props) => {
  return (
    <div>
      <hr />
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>Zone:</b> {props.zone}
      </p>
      <p>
        <b>Region:</b> {props.region}
      </p>
      <hr />
    </div>
  );
};

const Hoc = withSearch(Location);
export default Hoc;

// const App = () => (
//   <div>
//     <Hoc />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("root"));

// export class Hoc extends Component {
//   render() {
//     return <div></div>;
//   }
// }

// export default Hoc;
