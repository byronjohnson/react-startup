import './Spinner.css'
import React from 'react';

const Spinner = () => {
    return (
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui text loader">Loading</div>
            </div>
            <p></p>
        </div>
    );
}

export default Spinner;