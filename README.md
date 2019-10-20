# taskManagement
	Brief Description: task management app helps user keep track of tasks

# Functionalities:
##Difference with master branch:
	1. "Show More" Button will render 5 more JSON objects everytime it is clicked until there are no more objects to display and then change to a "Show Less" button which will decrease the number of tasks shown by 5 until there are only 5 tasks rendered.
	2. data input are done in initializing, no data input from user.
## Add Task:
	Click "Add" button will add the current user input into task list when it's not empty. The id(order of tasks added) will also show up on the button, to let user know how many tasks have already been created.

## Show More:
	Only 5(or less) task will show up initially.
	Click "Show More" button will show 5(depends on how many tasks have been created) more tasks.
	For example, if there are 12 tasks in total, we have 10 tasks already been shown, then we can click on "Show More" button to see the 2 tasks left.

## Show Less:
	Click "Show Less" button will show 5(depends on how many tasks have been created) less tasks.
	For example, if there are 12 tasks in total, we have 12 tasks already been shown, then we can click on "Show Less" button to see the ealiest 10 tasks.

## Complete Task:
	Click checkbox to set the task as completed.

## Logs:
	JSON object of each task list element currently rendered will be shown in the console logs.
	Format:
	{
		details: task content (string),
		id: unique number for each task (set as the current length + 1 for each task when being created),
		completed: boolean value (default as false)
	}


