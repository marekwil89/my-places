import { SubmissionError } from 'redux-form';

const displayServerErrors = (errorsArray) => {
  let errorsObj = {}

  errorsArray.forEach((elem) => {
    errorsObj[elem.param] = elem.msg;
  })

  console.log(errorsObj);

  throw new SubmissionError(errorsObj);
}

export default displayServerErrors;