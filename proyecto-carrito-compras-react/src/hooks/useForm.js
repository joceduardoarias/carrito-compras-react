import { useState } from 'react';

export const useForm = (initalForm = {}) => {
    const [formState, setFormState] = useState(initalForm);

    const onInpuChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    return {
        ...formState,
        formState,
        onInpuChange,
        setFormState 
    };
};