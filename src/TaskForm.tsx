import React from "react";

interface TaskFormProps {
	tasks: {
		id: number;
		label: string;
		isDone: boolean;
	}[];
	nextId: number;
	taskLabel: string;
	setTaskLabel: (task: string) => void;
}

class TaskForm extends React.Component<TaskFormProps> {
	constructor(props: TaskFormProps) {
		super(props);
		this.state = {
			nextId: props.nextId,
			tasks: props.tasks,
			taskLabel: "mes couilles",
			label: "",
		};
	}

	render() {
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const taskLabel = event.target.value;
			this.props.setTaskLabel(taskLabel);
		};

		// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// 	event.preventDefault();
		// 	const newTask = {
		// 		label: this.props.taskLabel,
		// 		isDone: false,
		// 	};

		// 	this.setState({
		// 		nextId: this.props.nextId + 1,
		// 		tasks: [...this.props.tasks, newTask],
		// 	});
		// };
		console.log(this);
		console.log(this.state);
		// console.log(this.state.taskLabel);

		// let label = this.state.taskLabel;

		return (
			<div>
				<input
					type="text"
					placeholder="Add a task Label"
					onChange={handleChange}
				/>
				<button
					onClick={(e) => {
						const newTask = {
							label: this.props.taskLabel,
							isDone: false,
						};
						this.setState({
							nextId: this.props.nextId + 1,
							tasks: [...this.props.tasks, newTask],
						});
					}}
				>
					Add
				</button>
			</div>
		);
	}
}

export default TaskForm;
