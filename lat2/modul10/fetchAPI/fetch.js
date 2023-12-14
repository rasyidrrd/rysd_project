function fetchAPI() {
    const list = document.getElementById('list')
    list.innerHTML = ''

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((data) => data.json())
        .then((data) => {
            data.forEach(element => {
                list.innerHTML += `
                <div class="max-w-sm rounded shadow-lg">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">${element.id}</div>
                    <p class="text-gray-700 text-base">
                        ${element.title}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${element.completed ? "Completed" : "Not Completed"}</button>
                </div>
                </div>
                `
            });
        })

}

function fetchAPI2() {
    const list = document.getElementById('list')
    list.innerHTML = ''

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((data) => data.json())
        .then((data) => {
            data.reverse().forEach(element => {
                list.innerHTML += `
                <div class="max-w-sm rounded shadow-lg">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">${element.id}</div>
                    <p class="text-gray-700 text-base">
                        ${element.title}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${element.completed ? "Completed" : "Not Completed"}</button>
                </div>
                </div>
                `
            });
        })}

        function fetchAPI3() {
            const list = document.getElementById('list')
            list.innerHTML = ''
        
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((data) => data.json())
                .then((data) => {
                    data.sort(() => Math.random() - 0.5).forEach(element => {
                        list.innerHTML += `
                        <div class="max-w-sm rounded shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">${element.id}</div>
                            <p class="text-gray-700 text-base">
                                ${element.title}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${element.completed ? "Completed" : "Not Completed"}</button>
                        </div>
                        </div>
                        `
                    });
                })}
        