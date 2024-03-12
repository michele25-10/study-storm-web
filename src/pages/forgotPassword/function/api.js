import { ws } from "../../../utils/common";

export const confirmForgotPassword = async ({ id }) => {
    if (!id) {
        //c'è un errore
        return true;
    }

    const result = await ws("GET", process.env.REACT_APP_API_ENDPOINT + "/reset-password/confirm/" + id, null, null, null);
    return result.error;
} 