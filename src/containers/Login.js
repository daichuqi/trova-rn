import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { login } from '../actions/member';

class Login extends Component {
  static defaultProps = {
    locale: null,
  };

  state = {
    errorMessage: null,
  };

  onFormSubmit = data => {
    const { onFormSubmit } = this.props;
    return onFormSubmit(data).catch(err => {
      this.setState({ errorMessage: err });
      throw err;
    });
  };

  render = () => {
    const { member, locale, Layout, isLoading, successMessage } = this.props;

    const { errorMessage } = this.state;

    return (
      <Layout
        member={member}
        locale={locale}
        loading={isLoading}
        error={errorMessage}
        success={successMessage}
        onFormSubmit={this.onFormSubmit}
      />
    );
  };
}

const mapStateToProps = state => ({
  member: state.member || {},
  locale: state.locale || null,
  isLoading: state.status.loading || false,
  successMessage: state.status.success || '',
});

const mapDispatchToProps = {
  onFormSubmit: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
