import React from "react";
import Switch from "react-switch";

class Toggle extends React.Component {
  render() {
    return (
      <Switch
        onChange={this.props.toggleTheme}
        checked={this.props.theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={"#363537"}
        onColor={"#cca353"}
      />
    );
  }
}

export default Toggle;
