const API_URL = 'http://localhost:8081/api';

export interface User {
    id?: number;
    name: string;
    email: string;
}

export const userService = {
    async createUser(user: User): Promise<User> {
        const response = await fetch(`${API_URL}/users/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return response.json();
    },

    async getUsers(): Promise<User[]> {
        const response = await fetch(`${API_URL}/users/get`);
        return response.json();
    }
}; 

