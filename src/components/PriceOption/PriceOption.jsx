
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {name,features,price} = option;
    return (
        <div className='border rounded-md shadow-sm p-10 bg-green-200 flex flex-col'>
            <h2 className='my-2 text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center'>{name}</h4>
            <div className='pl-6 mb-10 flex-grow'>
            {
                features.map((feature,idx) => <Feature key={idx}
                feature={feature}></Feature>)
            }
            </div>
            <button className='bg-emerald-800 text-lg w-full text-white py-2 rounded font-bold duration-500 hover:bg-emerald-950 transition'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object.isRequired

}
export default PriceOption;

// absolute bottom-0 right-6 left-6 mb-2