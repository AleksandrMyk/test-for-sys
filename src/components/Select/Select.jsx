import React, { Component } from 'react';
import Select from 'react-select';
import style from './select.module.css';

const colourOptions = [
  { value: 'Желтый', label: 'Желтый', color: '#000000' },
  { value: 'Красный', label: 'Красный', color: '#000000' },
  { value: 'Зеленый', label: 'Зеленый', color: '#000000' },
  { value: 'Синий', label: 'Синий', color: '#000000' },
  { value: 'Черный', label: 'Черный', color: '#000000' },
];

export default class App extends Component {
  state = {
    selectedOption: null,
    isOpen: false,
  };

  handleChange = color => {
    this.setState({ selectedOption: color });
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { selectedOption, isOpen } = this.state;

    return (
      <div
        className={style.select_container}
        onMouseEnter={() => {
          this.toggle();
        }}
        onMouseLeave={() => {
          this.toggle();
        }}
      >
        <Select
          className={style.selectCustom}
          value={selectedOption}
          onChange={this.handleChange}
          options={colourOptions}
          placeholder="Цвет"
          menuIsOpen={isOpen}
          maxMenuHeight={110}
          overflowY="hidden"
        />
      </div>
    );
  }
}
