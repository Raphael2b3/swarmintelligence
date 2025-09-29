import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import CheckBoxGroup from './CheckBoxGroup.svelte';

describe('CheckBoxGroup.svelte', () => {
	test('should render without crashing', () => {
		const options = [
			{ label: 'option1', value: 'option1' },
			{ label: 'option2', value: 'option2' }
		];

		render(CheckBoxGroup, { props: { options, group: [] } });
		
		// Component should render without throwing
		expect(document.body).toBeInTheDocument();
	});

	test('should render checkboxes for all options', () => {
		const options = [
			{ label: 'option1', value: 'option1' },
			{ label: 'option2', value: 'option2' },
			{ label: 'option3', value: 'option3' }
		];

		render(CheckBoxGroup, { props: { options, group: [] } });
		
		const checkboxes = screen.getAllByRole('checkbox');
		expect(checkboxes).toHaveLength(3);
	});

	test('should render options with proper values', () => {
		const options = [
			{ label: 'First Option', value: 'option1' },
			{ label: 'Second Option', value: 'option2' }
		];

		render(CheckBoxGroup, { props: { options, group: [] } });
		
		const checkboxes = screen.getAllByRole('checkbox');
		expect(checkboxes[0]).toHaveAttribute('value', 'option1');
		expect(checkboxes[1]).toHaveAttribute('value', 'option2');
	});

	test('should render with labels', () => {
		const options = [
			{ label: 'First Option', value: 'option1' }
		];

		render(CheckBoxGroup, { props: { options, group: [] } });
		
		const labels = screen.getAllByRole('checkbox');
		expect(labels).toHaveLength(1);
		// Each checkbox is wrapped in a label
		const checkbox = labels[0];
		expect(checkbox.closest('label')).toBeInTheDocument();
	});
});