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

export const getDefaultAddress = async (token) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
    };

    try {
        const response = await fetch(`${root}address/default`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        return error
    }

}

export const updateAddress = async (address, token) => {

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
        body: JSON.stringify(address)
    };
    try {
        const response = await fetch(`${root}address`, options);
        if (!response.ok) {
            throw new Error(data.message);
        }
        return await response.json();
    } catch (error) {
        return error
    }
}

export const deleteAddress = async (token, address) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
        body: JSON.stringify(address)
    };
    try {
        const response = await fetch(`${root}address`, options);
        if (!response.ok) {
            throw new Error(data.message);
        }
        return await response.json();
    } catch (error) {
        return error
    }
}

export const createOrder = async (order, token) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
        body: JSON.stringify(order)
    };
    try {
        const response = await fetch(`${root}order/create`, options);
        if (!response.ok) {
            throw new Error(data.message);
        }
        return await response.json();
    } catch (error) {
        return error
    }
}

export const getOrders = async (token) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
    };
    try {
        const response = await fetch(`${root}order`, options);
        if (!response.ok) {
            throw new Error(data.message);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        return error
    }
};

export const createReview = async (review, token) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
        body: JSON.stringify(review)
    };
    try {
        const response = await fetch(`${root}review/create`, options);
        if (!response.ok) {
            throw new Error(data.message);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        return error
    }
};

export const getUsers = async (token) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    }

    try {
        const response = await fetch(`${root}users`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (token, userId) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ id: userId }), 
    };
    try {
        const response = await fetch(`${root}users/delete`, options);
        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }
        return await response.json();
    } catch (error) {
        return error
    }
};