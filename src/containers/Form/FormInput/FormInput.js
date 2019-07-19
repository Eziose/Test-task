import React, { Component } from 'react';
import './FormInput.css';
import Layout from '../../../components/Layout/Layout';
import Input from '../../../components/UI/Input/Input';
import Button from "../../../components/UI/Button/Button";
import * as action from "../../../store/actions/actions";
import { connect } from 'react-redux';

class FormInput extends Component {
    state = {
        orderForm: {
            email: {
                elementType: 'input',
                elementText: 'EMAIL',
                elementConfig: {
                    type: 'email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementText: 'PASSWORD',
                elementConfig: {
                    type: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                elementText: 'CONFIRM PASSWORD',
                elementConfig: {
                    type: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false
            }
        },
        passwordFalse: false,
        formIsValid: false
    };
    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    };
    orderHandler = () => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        let info = this.checkPassword(this.state.orderForm['password'].value, this.state.orderForm['confirmPassword'].value)
        let checkEmail = expression.test(String(this.state.orderForm['email'].value).toLowerCase())
        if (!info || !checkEmail) {
            this.setState({passwordFalse: true})
        } else {
            this.setState({passwordFalse: false})
            if (this.state.formIsValid) {
                const formData = {};
                for (let formElementIdentifier in this.state.orderForm) {
                    formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
                }
                this.props.onSendForm(formData)
                this.props.history.push('/form-blocks');
            }
        }
    };
    checkPassword = (pass, confirm) => {
        if (pass === confirm) {
            return true;
        }
    };
    inputChangedHandler = (event, inputIdentifier) => {

        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
    };

    render() {
        const formElementsArr = [];
        for (let key in this.state.orderForm) {
            formElementsArr.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = <form action="">
            {formElementsArr.map(formElement => (
                <Input
                    err={this.state.passwordFalse}
                    label={formElement.config.elementText}
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
            ))}
        </form>;
        return (
            <Layout title='Signup' steps='35%'>

                <div className="FormInput">
                    {form}
                </div>
                <div className="foot">
                    <div className="row">
                        <div className="col">
                            <Button pos='right' arrow clicked={this.orderHandler}>Next</Button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendForm: (formData) => dispatch(action.sendFormFromInput(formData)),
    }
};


export default connect(null, mapDispatchToProps)(FormInput);