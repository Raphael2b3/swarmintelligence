import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Recommendation from './Recommendation.svelte';
import type { IStatement, IConnection, IDuplication } from '$lib/types';

describe('Recommendation.svelte', () => {
	test('should show loader when entity is undefined', () => {
		render(Recommendation, { props: { entity: undefined as any } });
		
		const loader = screen.getByText((content, element) => {
			return element?.classList.contains('loader') || false;
		});
		expect(loader).toBeInTheDocument();
	});

	test('should render Statement recommendation for statement entities', () => {
		const statementEntity: IStatement = {
			id: '1',
			type: 'statement',
			text: 'Test statement',
			lastSeasonTruth: 0.8,
			numberOfVotes: 100,
			voteRatio: 0.6,
			author: 'Test Author'
		};

		render(Recommendation, { props: { entity: statementEntity } });
		
		// Should render the statement text
		expect(screen.getByText('Test statement')).toBeInTheDocument();
	});

	test('should render Connection recommendation for connection entities', () => {
		const thesis: IStatement = {
			id: '1',
			type: 'statement',
			text: 'Thesis statement',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.7,
			author: 'Thesis Author'
		};

		const argument: IStatement = {
			id: '2',
			type: 'statement',
			text: 'Argument statement',
			lastSeasonTruth: 0.8,
			numberOfVotes: 50,
			voteRatio: 0.6,
			author: 'Argument Author'
		};

		const connectionEntity: IConnection = {
			id: '1',
			type: 'connection',
			thesis,
			argument,
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Connection Creator'
		};

		render(Recommendation, { props: { entity: connectionEntity } });
		
		// Should render connection content
		expect(screen.getByText('Thesis statement')).toBeInTheDocument();
		expect(screen.getByText('Argument statement')).toBeInTheDocument();
	});

	test('should render Duplication recommendation for duplication entities', () => {
		const statementA: IStatement = {
			id: '1',
			type: 'statement',
			text: 'First statement',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.7,
			author: 'Author A'
		};

		const statementB: IStatement = {
			id: '2',
			type: 'statement',
			text: 'Second statement',
			lastSeasonTruth: 0.8,
			numberOfVotes: 50,
			voteRatio: 0.6,
			author: 'Author B'
		};

		const duplicationEntity: IDuplication = {
			id: '1',
			type: 'duplication',
			statementA,
			statementB,
			numberOfVotes: 100,
			isDuplicateVotes: 75
		};

		render(Recommendation, { props: { entity: duplicationEntity } });
		
		// Should render duplication content - the text appears between whitespace so use getAllByText
		const firstStatements = screen.getAllByText((content, element) => {
			return content.includes('First statement') || element?.textContent?.includes('First statement') || false;
		});
		expect(firstStatements.length).toBeGreaterThan(0);
		
		const secondStatements = screen.getAllByText((content, element) => {
			return content.includes('Second statement') || element?.textContent?.includes('Second statement') || false;
		});
		expect(secondStatements.length).toBeGreaterThan(0);
	});
});