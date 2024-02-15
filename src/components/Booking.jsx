const Booking = () => {
  return (
    <div id="booking" className="max-w-[1140px] m-auto w-full px-4 ">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>Grande Antigua</option>
            <option>Maldives</option>
            <option>Tulum</option>
            <option>Mykonos</option>
          </select>
        </div>
        <div className="flex  flex-col w-full lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2 p-2 w-full">
            <label>Search</label>
            <button className="w-full">Rates & Availabilities</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
