presentation slide link:
https://docs.google.com/presentation/d/1LhkF_7eENOKudzidxbvbbqXokskfTzNHIHN3RqLOXZo/edit?usp=sharing

My app is a location-based todo list is a todo list that calculates when I need to leave home based on each task’s start time and commute time. it is also color coded by how soon i need to leave. 

As a person with ADHD and is always late, I want to create a color coded list that visually tell user how urgent it is to start moving. So it remind me that i need to leave and reduce the chance of me being late. 

developer checklist. 
- startTime and commuteMinutes for each task.
- inputs for the task’s start date and time and  commute time.
- store the input values in the create form’s state.
- pass the new values and save on the server.
- get when to leave by start time-commute time.
- display the time and commute duration for each task.
- use colors based on how much time remains before departure. green yellow red
- update the current time so colors change automatically.(will try my best to do this, if not successful i will probably display different leave time in different colo blocks under each task)
- edit the start time and commute.

revised checklist:
new field
- startTime & commuteMinutes ->TodoCreate.
- createTodoRequest pass these value to api.js and post and save to db.json
- calculate the leave time and display time and commute time in todoItem
Editing
- startTime & commuteMinutes -> TodoEdit and pre-fill existing values.
- onEdit pass value ->APP ->editTodoById->api->db->update in item
- ...todo to keep other fields during updates.
Departure time and countdown
- Departure time = startTime - commuteMinutes 
- Display the departure time and remaining minutes.
- Update every minute with setInterval; restart with clearInterval
- Math.floor() to round remaining minutes down.
checkbox and filters
- Add a checkbox and save done through App’s update function.
- Pass onToggle through App → TodoList → TodoItem, then pass done in-reverse
- All, Active, Past, and Done buttons.
- Filter the displayed list without changing the original tasks.
Style 
- time-based color backgrounds, with gray taking priority for completed tasks.
- separate Edit Delete buttons.
- Todo and filter buttons in light blue.
- responsive layout.

gap
Expand : added All, Active, Past, and Done filters to organize events.
Design changes: colored countdown text into colored card backgrounds to make urgency more noticeable. rearrange desktop layout to side by side so desktop and phone screen is actually different
Props connection: forgot to pass onToggle from App to TodoList, which caused the checkbox to fail（you can click but status not updating）
Zeros: add check 0 or null for commuteTime bc if zoom time=0 and its causing problem
Problems: was pushing get current time to db.json and this is causing the page to refresh and pull data from db every min and causing the page to look flashy. And the solution is to not sent the data to db.json and just render it in todoItem.

what do you need to do to run the file:
cd (the file name)
npm i
npm install -D tailwindcss @tailwindcss/vite
control+t
npm install axios
npm install -D json-server@0.17.4
npm run server
(back to first terminal window)
npm run dev

what has changed after tuesday presentation:
style and layout.
Now the done item is in bottom of the list.
Past fliter fixed(used to be past item got into done).

