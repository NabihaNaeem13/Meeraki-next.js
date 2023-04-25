import Dropdown from 'react-dropdown';

const countries = [
  { label: 'Country 1', value: '1' },
  { label: 'Country 2', value: '2' },
];
const cities = [
  { label: 'city 1', value: '1' },
  { label: 'city 2', value: '2' },
];
export const CheckoutStep1 = ({ onNext }) => {
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form onClick={(e) => e.preventDefault()}>
          <div className='checkout-form__item'>
            <h4>Info about you</h4>
            <div className='box-field'>
              <input
                type='text'
                className='form-control box-field__input_checkout'
                placeholder='Enter your name'
              />
            </div>
            <div className='box-field'>
              <input
                type='email'
                className='form-control box-field__input_checkout'
                placeholder='Enter your email'
              />
            </div>
            <div className='box-field'>
              <div className='box-field'>
                <input
                  type='tel'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter your phone'
                />
              </div>
            </div>
            <div className='box-field'>
                <input
                  type='text'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter the address'
                />
              </div>
              <Dropdown
              options={countries}
              className='react-dropdown'
              onChange={(option) => console.log(option.value)}
              placeholder='Select a country'
            />
             <Dropdown
              options={cities}
              className='react-dropdown'
              onChange={(option) => console.log(option.value)}
              placeholder='Select a city'
            />
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter the Postal code'
                />
              </div>
          </div>
          <div className='checkout-form__item'>
            <h4>Select a payment option</h4>
          </div>
          <div className='checkout-buttons'>
            {/* <button className='btn btn-grey btn-icon'>
              {' '}
              <i className='icon-arrow'></i> back
            </button> */}
            <button onClick={onNext} className='btn btn-icon btn-next'>
              next <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );
};
