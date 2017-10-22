import React, { Component } from "react"

const scaleNames = {
    c: "Celsius",
    f: "Fehrenheit"
};

function BoilingStatus(props) {
    if (props.celsius >= 100) {
        return <p>The wather would boil. </p>;
    }
    else {
        return <p>The water would not boild.</p>;
    }
}

function toCelsius(fehrenheit) {
    return (fehrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);

    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperaturInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = props.onTemperatureChange;
    }

    render() {

        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={(e) => this.handleChange(e, scale)} type="text" />
                <BoilingStatus celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            celsius: "",
            fehrenheit: ""
        }
        this.onTemperatureChange = this.onTemperatureChange.bind(this);
    }

    onTemperatureChange(e, scale) {
        let newValue = e.target.value;
        if (scale === "c") {
            this.setState({ celsius: newValue, fehrenheit: tryConvert(newValue, toFahrenheit) })
        }
        else {
            this.setState({ fehrenheit : newValue, celsius: tryConvert(newValue, toCelsius) })
        }
    }

    render() {

        const celsius = this.state.celsius;
        const fehrenheit = this.state.fehrenheit;

        return (
            <div>
                <TemperaturInput scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.onTemperatureChange} />
                <TemperaturInput scale="f"
                    temperature={fehrenheit}
                    onTemperatureChange={this.onTemperatureChange} />
            </div>
        );
    }
}

export default Calculator;