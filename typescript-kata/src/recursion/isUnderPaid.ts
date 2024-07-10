export type EmployeeType = {
    firstName: string
    salary: number
    underEmployees: EmployeeType[]
}


function walk(curr: EmployeeType, underPaid: EmployeeType[]):EmployeeType[] {
    if (curr === undefined) {
        return underPaid
    }
    if (curr.underEmployees.length === 0) {
        return underPaid
    }


    //pre
    const underSalary = checkSalary(curr.underEmployees)
    if (curr.salary < underSalary) {
        underPaid.push(curr)
    }

    //rec
    for (const employee of curr.underEmployees) {
        walk(employee, underPaid)
    }
    //post
    return underPaid
}

function checkSalary(underEmployees: EmployeeType[]): number{
    let salarySum = 0;
    for (const employee of underEmployees) {
        salarySum += employee.salary
    }
    return salarySum / underEmployees.length

}

export function underPaidEmployees(companyRoot: EmployeeType): string[] {

    const employees = walk(companyRoot, [])
    let names: string[] = []
    for (const employee of employees) {
        names.push(employee.firstName)
    }

    return names
}
