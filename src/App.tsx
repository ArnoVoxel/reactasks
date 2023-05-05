import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./App.css";

interface AppState {
	nextId: number;
	tasks: {
		id: number;
		label: string;
		isDone: boolean;
	}[];
	taskLabel: string;
}

class App extends React.Component<{}, AppState> {
	constructor(props: any) {
		super(props);
		this.state = {
			nextId: 4,
			tasks: [
				{ id: 1, label: "Nourrir la bête", isDone: false },
				{ id: 2, label: "Ne pas ronchonner", isDone: false },
				{ id: 3, label: "Coucou Hibou", isDone: true },
			],
			taskLabel: "",
		};
		this.setTaskLabel = this.setTaskLabel.bind(this);
	}

	// useState() hook
	// const [nextId, setNextId] = useState(4);

	setTaskLabel(taskLabel: string) {
		this.setState({ taskLabel: taskLabel });
	}

	render() {
		const addTask = () => {
			const newTask = {
				id: this.state.nextId,
				label: "from app",
				isDone: false,
			};

			this.setState({
				nextId: this.state.nextId + 1,
				tasks: [...this.state.tasks, newTask],
			});
		};

		return (
			<div className="App">
				<div className="App-header">
					<h1>Tasks</h1>
					<TaskList tasks={this.state.tasks} />
					<TaskForm
						setTaskLabel={this.setTaskLabel}
						taskLabel={this.state.taskLabel}
						tasks={this.state.tasks}
						nextId={this.state.nextId}
					/>
					<button onClick={addTask}>Ajouter une tâche</button>
				</div>
			</div>
		);
	}
}

export default App;
