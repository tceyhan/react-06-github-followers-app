import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchUser = ({handleChange}) => {
  return (
    <div className='row'>
     <div className='col-md-4 align-items-center'>
     <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
         Search
        </InputGroup.Text>
        <Form.Control          
          type='search'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
        />
      </InputGroup>
     </div>
    </div>
  )
}

export default SearchUser