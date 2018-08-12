'use strict';

/**
 * A React Component that handle the disabling of button when clicked
 * synchronous/asynchronously  and changing the text of it to progressive form
 */
import React from 'react';

class YieldButton extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            disabled: false,
            currentText: this.props.btnName
        };

        // function bindings
        this.handleClick = this.handleClick.bind(this);
        this._disable = this._disable.bind(this);
        this._enable = this._enable.bind(this);
    }

    handleClick(e) {
        this._disable();
        let defer = this.props.onClick(e);

        // check for promises
        // if promise is not used it means it is a synchronous function
        if (defer == undefined || defer.then == undefined) {
            // enable now the button
            this._enable();
            return true;
        }

        // asynchronous
        defer.then((result) => {
            this._enable();
            return result;
        }, (err) => {
            this._enable();
            // continue the rejection for other catch
            Promise.reject(err);
        });
    }

    _disable() {
        // if there is a specified loading text it will be use as alternate text when button is disabled
        // else the current text will be converted to progressive form.
        let alternateText = this.props.loadingText || this._progressiveForm(this.props.btnName);
        this.setState({
            disabled: true,
            currentText: alternateText
        });
    }

    _enable() {
        this.setState({
            disabled: false,
            currentText: this.props.btnName
        });
    }

    _progressiveForm(text) {
        let vowels = ['e', 'E'];
        let progressiveText = 'ing ...';
        // split the value to array
        let unFormatText = text.trim().split("");

        // check the last text if it is a vowel
        if (vowels.indexOf(unFormatText[unFormatText.length - 1]) != -1) {
            // if it is a vowel convert it to progressive form
            unFormatText[unFormatText.length - 1] = progressiveText;
        }

        // additional condition soon.
        return unFormatText.join("");
    }

    // render() {
    //     return (<div> Test</div>)
    // }
    
    render() {
        return (
          <button className={this.props.className} disabled={this.state.disabled}
          onClick={this.handleClick} >
            {this.state.currentText}
          </button>
        );
    }
}


export default YieldButton;
