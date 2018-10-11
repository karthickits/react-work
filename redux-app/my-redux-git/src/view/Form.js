import React from "react";
class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          ref={node => {
            this.urlTextBox = node;
          }}
        />
        <input
          type="button"
          value="Get User Details"
          onClick={() => {
            this.props.getUserDetails(this.urlTextBox.value);
          }}
        />
      </form>
    );
  }
}

export default Form;
