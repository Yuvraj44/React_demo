const employees = [
    {
        EmpId: 1,
        FirstName: "Leslie",
        LastName: "Alexander",
        Email: "leslie.alexander@example.com",
        PhoneNumber: "123-456-7890",
        HireDate: "2020-05-15",
        JobTitle: "Co-Founder / CEO",
        Department: "Management",
        Salary: 150000
    },
    {
        EmpId: 2,
        FirstName: "Michael",
        LastName: "Foster",
        Email: "michael.foster@example.com",
        PhoneNumber: "987-654-3210",
        HireDate: "2018-09-23",
        JobTitle: "Co-Founder / CTO",
        Department: "Technology",
        Salary: 140000
    },
    {
        EmpId: 3,
        FirstName: "Dries",
        LastName: "Vincent",
        Email: "dries.vincent@example.com",
        PhoneNumber: "456-789-0123",
        HireDate: "2019-07-12",
        JobTitle: "Business Relations",
        Department: "Sales",
        Salary: 90000
    },
    {
        EmpId: 4,
        FirstName: "Lindsay",
        LastName: "Walton",
        Email: "lindsay.walton@example.com",
        PhoneNumber: "321-654-0987",
        HireDate: "2021-02-11",
        JobTitle: "Front-end Developer",
        Department: "Engineering",
        Salary: 80000
    },
    {
        EmpId: 5,
        FirstName: "Courtney",
        LastName: "Henry",
        Email: "courtney.henry@example.com",
        PhoneNumber: "654-123-7890",
        HireDate: "2017-11-30",
        JobTitle: "Designer",
        Department: "Design",
        Salary: 85000
    },
    {
        EmpId: 6,
        FirstName: "Tom",
        LastName: "Cook",
        Email: "tom.cook@example.com",
        PhoneNumber: "789-456-1230",
        HireDate: "2016-06-25",
        JobTitle: "Director of Product",
        Department: "Product",
        Salary: 130000
    }
];

export default function EmpDetailsList() {
    return (
        
        <ul role="list" className="divide-y divide-red-100-l">
            {employees.map((emp) => (
                <li key={emp.Email} className="flex justify-between gap-x-50 py-5">
                    <div>
                        <p className="text-sm font-semibold text-gray-900 leading-6">{emp.EmpId}</p>
                    </div>
                    <div className="flex min-w-0 gap-x-4">
                        {/* <img alt="" src={emp.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" /> */}
                        <div className="min-w-0 flex-auto">

                            <p className="text-sm font-semibold text-gray-900 leading-6">{emp.FirstName} {emp.LastName}</p>
                            <p className="mt-1 truncate text-xs text-gray-500 leading-5">{emp.Email}</p>
                        </div>

                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm/6 text-gray-900">{emp.JobTitle}</p>

                        <p className="mt-1 text-xs/5 text-gray-500">Phone: {emp.PhoneNumber}</p>



                    </div>
                    <div>
                        <p className="mt-1 text-xs/5 text-gray-500">Hired: {emp.HireDate}</p>
                        <p className="mt-1 text-xs/5 text-gray-500">Salary: {emp.Salary}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
