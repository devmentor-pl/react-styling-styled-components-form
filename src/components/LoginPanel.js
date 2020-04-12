// ./src/components/LoginPanel.js
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const LoginPanel = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isSubmited, setIsSubmited] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const err = [];
        
        if(!email.includes('@')) {
            err.push('Niepawidłowy adres email!');
        }

        if(password.length < 6) {
            err.push('Hasło jest za krótkie!');
        }

        if(err.length > 0) {
            alert(err.join('\n'));
        } else {
            alert('Formularz został wysłany...');

            setEmail('');
            setPassword('');
        }

        setErrors(err);
        setIsSubmited(true);
    }

    return (
        <StyledLoginPanel isSubmited={ isSubmited } isValid={ isSubmited && errors.length === 0}>
            <Title>Login Form</Title>
            <form noValidate onSubmit={ handleSubmit }>
                <Row>
                    <Label fieldName="email">Email</Label>
                    <Field 
                        name="email"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) } 
                    />
                </Row>
                <Row>
                    <Label fieldName="password">Password</Label>
                    <Field 
                        name="password"
                        value={ password }
                        onChange={ e => setPassword(e.target.value) }
                    />
                </Row>
                <RowWithButton>
                    <Submit />
                </RowWithButton>
            </form>
        </StyledLoginPanel>
    )
}

const StyledLoginPanel = styled.section`
    border: 1px solid #dcdcdc;
    padding: 20px;
    max-width: 360px;
    ${ ({ isSubmited, isValid}) => isSubmited && !isValid && css`
        border-color: red;
    `}
`;

const Title = styled.h3`
    text-align: center;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`;

const RowWithButton = styled(Row)`
    justify-content: center;
    margin-top: 20px;
`;

const Label = styled.label.attrs(props => ({
    htmlFor: `field-${props.fieldName}`
}))`
    border-left: 5px solid #e2e2e2;
    padding-left: 5px;
`;

const Field = styled.input.attrs(({name, type}) => ({
    id: name ? `field-${name}` : null,
    type: type ? type : name
}))`
    border: none;
    border-bottom: 1px solid #e2e2e2;
    &:focus {
        outline: 0;
        border-color: #57c7f3;
    }
`;

const Submit = styled.input.attrs(() => ({
    type: 'submit',
}))`
    background-color: #fff;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    padding: 5px 10px;
`;

export default LoginPanel;