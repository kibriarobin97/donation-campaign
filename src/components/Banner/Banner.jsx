import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

const Banner = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (
        <div className="relative h-[450px] flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-[url('https://i.ibb.co/dWJYmwk/donation.jpg')] bg-no-repeat bg-bottom object-cover bg-cover opacity-25">
                
            </div>    
            <Typography variant="h2">I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[20rem] mt-5">
                <Input
                    type="text"
                    label="Search"
                    value={email}
                    onChange={onChange}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color="red"
                    className="!absolute right-1 top-1 rounded"
                >
                    Search
                </Button>
            </div>

        </div>
    );
};

export default Banner;