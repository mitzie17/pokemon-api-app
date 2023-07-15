import React, { useState } from 'react';

export const NewAbilityForm = (props) => {
    const [ ability, setAbility ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (ability) {
            props.addNewAbility(ability);
            setAbility('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h3>Add a new ability</h3>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='new ability'
                    onChange={(e) => setAbility(e.target.value)}
                    value={ability}
                />
                <button type='submit'>Add new ability</button>
            </form>
        </div>
    )

}