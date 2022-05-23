import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import searchIcon from './assets/images/searchIcon.svg';
import userIcon from './assets/images/userIcon.svg';
import EmptyPage from './components/EmptyPage/EmptyPage';
import { Image } from './components/EmptyPage/Style';
import Header from './components/Header/Header';
import SearchResultPage from './components/SearchResultPage/SearchResultPage';
const numberOfPagesWhenClickedDots = 4
const App = () => {
  const [query, setQuery] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const [userRepo, setUserRepo] = useState(null)
  const [activePage, setActivePage] = useState(1)
  const [isUserNotFound, setIsUserNotFound] = useState(false)
  const [isRepoEmpty, setIsRepoEmpty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const REPO_PER_PAGE = 4

  const getUsertInfo = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
  }
  const getRepo = (userName, selectPage = 1) => {
    return axios.get(` https://api.github.com/users/${userName}/repos?per_page=${REPO_PER_PAGE}&page=${selectPage}`)
  }
  const sendRequest = async (userName) => {
    setIsLoading(true)
    setIsUserNotFound(false)
    setIsRepoEmpty(false)
    setUserInfo(null)
    setUserRepo(null)
    setActivePage(1)
    setQuery(userName)
    try {
      const responseInfo = await getUsertInfo(userName)
      const responseRepo = await getRepo(userName)
      setUserInfo(responseInfo.data)
      if (responseRepo.data.length) {
        setUserRepo(responseRepo.data)
      } else {
        setIsRepoEmpty(true)
      }
      setIsLoading(false)
    } catch (err) {
      setIsUserNotFound(true)
      setIsLoading(false)
    }
  }

  const onPageChangedLeft = async () => {
    if (activePage > 1) {
      setActivePage(activePage - 1)
    }
  };

  const onPageChangedRight = async () => {
    const pagesCount = Math.ceil(userInfo.public_repos / REPO_PER_PAGE)
    if (activePage < pagesCount) {
      setActivePage(activePage + 1)
    }
  };

  // useEffect(() => {
  //   const handlePageChange = async (activePage) => {
  //     setIsLoading(true)
  //     const res = await getRepo(query, activePage)
  //     setUserRepo(res.data)
  //     setIsLoading(false)
  //   }
  //   if (activePage) {
  //     handlePageChange(activePage)
  //   }
  // }, [activePage, query])
  const handlePageChange = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await getRepo(query, activePage)
      setUserRepo(res.data)
      setIsLoading(false)
    } catch {
      setIsRepoEmpty(true)
    }
  }, [query,activePage])
  useEffect(() => {
    if (activePage) {
      handlePageChange()
    }
  }, [activePage, handlePageChange])

  const onPageChanged = async (clickedItem, clickedItemIndex) => {
    //заменить цифры константами по возможности
    let pagesCount = Math.ceil(userInfo.public_repos / REPO_PER_PAGE)
    if (clickedItem === '...' && (clickedItemIndex === 3 || clickedItemIndex === 5)) {
      clickedItem = activePage + numberOfPagesWhenClickedDots
    } else if (clickedItem === '...' && clickedItemIndex === 1 && activePage > 4) {
      clickedItem = activePage - numberOfPagesWhenClickedDots
    } else if (clickedItem === '...' && clickedItemIndex === 1 && activePage < 5) {
      clickedItem = 1
    } else if (clickedItem === '...' && (clickedItemIndex === 3 || clickedItemIndex === 5) && activePage > pagesCount - 3) {
      clickedItem = pagesCount
    }
    setActivePage(clickedItem)
  }


  let renderPage
  if (!userInfo && isLoading) {
    renderPage = <EmptyPage isLoading={isLoading} />
  } else if (isUserNotFound) {
    renderPage = <EmptyPage
      text={'User not found'}
      renderImage={() => <Image
        src={userIcon}
      />}
    />
  }
  else if (!userInfo) {
    renderPage = <EmptyPage
      renderImage={() => <Image
        imageWidth={64}
        imageHeight={64}
        imageMargin={23}
        src={searchIcon}
      />}
      textWidth={210}
      text={'Start with searching a GitHub user'} />
  } else if (userInfo) {
    renderPage = <SearchResultPage
      userRepo={userRepo}
      userRepoCount={userInfo.public_repos}
      userName={userInfo.name}
      userLink={userInfo.html_url}
      userPhoto={userInfo.avatar_url}
      userLogin={userInfo.login}
      followersCount={userInfo.followers}
      followingCount={userInfo.following}
      repoPerPage={REPO_PER_PAGE}
      onPageChanged={onPageChanged}
      activePage={activePage}
      onPageChangedLeft={onPageChangedLeft}
      onPageChangedRight={onPageChangedRight}
      isRepoEmpty={isRepoEmpty}
      isLoading={isLoading}

    />
  }
  return (
    <div >
      <Header sendRequest={sendRequest} />
      {renderPage}
    </div>
  );
}

export default App;
