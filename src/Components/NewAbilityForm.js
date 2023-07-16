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
            
            <form onSubmit={onSubmit}>
            <h5>Add a new ability</h5>
                <div className='form-group'>
                <input
                    type='text'
                    placeholder='ability name'
                    onChange={(e) => setAbility(e.target.value)}
                    value={ability}
                />
                <button className='btn btn-success btn-sm' type='submit'>Add new ability</button>
                </div>
                
            </form>
        </div>
    )

}