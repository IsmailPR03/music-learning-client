
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mt-16">
            <div className="mx-auto text-center w-10/12 md:w-full">
                <h3 className="text-4xl uppercase font-bold">{heading}</h3>
                <p className="text-lg font-semibold mt-3">{subHeading}</p>
                <div className="divider w-56 mx-auto my-10"></div>
            </div>
        </div>
    );
};

export default SectionTitle;