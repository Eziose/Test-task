import React, { Component } from 'react';
import './FormBlocks.css';
import Layout from '../../../components/Layout/Layout';
import Button from "../../../components/UI/Button/Button";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { connect } from 'react-redux';
import * as action from '../../../store/actions/actions'

class FormBlocks extends Component {
    state = {
        valueOnSelect: 'Djinni.com',
        day: '',
        month: '',
        year: '',
        gender: 'Male',
        isInvalid: false
    };
    onQuestion = (event) => {
        this.setState({valueOnSelect: event.target.value});
    };
    onTabsHandler = (gender) => {
        this.setState({gender: gender})
    };
    onDateHandler = (event, type) => {
        if (type === 'day') {
            if (event.target.value <= 31 && event.target.value >=1) {
                this.setState({day: event.target.value})
            }
        } else if (type === 'month') {
            if (event.target.value <= 12 && event.target.value >=1) {
                this.setState({month: event.target.value})
            }
        } else if (type === 'year') {
            this.setState({year: event.target.value})
        } else {
            this.setState({touched: false})
        }
    };
    onGoBack = () => {
        this.props.history.goBack();
    };
    goForward = () => {
      this.setState({isInvalid: false});
      let age = 18;
      let cutOffDate = new Date((+this.state.year) + age, +this.state.month, +this.state.day);
      let isAccess = cutOffDate < new Date();
      let notEmpty = this.state.month !== '' && this.state.day !== '' & this.state.year !== '';
      if (isAccess && notEmpty) {
          this.setState({isInvalid: false, day: '', month: '', year: ''});
          console.log(this.state);
          let valueMonth = this.state.month
          let valueDay = this.state.day

          if (this.state.day >= 1 && this.state.day <= 9) {
               valueDay = `0${this.state.day}`;
          }
          if (this.state.month >= 1 && this.state.month <= 9) {
              valueMonth = `0${this.state.month}`;
          }
          this.props.onSendForm(this.state.valueOnSelect, valueDay, valueMonth, this.state.year, this.state.gender)
          this.props.history.push('/form-finish');
      } else {
          this.setState({isInvalid: true, day: '', month: '', year: ''})
      }

    };
    render () {
        let classes = ['text-center dateOfBrt'];
        if (this.state.isInvalid) {
            classes.push('invalid')
        }
        let warning = this.state.isInvalid ? <p className="text-center text-danger">You’re under 18</p> : null;
        return (
            <Layout title='Signup' steps='70%'>
                <div className="FormBlocks">
                    <div className="wrapperTitle">
                        <p className="title">Date of Birth</p>
                        {warning}
                    </div>
                    <div className="row" style={{width: '100%', margin: '0 auto'}}>
                        <div className="col-md-4 blockInp">
                            <input
                                type="number"
                                className={classes.join(' ')}
                                value={this.state.day}
                                placeholder="DD"
                                onChange={(e) => this.onDateHandler(e, 'day')}/>
                        </div>
                        <div className="col-md-4 blockInp">
                            <input
                                type="number"
                                className={classes.join(' ')}
                                value={this.state.month}
                                placeholder="MM"
                                onChange={(e) => this.onDateHandler(e, 'month')}/>
                        </div>
                        <div className="col-md-4 blockInp">
                            <input
                                type="number"
                                className={classes.join(' ')}
                                value={this.state.year}
                                placeholder="YYYY"
                                onChange={(e) => this.onDateHandler(e, 'year')}/>
                        </div>
                    </div>
                    <div className="wrapperTitle">
                        <p className="title">Gender</p>
                    </div>
                    <div className="btn-group" data-toggle="buttons-radio">
                        <Tabs>
                            <TabList>
                                <Tab  className="btn btn-large btn-primary"
                                      onClick={() => this.onTabsHandler('Male')}
                                      >Male</Tab>
                                <Tab  className="btn btn-large btn-primary"
                                      onClick={() => this.onTabsHandler('Female')}
                                >Female</Tab>
                                <Tab  className="btn btn-large btn-primary"
                                      onClick={() => this.onTabsHandler('Unspecified')}
                                >Unspecified</Tab>
                            </TabList>
                            <TabPanel></TabPanel>
                            <TabPanel></TabPanel>
                            <TabPanel></TabPanel>
                        </Tabs>
                    </div>
                    <div className="selectBlock">
                        <div className="wrapperTitle">
                            <p className="title">Where do you hear about us?</p>
                        </div>
                        <select className="selectQuestion" id="exampleFormControlSelect1" value={this.state.valueOnSelect} onChange={this.onQuestion}>
                            <option value="Djinni.com">Djinni.com</option>
                            <option value="Dou.ua">Dou.ua</option>
                            <option value="Rabota.ua">Rabota.ua</option>

                        </select>
                    </div>
                </div>
                <div className="foot">
                    <div className="row">
                        <div className="col">
                            <Button pos='left' color='grey' clicked={this.onGoBack}>Back</Button>
                        </div>
                        <div className="col">
                            <Button pos='right' arrow clicked={this.goForward}>Next</Button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onSendForm: (val, day, month, year, gender) => dispatch(action.sendFormFromBlocks(val, day, month, year, gender)),
    }
};

export default connect(null, mapDispatchToProps)(FormBlocks);