const initialData = {
tasks: {
    'task-1': {id: 'task-1', content: 'Take out the garbage'},
    'task-2': {id: 'task-2', content: 'Change tadhg nappy'},
    'task-3': {id: 'task-3', content: 'make dinner'},
    'task-4': {id: 'task-4', content: 'Tell your wife you love her'},
},
columns:{
    'column-1':{
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1','task-2','task-3','task-4'],
    },
},
//Facilitate ordering of the columns
columnOrder: ['column-1'],
};

export default initialData;