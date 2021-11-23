import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";

class CopyButton extends Component {
  state = {
    hover: false,
    hidden: "opacity-0",
    fabCopyIcon: ["fas", "clipboard"],
  };
  fabCheckIcon = () => {
    this.setState({
      fabCopyIcon: ["fas", "clipboard-check"],
    });
  };
  render() {
    return (
      <div
        onClick={this.fabCheckIcon}
        className="absolute top-0 right-0 text-center m-1 cursor-pointer "
      >
        <CopyToClipboard
          text={this.props.data}
          className=""
          onCopy={() => this.setState({ copied: true })}
        >
          <span>
            <FontAwesomeIcon
              icon={this.state.fabCopyIcon}
              className="text-3xl m-2 animate__bounce"
            />
          </span>
        </CopyToClipboard>
      </div>
    );
  }
}

export default CopyButton;
