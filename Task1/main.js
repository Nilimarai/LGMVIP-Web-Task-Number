

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_elem = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_elem = document.createElement('div');
		task_elem.classList.add('task');

		const task_content_elem = document.createElement('div');
		task_content_elem.classList.add('content');

		task_elem.appendChild(task_content_elem);

		const task_input_elem = document.createElement('input');
		task_input_elem.classList.add('text');
		task_input_elem.type = 'text';
		task_input_elem.value = task;
		task_input_elem.setAttribute('readonly', 'readonly');

		task_content_elem.appendChild(task_input_elem);

		const task_actions_elem = document.createElement('div');
		task_actions_elem.classList.add('actions');

		const task_edit_elem = document.createElement('button');
		task_edit_elem.classList.add('edit');
		task_edit_elem.innerText = 'Edit';

		const task_delete_elem = document.createElement('button');
		task_delete_elem.classList.add('delete');
		task_delete_elem.innerText = 'Delete';

		task_actions_elem.appendChild(task_edit_elem);
		task_actions_elem.appendChild(task_delete_elem);

		task_elem.appendChild(task_actions_elem);

		list_elem.appendChild(task_elem);

		input.value = '';

		task_edit_elem.addEventListener('click', (e) => {
			if (task_edit_elem.innerText.toLowerCase() == "edit") {
				task_edit_elem.innerText = "Save";
				task_input_elem.removeAttribute("readonly");
				task_input_elem.focus();
			} else {
				task_edit_elem.innerText = "Edit";
				task_input_elem.setAttribute("readonly", "readonly");
			}
		});

		task_delete_elem.addEventListener('click', (e) => {
			list_elem.removeChild(task_elem);
		});
	});
});