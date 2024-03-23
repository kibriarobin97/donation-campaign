import useDonationData from "../../Hooks/useDonationData";
import SingleCard from "../SingleCard/SingleCard";

const DonationCard = () => {

    const {data, loading} = useDonationData()
    // console.log(data)

    return (
        <div className="grid md:grid-cols-4 gap-5 max-w-7xl mx-auto my-10">
            {
                data.map(item => <SingleCard key={item.id} item={item}></SingleCard>)
            }
        </div>
    );
};

export default DonationCard;