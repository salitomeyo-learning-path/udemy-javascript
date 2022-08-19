const CRUDUrl = 'https://reqres.in/api/users';

const getUser = async( id ) => {
    const resp = await fetch(`${ CRUDUrl }/${ id }`);
    const data = await resp.json();

    return data;
}

const createUser = async( user ) => {
    const resp = await fetch(CRUDUrl, {
        method: 'POST',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();

    console.log(data)
}

const updateUser = async( id, user ) => {
    const resp = await fetch(`${ CRUDUrl }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();

    console.log(data)
}

const deleteUser = async( id ) => {
    const resp = await fetch(`${ CRUDUrl }/${ id }`, {
        method: 'DELETE'
    });
    
    return (resp.ok) ? 'Deleted' : 'Unable to delete';
}

export {
    getUser,
    createUser,
    updateUser,
    deleteUser
}