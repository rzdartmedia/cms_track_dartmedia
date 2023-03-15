import axios from "axios";
import API_ENDPOINT from "../Config/API_ENDPOINT";

class ValidationActionService {
    constructor() {
        this._axios = axios;
        this._endpoint = API_ENDPOINT.ValidationAction;
    }

    async getValidationActions(payload) {
        try {
            const response = await this._axios({
                method: "GET",
                url: `${this._endpoint}/cms?page=${payload.page}&limit=${payload.limit}&name_action=${payload.search ? payload.search : ''}`,
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async postValidationActions(payload) {
        try {
            const data = JSON.stringify(payload);

            const response = await this._axios({
                method: "POST",
                url: `${this._endpoint}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async deleteValidationAction(id) {
        try {
            const response = await this._axios({
                method: "DELETE",
                url: `${this._endpoint}/${id}`,
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getValidationActionById(id) {
        try {
            const response = await this._axios({
                method: "GET",
                url: `${this._endpoint}/${id}`,
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async updateValidationActionById(payload) {
        try {
            const data = JSON.stringify(payload);

            const response = await this._axios({
                method: "PUT",
                url: `${this._endpoint}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default ValidationActionService;