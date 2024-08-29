
import PropTypes from 'prop-types'; 
const Feature = ({feature}) => {
    return (
        <div className='flex gap-2 items-center space-y-1'>
            <span className='text-violet-900'><MajesticonsChevronRightCircle/> </span>
            <h1>{feature}</h1>
        </div>
    );
};
Feature.propTypes = {
    feature:PropTypes.array
}

export function MajesticonsChevronRightCircle(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.293 9.707a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.586 12z" clipRule="evenodd"></path></svg>
    )
  }
export default Feature;