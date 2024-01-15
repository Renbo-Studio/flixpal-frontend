
// Takes in a text and a onClick Fucntion
const CustomButton = ({ text, onPressed, ...props }) => {
    return (
        <button className="bg-purple p-3  text-white uppercase font-semibold rounded-lg text-center" onClick={onPressed} {...props}>
            {text}
        </button>
    )
}

export default CustomButton
