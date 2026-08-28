function Buttons({ setSection }) {
    return (
        <div className="flex justify-center font-bold gap-40 mt-12">
            <button
                onClick={() => setSection('user')}
                className="px-4 py-2 bg-white rounded shadow-md"
            >
                User Home Section
            </button>

            <button
                onClick={() => setSection('admin')}
                className="px-4 py-2 bg-white rounded shadow-md"
            >
                Admin Home Section
            </button >
        </div >

    )
};

export default Buttons;