<script lang="ts">
	import Checkbox from '$lib/components/form/Checkbox.svelte';
	import DropdownSelect from '$lib/components/form/DropdownSelect.svelte';
	import Slider from '$lib/components/form/Slider.svelte';
	import Textfield from '$lib/components/form/Textfield.svelte';
	import ConnectionSearchResult from '$lib/components/searchresult/ConnectionSearchResult.svelte';
	import DuplicationSearchResult from '$lib/components/searchresult/DuplicationSearchResult.svelte';
	import StatementSearchResult from '$lib/components/searchresult/StatementSearchResult.svelte';
	import {
		getFallbackConnection,
		getFallbackDuplication,
		getFallbackStatement
	} from '$lib/shared/state/entities.svelte';
	import ActionButtonList from '$lib/components/ActionButtonList.svelte';
	import ArgumentSelectableStatement from '$lib/components/ArgumentSelectableStatement.svelte';
	import CreateStatement from '$lib/components/CreateStatement.svelte';
	import ExpandableFilter from '$lib/components/ExpandableFilter.svelte';
	import FlyOutMenu from '$lib/components/FlyOutMenu.svelte';
	import PopUpModal from '$lib/components/PopUpModal.svelte';
	import RecommendationFilter from '$lib/components/RecommendationFilter.svelte';
	import ScrollableRichText from '$lib/components/ScrollableRichText.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import ThesisSelectableStatement from '$lib/components/ThesisSelectableStatement.svelte';
	import type { IFilterOptions } from '$lib/shared/interfaces';
	import Navbar from '$lib/components/Navbar.svelte';
	import ArgumentsStatement from '$lib/components/details/ArgumentsStatement.svelte';
	import ConnectStatement from '$lib/components/details/ConnectStatement.svelte';
	import MoreOptionsConnection from '$lib/components/details/MoreOptionsConnection.svelte';
	import MoreOptionsDuplication from '$lib/components/details/MoreOptionsDuplication.svelte';
	import MoreOptionsStatement from '$lib/components/details/MoreOptionsStatement.svelte';
	import ThesisStatement from '$lib/components/details/ThesisStatement.svelte';
	import TabNav from '$lib/components/TabNav.svelte';
	import StatementSearchResultOnlyText from '$lib/components/searchresult/StatementSearchResultOnlyText.svelte';

	let filterOptions: IFilterOptions = $state({
		entitytype: ['statement'],
		controversial: true,
		sortByTruth: 'asc',
		sortByVotes: 'desc',
		tags: ['foo'],
		_tagstring: ''
	});

	let open = $state(true);
</script>

<div style="display: flex; flex-direction: column;">
	-------------------- Form --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<Checkbox title="Checkbox"></Checkbox>
		<DropdownSelect></DropdownSelect>
		<Slider></Slider>
		<Textfield></Textfield>
	</div>
	-------------------- Search Result --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<ConnectionSearchResult connection={getFallbackConnection()}></ConnectionSearchResult>
		<DuplicationSearchResult duplication={getFallbackDuplication()}></DuplicationSearchResult>
		<StatementSearchResult statement={getFallbackStatement()}></StatementSearchResult>
		<StatementSearchResultOnlyText statement={getFallbackStatement()}
		></StatementSearchResultOnlyText>
	</div>
	-------------------- Common --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<ActionButtonList>""</ActionButtonList>
		<ArgumentSelectableStatement statement={getFallbackStatement()}></ArgumentSelectableStatement>
		<CreateStatement></CreateStatement>
		<ExpandableFilter bind:options={filterOptions}></ExpandableFilter>
		<FlyOutMenu>""</FlyOutMenu>
		<Navbar onMenuClick={() => {}} onSearch={() => {}}></Navbar>
		<PopUpModal {open}>test</PopUpModal>
		<RecommendationFilter></RecommendationFilter>
		<ScrollableRichText></ScrollableRichText>
		<Searchbar></Searchbar>
		<TabNav></TabNav>
		<ThesisSelectableStatement statement={getFallbackStatement()}></ThesisSelectableStatement>
	</div>
	-------------------- Details --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<ArgumentsStatement open={true} statementid="1"></ArgumentsStatement>
		<ConnectStatement open={true}></ConnectStatement>
		<MoreOptionsConnection open={true}></MoreOptionsConnection>
		<MoreOptionsDuplication open={true}></MoreOptionsDuplication>
		<MoreOptionsStatement open={true}></MoreOptionsStatement>
		<ThesisStatement open={true} statementid="1"></ThesisStatement>
	</div>
</div>
