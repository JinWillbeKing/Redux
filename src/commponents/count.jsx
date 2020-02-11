import React, { Component } from 'react'
import {Button,InputNumber} from 'antd';
import './count.css'



export default class Count extends Component {
    onChange = (value)=>{
        console.log('changed', value);
    }
      
    state = {
        number:0
    }
    increment = () => {
        // console.log(this.onChange.value)
        
        // console.log(this.refs.selectNumber.value)// 选择的数值
        // console.log(this.state.number) // Now 的 number
        // console.log(this.refs.demo.value)
        const value = this.refs.selectNumber.value
        const number = this.state.number

        this.setState({number:number + value * 1})
        // console.log(this.state.number)
    }
    decrement = () => {
        const value = this.refs.selectNumber.value
        const number = this.state.number

        this.setState({number:number - value * 1})
        
    }

    oddIncrement = () => {

        const value = this.refs.selectNumber.value
        const number = this.state.number

        if (number % 2 === 1) {
        this.setState({number:number + value * 1})
        }        
    }
    incrementAsync = () => {
        const value = this.refs.selectNumber.value
        const number = this.state.number

        setTimeout(() => {
        this.setState({number:number + value * 1})
        }, 1000);
    }
    
    

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h1>The Number Now is:{this.state.number}</h1>
                <br/>
                <br/>
                <div className="btn">

                <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange}/>
                <select ref="selectNumber" className="sele">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
                <br/><br/>
                <Button type="primary" onClick={this.increment}>+</Button>&nbsp;&nbsp;
                <Button type="primary" onClick={this.decrement}>-</Button>&nbsp;&nbsp;
                <Button type="primary" onClick={this.oddIncrement}>奇数+</Button>&nbsp;&nbsp;
                <Button type="primary" onClick={this.incrementAsync}>延时+</Button>
                </div>
            </div>
        )
    }
}



