const firstName = 'Ivan';
const surname = 'Kurochkin';
const patronymic = 'Dmitrievich';
const dateOfBirth = '17.11.2004';
const major = 'Applied Informatics'; 

const result1 = firstName + '\n' + surname + '\n' + patronymic + '\n' + dateOfBirth + '\n' + major;
console.log(result1);

console.log('------------------');

const result2 = `${firstName}\n${surname}\n${patronymic}\n${dateOfBirth}\n${major}`;
console.log(result2);
