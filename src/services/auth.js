import { validateAll } from 'indicative/validator';
import axios from 'axios';
import config from '../config';

export default class AuthService {
   async registerUser(data) {
       console.log(data);
        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|string|min:6|confirmed'
        };
        const messages = {
            required: 'this field is required',
            'email.email': 'the email is invalid',
            'password.confirmed': 'the password confirmation does not match'

        }
        try {
            await validateAll(data, rules, messages);
            try {
                const response = await axios.post(`${config.apiUrl}`, {
                    name: data.name,
                    email: data.email,
                    password: data.password
                })
                return response.data
                // localStorage.setItem('user', JSON.stringify(response.data));
                // this.props.setAuthuser(response.data)
                // this.props.history.push('/')

            } catch (errors) {
                const formattedErrors = {};
                formattedErrors['email'] = errors.response.data['email'][0];
                this.setState({ errors: formattedErrors });
                return formattedErrors;
            }
        } catch (err) {
            const formattedErrors = {};
            err.forEach(error => formattedErrors[error.field] = error.message);
            this.setState({ errors: formattedErrors });
            return formattedErrors
        }
    }
}