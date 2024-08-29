
import PropTypes from 'prop-types'; 
import Feature from './Feature';
const PriceOption = ({option}) => {
    const {price_option,features,name} = option;
    return (
        <div className='bg-sky-500 text-white rounded-xl p-4 flex flex-col'>
            <div className='text-center'>
           <p> <span className='text-7xl '>{price_option}</span> <span className='text-2xl'>/mon</span></p>
            </div>
           <h1 className='text-3xl py-8 text-center'>{name}</h1>
           <div className='flex-grow'>
                {
                    features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
                }
           </div>
           <button className='text-xl py-2 w-full bg-green-600 rounded-xl mt-2'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option:PropTypes.object
}
export default PriceOption;