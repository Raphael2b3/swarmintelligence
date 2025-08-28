type IEntityType = 'statement' | 'connection' | 'duplication';

export interface IFilterOptions {
	sortByTruth?: 'asc' | 'desc';
	sortByVotes?: 'asc' | 'desc';
	controversial?: boolean;
	entitytype: IEntityType[];
	tags?: string[];
	_tagstring?: string;
}

export const filterOptions: IFilterOptions = $state({
	entitytype: ['statement'],
	controversial: true,
	sortByTruth: 'asc',
	sortByVotes: 'desc',
	tags: ['foo'],
	_tagstring: ''
});
