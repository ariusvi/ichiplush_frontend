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

export const createBudget = async (budget) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(budget)
    };

    try {
        const response = await fetch(`${root}budget/new`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        throw error;
    }
}

export const getReviews = async () => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(`${root}review`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        throw error;
    }
}

export const getProfile = async (token) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
    };

    try {
        const response = await fetch(`${root}users/profile`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        return error
    }

};

export const getAddress = async (token) => {
    
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
    };

    try {
        const response = await fetch(`${root}address`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        return error
    }

    }

export const createAddress = async (address, token) => {
    
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Baerer ${token}`
            },
            body: JSON.stringify(address)
        };
        try {
            const response = await fetch(`${root}address/create`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            return error
        }
    }