import React from 'react'
import repoIcon from '../../assets/images/repo.svg'
import { Loader } from '../../utils/Loader'
import EmptyPage from '../EmptyPage/EmptyPage'
import { Image } from '../EmptyPage/Style'
import Paginator from '../Paginator/Paginator'
import RepoPage from '../RepoPage/RepoPage'
import UserProfile from '../UserProfile/UserProfile'
import { DivFlex, SearchResultWrapper } from './Style'




const SearchResultPage = ({ userRepo,
    userRepoCount,
    userName,
    userLink,
    userPhoto,
    userLogin,
    followersCount,
    followingCount,
    repoPerPage,
    onPageChanged,
    activePage,
    onPageChangedLeft,
    onPageChangedRight,
    isRepoEmpty,
    isLoading }) => {
    let renderRepoPage
    if (!isRepoEmpty) {
        renderRepoPage = <RepoPage userRepo={userRepo} userRepoCount={userRepoCount} />
    } else {
        renderRepoPage = <EmptyPage text={'Repository list is empty'}
            wrapperHeight={'unset'}
            renderImage={() => <Image
                src={repoIcon}
            />} />
    }
    return (
        <>
            <SearchResultWrapper justify='center'>
                <UserProfile
                    userPhoto={userPhoto}
                    userName={userName}
                    userLink={userLink}
                    userLogin={userLogin}
                    followersCount={followersCount}
                    followingCount={followingCount}
                />
                {isLoading ?
                    <DivFlex align='center' justify='center'>
                        <Loader />
                    </DivFlex>
                    : renderRepoPage}
            </SearchResultWrapper>
            <SearchResultWrapper pt='0'>
                {isRepoEmpty ? ''
                    :
                    <Paginator
                        onPageChanged={onPageChanged}
                        activePage={activePage}
                        repoPerPage={repoPerPage}
                        userRepoCount={userRepoCount}
                        onPageChangedLeft={onPageChangedLeft}
                        onPageChangedRight={onPageChangedRight}
                    />
                }
            </SearchResultWrapper>

        </>
    )
}
export default SearchResultPage
