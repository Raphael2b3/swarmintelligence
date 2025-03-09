import type { IFilterOptions } from '../types';

export const filterOptions: IFilterOptions = $state({
	entitytype: ['statement'],
	controversial: true,
	sortByTruth: 'asc',
	sortByVotes: 'desc',
	tags: ['foo'],
	_tagstring: ''
});
