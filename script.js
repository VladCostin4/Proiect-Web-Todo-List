window.addEventListener("load", () => {
	let section = document.querySelector(".list");

	let tasks_h = document.createElement("h2");
	tasks_h.textContent = "Tasks";
	
	let form = document.querySelector("#new_form");

	let lock_img = document.createElement("img");
	lock_img.src = "assets/lock.png";

	let meme = document.querySelector("#meme");

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		let input = document.querySelector("#new_input");

		if (!input.value) {
			alert("Can't add nothing, find something to do!");
			return;
		}

		let content_div = document.createElement("div");
		content_div.classList.add("content");

		let task_input = document.createElement("input");
		task_input.classList.add("text");
		task_input.value = input.value;
		task_input.readOnly = true;

		content_div.appendChild(task_input);

		let actions_div = document.createElement("div");
		actions_div.classList.add("actions");

		let edit_button = document.createElement("button");
		edit_button.classList.add("edit");
		
		let edit_img = document.createElement("img");
		edit_img.src = "assets/edit.png";
		edit_button.appendChild(edit_img);

		let lock_img = document.createElement("img");
		lock_img.src = "assets/lock.png";
		lock_img.style.display = "none";
		edit_button.appendChild(lock_img);

		let delete_button = document.createElement("button");
		delete_button.classList.add("delete");

		let delete_img = document.createElement("img");
		delete_img.src = "assets/delete.png";
		delete_button.appendChild(delete_img);

		actions_div.appendChild(edit_button);
		actions_div.appendChild(delete_button);

		let task_div = document.createElement("div");
		task_div.classList.add("task");

		task_div.appendChild(content_div);
		task_div.appendChild(actions_div);

		let task_list = document.querySelector("#tasks");

		if (task_list.childElementCount == 0) {
			section.insertBefore(tasks_h, task_list);
			meme.style.display = "none";
		}

		task_list.appendChild(task_div);

		if (task_list.childElementCount >= 3) {
			let task_class = document.querySelectorAll(".task");

			task_class.forEach((element) => {
				element.style.backgroundColor = "#f0ae75";
			})
		} 
		
		if (task_list.childElementCount >= 5) {
			let task_class = document.querySelectorAll(".task");

			task_class.forEach((element) => {
				element.style.backgroundColor = "#eb9447";
			})
		}

		input.value = "";

		edit_button.addEventListener("click", () => {
			if (task_input.readOnly) {
				task_input.readOnly = false;
				
				edit_button.childNodes[0].style.display = "none";
				edit_button.childNodes[1].style.display = "inline";

				task_div.style.color = task_div.style.backgroundColor;
				task_div.style.backgroundColor = "#412343";
			} else {
				task_input.readOnly = true;
				
				edit_button.childNodes[0].style.display = "inline";
				edit_button.childNodes[1].style.display = "none";
			
				task_div.style.backgroundColor = task_div.style.color;
			}
		})

		delete_button.addEventListener("click", () => {
			if (task_list.childElementCount == 1) {
				section.removeChild(tasks_h);
				meme.style.display = "inline";
			}

			task_list.removeChild(task_div); 
			
			if (task_list.childElementCount < 5) {
				let task_class = document.querySelectorAll(".task");
	
				task_class.forEach((element) => {
					element.style.backgroundColor = "#f0ae75";
				})
			}

			if (task_list.childElementCount < 3) {
				let task_class = document.querySelectorAll(".task");
	
				task_class.forEach((element) => {
					element.style.backgroundColor = "#f6cca7";
				})
			}
		})
	})
}) 