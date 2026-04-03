const Herosection = () => {
    return (
        <> <section className="min-h-[70vh] flex items-center">

            <div herotext className="w-1/2 flex flex-col gap-6">
                <h1 className="herotitle text-7xl text-white bg-gray-600">Artist's Marketplace.</h1>;
                <h3 className=" text-xl text-gray-900">Original Art by Original Artists</h3>
            </div>


            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full h-[300px] md:h-[400px] bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-gray-600">Image Placeholder</span>
                </div>
            </div>
        </section>
        </>
    )

}
export default Herosection;