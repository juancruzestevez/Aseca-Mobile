import axios from "axios";

const AxiosResponses = {
    allLeagues: (okCallback, errorCalllback) => {
        axios.get(
            'http://localhost:8080/league/all'
        ).then(async (res) => {
            if (res.status === 200){
                const response = await res.data
                console.log(response)
                okCallback(response)
            }else {
                errorCalllback()
            }
        })
    }
}

const useAxiosResponses = () => AxiosResponses

export {useAxiosResponses};