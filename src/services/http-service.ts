export const getData = async (url: string) => {
    let data: any = null;
    let error = null;

    await fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(_data => {
            error = null;
            data = _data;
        })
        .catch(_error => {
            error = _error.message;
        });

    return { data, error };
};

export const postData = async (url: string, body?: Object) => {
    let data: any = null;
    let error = null;

    await fetch(url,
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body || {})
        }
    )
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(_data => {
            error = null;
            data = _data;
        })
        .catch(_error => {
            error = _error.message;
        });

    return { data, error };
};

export const putData = async (url: string, body?: Object) => {
    let data: any = null;
    let error = null;

    await fetch(url,
        {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body || {})
        }
    )
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(_data => {
            error = null;
            data = _data;
        })
        .catch(_error => {
            error = _error.message;
        });

    return { data, error };
};