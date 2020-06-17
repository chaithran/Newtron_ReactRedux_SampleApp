import { Form, FormField,  FormTextInput, TextArea,Button } from 'grommet';
import PropTypes from 'prop-types';
import React,{Component} from 'react';

class Register extends Component {
    state = { value: {} }
    onSubmit = () => {
        const { value } = this.state;
    }

    render() {
        const { value } = this.state;
        return (
            <Form
                value={value}
                onChange={value => this.setState({ value })}
                onSubmit={this.onSubmit}
            >
                <FormField label="Name" name="name" required />
                <FormField label="Email" name="email" type="email" />
                <FormField label="Employee ID" name="employeeId" validate={/^[0-9]+$/} />
                <FormField label="Size" name="size" options={['small', 'medium', 'large']} /> {/* renders RadioButtons */}
                <FormField label="Comments" name="comments">
                    <TextArea name="comments" />
                </FormField>
                <Button type="submit" label="Update" />
            </Form>
        );
    }
}

// FormField.propTypes = {
//     // label: PropTypes.string.description("Human readable label"),
//     name: PropTypes.string
//         .description("The key to use within the Form value to store the data.")
//         .isRequired,
//     // options: PropTypes.arrayOf(PropTypes.oneOfType([
//     //     PropTypes.string,
//     //     PropTypes.object,
//     // ])).description("Array of options. If less than four, RadioButtons, otherwise, Select."),
//     // optionLabelKey: PropTypes.oneOfType([
//     //     PropTypes.string,
//     //     PropTypes.func,
//     // ]).description("When options are objects, the key to get the label."),
//     // optionValueKey: PropTypes.oneOfType([
//     //     PropTypes.string,
//     //     PropTypes.func,
//     // ]).description("When options are objects, the key to get the value."),
//     // required: PropTypes.bool.description("Whether the field is required."),
//     // validate: PropTypes.oneOfType([
//     //     PropTypes.object, // regular expression
//     //     PropTypes.func,
//     // ]).description("Validation rule. Provide a regular expression or a function."),
// };
export default Register;