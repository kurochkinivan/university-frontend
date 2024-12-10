{
    const listUsers = [
        {
            firstName: 'Alex',
            birthday: '2000-10-15',
            isAdult: true,
        },
        {
            firstName: 'Ivan',
            birthday: '2005-02-15',
            isAdult: false,
        },
        {
            firstName: 'Yana',
            birthday: '1990-04-12',
            isAdult: true,
        },
    ];

    const objectItem = null;


    function changeObjectMutate(object) {
        object.firstName = 'Эдуард'
        return object
    }

    function changeObjectImmutable(object) {
        return {...object, firstName: 'Эдуард'}
    }

    for (let i = 0; i < listUsers.length; i++) {
        // console.log(changeObjectMutate(listUsers[i]))
        console.log(changeObjectImmutable(listUsers[i]))
    }

    console.log(objectItem)
    console.log(listUsers)

}
