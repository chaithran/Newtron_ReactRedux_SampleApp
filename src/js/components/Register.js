import React, { Component } from 'react'
import { Box, Grommet, Text, Form, FormField, TextInput, CheckBox, Paragraph, Button } from 'grommet'
import { FormEdit, Mail, Lock, UserAdd } from 'grommet-icons'

class Register extends Component {
    render() {
        return (
            <Box style={{ alignItems: "center" }} overflow="auto">
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
                    <Box margin={{"left":"small"}}>
                    <CheckBox/>
                    <Text fill={true} size="medium" color="active-text">
                            I accept the Terms of  Use and Privacy Policy
                    </Text>
                    </Box>
                    <Box margin="xsmall" style={{ alignItems: "start" }} background="dark-green">
                        <Button label="Register Now" icon={<UserAdd />} gap="small" hoverIndicator={true} type="submit" />
                    </Box>
                </Form>
            </Box>
        )
    }
}
export default Register;
