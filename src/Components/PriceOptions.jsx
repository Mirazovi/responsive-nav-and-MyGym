import PriceOption from "./PriceOption";


const PriceOptions = () => {
    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price_option": 30.00,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price_option": 50.00,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "Group fitness classes",
                "Access to sauna"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price_option": 90.00,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "Group fitness classes",
                "Access to sauna",
                "Personal training sessions",
                "Towel service"
            ]
        }
    ]
    
    return (
        <div>
            <h1 className="lg:text-6xl text-xl text-center py-6">Best Gym Prices in the town</h1>
            <div className="lg:w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:p-0 p-4">
                {
                    PriceOptions.map((option,idx) => <PriceOption key={idx} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;