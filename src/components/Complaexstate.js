import React from 'react';
import { useReducer } from 'react';
import { loginHelper } from './LoginHelper';

const myReducer = (prevState, action) => {
    switch(action.type) {
        case 'Username': 
            return {
                ...prevState,
                username: action.payload
            };
        case 'Password': 
            return {
                ...prevState, 
                password: action.payload
            }
        case 'Logged_In': 
            return {
                ...prevState,
                isLoggedIn: true
            }
        case 'Logged_Out': 
            return {
                ...prevState,
                isLoggedIn: false,
                username: '',
                password: ''
            }
        case 'is_Loading': 
            return {
                ...prevState,
                isLoading: true
            }
        case 'is_Not_Loading': 
            return {
                ...prevState,
                isLoading: false
            }
        case 'Error': 
            return {
                ...prevState,
                isError: true,
                isLoading: false
            }
        default: 
            break;
    }
};

    // Intial State.

    const initialState = {
        username: '',
        password: '',
        isLoggedIn: false,
        isLoading: false,
        isError: false
    }

// UseCaseComplexStates Component.

const UseCaseComplexStates = props => {
    const [state, dispatcher]  = useReducer(myReducer, initialState);

    const usernameHandler = e => {
        dispatcher({type: 'Username', payload: e.target.value });
    }

    const passwordHandler = e => {
        dispatcher({ type: 'Password', payload: e.target.value})
    }

    const logoutHandler = () => {
        dispatcher({ type: 'Logged_Out'})
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        // Check credentials (simulated)

        try {
            dispatcher({type: 'is_Loading'});
            await loginHelper({username: state.username, password: state.password});
            dispatcher({ type: 'is_Not_Loading'});
            dispatcher({ type: 'Logged_In' });
        } catch {
            dispatcher({type: 'Error'});
            alert('🚨 Incorrect username or password');
        }
    };

    return (
        <>
            <hr/>
            <h2>useReducer Hook Use case</h2>
            <h3>Modify complex states, such as arrays, or objects: Login Form.</h3>
            <div style={{maxWidth: '50%', backgroundColor: '#a8dadc', borderRadius: '1rem', padding: '2rem', margin: 'auto'}}>
                {state.isLoggedIn 
                ? <><p>Welcome {state.username}!</p> <button onClick={logoutHandler}>Log out!</button></>
                : <form onSubmit={submitHandler}>
                    <div style={{ margin: '1rem 0'}}>
                        <label htmlFor='username'>Username: </label>
                        <input type='text' id='username' onChange={usernameHandler} value={state.username} style={{ margin: '0 1rem'}} placeholder='user'></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' onChange={passwordHandler} value={state.password} style={{ margin: '0 1rem'}} placeholder='password'></input>
                    </div>
                    <div style={{ margin: '1rem 0'}}>
                        <button type='submit' disabled={state.isLoading}>{state.isLoading ? 'Logging you in...' : 'Log in'}</button>
                    </div>
                  </form>}

            </div>
        </>
    )
}

export default UseCaseComplexStates;
