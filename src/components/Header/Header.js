import React, { useState } from 'react'
import logo from '../../assets/images/Logo.svg';
import searchIcon from '../../assets/images/searchIcon.svg';

import { StyledHeader, HeaderWrapper, Image, StyledForm, Input } from './Style';

const Header = ({ sendRequest }) => {
    const [query, setQuery] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (query) {
            sendRequest(query)
        }
    }
    const handleSetQuery = (e) => {
        return setQuery(e.target.value)
    } 
    return (
        <StyledHeader >
            <HeaderWrapper >
                <Image src={logo} />
                <StyledForm as='form' onSubmit={handleSubmit} >
                    <Image src={searchIcon} width='14' />
                    <Input
                        autoFocus
                        onChange={handleSetQuery}
                        placeholder='Enter GitHub username'
                    />
                </StyledForm>
            </HeaderWrapper >
        </StyledHeader>
    )
}
export default Header
