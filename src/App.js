import {useReducer} from "react";
import css from './Count.module.css'


const reducer = (state, action) => {
    if (action.counts === 3) {
        if (action.type == 'inc') {
            return {...state, count1: state.count1 + 1}
        }
        if (action.type == 'dec') {
            return {...state, count1: state.count1 - 1}
        }
        if (action.type == 'res') {
            return {...state, count1: state.count1 = 0}
        } else {
            return ('error')
        }

    }
    if (action.counts === 2) {
        if (action.type == 'inc') {
            return {...state, count2: state.count2 + 1}
        }
        if (action.type == 'dec') {
            return {...state, count2: state.count2 - 1}
        }
        if (action.type == 'res') {
            return {...state, count2: state.count2 = 0}
        } else {
            return ('error')
        }
    }
    if (action.counts === 1) {
        if (action.type == 'inc') {
            return {...state, count3: state.count3 + 1}
        }
        if (action.type == 'dec') {
            return {...state, count3: state.count3 - 1}
        }
        if (action.type == 'res') {
            return {...state, count3: state.count3 = 0}
        } else {
            return ('error')
        }
    }
    return state;
}

function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div className={css.wrap}>
            <div className={css.counter}>
                <div>First counter: {state.count1}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc', counts: 3})}>INC</button>
                    <button onClick={() => dispatch({type: 'dec', counts: 3})}>DEC</button>
                    <button onClick={() => dispatch({type: 'res', counts: 3})}>RES</button>
                </div>
            </div>
            <div className={css.counter}>
                <div>Second counter: {state.count2}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc', counts: 2})}>INC</button>
                    <button onClick={() => dispatch({type: 'dec', counts: 2})}>DEC</button>
                    <button onClick={() => dispatch({type: 'res', counts: 2})}>RES</button>
                </div>
            </div>
            <div className={css.counter}>
                <div>Third counter: {state.count3}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc', counts: 1})}>INC</button>
                    <button onClick={() => dispatch({type: 'dec', counts: 1})}>DEC</button>
                    <button onClick={() => dispatch({type: 'res', counts: 1})}>RES</button>
                </div>
            </div>

        </div>
    );
}

export default App;
