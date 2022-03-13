import { sum, history } from './entities/Calculadora'


console.log(history([{param1: 1, param2: 2}], ['sum']));
console.log(history([{param1: 1, param2: 2}], ['subtract']));
console.log(history([{param1: 1, param2: 2}], ['multiple']));
console.log(history([{param1: 2, param2: 3}], ['division']));
console.log(history([{param1: 60}], ['percentage']));
console.log(history([{param1: 2}], ['potencyOfTwo']));
