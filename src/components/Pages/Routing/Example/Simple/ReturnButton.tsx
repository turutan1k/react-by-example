import React from 'react';

export default function ReturnButton() {
    return (
        <button
            type="button"
            onClick={() => {
                window.location.pathname = '/routing';
            }}
        >
            ⬅️
        </button>
    );
}
