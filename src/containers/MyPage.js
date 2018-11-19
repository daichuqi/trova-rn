import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyPage extends Component {
  componentDidMount = () => {};

  render = () => {
    const { Layout } = this.props;

    return <Layout />;
  };
}

const mapStateToProps = ({ status }) => ({
  isLoading: status.loading || false,
  successMessage: status.success || '',
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPage);
