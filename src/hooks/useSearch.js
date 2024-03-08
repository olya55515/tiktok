import { useInfiniteQuery } from "@tanstack/react-query"
import { request } from "../components/utils/common"
import { REGION } from "../components/utils/constants"
import { useState } from "react"


const getSearchFeedByKeyword = async ({ keywords, cursor }) => {
    const path = `feed/search?keywords=${keywords}&count=10&cursor=${cursor}&region=${REGION}`

    const response = await request({
        path,
    })
    return response;
}

export const useSearch = () => {
    const [params, setParams] = useState({
        keywords: "",
        cursor: 0
    })

    const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
        query: ['searchFeed', params.keywords],
        queryFn: ({ pageParam = params }) => getSearchFeedByKeyword(pageParam),

        getNextPageParam: ({ data }) => {
            return data?.hasMore ? { ...params, cursor: data?.cursor } : undefined;
        },
        enabled: !!params.keywords
    });
    return { 
        isFetching, 
        setParams, 
        fetchNextPage, 
        hasNextPage,
        data: data?.pages || [], 
    }

}
