const status = 200;

if( status === 200){
    console.log('OK!');
}else if (status === 400){
    console.log('Error!');
}else{
    console.log('Unknow status!')
}

const message = (status === 200) ? 'OK!' : ' Error!';
console.log(message);

const name = '';

if(name){
    console.log('We have a name!');
}else{
    console.log('No name provided');
}

const status2 = 'error';

if (status2.toUpperCase() === 'ERROR'){
    console.log('Something went wrong!');
}else{
    console.log('Looks great!!!');
}

const status3 = 500;

if(status3 === 200){
    console.log('OK!');
}else if (status3 === 400 || status3 === 500){
    console.log('Error!');
}else{
    console.log('Unknow status');
}


const status4 = 700;

switch(status4){
    case 200:
        console.log('OK!');
    break;
    case 400:
    case 500:
        console.log('Error!');
        break;
    default:
        console.log('Unknow status');
}