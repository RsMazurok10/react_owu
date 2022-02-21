import React, {useReducer} from 'react';
import css from './Form.module.css'

let cats = [];
let dogs = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return { cat: action.value}
        case 'addDog':
            return { dog: action.value}
        case 'form':
            return {...state}
        case 'delCat':
            return {...cats}
        case 'delDog':
            return {...dogs}

        default:
            return state;
    }
    ;
};


const App = () => {

    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});


    const btnSave = (event, type) => {
        event.preventDefault();
        if (type === 'cat') {
             cats.push(state.cat)
        } else {
           dogs.push(state.dog);
        }
        dispatch({
            type: 'form'
        })
    };

    const btnDelCat = (event, type) => {
        if (type === 'cat') {
            cats = cats.filter(cat => cat !== event)
        }
        dispatch({
            type: 'delCat'
        });
    };

    const btnDelDog = (event, type) => {
        if (type === 'dog') {
            dogs = dogs.filter(dog => dog !== event)
        }
        dispatch({
            type: 'delDog'
        });
    };

    const formSave = (event, type) => {
        if (type === 'cat') {
            dispatch({
                type: 'addCat',
                value: event.target.value
            })
        } else {
            dispatch({
                type: 'addDog',
                value: event.target.value
            });
        }
        ;
    };


    return (
        <div>
            <div className={css.forms}>
                <form>
                    <input type="text" placeholder='cat' value={state.cat} name='cat'
                           onChange={(event) => formSave(event, 'cat')}/>
                    <button onClick={(event => btnSave(event, 'cat'))}>Save</button>
                </form>
                <form>
                    <input type="text" placeholder='dog' value={state.dog} name='dog'
                           onChange={(event) => formSave(event, 'dog')}/>
                    <button onClick={(event => btnSave(event, 'dog'))}>Save</button>
                </form>
            </div>
            <div className={css.elems}>
                <div className={css.cat}>
                    Cats:
                    {cats.map(cat => <div key={cat}>
                        {cat}
                        <button onClick={() => btnDelCat(cat, 'cat')}>Delete</button>
                    </div>)}
                </div>
                <div className={css.dog}>
                    Dogs:
                    {dogs.map(dog => <div key={dog}>
                        {dog}
                        <button onClick={() => btnDelDog(dog, 'dog')}>Delete</button>
                    </div>)}
                </div>
            </div>
        </div>
    )

}
export default App;