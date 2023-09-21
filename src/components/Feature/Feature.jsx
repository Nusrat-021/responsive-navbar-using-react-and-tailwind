
import PropTypes from 'prop-types'
import {HiCheckCircle} from 'react-icons/hi'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center mt-3'>
            <HiCheckCircle className='mr-5 text-2xl'></HiCheckCircle>
            <p className='text-xl'>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature:PropTypes.string,
}

export default Feature;