import produce from 'immer';

const initialState = [
  {
    name: 'Today',
    content: [
      { name: 'Homework', isChecked: true },
      { name: 'Household', isChecked: false },
    ],
  },
  {
    name: 'Tomorrow',
    content: [
      { name: 'trdelnik', isChecked: true },
      { name: 'poop', isChecked: false },
    ],
  },
  {
    name: 'Work',
    content: [
      { name: 'push', isChecked: true },
      { name: 'pull', isChecked: false },
    ],
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_sidebar_item':
      return [...state, { name: 'New list', content: [], isNew: true }];
    case 'delete_sidebar_item':
      return state.filter((_, index) => index !== action.payload);
    case 'change_sidebar_item':
      return produce(state, (draft) => {
        draft[action.payload.index].name = action.payload.name;
      });
    case 'disable_isNew':
      return produce(state, (draft) => {
        draft[action.payload.index].isNew = false;
      });
    default:
      return state;
  }
};
