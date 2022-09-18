import React, {
    FC,
    MutableRefObject,
    Ref,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import s from '../../../Pages.module.scss';

export interface UseClickOut<T extends HTMLElement> {
    ref: Ref<T>;
}

export const useClickOut = <T extends HTMLElement>(
    eventHandler: (event: MouseEvent) => void
): UseClickOut<T> => {
    const elementRef = useRef() as MutableRefObject<T>;
    // as ref to avoid spamming `useEffect`
    const handlerRef = useRef<typeof eventHandler>(eventHandler);
    handlerRef.current = eventHandler;
    useEffect(() => {
        const filteredHandler = (event: MouseEvent) => {
            const clickTarget = event.target as Node;
            const isTargetInsideElement =
                elementRef.current.contains(clickTarget);
            if (!isTargetInsideElement) handlerRef.current(event);
        };
        document.addEventListener('click', filteredHandler);
        return () => {
            document.removeEventListener('click', filteredHandler);
        };
    }, []);
    return { ref: elementRef };
};

type DropdownProps = {
    title: string;
    children: React.ReactNode;
};

export const Dropdown = (props: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen((o) => !o), []);
    return (
        <div className={s.container} {...useClickOut(() => setOpen(false))}>
            <button type="button" className={s.toggle} onClick={toggle}>
                {props.title} {open ? '🔽' : '🔼'}
            </button>
            {open && <div className={s.content}>{props.children}</div>}
        </div>
    );
};
