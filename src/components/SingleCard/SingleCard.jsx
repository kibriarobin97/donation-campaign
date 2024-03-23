import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SingleCard = ({ item }) => {

    const { id, title, image, category, cardBg, textColor, categoryBg } = item || {};

    return (
        <Link to={`/donation-details/${id}`}>
            <Card
                style={{ backgroundColor: cardBg }}
                className="overflow-hidden cursor-pointer">
                <CardHeader color="" className="relative h-48 mt-3">
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Button style={{ backgroundColor: categoryBg, color: textColor }} size="sm">{category}</Button>
                </CardBody>
                <CardFooter className="pt-0">
                    <Typography
                        style={{ color: textColor }}
                        variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default SingleCard;