import React from 'react';

class MethodSwitcher extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.createButton = this.createButton.bind(this);
  }

  handleClick(e) {
    this.props.onChange({
      target: {
        name: 'method',
        value: e.currentTarget.textContent,
      },
    });
  }

  createButton(name, selectedName) {
    const clz = name === selectedName ? MethodSwitcher.selectedCSS : MethodSwitcher.notSelectedCSS;
    return (
      <button
        key={name}
        style={{ marginRight: '10px' }}
        className={clz}
        onClick={this.handleClick}
      >{name}</button>);
  }

  render() {
    const buttons = MethodSwitcher.methods.map(m => this.createButton(m, this.props.selected));
    return <div className="method-switcher">{buttons}</div>;
  }
}

MethodSwitcher.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  selected: React.PropTypes.string.isRequired,
};

MethodSwitcher.methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];
MethodSwitcher.selectedCSS = 'mdl-button mdl-js-button mdl-button--raised mdl-button--accent';
MethodSwitcher.notSelectedCSS = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored';

export default MethodSwitcher;
