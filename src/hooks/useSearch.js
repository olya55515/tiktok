import { useInfiniteQuery } from "@tanstack/react-query"
import { request } from "../components/utils/common"
import { REGION } from "../components/utils/constants"
import { useState } from "react"


const getSearchFeedByKeyword = async ({keywords, cursor}) => {
const path = `/feed/search?/keywords=${keywords}&count=10&cursor=${cursor}&region=${REGION}`

    const response = await request({
        path,
    })
    return response;
}

export const useFeed = () => {
const [params, setParams] = useState({
    keywords: "",
    cursor: 0
})

    const { data, isLoading } = useInfiniteQuery({
        query: ['searchFeed'],
        queryFn: ({pageParam = params}) => getSearchFeedByKeyword(pageParam),
        getNextPageParam: ({data}) => {
            return data?.hasMore ? {...params, cursor: data?.cursor + 10} : undefined
        }
    });
    return { data: data?.data || [], isLoading, setParams }

}
