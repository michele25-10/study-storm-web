import { ws } from "../../../utils/common";
import { isValidEmail } from "../../../utils/validation";

export const addMailNewsletter = async ({ email }) => {
    if (!isValidEmail(email)) {
        return false;
    }

    const result = await ws("POST", process.env.REACT_APP_API_ENDPOINT + "/newsletter", null, { email, accepted_cookie: true }, false);
    return result.error;
}