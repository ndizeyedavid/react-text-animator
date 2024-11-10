import Logo from "./Logo"

const Settings = ({ updateText, updateSize, updateSpeed, updateColor, triggerAnimation, updateAnimation }) => {

    function handleAnimation() {
        triggerAnimation(false);
        setTimeout(() => triggerAnimation(true), 10)
    }

    return (
        <>
            <div className="w-[30%] rounded-md p-2 bg-gray-100 overflow-y-auto">
                <Logo />

                <form className="mt-5 flex flex-col gap-6">

                    <div className="flex flex-col px-3 gap-2">
                        <label htmlFor="text" className="font-medium">Text: </label>
                        <input type="text" id="text" placeholder="Mellow" onKeyUp={(e) => updateText(e.target.value)} className="input-ghost-primary input" />
                    </div>

                    <div className="flex flex-col px-3 gap-2">
                        <label htmlFor="size" className="font-medium">Text Size: </label>
                        <input type="range" id="size" min="50" defaultValue="80" max="102" className="range-ghost-primary range" onChange={(e) => updateSize(e.target.value)} />
                    </div>

                    <div className="flex flex-col px-3 gap-2">
                        <label htmlFor="color" className="font-medium">Text Color: </label>
                        <input type="color" id="color" defaultValue="#fff" className="color" onChange={(e) => updateColor(e.target.value)} />
                    </div>

                    <div className="flex flex-col px-3 gap-2">
                        <label htmlFor="animation_type" className="font-medium">Animation Type: </label>
                        <select id="animation_type" className="select select-ghost-primary" onChange={(e) => updateAnimation(e.target.value)}>
                            <option value="normal">Forward</option>
                            <option value="reverse">Reverse</option>
                        </select>
                    </div>

                    <div className="flex flex-col px-3 gap-2">
                        <label htmlFor="speed" className="font-medium">Animation Speed: </label>
                        <input type="number" id="speed" placeholder="4" onKeyUp={(e) => updateSpeed(Number(e.target.value))} className="input-ghost-primary input" />
                    </div>


                    <input type="button" className="btn btn-primary mt-5" value="Play" onClick={() => handleAnimation()} />
                </form>
            </div>
        </>
    )
}

export default Settings
