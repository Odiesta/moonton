import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(function Input(
    {
        type = "text",
        className = "",
        isFocused = false,
        defaultValue,
        variant = "primary",
        placeholder,
        isError,
        ...props
    },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            defaultValue={defaultValue}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                isError && "input-error"
            } input-${variant} ${className}`}
            ref={localRef}
            autoComplete={props.autoComplete}
            required={props.required}
            onChange={(e) => props.handleChange && props.handleChange(e)}
            placeholder={placeholder}
        />
    );
});

const inputPropTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

Object.assign(Input, { propTypes: inputPropTypes });

export default Input;
