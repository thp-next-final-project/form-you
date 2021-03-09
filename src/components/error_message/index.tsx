import './index.scss';

const ErrorMessage = (message:any) => {
  return (
    <div className="ErrorMessage">
      {message.message}
    </div>
  )
}

export default ErrorMessage;