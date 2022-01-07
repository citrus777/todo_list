let input = prompt('what do you want to do?')
const todos = ['Collect', 'Clean']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete'));
        // const index = parseInt(indexStr);
        // parseInt(index);
        if (!Number.isNaN(index)) {
            const deletedItem = todos.splice(index, 1);
            console.log(`Ok, deleted ${deletedItem[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what do you want to do?')
}
console.log('Ok quit the App')