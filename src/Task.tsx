import React from "react";

interface TaskProps {
	task: {
		id: number;
		label: string;
		isDone: boolean;
	};
}

class Task extends React.Component<TaskProps> {
	render(): React.ReactNode {
		const { task } = this.props;
		return (
			<div>
				<div>{task.label}</div>
				<div>{task.isDone ? "⭕" : "❌"}</div>
			</div>
		);
	}
}

export default Task;
