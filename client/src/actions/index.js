export const SAVE_LIST = 'save_list';

export function saveList(list){
	return {
		type: SAVE_LIST,
		payload: list
	}
} 