import axios from "axios";
import API_ENDPOINT from "../Config/API_ENDPOINT";

class LogTrackerAmountService {
    constructor() {
        this._axios = axios;
        this._endpoint = API_ENDPOINT.LogTrackAmount;
    }

    async getLogTrackAmounts(payload) {
        try {
            const response = await this._axios({
                method: "GET",
                url: `${this._endpoint}?page=${payload.page}&limit=${payload.limit}&name_user=${payload.search ? payload.search : ''}`,
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default LogTrackerAmountService;