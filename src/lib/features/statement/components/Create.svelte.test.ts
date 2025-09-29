import { describe, test, expect, vi, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Create from './Create.svelte';

// Mock console methods
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('Create.svelte', () => {
	afterEach(() => {
		consoleSpy.mockClear();
	});

	test('should render create statement form', () => {
		render(Create);
		
		expect(screen.getByText('Create Statement')).toBeInTheDocument();
		expect(screen.getByTitle('Statement')).toBeInTheDocument();
		expect(screen.getByTitle('Tags')).toBeInTheDocument();
	});

	test('should have default text value', () => {
		render(Create);
		
		const statementTextarea = screen.getByTitle('Statement') as HTMLTextAreaElement;
		expect(statementTextarea.value).toBe('It is True that, ');
	});

	test('should have default tags value', () => {
		render(Create);
		
		const tagsTextarea = screen.getByTitle('Tags') as HTMLTextAreaElement;
		expect(tagsTextarea.value).toBe('cool, stuff');
	});

	test('should render all buttons', () => {
		render(Create);
		
		expect(screen.getByRole('button', { name: 'False' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'True' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
	});

	test('should call onContraSelected when False button is clicked', async () => {
		render(Create);
		
		const falseButton = screen.getByRole('button', { name: 'False' });
		await fireEvent.click(falseButton);
		
		expect(consoleSpy).toHaveBeenCalledWith('False selected');
	});

	test('should call onProSelected when True button is clicked', async () => {
		render(Create);
		
		const trueButton = screen.getByRole('button', { name: 'True' });
		await fireEvent.click(trueButton);
		
		expect(consoleSpy).toHaveBeenCalledWith('True selected');
	});

	test('should call onCancel when Cancel button is clicked', async () => {
		render(Create);
		
		const cancelButton = screen.getByRole('button', { name: 'Cancel' });
		await fireEvent.click(cancelButton);
		
		expect(consoleSpy).toHaveBeenCalledWith('Cancel');
	});

	test('should call onSave when Save button is clicked', async () => {
		render(Create);
		
		const saveButton = screen.getByRole('button', { name: 'Save' });
		await fireEvent.click(saveButton);
		
		expect(consoleSpy).toHaveBeenCalledWith('Save');
	});

	test('should update text value when textarea content changes', async () => {
		render(Create);
		
		const statementTextarea = screen.getByTitle('Statement') as HTMLTextAreaElement;
		await fireEvent.input(statementTextarea, { target: { value: 'New statement text' } });
		
		expect(statementTextarea.value).toBe('New statement text');
	});

	test('should update tags value when tags textarea content changes', async () => {
		render(Create);
		
		const tagsTextarea = screen.getByTitle('Tags') as HTMLTextAreaElement;
		await fireEvent.input(tagsTextarea, { target: { value: 'new, tags, here' } });
		
		expect(tagsTextarea.value).toBe('new, tags, here');
	});

	test('should have proper layout structure', () => {
		render(Create);
		
		// Check if buttons are in proper groups
		const buttonGroups = screen.getAllByText(/Cancel|Save|True|False/);
		expect(buttonGroups.length).toBe(4);

		// Check if Tags label exists
		expect(screen.getByText('Tags')).toBeInTheDocument();
	});
});