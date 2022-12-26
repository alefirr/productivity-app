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

export const rootReducer = (state = initialState, action) => {
  const itemIndex = action.payload?.index;
  const chosenListIndex = action.payload?.chosenListIndex;

  switch (action.type) {
    case 'add_new_sidebar_item':
      return [...state, { name: 'New list', content: [], isNew: true }];
    case 'add_new_list_item':
      return produce(state, (draft) => {
        draft[action.payload].content?.push({
          name: 'New item',
          isChecked: false,
          isNew: true,
        });
      });

    case 'change_sidebar_item':
      return produce(state, (draft) => {
        draft[itemIndex].name = action.payload.name;
      });
    case 'change_list_item':
      return produce(state, (draft) => {
        draft[chosenListIndex].content[itemIndex].name = action.payload.name;
      });

    case 'delete_sidebar_item':
      return state.filter((_, index) => index !== itemIndex);
    case 'delete_list_item':
      return produce(state, (draft) => {
        draft[chosenListIndex].content.splice(itemIndex, 1);
      });

    case 'disable_sidebar_item_isNew':
      return produce(state, (draft) => {
        draft[itemIndex].isNew = false;
      });
    case 'disable_list_item_isNew':
      return produce(state, (draft) => {
        draft[chosenListIndex].content[itemIndex].isNew = false;
      });

    case 'toggle_list_item_isChecked':
      return produce(state, (draft) => {
        draft[chosenListIndex].content[itemIndex].isChecked =
          !draft[chosenListIndex].content[itemIndex].isChecked;
      });
    default:
      return state;
  }
};
