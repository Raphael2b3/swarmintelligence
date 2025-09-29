import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Select from './Select.svelte';

describe('Select.svelte', () => {
	test('should render without crashing', () => {
		const options = [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' }
		];
		
		render(Select, { props: { options, value: 'option1', label: 'Test Select' } });
		
		// Component should render without throwing
		expect(document.body).toBeInTheDocument();
	});

	test('should display label', () => {
		const options = [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana' }
		];
		
		render(Select, { props: { options, value: 'apple', label: 'Choose Fruit' } });
		
		expect(screen.getByText('Choose Fruit')).toBeInTheDocument();
	});

	test('should render select element', () => {
		const options = [
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B' }
		];
		
		render(Select, { props: { options, value: 'a', label: 'Test' } });
		
		const selectElement = screen.getByRole('combobox');
		expect(selectElement).toBeInTheDocument();
	});

	test('should handle empty options array', () => {
		const options: { value: string; label: string }[] = [];
		
		render(Select, { props: { options, value: '', label: 'Empty Select' } });
		
		const selectElement = screen.getByRole('combobox');
		expect(selectElement).toBeInTheDocument();
	});
});