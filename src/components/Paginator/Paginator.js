import React from 'react'
import LeftArr from './LeftArrow'
import RightArr from './RightArrow'
import { Page, Pages, PaginatorWrapper, RepoShowingNumbers } from './Style'



const Paginator = ({ userRepoCount, repoPerPage, onPageChangedLeft, onPageChangedRight, onPageChanged, activePage }) => {
    let pagesCount = Math.ceil(userRepoCount / repoPerPage)
    let firstShowingRepo = (repoPerPage * activePage) - 3
    if (userRepoCount === 1) {
        firstShowingRepo = 1
    }

    let lastShowingRepo = (repoPerPage * activePage)
    lastShowingRepo = lastShowingRepo > userRepoCount ? userRepoCount : lastShowingRepo

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // Array.from({length:pagesCount},(_,i)=>++i)

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
            <RepoShowingNumbers>
                {firstShowingRepo}-{lastShowingRepo} of {userRepoCount} items
            </RepoShowingNumbers>
            <LeftArr
                activePage={activePage}
                onPageChangedLeft={onPageChangedLeft}
            />
            {/* ширина с помощью css */}
            <Pages width={pagesCount < 5 ? pagesCount * 20 : 150} justify='space-between'>
                {/* можно вынести в переменную */}
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