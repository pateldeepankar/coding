const JSON_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
function fetcherGET(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then((res) => res.json())
            .then((json) => {
                resolve(json)
            })
    })
}
async function getDataById() {
    const job_ids = await fetcherGET(JSON_URL);
    const fetchPromiseArray = job_ids.map((job_id) => {
        return fetcherGET(`https://hacker-news.firebaseio.com/v0/item/${job_id}.json`)
    })
    const promiseArray = await Promise.all(fetchPromiseArray);
    console.log(promiseArray);
}
getDataById().then((res) => (console.log(res)));


