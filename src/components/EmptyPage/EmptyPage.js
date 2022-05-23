import React from 'react'
import { Loader } from '../../utils/Loader'
import { PageWrapper, StyledPage, Text } from './Style'

const EmptyPage = ({ 
    wrapperHeight,
    isLoading,
    textWidth,
    text, renderImage }) => {
    return (
        <PageWrapper wrapperHeight={wrapperHeight} align='center' justify='center'>
            {isLoading
                ? <Loader />
                : <StyledPage
                    align='center'
                    direction='column'
                    justify='space-between'
                >
                   {renderImage()}
                    <Text textWidth={textWidth}>
                        {text}
                    </Text>
                </StyledPage >
            }
        </PageWrapper>
    )
}
export default EmptyPage
