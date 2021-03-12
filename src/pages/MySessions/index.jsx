import { useState } from 'react';
import Calendar from 'react-calendar';

const MySession = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        defaultView={"year"}
      />
    </div>
  );
}

export default MySession;