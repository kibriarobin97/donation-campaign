import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    
} from "@material-tailwind/react";

const DonationDetails = () => {
    const [singleData, setSingleData] = useState({})
    const { id } = useParams()
    const { data, loading } = useDonationData()

    useEffect(() => {
        if (data) {
            const singlesData = data.find(item => item.id === parseInt(id))
            setSingleData(singlesData)
        }
    }, [data, id]);
    
    const { title, image, description, price} = singleData || {};

    return (
        <Card className="max-w-7xl mx-auto my-5 overflow-hidden rounded-lg pt-7 shadow-none">
            <CardHeader color="blue-gray" className="relative md:h-96 relative">
                <img
                    src={image}
                    alt="card-image"
                    className="w-full h-full object-cover bg-center"
                />
                <div className="absolute bg-black bg-opacity-40 bottom-0 w-full h-20 pl-3 md:pl-5">
                <Button className="mt-4 normal-case text-xl" color="red">Donate ${price}</Button>
                </div>
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-3xl">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
};

export default DonationDetails;