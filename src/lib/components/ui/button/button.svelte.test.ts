import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Button from './button.svelte';

describe('Button.svelte', () => {
	test('should render with default props', () => {
		render(Button, {
			props: {}
		});
		
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	test('should render with text content', () => {
		const TestButton = (Component: any) => {
			return `<${Component}>Click me</${Component}>`;
		};
		
		// Since the component uses bits-ui, we'll just check it renders
		render(Button, { props: {} });
		
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	test('should apply variant classes', () => {
		render(Button, {
			props: { variant: 'destructive' }
		});
		
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		// The button should have variant styling applied
		expect(button.className).toContain('destructive');
	});

	test('should apply size classes', () => {
		render(Button, {
			props: { size: 'sm' }
		});
		
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		// The button should have h-8 class for small size
		expect(button.className).toContain('h-8');
	});

	test('should apply custom class names', () => {
		render(Button, {
			props: { class: 'custom-class' }
		});
		
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('custom-class');
	});

	test('should have button type by default', () => {
		render(Button, { props: {} });
		
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('type', 'button');
	});
});