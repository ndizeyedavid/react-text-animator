import SvgText from "./SvgText"
const Output = ({ text, size, color, speed, animate, animation }) => {
    return (
        <>
            <div className="w-full rounded-md h-full flex items-center justify-center bg-gray-700">
                <SvgText animation={animation} text={text} fontSize={size} fill={color} stroke={color} speed={speed} animate={animate} />
            </div>
        </>
    )
}

export default Output
