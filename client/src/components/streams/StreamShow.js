import React from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchStream } from "../../redux/actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    const { title, description } = this.props.stream;
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
