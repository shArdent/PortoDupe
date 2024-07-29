const Bubble = (props) => {
    // eslint-disable-next-line react/prop-types
    const {text} = props
    return (
        <div className="bg-color-bubble h-auto w-auto bg-opacity-50 rounded-full px-3 py-2">
            <p className="text-color-bubleText font-medium text-[10px]">{text}</p>
        </div>
    )
}

export default Bubble