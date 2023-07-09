import axiosInstance from ".";

export const loginFetch = async (data) => {
    const response = await axiosInstance.post('account/login', data);
    return response
}

