function filterTasks(selectedCatg, allTasks) {
    switch (selectedCatg) {
        case !selectedCatg:
            return;

        case "all":
            return allTasks;

        case true:
            return allTasks.filter((t) => t.status == true );

        case 'false':
            return allTasks.filter((t) => t.status == false );

        default: return allTasks.filter((t) => t.category === selectedCatg );

    }
}

export default filterTasks;
