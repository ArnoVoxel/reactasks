import React from "react";
import Task from "./Task";

type TaskProps = {
	id: number;
	label: string;
	isDone: boolean;
};

type TaskListProps = {
	tasks: TaskProps[];
};

const TaskList = ({ tasks }: TaskListProps) => {
	return (
		<div>
			{tasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</div>
	);
};

export default TaskList;
