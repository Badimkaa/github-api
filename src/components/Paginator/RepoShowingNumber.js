import { RepoShowingNumbers } from "./Style"

const RepoShowingNumber = ({ userRepoCount, repoPerPage, activePage }) => {
    let firstShowingRepo = (repoPerPage * activePage) - 3
    if (userRepoCount === 1) {
        firstShowingRepo = 1
    }

    let lastShowingRepo = (repoPerPage * activePage)
    lastShowingRepo = lastShowingRepo > userRepoCount ? userRepoCount : lastShowingRepo
    return (
        <RepoShowingNumbers>
            {firstShowingRepo}-{lastShowingRepo} of {userRepoCount} items
        </RepoShowingNumbers>
    )
}

export default RepoShowingNumber
