export function sum(a: number, b: number) {
    return a + b;
}

export function subtract(a: number, b: number) {
    return a - b;
}

export function multiple(a: number, b: number) {
    return a * b;
}

export function division(a: number, b: number) {
    if(b == 0)
        throw new Error("The operation is not valid, because you cannot divide a number by zero !");
    return a / b;
}

export function percentage(a: number) {
    return (a / 100);
}

export function potencyOfTwo(a: number) {
    return (a * a);
}

export function history(params: any[], operations: string[]) {
    let ret = [];
    operations.forEach((operation, index) => {
        if (operation == "sum") {
            let resultado = sum(params[index].param1, params[index].param2)
            ret = [...ret , {
                result: resultado,
                history: `${params[index].param1} + ${params[index].param2} = ${resultado}`
            }]
        }
        else if (operation == "subtract") {
            let resultado = subtract(params[index].param1, params[index].param2)
            ret = [...ret , {
                result: resultado,
                history: `${params[index].param1} - ${params[index].param2} = ${resultado}`
            }]
        }
        else if (operation == "multiple") {
            let resultado = multiple(params[index].param1, params[index].param2)
            ret = [...ret , {
                result: resultado,
                history: `${params[index].param1} x ${params[index].param2} = ${resultado}`
            }]
        }
        else if (operation == "division") {
            let resultado = division(params[index].param1, params[index].param2)
            ret = [...ret , {
                result: resultado,
                history: `${params[index].param1} / ${params[index].param2} = ${resultado}`
            }]
        }
        else if (operation == "percentage") {
            let resultado = percentage(params[index].param1)
            ret = [...ret , {
                result: resultado,
                history: `${params[index].param1} / 100 = ${resultado}`
            }]
        }
        else if (operation == "potencyOfTwo") {
            let resultado = potencyOfTwo(params[index].param1)
            ret = [...ret , {
                result: resultado,
                history: `${params[index].param1} * ${params[index].param1} = ${resultado}`
            }]
        }
    })

    return ret;
}

