
const Container = ({ children }) => {
    return (
        <div className="h-[100vh] p-3 w-[100%]">
            <div className="h-full w-full p-1 flex  rounded-md items flex-row gap-4">
                {children}
            </div>
        </div>
    )
}

export default Container
