/** POST /api/lies */
export default async function handler(req, res) {
    const { method, body } = req;
    console.log('Body: ', body);
    // TODO - Process form data
    return res.sendStatus(201);
}