// localStorage.clear();

const employee = [
  {
    id: 1,
    name: "John Doe",
    email: "employee1@example.com",
    password: "123",
    activeTaskCount: 2,
    newTaskCount: 1,
    completedTaskCount: 1,
    failedTaskCount: 0,
    tasks: [
      {
        taskNumber: 1,
        title: "Prepare Monthly Report",
        description: "Compile and present the monthly performance report.",
        date: "2024-11-30",
        category: "Reports",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        taskNumber: 2,
        title: "Team Meeting",
        description: "Participate in the weekly team meeting.",
        date: "2024-12-01",
        category: "Meetings",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
      {
        taskNumber: 3,
        title: "Client Follow-Up",
        description: "Follow up with client regarding project updates.",
        date: "2024-12-02",
        category: "Client Relations",
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "employee2@example.com",
    password: "123",
    activeTaskCount: 2,
    newTaskCount: 1,
    completedTaskCount: 0,
    failedTaskCount: 0,
    tasks: [
      {
        taskNumber: 1,
        title: "Update Inventory",
        description: "Ensure inventory data is up to date.",
        date: "2024-11-30",
        category: "Inventory Management",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        taskNumber: 2,
        title: "Prepare Sales Pitch",
        description: "Prepare a pitch for the new product line.",
        date: "2024-12-05",
        category: "Sales",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "employee3@example.com",
    password: "123",
    activeTaskCount: 2,
    newTaskCount: 1,
    completedTaskCount: 0,
    failedTaskCount: 0,
    tasks: [
      {
        taskNumber: 1,
        title: "Code Review",
        description: "Review the latest code submissions from the team.",
        date: "2024-11-30",
        category: "Development",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        taskNumber: 2,
        title: "Bug Fixing",
        description: "Fix bugs reported by QA.",
        date: "2024-12-01",
        category: "QA",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "employee4@example.com",
    password: "123",
    activeTaskCount: 1,
    newTaskCount: 1,
    completedTaskCount: 0,
    failedTaskCount: 0,
    tasks: [
      {
        taskNumber: 1,
        title: "Plan Office Event",
        description: "Organize the annual office holiday party.",
        date: "2024-12-15",
        category: "HR",
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
      {
        taskNumber: 2,
        title: "Employee Training",
        description: "Coordinate training sessions for new employees.",
        date: "2024-12-10",
        category: "Training",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
    ],
  },
  {
    id: 5,
    name: "Chris Brown",
    email: "employee5@example.com",
    password: "123",
    activeTaskCount: 1,
    newTaskCount: 1,
    completedTaskCount: 0,
    failedTaskCount: 0,
    tasks: [
      {
        taskNumber: 1,
        title: "Product Testing",
        description: "Test the new software release.",
        date: "2024-11-29",
        category: "Testing",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
      {
        taskNumber: 2,
        title: "Documentation Update",
        description: "Update the product documentation for version 2.0.",
        date: "2024-12-03",
        category: "Documentation",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
    ],
  },
];

const admin = [
  {
    id: "admin1",
    name: "Alice Green",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
