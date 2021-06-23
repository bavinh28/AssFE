import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';

PostFilter.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilter.defaultProps = {
    onSubmit: null,
}

function PostFilter(props) {
    const { onSubmit } = props;
    const [searchTerm, setsearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);



    const handleSearchTermChange = (e) => {
        const value = e.target.value;

        setsearchTerm(e.target.value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value,
            };
            onSubmit(formValue);
        }, 2000);

    }



    return (
        <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            </span>
            <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search"
                value={searchTerm}
                onChange={handleSearchTermChange} />
        </div>
    );
}

export default PostFilter;