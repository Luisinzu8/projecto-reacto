import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Sample.less';

export default class Sample extends Component {
  state = {
    value: new Date(),
  }

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state;

    return (
      <div className="Sample">
        <header>
          <h1>react-calendar</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar
              onChange={this.onChange}
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }
}