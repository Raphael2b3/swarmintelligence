/**
 * The GigaObject is a Svelte Object that helps you create a Micro Service Model.
 * It consists of, what format your data has (Model),
 * How you can interact with it and how this will be stored in a database (Controller),
 *
 * Svelte helps you to create the UI (View) for it.
 *
 * The Model will be reactive and will be updated in the UI.
 *
 * You should only focus on the Model and the Controller.
 * This process should be as simple as possible with minimal boilerplate.
 */

class Model {
	instanciate() {
		return new Model();
	}
}

class M1 extends Model {
	userVote?: number;
}

class Controller<T extends Model> {
	model: T;
	constructor() {
		this.model = new Model() as T;
	}
}

class C1 extends Controller<M1> {
	constructor() {
		super();
		this.model = new M1();
	}
}
