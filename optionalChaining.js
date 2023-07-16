const user = [
    {
        name: 'John',
        address: {
            city: 'New York',
        }
    },
    {
        name: 'doe',
        myAddress: {
            city: 'Varanasi',
        },
    },
    {
        name: 'doe',
        address: {
            city: 'Varanasi',
        },
    },
    {
        name: 'doe',
        address: {
            city: 'Varanasi',
        },
    }
];

function printAddress(user){
    const city =user.map((item)=>item.address?.city);
    const fill=city.filter(item => item!=undefined);
    console.log(fill);
}
printAddress(user);