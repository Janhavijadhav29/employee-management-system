export const APP_TITLE = "Employee Management System";

export const ENTITIES = [
  {
    "key": "employees",
    "label": "Employees",
    "singular": "Employee",
    "path": "employees",
    "searchLabel": "Department",
    "fields": [
      {
        "name": "firstName",
        "label": "First Name",
        "type": "text",
        "required": true
      },
      {
        "name": "lastName",
        "label": "Last Name",
        "type": "text",
        "required": true
      },
      {
        "name": "email",
        "label": "Email",
        "type": "text",
        "required": true
      },
      {
        "name": "department",
        "label": "Department",
        "type": "text",
        "required": true
      },
      {
        "name": "designation",
        "label": "Designation",
        "type": "text",
        "required": true
      },
      {
        "name": "salary",
        "label": "Salary",
        "type": "number",
        "required": true
      },
      {
        "name": "joiningDate",
        "label": "Joining Date",
        "type": "date",
        "required": false
      }
    ]
  },
  {
    "key": "departments",
    "label": "Departments",
    "singular": "Department",
    "path": "departments",
    "searchLabel": "Name",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "location",
        "label": "Location",
        "type": "text",
        "required": false
      },
      {
        "name": "managerName",
        "label": "Manager Name",
        "type": "text",
        "required": false
      }
    ]
  }
];
