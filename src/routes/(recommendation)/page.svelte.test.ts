import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('should render page scroller with recommendation components', () => {
		render(Page);
		
		// Look for buttons that are actually present
		const buttons = screen.getAllByRole('button');
		expect(buttons.length).toBeGreaterThan(0);
		
		// Check for Show More buttons which seem to be the consistent element
		const showMoreButtons = screen.getAllByText('Show More...');
		expect(showMoreButtons.length).toBeGreaterThan(0);
		
		// Check that statements are being displayed
		const statements = screen.getAllByText(/The earth is/);
		expect(statements.length).toBeGreaterThan(0);
	});
});
