import { ws } from "../../../utils/common";

export const confirmUserRegistration = async ({ id }) => {
    if (!id) {
        //c'è un errore
        return true;
    }

    const result = await ws("GET", process.env.REACT_APP_API_ENDPOINT + "/auth/verify/?verification_key=" + id, null, null, null);
    return result.error;
} 