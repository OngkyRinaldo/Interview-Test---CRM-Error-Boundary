export default async function getAllUsers() {
    const res = await fetch(
        'https://interview-test-mock-api.azurewebsites.net/clients'
    );

    if (!res.ok) throw new Error('failed to fetch data');

    return res.json();
}
