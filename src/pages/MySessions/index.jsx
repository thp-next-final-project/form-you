import { useState } from 'react';
import Calendar from 'react-calendar';

const MySession = () => {
  const [value, onChange] = useState(new Date());

  const handleClickMonth = (e) => {
    console.log(e);
  }
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        defaultView={"year"}
        onClickMonth={handleClickMonth}
      />
    </div>
  );
}

export default MySession;