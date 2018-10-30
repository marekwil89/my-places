export const POSTconfig = (values) => {
  return {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(values)
  }
};

export const GETconfig = (token) => {
  return {
    method: 'GET',
    headers: {
      'Authorization': `${token}`,
      'content-type': 'application/json'
    },
  }
}

export const HOSTconfig = 'http://localhost:5000';
