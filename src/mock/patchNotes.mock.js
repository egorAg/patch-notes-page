export const patchNotesMock = [
	{
		name: "Release 1.7.0",
		date: "03.10.2022",
		id: "8",
		notes: [
			{
				mark: "NEW",
				text: "adminjs to easy control of database without pgadmin",
				endpoint: {
					type: "GET",
					url: "/admin"
				}
			},
			{
				mark: "FIX",
				text: "Now reports on dashboard generates by the right way",
				endpoint: {
					type: "GET",
					url: '/dashboard'
				}
			},
			{
				mark: "PENDING",
				text: "Start development of new authorization service (v2)"
			}
		]
	},
	{
		name: "Release 1.5.1a",
		date: "21.09.2022",
		id: "7",
		notes: [
			{
				mark: "FIX", text: "Now updated task returns with subtasks", endpoint: {
					type: "PATCH",
					url: "board/templates/task"
				},
			},
			{
				mark: "FIX", text: "Now returns boards", endpoint: {
					type: "GET",
					url: "board/byOfficeId"
				}
			},
			{
				mark: "FIX", text: "Returns all office challengers by owner request", endpoint: {
					type: "GET",
					url: "user/myEmployees"
				}
			},
			{
				mark: "FIX", text: "Now role 'owner' set's automatically"
			}
		]
	},
	{
		name: "Release 1.5.1",
		date: "20.09.2022",
		id: "6",
		notes: [
			{mark: "NEW", text: "Add new endpoint to get boards as team lead", endpoint: {
				type: "GET",
					url: "board/byOfficeId "
				}},
			{mark: "PENDING", text: "Cookie-based authorization is ready to deploy",},
			{mark: "FIX", text: "Now requires role owner", endpoint: {
				type: "GET",
					url: "board/"
				}},
			{mark: "FIX", text: "now don't returns deleted users", endpoint: {
				type: "POST",
					url: "user/getAllFiltering"
				}},
			{mark: "FIX", text: "Now on request of events returns short info about user"},
			{mark: "FIX", text: "Now users include department -> office -> city data", endpoint: {
				type: "GET",
					url: "user/getAll"
				}},
			{mark: "FIX", text: "Now board's don't create automatically to hr/mentor/lead/co-founder"},
			{mark: "FIX", text: "Error 500 on creation/update user with boardTemplateId flag"},
			{mark: "FIX", text: "Now Authorized header in swagger shows as required"},
		]
	},
	{
		name: "Release 1.5.0",
		date: "19.09.2022",
		id: "5",
		notes: [
			{mark: "NEW", text: "Add bruteforce detection service"},
			{mark: "NEW", text: "Add ban system for users"},
			{mark: "PENDING", text: "Now tokens work's via cookies"},
		]
	},
	{
		name: "Release 1.4.2",
		date: "16.09.2022",
		id: "4",
		notes: [
			{mark: "NEW", text: "Add new endpoint to duplicate", endpoint: {
				type: "POST",
					url: "board/duplicateInBoards"
				}},
			{mark: "FIX", text: "Nw endpoint getAllInfoCity don't require cityId to get info about it"},
			{mark: "FIX", text: "Some more small bugfixes"},
		]
	},
	{
		name: "Release 1.4.1b",
		date: "16.09.2022",
		id: "3",
		notes: [
			{mark: "FIX", text: "Server don't returns status-code 500 anymore", endpoint: {
					type: "DELETE",
					url: "board/userFromBoard"
				}}
		]
	},
	{
		name: "Release 1.4.1a",
		date: "16.09.2022",
		id: "2",
		notes: [
			{mark: "NEW", text: "Add new endpoint to remove user from board", endpoint: {
				type: "DELETE",
					url: "board/userFromBoard"
				}},
			{mark: "FIX", text: "Add check for creation of subtasks"},
			{mark: "FIX", text: "Now server returns subtasks on editing the tusk"},
			{mark: "NEW", text: "Now you can create empty board by template id"},
		]
	},
	{
		name: "Release 1.4.1",
		date: "16.09.2022",
		id: "1",
		notes: [
			{mark: "FIX", text: "Fix cache error when news from news controller don't return after request"},
			{mark: "FIX", text: "Fix cache error when users from user controller don't return after request"},
			{mark: "FIX", text: "Fix cache error when board data from board controller don't return after request"},
			{mark: "NEW", text: "Add new endpoint to filter all users", endpoint: {
				type: "POST",
					url: "users/getAllFiltering"
				}},
			{mark: "NEW", text: "Add new endpoint to get trainees", endpoint: {type: "GET", url: "users/myTrainees"}},
		]
	}
]