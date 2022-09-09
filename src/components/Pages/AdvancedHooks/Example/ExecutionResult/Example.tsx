import React, {
    FC,
    Ref,
    RefObject,
    useCallback,
    useImperativeHandle,
    useRef,
} from 'react';

export interface Focusable {
    focus(): void;
}

type ErrorProps = {
    children: React.ReactNode;
    target: RefObject<Focusable>;
};

type FocusableInputProps = {
    focusable?: Ref<Focusable>;
};

export const FocusableInput = (props: FocusableInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const focus = useCallback(() => {
        inputRef.current?.focus();
    }, []);
    useImperativeHandle(props.focusable, () => ({ focus }), [focus]);

    return (
        <div>
            <label>
                focusable input
                <input ref={inputRef} placeholder="required" />
            </label>
        </div>
    );
};

export const Error = (props: ErrorProps) => {
    const onClick = useCallback(() => {
        props.target.current?.focus();
    }, [props.target]);
    return (
        <div>
            {props.children}
            <button type="button" onClick={onClick}>
                focus field
            </button>
        </div>
    );
};

export const Example: FC = () => {
    const focusableRef = useRef<Focusable>(null);
    return (
        <>
            <FocusableInput focusable={focusableRef} />
            <Error target={focusableRef}>This field is required</Error>
        </>
    );
};
