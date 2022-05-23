import React from 'react'
import LeftArr from './LeftArrow'
import RepoShowingNumber from './RepoShowingNumber'
import RightArr from './RightArrow'
import { Page, Pages, PaginatorWrapper } from './Style'



const Paginator = ({ userRepoCount, repoPerPage, onPageChangedLeft, onPageChangedRight, onPageChanged, activePage }) => {
    let pagesCount = Math.ceil(userRepoCount / repoPerPage)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (pagesCount > 5 && activePage > 3 && activePage < pagesCount - 2) {
        pages.splice(1, pagesCount - 1, '...', activePage - 1, activePage, activePage + 1, '...', pagesCount)
    } else if (pagesCount > 5 && activePage < 4) {
        pages.splice(3, pagesCount - 3, '...', pagesCount)
    } else if (pagesCount > 5 && activePage > pagesCount - 3) {
        pages.splice(1, pagesCount, '...', pagesCount - 2, pagesCount - 1, pagesCount)
    }
    const handlePageChange = (p, index) => {
        return () => onPageChanged(p, index)
    }
    return (
        <PaginatorWrapper justify='right' align='center'>
            <RepoShowingNumber
                userRepoCount={userRepoCount}
                repoPerPage={repoPerPage}
                activePage={activePage}
            />
            <LeftArr
                activePage={activePage}
                onPageChangedLeft={onPageChangedLeft}
            />
            <Pages justify='space-between'>
                {pages.map((p, index) => <Page
                    key={index}
                    activePage={activePage === p ? activePage : ''}
                    onClick={handlePageChange(p, index)}
                >
                    {p}
                </Page>)}
            </Pages>
            <RightArr
                onPageChangedRight={onPageChangedRight}
                activePage={activePage}
                pagesCount={pagesCount}
            />
        </PaginatorWrapper>
    )
}

export default Paginator