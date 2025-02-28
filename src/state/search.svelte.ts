class SearchState {
	public results = $state([]);
	public isActive = $state(false);
	public settings = $state({});
}

export default new SearchState();
