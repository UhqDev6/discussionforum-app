import { ActionType } from '../../constants/ActionType';

const setFilteredActionCreator = (filters) => ({
  type: ActionType.SET_FILTERED,
  payload: {
    filters,
  },
});

export { setFilteredActionCreator };
