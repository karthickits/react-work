import React from "react";
import PropertiesReader from "properties-reader";
import FileReader from "react-file-reader-input";

class Form extends React.Component {
  constructor() {
    super();
    this.compareProp = this.compareProp.bind(this);
  }
  compareProp() {
    const reader = new FileReader();
    reader.setState({})

    let fromProp = PropertiesReader("./files/FromFile.properties");
    let toProp = PropertiesReader("./files/FromFile.properties");
    console.log(fromProp);
    console.log("toprop", toProp);
  }

  render() {
    return (
      <form>
        {" "}
        <input type="button" value="Compare!" onClick={this.compareProp} />
      </form>
    );
  }
}

export default Form;
