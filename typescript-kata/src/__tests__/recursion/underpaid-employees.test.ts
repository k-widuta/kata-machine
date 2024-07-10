import { EmployeeType, underPaidEmployees } from "src/recursion/isUnderPaid"
import { expect, describe, test } from "vitest"

describe("Find underpaid employees in company", () => {
    test("Should return Maciej and Jakub", () => {
        const ceo = createCompanyTree()
        expect(underPaidEmployees(ceo)).toEqual(["Maciej", "Jakub"])
    })
})

function createCompanyTree(): EmployeeType {

    const ceo: EmployeeType= {
        firstName: "Kacper",
        salary: 100,
        underEmployees: []
    }
    const cto: EmployeeType= {
        firstName: "Maciej",
        salary: 90,
        underEmployees: []
    }
    const cmo: EmployeeType= {
        firstName: "Mara",
        salary: 105,
        underEmployees: []
    }
    const cfo: EmployeeType= {
        firstName: "Jakub",
        salary: 99,
        underEmployees: []
    }
    ceo.underEmployees.push(cto,cmo,cfo)
    const ucto1: EmployeeType= {
        firstName: "cto1",
        salary: 91,
        underEmployees: []
    }
    const ucto2: EmployeeType= {
        firstName: "cto2",
        salary: 92,
        underEmployees: []
    }
    cto.underEmployees.push(ucto1, ucto2)
    const ucmo1: EmployeeType= {
        firstName: "ucmo1",
        salary: 101,
        underEmployees: []
    }
    const ucmo2: EmployeeType= {
        firstName: "ucmo2",
        salary: 102,
        underEmployees: []
    }
    const ucmo3: EmployeeType= {
        firstName: "ucmo3",
        salary: 103,
        underEmployees: []
    }
    const ucmo4: EmployeeType= {
        firstName: "ucmo4",
        salary: 104,
        underEmployees: []
    }
    const ucmo5: EmployeeType= {
        firstName: "ucmo5",
        salary: 105,
        underEmployees: []
    }
    cmo.underEmployees.push(ucmo1, ucmo2, ucmo3, ucmo4, ucmo5)
    const ucfo1: EmployeeType= {
        firstName: "ucfo1",
        salary: 80,
        underEmployees: []
    }
    const ucfo2: EmployeeType= {
        firstName: "ucfo2",
        salary: 150,
        underEmployees: []
    }
    cfo.underEmployees.push(ucfo1, ucfo2)

    return ceo
}
