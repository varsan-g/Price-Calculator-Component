// custom-elements.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            src?: string;
            trigger?: string;
            colors?: string;
            style?: React.CSSProperties;
            // any other props that lord-icon accepts
        };
    }
}