import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('should render page scroller with recommendation components', () => {
		render(Page);
		const showMoreButtons = screen.getAllByRole('button', { name: 'Show More...' });
		expect(showMoreButtons.length).toBeGreaterThan(0);
		expect(showMoreButtons[0]).toBeInTheDocument();
	});
});
