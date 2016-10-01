export function parseResponse(res) {
  return res.json()
    .then((data) => {
      if (data.error) {
        console.error(data)
        throw new Error(data.message);
      }
      return data;
    })
}
