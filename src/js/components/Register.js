import React,{Component} from 'react'
import { Grommet, Form, FormField, TextInput, CheckBox, Paragraph, Button } from 'grommet'
import { FormEdit, Mail, Lock, UserAdd } from 'grommet-icons'

const theme = {
    "global": {
        "colors": {
            "background": {
                "light": "#ffffff",
                "dark": "#000000"
            }
        },
        "font": {
            "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
        }
    },
    "button": {
        "extend": [
            null
        ]
    }
}
class Register extends Component {
    render() {
        return (
            <Form>
                <FormField label="First Name" color="accent-1" required={true} name="firstname">
                    <TextInput placeholder="Enter your name" size="medium" type="text" icon={<FormEdit />} />
                </FormField>
                <FormField label="Last Name" name="lastname" required={true} color="accent-1">
                    <TextInput icon={<FormEdit />} placeholder="Enter your last name" name="lastname" />
                </FormField>
                <FormField label="Email" name="email" required={true}>
                    <TextInput placeholder="Enter your email address" name="email" icon={<Mail />} />
                </FormField>
                <FormField label="Password" color="accent-1" name="password" required={true}>
                    <TextInput icon={<Lock />} placeholder="Choose password" type="password" />
                </FormField>
                <FormField label="Re-enter Password" required={true}>
                    <TextInput type="password" icon={<Lock />} placeholder="Enter your password again" />
                </FormField>
                <CheckBox />
                <Paragraph fill={true} size="medium" color="active-text">
                    I accept the Terms of  Use and Privacy Policy
        </Paragraph>
                <Button label="Register Now" icon={<UserAdd />} active={true} fill="horizontal" gap="small" hoverIndicator={true} plain={false} primary={false} reverse={false} secondary={false} size="large" type="submit" color="graph-3" />
            </Form>
        )
    }
}
export default Register;
