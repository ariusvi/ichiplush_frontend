const root = "http://localhost:4001/api/"

export const loginUser = async (user) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
    };

    try {
        const response = await fetch(`${root}/login`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        throw error;
    }

};

export const registerUser = async (user) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    }

    try {
        const response = await fetch(`${root}register`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }
        return data;
    } catch (error) {
        throw error;

    }
};

export const getItems = async () => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(`${root}catalogue`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        throw error;
    }
}