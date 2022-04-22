function filterTasks(selectedCatg, allTasks) {
    if(!selectedCatg) {
        return ;
    }
    if(selectedCatg === "all") {
        return allTasks;
    }

    return allTasks.filter((t) => t.category === selectedCatg );
}

export default  filterTasks
