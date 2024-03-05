import { useQuery } from "@tanstack/react-query"
import { request } from "../components/utils/common"
import { REGION } from "../components/utils/constants"


const getFeed = async () => {
    const response = await request({
        path: `feed/list?region=${REGION}&count=20`
    })
    return response;
}

export const useFeed = () => {
    const { data, isLoading } = useQuery({
        query: ['feed'],
        queryFn: getFeed
    });
    return { data: data?.data || [], isLoading }

}
