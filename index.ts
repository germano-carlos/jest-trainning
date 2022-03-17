import { sum, history, multiple } from './entities/Calculadora'


console.log(history([{ param1: 1, param2: 2 }], ['sum']));
console.log(history([{ param1: 1, param2: 2 }], ['subtract']));
console.log(history([{ param1: 1, param2: 2 }], ['multiple']));
console.log(history([{ param1: 2, param2: 3 }], ['division']));
console.log(history([{ param1: 60 }], ['percentage']));
console.log(history([{ param1: 2 }], ['potencyOfTwo']));
console.log(history([{ param1: 3, param2: 2 }, { param1: sum(3, 2), param2: 6 }, { param1: multiple(sum(3, 2), 6), param2: 6 }], ['sum', 'multiple', 'potencyOfTwo']))
