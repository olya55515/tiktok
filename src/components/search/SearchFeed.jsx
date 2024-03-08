import React, { Fragment, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'
import { Alert } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
import VideoItem from '../videos/VideoItem'
import Spinner from '../spinner/Spinner'

const SearchFeed = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const { data, hasNextPage, fetchNextPage, isFetching, setParams } = useSearch()

  useEffect(() => {
    setParams((__params) => ({ ...__params, keywords: query }))
  }, [setParams, query])


  return (
    <div className='search-container'>
      {data.map(({ data: { videos } }, idx) => {
        return !videos.length ? (
          <div className='error-message' key={idx}>
            <Alert security='error'>Nothing for {query}</Alert>
          </div>
        ) : (
          <Fragment key={idx}>
            <InfiniteScroll dataLength={videos.length} scrollThreshold={"600px"} hasMore={hasNextPage} next={fetchNextPage}>
              <div className='search-feed'>
                {videos.map((video) => <VideoItem key={video.video_id} {...video} />)}
              </div>
            </InfiniteScroll>
          </Fragment>
        )
      })}
      {isFetching && <Spinner />}
    </div>
  )
}

export default SearchFeed