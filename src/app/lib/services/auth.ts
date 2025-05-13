import axios from "axios";

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

interface RegisterResponse {
    id: number;
    name: string;
    email: string;
    message: string;
}

export const registerUser = async (data: RegisterData) => {
    try {
        const response = await axios.post<RegisterResponse>('/api/user/register', data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // TODO: handle errors
            throw new Error(error.response?.data?.message || 'Registration failed');
        } else {
            // TODO: handle errors
            throw new Error('Unexpected error occurred');
        }
    }
}