import React from "react";
class Display extends React.Component {
  render() {
    console.log("Display:", this.props);
    const { fetching, userDetails, error } = this.props;
    return (
      <div>
        {fetching && (
          <h3 style={{ color: "blue" }}>
            {" "}
            Please wait... user Details are being fetched...
          </h3>
        )}
        {error && <h3 style={{ color: "red" }}> {error}</h3>}
        <ul>
          <li>Name: {userDetails.name} </li>
          <li>Location: {userDetails.blog} </li>
          <li>Blog: {userDetails.picture} </li>
        </ul>
      </div>
    );
  }
}

export default Display;
