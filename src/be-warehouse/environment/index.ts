export const environment = {
    accessRole: [
        {
            path: "/api/Auth",
            methods: [
                {
                    method: "post",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "put",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "delete",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager", "User"],
                },
            ],
        },
        {
            path: "/api/User",
            methods: [
                {
                    method: "post",
                    roles: ["Admin"],
                },
                {
                    method: "put",
                    roles: ["Admin"],
                },
                {
                    method: "delete",
                    roles: ["Admin"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager"],
                },
            ],
        },
        {
            path: "/api/Group",
            methods: [
                {
                    method: "post",
                    roles: ["Admin"],
                },
                {
                    method: "put",
                    roles: ["Admin"],
                },
                {
                    method: "delete",
                    roles: ["Admin"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager", "User"],
                },
            ],
        },
        {
            path: "/api/Role",
            methods: [
                {
                    method: "post",
                    roles: ["Admin"],
                },
                {
                    method: "put",
                    roles: ["Admin"],
                },
                {
                    method: "delete",
                    roles: ["Admin"],
                },
                {
                    method: "get",
                    roles: ["Admin"],
                },
            ],
        },
        {
            path: "/api/Work",
            methods: [
                {
                    method: "post",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "put",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "delete",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager", "User"],
                },
            ],
        },
        {
            path: "/api/Notification",
            methods: [
                {
                    method: "post",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "put",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "delete",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager", "User"],
                },
            ],
        },
    ],
    apiLink: {
        basic: {
            role: {
                getById: "/api/Role/:id",
                main: "/api/Role",
            },
            user: {
                getById: "/api/User/:id",
                main: "/api/User",
            },
            product: {
                getById: "/api/Product/:id",
                main: "/api/Product",
            },
            category: {
                getById: "/api/Category/:id",
                main: "/api/Category",
            },
            userRole: {
                getById: "/api/UserRole/:id",
                main: "/api/UserRole",
            },
        },
        extra: {
            auth: {
                main: "/api/Auth",
                token: "/api/Auth/Token",
            },
        },
        endPoint: "http://localhost:8888",
    },
    swagger: [
        {
            name: "Auth",
            data: {
                CM: {
                    properties: {
                        UserName: {
                            title: "UserName",
                            type: "string",
                            minLength: 1,
                        },
                        PassWord: {
                            title: "PassWord",
                            type: "string",
                            minLength: 1,
                        },
                    },
                    required: ["UserName", "PassWord"],
                },
                UM: {
                    properties: {},
                    required: [],
                },
            },
        },
        {
            name: "User",
            data: {
                CM: {
                    properties: {
                        UserName: {
                            minLength: 1,
                            title: "UserName",
                            type: "string",
                        },
                        FullName: {
                            minLength: 1,
                            title: "FullName",
                            type: "string",
                        },
                        PassWord: {
                            minLength: 1,
                            title: "PassWord",
                            type: "string",
                        },
                        Email: {
                            minLength: 1,
                            title: "Email",
                            type: "string",
                        },
                        Phone: {
                            minLength: 1,
                            title: "Phone",
                            type: "string",
                        },
                        Avatar: {
                            minLength: 1,
                            title: "Avatar",
                            type: "string",
                        },
                        Gender: {
                            minLength: 1,
                            title: "Gender",
                            type: "boolean",
                        },
                        BirthDate: {
                            minLength: 1,
                            title: "BirthDate",
                            type: "string",
                            format: "date",
                        },
                    },
                    required: ["UserName", "FullName", "PassWord", "Email"],
                },
                UM: {
                    properties: {
                        UserName: {
                            minLength: 1,
                            title: "UserName",
                            type: "string",
                        },
                        FullName: {
                            minLength: 1,
                            title: "FullName",
                            type: "string",
                        },
                        PassWord: {
                            minLength: 1,
                            title: "PassWord",
                            type: "string",
                        },
                        Email: {
                            minLength: 1,
                            title: "Email",
                            type: "string",
                        },
                        Phone: {
                            minLength: 1,
                            title: "Phone",
                            type: "string",
                        },
                        Avatar: {
                            minLength: 1,
                            title: "Avatar",
                            type: "string",
                        },
                        Gender: {
                            minLength: 1,
                            title: "Gender",
                            type: "boolean",
                        },
                        BirthDate: {
                            minLength: 1,
                            title: "BirthDate",
                            type: "string",
                            format: "date",
                        },
                        Id: {
                            minLength: 1,
                            title: "Id",
                            type: "string",
                        },
                    },
                    required: ["UserName", "FullName", "PassWord", "Email", "Id"],
                },
            },
        },
        {
            name: "Role",
            data: {
                CM: {
                    properties: {
                        Name: {
                            minLength: 1,
                            title: "Name",
                            type: "string",
                        },
                    },
                    required: ["Name"],
                },
                UM: {
                    properties: {
                        Name: {
                            minLength: 1,
                            title: "Name",
                            type: "string",
                        },
                        Id: {
                            minLength: 1,
                            title: "Id",
                            type: "string",
                        },
                    },
                    required: ["Name", "Id"],
                },
            },
        },
        {
            name: "Category",
            data: {
                CM: {
                    properties: {
                        Name: {
                            minLength: 1,
                            title: "Name",
                            type: "string",
                        },
                        Description: {
                            minLength: 1,
                            title: "Description",
                            type: "string",
                        },
                    },
                    required: ["Name"],
                },
                UM: {
                    properties: {
                        Name: {
                            minLength: 1,
                            title: "Name",
                            type: "string",
                        },
                        Id: {
                            minLength: 1,
                            title: "Id",
                            type: "string",
                        },
                        Description: {
                            minLength: 1,
                            title: "Description",
                            type: "string",
                        },
                    },
                    required: ["Name", "Id"],
                },
            },
        },
        {
            name: "UserRole",
            data: {
                CM: {
                    properties: {
                        UserId: {
                            minLength: 1,
                            title: "UserId",
                            type: "string",
                        },
                        RoleId: {
                            minLength: 1,
                            title: "RoleId",
                            type: "string",
                        },
                    },
                    required: ["UserId", "RoleId"],
                },
                UM: {
                    properties: {
                        UserId: {
                            minLength: 1,
                            title: "UserId",
                            type: "string",
                        },
                        RoleId: {
                            minLength: 1,
                            title: "RoleId",
                            type: "string",
                        },
                        Id: {
                            minLength: 1,
                            title: "Id",
                            type: "string",
                        },
                        Description: {
                            minLength: 1,
                            title: "Description",
                            type: "string",
                        },
                    },
                    required: ["UserId", "RoleId", "Id"],
                },
            },
        },
        {
            name: "Product",
            data: {
                CM: {
                    properties: {
                        Name: {
                            minLength: 1,
                            title: "Name",
                            type: "string",
                        },
                        Price: {
                            minLength: 1,
                            title: "Price",
                            type: "integer",
                            format: "int64",
                        },
                        Description: {
                            minLength: 1,
                            title: "Description",
                            type: "string",
                        },
                    },
                    required: ["Name", "Price"],
                },
                UM: {
                    properties: {
                        Name: {
                            minLength: 1,
                            title: "Name",
                            type: "string",
                        },
                        Price: {
                            minLength: 1,
                            title: "Price",
                            type: "integer",
                            format: "int64",
                        },
                        Id: {
                            minLength: 1,
                            title: "Id",
                            type: "string",
                        },
                        Description: {
                            minLength: 1,
                            title: "Description",
                            type: "string",
                        },
                    },
                    required: ["Name", "Price", "Id"],
                },
            },
        },
    ],
    database: {
        config: {
            development: {
                username: "root",
                password: "123456cb",
                database: "be-node",
                host: "localhost",
                dialect: "mysql",
                operatorsAliases: false,
            },
            test: {
                username: "root",
                password: "123456cb",
                database: "be-node",
                host: "localhost",
                dialect: "mysql",
                operatorsAliases: false,
            },
            production: {
                username: "root",
                password: "123456cb",
                database: "be-node",
                host: "34.87.100.202",
                dialect: "mysql",
            },
        },
    },
    jwt: {
        code: "vzicqoasanQhtZicTmeGsBpacNomny",
        issue: "be-node",
        subject: "analalayker@gmail.com",
    },
};
