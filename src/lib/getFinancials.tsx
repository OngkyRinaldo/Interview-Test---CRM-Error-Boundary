export default async function getFinancials() {
    const res = await fetch(
        'https://interview-test-mock-api.azurewebsites.net/profile'
    );

    if (!res.ok) throw new Error('failed to fetch data');

    return res.json();
}
