import React, { Component } from "react";
import getInfo from "../Services/getInfo";
import { Oval } from "react-loader-spinner";
import GeoTrackerInfo from "./GeoTrackerInfo";

export default class GeoTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      loading: true,
    };
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        info: data,
        loading: false,
      });
    });
  }

  render() {
    const isLoading = this.state.loading;

    return (
      <>
        {isLoading ? (
          <Oval
            height={80}
            width={80}
            color="#03bfcb"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#03bfcb"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : (
          <GeoTrackerInfo data={this.state.info} />
        )}
      </>
    );
  }
}
