import CONFIG from "./CONFIG";

const API_ENDPOINT = {
    ValidationAction: `${CONFIG.BASE_URL}/validation-log-action`,
    LogTrack: `${CONFIG.BASE_URL}/log-tracker`,
    LogTrackAmount: `${CONFIG.BASE_URL}/log-tracker-amount`,
};

export default API_ENDPOINT;