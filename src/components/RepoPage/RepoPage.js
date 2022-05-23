import React from 'react'
import { Repo, RepoContainer, RepoDescription, RepoLink, RepoTitle, Wrapper } from './Style'


const RepoPage = ({ userRepo, userRepoCount }) => {
    let allrepos =  userRepo.map(u => {
        return (<Repo key={u.id}>
            <RepoLink target='_blank' href={u.html_url}>{u.name}</RepoLink>
            <RepoDescription>{u.description}</RepoDescription>
        </Repo>        
        )
    })

    return (
        <Wrapper direction='column'>
            <RepoTitle>Repositories ({ userRepoCount})</RepoTitle>
            <RepoContainer direction='column' align='flex-start'>
                {allrepos}
            </RepoContainer>
        </Wrapper>
    )
}

export default RepoPage