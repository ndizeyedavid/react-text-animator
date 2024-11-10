import "./SvgText.css"
// import Text from 'react-svg-text';

const SvgText = ({ text = "mellow", fontSize = 102, fill = '#fff', stroke = '#fff', speed = 4, animate, animation }) => {

    return (
        <>
            <svg width="100%" height="100%" viewBox="0 -20 500 100" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg">
                <path id="textPath" d="M10,50 H490" fill="none" />

                <text fontSize={fontSize} fill={fill} stroke={stroke} className={animate ? "text-path trigger-animation" : "text-path"} style={{ animationDuration: speed + "s", animationDirection: animation }}>
                    <textPath href="#textPath" startOffset="10%">
                        {text}
                    </textPath>
                </text>
            </svg>
        </>
    )
}

export default SvgText
