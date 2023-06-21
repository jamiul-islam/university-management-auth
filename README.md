# University Management App

[👉 live server](https://university-management-backend-01-lucifer1112k.vercel.app/)

The whole system includes three roles: Admin, Student, and Faculty.

- Students can easily manage their profiles, enroll in courses, pay tuition fees, access routines, view results, and evaluate teachers.
- Admins have comprehensive control over processes, while faculty members can manage grades, resources, and student information.

_for more features view the functional requirements_

## Authentication service

This repo is on authentication microservice - a university management system where we have three types of roles such as Admin, Student, Faculty.

<details>
<summary>Student</summary>
<ul>
<li>Student can login and log out</li>
<li>Student can manage and update their profile.</li>
<li>Student can manage and update their profile.</li>
<li>Student can update certain fields.</li>
<li>Student can enroll in a semester.</li>
<li>Student can enroll in offered courses for a specific semester.</li>
<li>Student can pay their tuition fees through offline or online.(Partial / Full Payment)</li>
<li>Student can see their transaction histories.</li>
<li>Student can see their class routines.</li>
<li>Student can see their otice board and events.</li>
<li>Student can see their result (Full / Semester Wise).</li>
<li>Student can evaluate their teachers.</li>
</ul>
</details>

<details>
<summary>Admin</summary>
<ul>
<li>Admin can login and log out.</li>
<li>Admin can manage and update their profile.</li>
<li>Admin can only update certain fields.</li>
<li>Admin can manage user accounts.</li>
<li>Block/Unblock users</li>
<li>Change Password</li>
<li>Forcefully Log out</li>
<li>Admin can manage multiple process</li>
<li>manage Semester</li>
<li>manage Offered Courses</li>
<li>manage Section</li>
<li>manage Faculty</li>
<li>manage Student</li>
<li>see and edit Building Information</li>
<li>see and editRoom</li>
<li>manage Payment</li>
<li>manage Permissions</li>
<li>manage Activity</li>
</ul>
</details>

<details>
<summary>Faculty</summary>
<ul>
<li>Faculty can log in and log out.</li>
<li>Faculty can manage and update their profile.</li>
<li>Faculty can only update certain fields.</li>
<li>Faculty can manage user accounts.</li>
<li>Faculty can manage student grades.</li>
<li>Access to Academic and Personal Information.</li>
<li>Faculty can manage their lecture resources.</li>
</ul>
</details>

[👉 Functional Requirements full document](https://docs.google.com/document/d/140OWj0YQGSpn9RbugkPPDCswMsvcd5NfvuWoqzG06Qc/edit?usp=sharing)

## ERP Model

![ERP Model](https://imgur.com/eQyokHL.jpg)

## How Query is Handled

![query model](https://imgur.com/dyyA8Ef.png)

## Dynamic id generation

| name    | faculty id                  | student id                                    | admin id                  |
| ------- | --------------------------- | --------------------------------------------- | ------------------------- |
| formula | Faculty F followed by 00001 | last 2 digits of year + semester code + 00001 | Admin A followed by 00001 |
| exp     | F00001                      | 250300001                                     | A00001                    |

## API Reference

#### api for users

```javascript
users/create-student (POST)
users/create-faculty (POST)
users/create-admin (POST)
users/api/v1/academic-semester/create-semester (POST)
users/my-profile (GET)
users/:id (GET)
users/:id (PATCH)
user/:id (DELETE)
users/:id/force-logged-out
users?page=1&limit=10 (GET)
users/:id/available-permissions?page=1&limit=10 (GET)
users/:id/assigned-permissions?page=1&limit=10 (GET)
users/:id/assign-permissions (POST)
users/:id/remove-permissions (POST)
```

#### api for students

```javascript
students?page=1&limit=10 (GET)
students/:id  (GET)
students/:id    (PATCH)
```

#### api for faculties

```javascript
faculties?page=1&limit=10 (GET)
faculties/:id  (GET)
faculties/:id    (PATCH)
```

#### api for admins

```javascript
admins?page=1&limit=10 (GET)
admins/:id  (GET)
admin/:id    (PATCH)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **optional**. Your API key |

## Author

- linkedin: [@jamiul-islam](https://linkedin.com/jamiul-islam)
- twitter: [@jamiul-islam](https://twitter.com/lucifer1112k)
