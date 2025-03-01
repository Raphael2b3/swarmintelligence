class SearchState {
	public results: any = $state([]);
	public isActive = $state(false);
	public settings = $state({});
}

export default new SearchState();
