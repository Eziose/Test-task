import React, { Component } from 'react';
import Layout from '../../../components/Layout/Layout';
import './FormFinish.css';
import Logo from '../../../assets/done.svg';
import { connect } from 'react-redux';

class FormFinish extends Component {
    sendData = () => {
        let date = new Date(`${this.props.year}/${this.props.month}/${this.props.day}`).getTime();
        let data = {
            ['user_data']: {
                email: this.props.email,
                password: this.props.password,
                gender: this.props.gender,
                date_of_birth: date,
                question: this.props.valueOnSelect
            }
        };
        console.log(JSON.stringify(data))
        this.props.history.push('/')
    };

    render() {
        return (
            <Layout title="Thank You!" steps='100%'>
                <div className="FormFinish">
                    <img src={Logo} alt=""/>
                    <div className="text-center">
                        <button className="btnFinish" onClick={this.sendData}>Go to Dashboard<i
                            className="fa fa-arrow-right IconRight"/></button>
                    </div>
                    <div className="footerFinishBlock">
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        valueOnSelect: state.valueOnSelect,
        day: state.day,
        month: state.month,
        year: state.year,
        gender: state.gender,
        email: state.email,
        password: state.password
    }
};

export default connect(mapStateToProps)(FormFinish);