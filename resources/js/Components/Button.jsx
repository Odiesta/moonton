import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
    ...props
}) {
    const baseClasses =
        "rounded-2xl py-[13px] text-center w-full transition duration-150 ease-in-out disabled:opacity-25";

    const variantClasses = {
        primary: "bg-alerange text-white",
        warning: "bg-yellow-500 text-white",
        danger: "bg-red-500 text-white",
        "light-outline": "text-white border border-white",
        "white-outline": "text-black border border-[#F1F1F1]",
    };

    return (
        <button
            {...props}
            type={type}
            className={[baseClasses, variantClasses[variant], className]
                .filter(Boolean)
                .join(" ")}
            disabled={processing}
        >
            {children}
        </button>
    );
}
