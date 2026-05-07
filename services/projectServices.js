let projects = [
    { id: 1001, title: "Meu primeiro projeto", description: "concluido", createdAt: "" },
    { id: 1002, title: "Um projeto Qualquer", description: "iniciado", createdAt: "" },
    { id: 1003, title: "Projeto Top", description: "iniciado", createdAt: "" }
];

export function listProjects() {
    return projects;
}

export function createProject({ title, description }) {
    const project = {
        id: Date.now().toString(),
        title,
        description: description || '',
        createdAt: new Date().toISOString()
    };
    projects.push(project);
    return project;
}

export function getProjectById(id) {
    const project = projects.find(p => p.id === id);
    if (!project) {
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err; // ← lança erro — controller vai capturar
    }
    return project;
}

export function updateProject(id, data) {
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) { //retorna -1 se o projeto não foi encontrado
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err;
    }
    projects[index] = { ...projects[index], ...data, id };
    return projects[index];
}

export function deleteProject(id) {
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) {
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err;
    }
    projects.splice(index, 1); //metodo para deletar/ splice é uma função
}